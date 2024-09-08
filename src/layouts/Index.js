/**
 * @desc 页面结构
 * @author
 */
import './style.scss';
import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
// 页面框架
import { Menu } from './Menu';
import { Footer } from './Footer';

// 路由页面
import { Index } from '../pages/Index';
import { Events } from '../pages/Events';
import { Sponsors } from '../pages/Sponsors';

//图标
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
fontawesome.library.add(brands);

export const App = () => (
    <div className="App">
        <Menu />
        <div>
            <Router>
                <div>
                    <Route exact path="/" component={Index}></Route>
                    <Route path="/events" component={Events}></Route>
                    <Route path="/sponsors" component={Sponsors}></Route>
                </div>
            </Router>
        </div>
        <Footer />
    </div>
);
