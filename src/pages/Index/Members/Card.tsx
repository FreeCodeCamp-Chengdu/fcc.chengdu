import classnames from 'classnames';

import * as styles from './Card.module.scss';

export const Card = ({ url, img, name, responsibility, urlType, index }) => (
    <div
        className={classnames(styles['member-item'], {
            [styles['last-item']]: index % 5 === 4
        })}
    >
        <div>
            <div className={styles['img-block']}>
                <img className={styles['card-img-top']} src={img} alt="头像" />
            </div>
            <div className={styles.content}>
                <div className={`${styles.name} ${styles['text-over']}`}>
                    {name}
                </div>
                <div
                    className={`${styles.responsibility} ${styles['text-over']}`}
                    title={responsibility}
                >
                    {responsibility}
                </div>
                <div className={styles['text-over']}>
                    <a
                        className={styles.GithubLink}
                        title={url}
                        href={url}
                        target="_blank"
                    >
                        {urlType === 'user' && (
                            <img
                                className={styles['user-icon']}
                                src={img}
                                alt="头像"
                            />
                        )}
                        {urlType !== 'none' && (
                            <i className={classnames('iconfont', urlType)} />
                        )}
                        {url}
                    </a>
                </div>
            </div>
        </div>
    </div>
);
