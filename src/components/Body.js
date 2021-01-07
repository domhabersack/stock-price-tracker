import React, { useEffect, useState } from 'react';
import { InputGroup, Input, Button, Form } from 'reactstrap';
import NumberFormat from 'react-number-format';

import Loading from './Loading';

const STOCK_QUOTE_UPDATE_TIMEOUT_IN_MS = 3000;

const finnhub = require('finnhub');
finnhub.ApiClient.instance.authentications['api_key'].apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

const Body = () => {
  const [color, setColor] = useState('text-primary');
  const [isLoading, setIsLoading] = useState(false);
  const [stock, setStock] = useState('');
  const [quote, setQuote] = useState(null);

  const handleInputChange = event => {
    setStock(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    setIsLoading(true);
    setQuote(null);
  }

  const updateStockQuote = () => {
    if (stock !== '') {
      finnhubClient.quote(stock, (error, { c: price }) => {
        if (error) {
          return console.log(error);
        }

        setColor(price < quote ? 'text-danger' : 'text-success')
        setIsLoading(false);
        setQuote(price);
      });
    }
  }

  useEffect(() => {
    updateStockQuote();

    const timer = setInterval(updateStockQuote, STOCK_QUOTE_UPDATE_TIMEOUT_IN_MS);

    return () => clearInterval(timer);
  })

  return (
    <div className="container">
      <div className="row row-content">
        <div className="col-12">
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                onChange={handleInputChange}
                placeholder="Enter Stock's symbol (e.g. 'FB' for Facebook)"
                value={stock}
              />

              <Button
                color="primary"
                type="submit"
                value="submit"
              >
                Enter
              </Button>
            </InputGroup>
          </Form>
        </div>

        <div className={`col-12 text-center ${color}`}>
          <Loading isLoading={isLoading} />

          <NumberFormat
            className="figure-size"
            displayType="text"
            prefix="$"
            thousandSeparator={true}
            value={quote}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
