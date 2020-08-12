import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import api from '../../services/api'

import trion from '../../assets/images/trion.png'
import satc from '../../assets/images/satc.png'

import './index.css'

export default function Questions(props) {
    const [questions, setQuestions] = useState([])

    async function addPointToUser(e) {
        const userId = localStorage.getItem('userId')

        await api.put(`/user/point/${userId}`, {
            pontos: 50
        })
            .then(_ => props.history.push('/result'))
    }

    useEffect(() => {
        async function loadQuestions() {
            const response = await api.get('questions')

            setQuestions(response.data.questions)
            console.log(response.data.questions)
        }

        loadQuestions()
    }, [])

    return (
        <>
            <div id="page-questionOne">
                <form className="question-form">
                    <fieldset>
                        <div className="img2">
                            <div className="lg1">
                                <img src={trion} alt="Logo marca" width="210px" height="90px" />
                            </div>
                            <div className="lg2">
                                <img src={satc} alt="Logo marca" width="210px" height="90px" />
                            </div>
                        </div>

                        <h1 style={{ marginBottom: '9px' }}>Missão Diária</h1>

                        {questions.map((question, index) => (
                            <div>
                                <div className="text" style={{ color: 'gray' }}>
                                    {index + 1}. {question.pergunta}
                                </div>

                                <br />

                                <div class="quesImg">
                                    <img src="https://d2q576s0wzfxtl.cloudfront.net/2017/08/08145548/165.png" alt="imagem" width="400px" height="40px" />
                                </div>

                                <br />

                                <div class="questions">
                                    <div class="A" style={{ display: 'flex' }}>
                                        <p className="question-p">a
                                 <input type="radio" name="a" value="a." />{question.respostaCorreta}
                                        </p>
                                    </div>
                                    <div class="B">
                                        <p className="question-p">b
                                <input type="radio" name="b" value="b." />{question.respostaErrada}
                                        </p>
                                    </div>
                                    <div class="C">
                                        <p className="question-p">c
                                <input type="radio" name="c" value="c." />{question.respostaErrada2}
                                        </p>
                                    </div>
                                    <div class="D">
                                        <p className="question-p">d
                                <input type="radio" name="d" value="d." />{question.respostaErrada3}
                                        </p>
                                    </div>
                                    <div class="E">
                                        <p className="question-p">e
                                <input type="radio" name="e" value="e." />{question.respostaErrada4}
                                        </p>
                                    </div>
                                </div>

                                <div class="bt">
                                    <button className="bt-video">Vídeo</button>
                                </div>
                            </div>
                        ))}

                        <div class="bt">
                            <Link to="/result" onClick={() => addPointToUser()}>
                                <button >Finalizar</button>
                            </Link>
                        </div>

                        <div class="p2">
                            <p>{questions.length}</p>
                        </div>

                    </fieldset>
                </form>
            </div>
        </>
    )
}
