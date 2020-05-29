import React from 'react'

import './index.css';

import diaria from './diaria.png'
import extra from './extra.png'

export default props =>
    <>
        <div className="row p-3 d-flex justify-content-between">

            <div className="col-12 col-sm-4">
                <div className="mission d-flex flex-column">
                    <img src={diaria} alt="Missão Diária" height={252} />
                    <p className="mission-title">Missão Diária</p>
                </div>
            </div>

            <div className="col-12 col-sm-4">
                <div className="mission d-flex flex-column">
                    <img src={extra} alt="Missão Diária" height={252} />
                    <p className="mission-title">Missão Extra</p>
                </div>
            </div>

            <div className="col-12 col-sm-4">
                <div className="mission d-flex flex-column-reverse">
                    <p className="mission-title"> ... </p>
                </div>
            </div>

        </div>
    </>