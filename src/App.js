import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './Elements/Theme';
import { Home } from './Pages/Home';
import { Provider } from './store';

import './Styles/dist/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <ThemeProvider theme={theme}>
            <Fragment>
              <Home />
            </Fragment>
          </ThemeProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
