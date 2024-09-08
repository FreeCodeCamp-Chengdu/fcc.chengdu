import React from 'react';
import { render } from 'react-dom';
import { serviceWorkerUpdate } from 'web-utility';

import App from './layouts/Index';

const { serviceWorker } = window.navigator,
    NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV !== 'development')
    serviceWorker
        ?.register('sw.js')
        .then(serviceWorkerUpdate)
        .then(worker => {
            if (confirm('New version of this Web App detected, update now?'))
                worker.postMessage({ type: 'SKIP_WAITING' });
        });

serviceWorker?.addEventListener('controllerchange', () => location.reload());

render(<App />, document.getElementById('root'));
