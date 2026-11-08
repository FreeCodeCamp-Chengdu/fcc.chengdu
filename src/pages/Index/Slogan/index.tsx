/**
 * @desc 宗旨、理念
 * @author
 */

import { Button } from 'idea-react';

import * as styles from './index.module.less';

const bannerIcon = new URL('../../../assets/images/banner-icon.png', import.meta.url) + '';

export const Slogan = () => (
    <div className={`${styles.Panel} ${styles['index-slogan']}`}>
        <div className={`${styles.MainContainer} ${styles.BannerContainer}`}>
            <div className={`${styles.SloganContainer} text-center md:text-start`}>
                <blockquote className={styles.Slogan}>
                    <strong>"人人皆可编程"</strong>
                    <span>营造有温度的技术社区</span>
                </blockquote>
                <div className={styles.SloganContent}>立即前往线上学习平台</div>
                <div
                    className={`${styles.MainLink} d-flex flex-wrap justify-content-center gap-3 md:justify-content-start`}
                >
                    <Button
                        className="rounded-pill px-5 py-3"
                        variant="outline"
                        href="https://www.freecodecamp.org/chinese/"
                        target="_blank"
                    >
                        中文版
                    </Button>
                    <Button
                        className="rounded-pill px-5 py-3"
                        variant="outline"
                        href="https://www.freecodecamp.org/"
                        target="_blank"
                    >
                        English version
                    </Button>
                </div>
            </div>
            <img className={styles.BannerIcon} src={bannerIcon} />
        </div>
    </div>
);
