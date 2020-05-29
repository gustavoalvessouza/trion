import React from 'react'

import './index.css';
import '../../styles/css/bootstrap.min.css';

export default props =>
    <>
        <div className="row p-3 d-flex justify-content-between">

            <div className="col-12 col-sm-6">
                <div className="mission d-flex flex-column-reverse">
                    <h4 className="progress-title">Individual</h4>

                    <div className="row progress-info">
                        <p className="text-secondary bg-white p-2 shadow-sm my-1" style={{ borderRadius: '10px' }}>500 pontos: <strong>Um botton</strong></p>
                        <p className="text-secondary bg-white p-2 shadow-sm my-1" style={{ borderRadius: '10px' }}>1000 pontos: <strong>0.2 na média</strong></p>
                        <p className="text-secondary bg-white p-2 shadow-sm my-1" style={{ borderRadius: '10px' }}>2000 pontos: <strong>0.5 na média</strong></p>
                    </div>

                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6">
                <div className="mission d-flex flex-column-reverse">
                    <h4 className="progress-title">Coletivo</h4>

                    <div className="row progress-info mr-3">
                        <p className="text-secondary bg-white p-2 shadow-sm my-1" style={{ borderRadius: '10px' }}>500 pontos: <strong>Um botton</strong></p>
                        <p className="text-secondary bg-white p-2 shadow-sm my-1" style={{ borderRadius: '10px' }}>1000 pontos: <strong>0.2 na média</strong></p>
                        <p className="text-secondary bg-white p-2 shadow-sm my-1" style={{ borderRadius: '10px' }}>2000 pontos: <strong>0.5 na média</strong></p>
                    </div>

                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </div>
            </div>

        </div>
    </>