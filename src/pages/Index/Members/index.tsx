/**
 * @desc 社区组织者板块
 * @author
 */
import * as styles from './index.module.less';
import { Card } from './Card';
import { MEMBERS } from './MembersConfig';

export const Members = () => (
    <div className={styles['members-block']}>
        <div className={styles.members}>
            <h2 className={styles.title}>组织者风采展</h2>
            <h3 className={styles['sub-title']}>Community members</h3>

            <div className={styles['members-list']}>
                {MEMBERS.map((item, index) => (
                    <Card {...item} index={index} key={item.name} />
                ))}
            </div>
        </div>
    </div>
);
