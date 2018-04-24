import React, { Fragment } from 'react';

import { Button } from '../../Elements/';

export const Buttons = () => (
  <Fragment>
    <div className="columns is-reverse">
      <div className="column">
        <Button className="is-small">Button</Button>
        <Button className="is-success is-small">Success</Button>
        <Button className="is-warning is-small">Warning</Button>
        <Button className="is-danger is-small">Danger</Button>
        <Button className="is-info is-small">Info</Button>
        <Button className="is-link is-small">Link</Button>
        <Button className="is-primary is-small">Primary</Button>
      </div>
      <div className="column">
        <Button>Button</Button>
        <Button className="is-success">Success</Button>
        <Button className="is-warning">Warning</Button>
        <Button className="is-danger">Danger</Button>
        <Button className="is-info">Info</Button>
        <Button className="is-link">Link</Button>
        <Button className="is-primary">Primary</Button>
      </div>
      <div className="column">
        <Button className="is-large">Button</Button>
        <Button className="is-success is-large">Success</Button>
        <Button className="is-warning is-large">Warning</Button>
        <Button className="is-danger is-large">Danger</Button>
        <Button className="is-info is-large">Info</Button>
        <Button className="is-link is-large">Link</Button>
        <Button className="is-primary is-large">Primary</Button>
      </div>
    </div>
  </Fragment>
);
