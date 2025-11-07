/**
 * @desc 宗旨、理念
 * @author
 */

import * as styles from './index.module.scss';

const bannerIcon = new URL('../../../assets/images/banner-icon.png', import.meta.url) + '';

export const Slogan = () => (
    <div className={`${styles.Panel} ${styles['index-slogan']}`}>
        <div className={`${styles.MainContainer} ${styles.BannerContainer}`}>
            <div className={styles.SloganContainer}>
                <blockquote className={styles.Slogan}>
                    <strong>"人人皆可编程"</strong>
                    <span>营造有温度的技术社区</span>
                </blockquote>
                <div className={styles.SloganContent}>立即前往线上学习平台</div>
                <div className={styles.MainLink}>
                    <a href="https://www.freecodecamp.org/chinese/" target="_blank">
                        中文版
                    </a>
                    <a href="https://www.freecodecamp.org/" target="_blank">
                        English version
                    </a>
                </div>
            </div>
            <img className={styles.BannerIcon} src={bannerIcon} />
        </div>
    </div>
);
