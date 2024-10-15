import { About } from './About';
import FLogo from '../assets/images/fcc-logo.png';

export const Footer = () => (
    <footer className="Footer">
        <div className="container-fluid footer-bg">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="left-content">
                        <img src={FLogo} alt="FCC logo" className="img-fluid" />
                        <p>"人人皆可编程"营造有温度的技术社区</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-content">
                        <About />
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid info">
            <div className="row">
                <div className="col-md-6">
                    <p className="text-md-start">
                        版权所有©2018 FCC成都社区保留
                    </p>
                </div>
                <div className="col-md-6">
                    <p className="text-md-end">FCC成都社区</p>
                </div>
            </div>
        </div>
    </footer>
);
