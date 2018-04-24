import React, { Fragment } from 'react';

import logo from '../../assets/img/logo-livup.png';

export const Header = () => (
  <Fragment>
    <header className="columns">
      <div className="column has-content-centered">
        <img src={logo} alt="Liv Up Logo" />
      </div>
    </header>
  </Fragment>
);
