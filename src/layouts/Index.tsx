/**
 * @desc 页面结构
 * @author
 */
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
// 页面框架
import { Menu } from './Menu';
import { Content } from './Content';
import { Footer } from './Footer';

// 路由页面
import { Index } from '../pages/Index';
import { Events } from '../pages/Events';
import { Sponsors } from '../pages/Sponsors';

export const App = () => (
    <Content>
        <Menu />

        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/events" element={<Events />} />
                <Route path="/sponsors" element={<Sponsors />} />
            </Routes>
        </Router>

        <Footer />
    </Content>
);
