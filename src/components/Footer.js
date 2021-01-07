import React from 'react';

const PROFILES = [
  {
    className: 'btn-github-square btn-primary',
    fontAwesomeIcon: 'fa-github-square',
    href: 'https://github.com/abDevII',
  }, {
    className: 'btn-linkedin',
    fontAwesomeIcon: 'fa-linkedin',
    href: 'https://www.linkedin.com/in/arthur-j-barbey/',
  }, {
    className: 'btn-twitter',
    fontAwesomeIcon: 'fa-twitter',
    href: 'https://twitter.com/BarbeyArthur',
  }, {
    className: 'btn-primary',
    fontAwesomeIcon: 'fa-envelope-square',
    href: 'mailto:barbey.arthur@gmail.com',
  },
];

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {PROFILES.map(({ className, href, fontAwesomeIcon }) => (
            <div
              className="col-3 d-inline-block text-center"
              key={href}
            >
              <a
                className={`btn btn-social-icon ${className}`}
                href={href}
              >
                <i className={`fa ${fontAwesomeIcon}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
