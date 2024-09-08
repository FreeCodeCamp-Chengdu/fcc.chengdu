import React, { Component } from 'react';

import { Slogan } from './Slogan';
import { Info } from './Info';
import { Events } from './Events';
import { Members } from './Members';

export const Index = () => (
    <div className="Content">
        <Slogan />
        <Info />
        <Events />
        <Members />
    </div>
);
