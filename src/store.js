import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const { Provider: ContextProvider, Consumer } = createContext('store');

class Provider extends Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
    this.randomTitle = this.randomTitle.bind(this);
    this.state = {
      title: 'Liv Up',
      changeTitle: this.changeTitle,
      randomTitle: this.randomTitle,
      isLoading: false,
    };
  }

  componentDidUpdate() {
    document.title = this.state.title;
  }

  async changeTitle(title) {
    this.setState({
      title,
    });
  }

  async randomTitle() {
    this.setState({ isLoading: true });
    const { data } = await axios.get('http://faker.hook.io/');
    this.setState({ title: data });
    this.setState({ isLoading: false });
  }

  render() {
    return <ContextProvider value={this.state}>{this.props.children}</ContextProvider>;
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, Consumer };
