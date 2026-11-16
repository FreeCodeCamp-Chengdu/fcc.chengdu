import classnames from 'classnames';
import { FC } from 'react';
import { Avatar } from 'idea-react';

import { Member } from './MembersConfig';
import * as styles from './Card.module.less';

export const Card: FC<Member> = ({ url, img, name, responsibility, urlType }) => (
    <div className={styles['member-item']}>
        <div className={styles['img-block']}>
            <Avatar className="w-100" src={img} alt="头像" />
        </div>
        <div className={styles.content}>
            <div className={`${styles.name} ${styles['text-over']}`}>{name}</div>
            <div
                className={`${styles.responsibility} ${styles['text-over']}`}
                title={responsibility}
            >
                {responsibility}
            </div>
            <div className={styles['text-over']}>
                <a className={styles.GithubLink} title={url} href={url} target="_blank">
                    {urlType === 'user' && (
                        <img className={styles['user-icon']} src={img} alt="头像" />
                    )}
                    {urlType !== 'none' && <i className={classnames('iconfont', urlType)} />}
                    {url}
                </a>
            </div>
        </div>
    </div>
);
