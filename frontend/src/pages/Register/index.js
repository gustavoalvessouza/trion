import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logoTrion from '../../assets/images/trion.png'
import logoSATC from '../../assets/images/satc.png'
import voltar from '../../assets/images/voltar.png'
import home from '../../assets/images/home.png'

import './styles.css'
import '../../styles/css/configuration.css'

export default function Register() {

    const [sexo, setSexo] = useState('Masculino')

    return (
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

                <form>

                    <fieldset>

                        <div classNameName="img2">
                            <div className="lg">
                                <img src={logoTrion} alt="Logo marca" width="210px" height="90px" />
                            </div>

                            <div className="lg">
                                <img src={logoSATC} alt="Logo marca" width="210px" height="90px" />
                            </div>
                        </div>

                        <h1>Cadastro</h1>

                        <div className="field">
                            <div className="field1">
                                <input type="text" name="name" required placeholder="Nome completo" />
                            </div>
                            <div className="field2">
                                <input type="password" name="code" required placeholder="Código do aluno" />
                            </div>
                            <div className="field3">
                                <input type="text" name="e-mail" required placeholder="e-mail" />
                            </div>
                            <div className="field4">
                                <input type="password" name="password" required placeholder="senha" />
                            </div>
                            <div className="field5">
                                <input type="text" name="password" required placeholder="Confirme sua senha" />
                            </div>
                        </div>

                        <div className="selection">
                            <select name="sexo" value={sexo} onChange={e => setSexo(e.target.value)}>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </div>

                        <button type="submit">Finalizar</button>

                    </fieldset>

                </form>

            </div>
        </>
    )
}
