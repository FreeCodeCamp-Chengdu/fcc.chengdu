import { FC, PropsWithChildren } from 'react';

import * as style from './index.module.less';

export const Content: FC<PropsWithChildren> = ({ children }) => (
    <div className={style.MainContent}>{children}</div>
);
