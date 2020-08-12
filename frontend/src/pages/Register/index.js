import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import logoTrion from '../../assets/images/trion.png'
import logoSATC from '../../assets/images/satc.png'
import voltar from '../../assets/images/voltar.png'
import home from '../../assets/images/home.png'

import './styles.css'
import '../../styles/css/configuration.css'

export default function Register(props) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [sexo, setSexo] = useState('Masculino')

    async function signUp() {
        await api.post('/user/create', {
            nome,
            email,
            senha,
            sexo
        })
            .then(_ => {
                toast.success('Usuário cadastrado com sucesso!')

                setTimeout(() => {
                    props.history.push('/login')
                }, 2000);
            })
            .catch(err => {
                toast.error('Falha ao efetuar o login!')
            })
    }

    return (
        <div className="register">
            <ToastContainer autoClose={3000} />
            <>

                <header>
                    <Link to="/home" className="home">
                        <img src={home} alt="ícone" width="30px" height="30px" />
                    </Link>

                    <Link className="comeBack" to="/login">
                        <img src={voltar} alt="ícone" width="30px" height="30px" />
                    </Link>
                </header>

                <div className="page-register">
                    <form onSubmit={e => e.preventDefault()}>

                        <fieldset>
                            <div className="img2">
                                <div className="lg1">
                                    <img src={logoTrion} alt="Logo marca" width="210px" height="90px" />
                                </div>
                                <div className="lg2">
                                    <img src={logoSATC} alt="Logo marca" width="210px" height="90px" />
                                </div>
                            </div>

                            <h1>Cadastro</h1>

                            <div className="fields">
                                <div className="field1">
                                    <input type="text" name="name" required placeholder="Nome completo" onChange={e => setNome(e.target.value)} />
                                </div>
                                <div className="field3">
                                    <input type="text" name="e-mail" required placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="field4">
                                    <input type="password" name="password" required placeholder="Senha" onChange={e => setSenha(e.target.value)} />
                                </div>
                                <div className="field5">
                                    <input type="password" name="password" required placeholder="Confirme sua senha" onChange={e => setSenha(e.target.value)} />
                                </div>
                            </div>

                            <div className="selection">
                                <select name="sexo" value={sexo} onChange={e => setSexo(e.target.value)}>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                </select>
                            </div>

                            <div className="bt">
                                <button onClick={() => signUp()}>Finalizar</button>
                            </div>

                        </fieldset>

                    </form>

                </div>

            </>
        </div>
    )
}
