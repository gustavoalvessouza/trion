import React, { useState } from 'react'

import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/profile/avatar.png'
import './index.css';

export default props => {
    const [username, setUsername] = useState(localStorage.getItem('username'))
    const [fraqueza, setFraqueza] = useState(localStorage.getItem('userFraqueza'))
    const [habilidade, setHabilidade] = useState(localStorage.getItem('userHabilitade'))

    return (
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
                <strong className="card-info text-secondary">{username ? username : 'Aluno'}</strong>
            </div>

            <div className="row d-flex justify-content-center mt-3">
                <span className="card-info text-secondary habilidade">{habilidade ? habilidade : 'Nenhuma'}</span>
            </div>

            <div className="row d-flex justify-content-center mt-3">
                <span className="card-info text-secondary fraqueza">{fraqueza ? fraqueza : 'Nenhuma'}</span>
            </div>

            <div className="row d-flex justify-content-center mt-3">
                <img
                    src={logo}
                    alt="Faculdade SATC"
                    width={100}
                />
            </div>
        </>
    )
}