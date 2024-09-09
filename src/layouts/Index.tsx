/**
 * @desc 页面结构
 * @author
 */
import './style.scss';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
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
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                </Routes>
            </Router>
        </div>
        <Footer />
    </div>
);
