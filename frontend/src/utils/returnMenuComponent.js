import React from 'react'

import Missions from '../components/Missions';
import ProgressBoard from '../components/ProgressBoard';
import Rules from '../components/Rules';
import Alerts from '../components/Alerts';
import Awards from '../components/Awards';

export const returnMenuComponent = pathname => {
    switch (String(pathname)) {
        case "/":
            return <Missions />
            break;
        case "/missoes":
            return <Missions />
            break;
        case "/conquistas":
            return <ProgressBoard />
            break;
        case "/avisos":
            return <Alerts />
            break;
        case "/regras":
            return <Rules />
            break;
        case "/recompensas":
            return <Awards />
            break;
        default:
            return <ProgressBoard />
            break;
    }
}