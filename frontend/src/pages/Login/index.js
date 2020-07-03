import React from 'react'
import { Link } from 'react-router-dom'

import logoTrion from '../../assets/images/trion.png'
import logoSATC from '../../assets/images/satc.png'

import './styles.css'
import '../../styles/css/configuration.css'

export default function Login() {
    return (
        <>
            <div className="page-login">
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

                        <h1>Aluno</h1>

                        <div className="fields">
                            <div className="field1">
                                <input type="text" name="email" placeholder="E-mail" />
                            </div>

                            <div className="field2">
                                <input type="text" name="password" placeholder="Senha" />
                            </div>
                        </div>

                        <Link className="forgotPassword" to="/recoveryPass">Esqueci minha senha</Link>

                        <div className="bt1">
                            <Link to="/home">
                                <button>Entrar</button>
                            </Link>
                        </div>

                        <div className="bt2">
                            <Link to="/register">
                                <button>Registrar</button>
                            </Link>
                        </div>
                    </fieldset>

                </form>
            </div>
        </>
    )
}
