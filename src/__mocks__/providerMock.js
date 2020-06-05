import React from "react";
import { createStore} from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { IntlProvider } from 'react-intl'
import reducer from '../rootReducer';

const store = createStore(reducer);
const history = createBrowserHistory();
 
const ProviderMock = props => (
<IntlProvider locale='en'>
    <Provider store={store}>
        <Router history= {history}>
            {props.children}
        </Router>
    </Provider>
</IntlProvider>
);

export default ProviderMock;