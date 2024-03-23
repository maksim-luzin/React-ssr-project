import * as React from 'react';
import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from '../../shared/App';
import Html from '../components/HTML';
import { getEnv } from 'helpers';
import { Env } from 'enums';
import { Provider } from 'react-redux';
import { getStore } from 'store';

const helmetContext = {};
const routerContext = {};

const serverRenderer = () => (req: Request, res: Response) => {
    const state = JSON.stringify({ initialData: req.body, baseUrl: getEnv(Env.Url) });

    const content = renderToString(
        <Provider store={getStore(req.body)} >
            <StaticRouter location={req.url} context={routerContext}>
                <HelmetProvider context={helmetContext}>
                    <App />
                </HelmetProvider>
            </StaticRouter>
        </Provider>
    );

    return res.send(
        '<!doctype html>' +
        renderToString(
            <Html
                css={[
                    res.locals.assetPath('bundle.css'),
                    res.locals.assetPath('vendor.css')
                ]}
                helmetContext={helmetContext}
                scripts={[
                    res.locals.assetPath('bundle.js'),
                    res.locals.assetPath('vendor.js'),
                ]}
                state={state}
            >
                {content}
            </Html>
        )
    );
};

export default serverRenderer;
