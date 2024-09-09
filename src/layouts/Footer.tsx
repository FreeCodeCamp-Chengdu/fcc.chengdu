import { About } from './About';
import FLogo from '../assets/images/fcc-logo.png';

export const Footer = () => (
    <footer className="Footer">
        <div className="row justify-content-center align-items-center footer-bg">
            <div className="col-xs-12 col-md-6">
                <div className="left-content">
                    <img src={FLogo} alt="FCC logo"></img>
                    <p>"人人皆可编程"营造有温度的技术社区</p>
                </div>
            </div>
            <div className="col-xs-12 col-md-6">
                <div className="right-content">
                    <About />
                </div>
            </div>
        </div>
        <div className="info justify-content-center align-items-center">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <p className="left">版权所有©2018 FCC成都社区保留</p>
                </div>
                <div className="col-xs-12 col-md-6">
                    <p className="right">FCC成都社区</p>
                </div>
            </div>
        </div>
    </footer>
);
