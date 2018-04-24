import React, { Component, Fragment } from 'react';
import { Consumer } from '../../store';
import { Input, Button } from '../../Elements';

export class ChangeTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'teste',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }
  render() {
    return (
      <Consumer>
        {context => (
          <Fragment>
            <h1>Título: {context.title}</h1>
            <div className="row">
              <Input type="text" onChange={this.handleChange} placeholder="Digite um novo título" />
              <Button className="is-primary" onClick={() => context.changeTitle(this.state.title)}>
                Trocar título
              </Button>
              <Button className="is-info" disabled={context.isLoading} onClick={() => context.randomTitle()}>
                {!context.isLoading ? 'Título aleatório' : 'Carregando...'}
              </Button>
            </div>
          </Fragment>
        )}
      </Consumer>
    );
  }
}
