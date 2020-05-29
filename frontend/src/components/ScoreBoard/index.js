import React from 'react'

import './index.css';

export default props =>
    <>
        <div className="row p-3 mt-2">
            <div className="col-sm-4 d-flex justify-content-center">
                <p className="text-white">Nível <span className="badge badge-orange">{props.nivel ? props.nivel : '0'}</span></p>
            </div>

            <div className="col-sm-4 d-flex justify-content-center">
                <p className="text-white">Cartas chance <span className="badge badge-white">{props.cartas ? props.cartas : '0'}</span></p>
            </div>
            
            <div className="col-sm-4 d-flex justify-content-center">
                <p className="text-white">Pontos <span className="badge badge-white">{props.pontos ? props.pontos : '0'}</span></p>
            </div>
        </div>
    </>