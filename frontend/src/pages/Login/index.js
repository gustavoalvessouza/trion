import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import logoTrion from '../../assets/images/trion.png'
import logoSATC from '../../assets/images/satc.png'

import './styles.css'
import '../../styles/css/configuration.css'

export default function Login(props) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function signIn() {
        const response = await api.post('sessions', { email, senha })

        localStorage.setItem('userNome', response.data.user.nome)
        localStorage.setItem('userEmail', response.data.user.email)
        localStorage.setItem('userFraqueza', response.data.user.fraqueza)
        localStorage.setItem('userHabilidade', response.data.user.habilidade)
        localStorage.setItem('userPontos', response.data.user.pontos)
        localStorage.setItem('userNivel', response.data.user.nivel)
        localStorage.setItem('token', response.data.token)

        toast.success('Login efetuado com sucesso!')

        setTimeout(() => {
            props.history.push('/')
        }, 2000);
    }

    return (
        <>
            <ToastContainer autoClose={3000} />

            <div className="login">
                <div className="page-login">
                    <form>
                        <fieldset>

                            <div className="img2">
                                <div className="lg1">
                                    <img src={logoTrion} alt="Logo marca" width="210px" height="90px" />
                                </div>
                                <div className="lg2">
                                    <img src={logoSATC} alt="Logo marca" width="210px" height="90px" />
                                </div>
                            </div>

                            <h1>Aluno</h1>

                            <div className="fields">
                                <div className="field1">
                                    <input type="text" name="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                                </div>

                                <div className="field2">
                                    <input type="password" name="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
                                </div>
                            </div>

                            <Link className="forgotPassword" to="/recoveryPass">Esqueci minha senha</Link>

                            <div className="bt">
                                <div className="bt1">
                                    <Link>
                                        <button onClick={() => signIn()}>Entrar</button>
                                    </Link>
                                </div>

                                <div className="bt2">
                                    <Link to="/register">
                                        <button>Cadastro</button>
                                    </Link>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    )
}
