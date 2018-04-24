import React, { Component, Fragment } from 'react';
import { Header, Buttons, ChangeTitle } from '../Components';

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Buttons />
        <ChangeTitle />
      </Fragment>
    );
  }
}
