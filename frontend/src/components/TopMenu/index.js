import React from 'react'

import '../../styles/css/bootstrap.css';
import './index.css';

import trion from '../../assets/images/trion.png'
import satc from '../../assets/images/satc.png'

import { Link, BrowserRouter } from 'react-router-dom'

export default function TopMenu() {
    return (
        <>
            <BrowserRouter>
                <div className="topnav" id="myTopnav">
                    <img src={trion} alt="trion" width={90} style={{ marginRight: '30px' }} />
                    <img src={satc} alt="trion" width={90} />

                    <Link to="/regras" style={{ backgroundColor: 'rgb(0, 92, 120)' }}>Regras</Link>
                    <Link to="/avisos" style={{ backgroundColor: 'rgb(253, 116, 0)' }}>Avisos</Link>
                    <Link to="/recompensas" style={{ backgroundColor: 'rgb(201, 63, 101)' }}>Recompensas</Link>
                    <Link to="/conquistas" style={{ backgroundColor: 'rgb(178, 203, 65)' }}>Conquistas</Link>
                    <Link to="/missoes" style={{ backgroundColor: 'rgb(74, 177, 152)' }}>Missões</Link>
                </div>
            </BrowserRouter>
        </>
    )
}