import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import logoTrion from '../../assets/images/trion.png'
import logoSATC from '../../assets/images/satc.png'

import '../Login/styles.css'
import '../../styles/css/configuration.css'

export default function Dashboard(props) {
    const [pergunta, setPergunta] = useState('')
    const [respostaCorreta, setRespostaCorreta] = useState('')
    const [respostaErrada, setRespostaErrada] = useState('')
    const [respostaErrada2, setRespostaErrada2] = useState('')
    const [respostaErrada3, setRespostaErrada3] = useState('')
    const [respostaErrada4, setRespostaErrada4] = useState('')
    const [pontos, setPontos] = useState(0)
    const [videoURL, setVideoURL] = useState('')
    const [imagemURL, setImagemURL] = useState('')
    const [imagemGabaritoURL, setImagemGabaritoURL] = useState('')

    async function addQuestion(e) {
        e.preventDefault()

        await api.post('question', {
            pergunta,
            respostaCorreta,
            respostaErrada,
            respostaErrada2,
            respostaErrada3,
            respostaErrada4,
            pontos,
            videoURL,
            imagemURL,
            imagemGabaritoURL
        })
            .then(response => {
                toast.success('Questão adicionada com sucesso!')

                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            })
            .catch(err => {
                toast.error('Falha ao adicionar a questão!')
            })
    }

    useEffect(() => {
        if (localStorage.getItem('accountType') !== 'Professor') {
            props.history.push('/login')
        }
    }, [])

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

                            <h1>Questão</h1>

                            <div className="fields">
                                <div className="field1">
                                    <input type="text" name="enunciado" placeholder="Enunciado" onChange={e => setPergunta(e.target.value)} />
                                </div>

                                <div className="field2">
                                    <input type="text" name="respostaCorreta" placeholder="Resposta correta" onChange={e => setRespostaCorreta(e.target.value)} />
                                </div>

                                <div className="field2">
                                    <input type="text" name="respostaErrada" placeholder="Resposta errada" onChange={e => setRespostaErrada(e.target.value)} />
                                </div>

                                <div className="field2">
                                    <input type="text" name="respostaErrada2" placeholder="Resposta errada 2" onChange={e => setRespostaErrada2(e.target.value)} />
                                </div>

                                <div className="field2">
                                    <input type="text" name="respostaErrada3" placeholder="Resposta errada 3" onChange={e => setRespostaErrada3(e.target.value)} />
                                </div>

                                <div className="field2">
                                    <input type="text" name="respostaErrada4" placeholder="Resposta errada 4" onChange={e => setRespostaErrada4(e.target.value)} />
                                </div>

                                <div className="field2">
                                    <input type="number" name="pontos" placeholder="Pontos" onChange={e => setPontos(e.target.value)} />
                                </div>

                                <div className="field2">
                                    <input type="text" name="imagemURL" placeholder="Link da imagem da questão" onChange={e => setImagemURL(e.target.value)} />
                                </div>

                                <div className="field2">
                                    <input type="text" name="imagemGabaritoURL" placeholder="Link da imagem do gabarito" onChange={e => setImagemGabaritoURL(e.target.value)} />
                                </div>

                                <div className="field2">
                                    <input type="text" name="videoURL" placeholder="Link do video da questão" onChange={e => setVideoURL(e.target.value)} />
                                </div>
                                
                            </div>

                            <div className="bt">
                                <div className="bt1">
                                    <button onClick={e => addQuestion(e)}>Adicionar</button>
                                </div>

                                <br />
                                <br />
                                <br />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    )
}
