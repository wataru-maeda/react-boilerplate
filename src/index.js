import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import { Home, Profile } from './screens';
import registerServiceWorker from './common/registerServiceWorker';

const Rooter = () => (
    <BrowserRouter>
        <main>
            <Route path="/" exact component={Home} />
            <Route path="/Profile" exact component={Profile} />
        </main>
    </BrowserRouter>
)

ReactDOM.render(<Rooter />, document.getElementById('root'));
registerServiceWorker();
