import React, { useEffect } from 'react';

import { returnMenuComponent } from '../../utils/returnMenuComponent'
import { returnMenuColor } from '../../utils/returnMenuColor'

import '../../styles/css/bootstrap.css';
import './index.css';

import Profile from '../Profile';
import ScoreBoard from '../ScoreBoard';
import TopMenu from '../TopMenu'

export default function Card(props) {
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            props.history.push('/login')
        }
    }, [])

    return (
        <>
            <TopMenu />

            <div className="container">
                <div className="card-main shadow-lg"
                    style={{
                        backgroundColor: returnMenuColor(props.location.pathname),
                        borderRadius: '5px'
                    }}
                >
                    <div className="row">

                        <div className="col-12 col-sm-3">
                            <Profile />
                        </div>

                        <div className="col-12 col-sm-9 mt-3">
                            <div className="row">
                                <div className="card-missions">

                                    {returnMenuComponent(String(props.location.pathname))}

                                </div>
                            </div>

                            <ScoreBoard />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}