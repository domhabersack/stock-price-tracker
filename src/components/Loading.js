import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = ({
  isLoading
}) => isLoading && (
  <div
    className="col-12 text-center"
  >
    <Spinner
      color="primary"
      type="grow"
    />
  </div>
);

export default Loading;
