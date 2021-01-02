import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root'

import WordRelay from './WordRelay';

const Hot = hot(WordRelay); // HOC

ReactDOM.render(<WordRelay />, document.querySelector('#root'));