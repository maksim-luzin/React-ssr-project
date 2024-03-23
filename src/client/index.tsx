import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { App } from '../shared/App';
import { IApiContext } from 'types';
import { Provider } from 'react-redux';
import { getStore } from 'store';

const initialState: IApiContext = window.store?.initialData || window.__PRELOADED_STATE__?.initialData
const store = getStore(initialState)

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

hydrate(
    <Provider store={getStore(initialState)} >
        <BrowserRouter>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
