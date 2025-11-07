/**
 * @desc 关于我们
 * @author
 */

import details from './data';
import * as styles from './index.module.less';

export const About = () => (
    <ul className={`list-unstyled ${styles['about-container']}`}>
        {details.map(({ img, icon }, index) => (
            <li key={img} className={styles['about-panel']}>
                <div className={styles['detail-img']}>
                    <img src={img} />
                </div>
                <button
                    id={`popover${index}`}
                    type="button"
                    className={styles.btn}
                    data-placement="top"
                >
                    <i className={`iconfont ${icon}`} />
                </button>
            </li>
        ))}
    </ul>
);
