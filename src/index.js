import 'babel-core/polyfill';

import React from 'react';
import { createHistory } from 'history';

import Root from './containers/Root';

const history = createHistory();

React.render(
  <Root history={history}/>,
  document.getElementById('root')
);
