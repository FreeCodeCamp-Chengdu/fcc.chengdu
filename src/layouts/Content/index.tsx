import { FC, PropsWithChildren } from 'react';

import * as style from './index.module.scss';

export const Content: FC<PropsWithChildren> = ({ children }) => (
    <div className={style.MainContent}>{children}</div>
);
