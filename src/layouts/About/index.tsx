/**
 * @desc 关于我们
 * @author
 */

import details from './data';
import './style.scss';

export const About = () => (
    <div className="about-container">
        {details.map(({ img, icon }, index) => (
            <div key={img} className="about-panel">
                <div className="detail-img">
                    <img src={img} />
                </div>
                <button
                    id={`popover${index}`}
                    type="button"
                    className="btn"
                    data-placement="top"
                >
                    <i className={`iconfont ${icon}`} />
                </button>
            </div>
        ))}
    </div>
);
