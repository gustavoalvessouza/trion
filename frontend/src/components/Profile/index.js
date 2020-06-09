import React from 'react'

import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/profile/avatar.png'
import './index.css';

export default props =>
    <>
        <div className="row d-flex justify-content-center">
            <img
                src={avatar}
                width={170}
                className="profile-picture"
                alt="Profile"
            />
        </div>

        <div className="row d-flex justify-content-center mt-2">
            <strong className="card-info text-secondary">{props.aluno ? props.aluno : 'Aluno'}</strong>
        </div>

        <div className="row d-flex justify-content-center mt-3">
            <span className="card-info text-secondary habilidade">{props.habilidade ? props.habilidade : 'Nenhuma'}</span>
        </div>

        <div className="row d-flex justify-content-center mt-3">
            <span className="card-info text-secondary fraqueza">{props.fraqueza ? props.fraqueza : 'Nenhuma'}</span>
        </div>

        <div className="row d-flex justify-content-center mt-3">
            <img
                src={logo}
                alt="Faculdade SATC"
                width={100}
            />
        </div>
    </>
