import React from 'react'
import { Link } from 'react-router-dom'

import logoTrion from '../../assets/images/trion.png'
import logoSATC from '../../assets/images/satc.png'
import voltar from '../../assets/images/voltar.png'
import home from '../../assets/images/home.png'

import './styles.css'
import '../../styles/css/configuration.css'

export default function RecoveryPassword() {
    return (
        <>
            <header>
        <Link className="home" to="/home">
            <img src={home} alt="ícone" width="30px" height="30px" />
        </Link>

        <Link className="comeBack" to="/login">
            <img src={voltar} alt="ícone" width="30px" height="30px" />
        </Link>
    </header>

    <div className="page-lostPassword">

        <form>

            <fieldset>

                <div className="img2">
                    <div className="lg">
                        <img src={logoTrion} alt="Logo marca" width="210px" height="90px" />
                    </div>
                    <div className="lg">
                        <img src={logoSATC} alt="Logo marca" width="210px" height="90px" />
                    </div>
                </div>

                <h1>Recuperar senha</h1>

                <input type="text" name="email" placeholder="E-mail" />

                <p>Em breve sua senha estará disponível em seu e-mail</p>

                <div className="bt1">
                    <button type="submit">Enviar</button>
                </div>

                <div className="bt2">
                    <button type="submit">
                            Cadastro
                    </button>
                </div>

            </fieldset>

        </form>

    </div>
        </>
    )
}
