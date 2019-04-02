// @flow strict

import * as React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import * as rootActions from '../store/actions/root';
import { history } from '../store';
import { Props } from './interface';

class App extends React.Component<Props> {
  static defaultProps: Props = {
    setRootInitialized: () => { },
    setRootSagasInitialized: () => { },
    rootInitialized: false,
    rootSagasInitialized: false,
  }

  componentWillMount = () => {
    // Test to initialize store in react debug mode
    const { setRootInitialized, setRootSagasInitialized } = this.props;
    setRootInitialized(true);
    setRootSagasInitialized(true);
  }

  renderMain = () => [
    <section key="header">
      <header>Header</header>
    </section>,
    <section key="content">
      <main>Content</main>
    </section>,
    <section key="footer">
      <footer>Footer</footer>
    </section>,
  ]

  render = (): Node => (
    <ConnectedRouter history={history}>
      <div>
        {this.renderMain()}
      </div>
    </ConnectedRouter>
  )
}

const mapStateToProps = state => ({
  rootInitialized: state.root.rootInitialized,
  rootSagasInitialized: state.root.rootSagasInitialized,
});

const mapDispatchToProps = dispatch => bindActionCreators(rootActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
