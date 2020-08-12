import React from 'react'

import { Link } from 'react-router-dom'

import trion from '../../assets/images/trion.png'
import satc from '../../assets/images/satc.png'
import pontos from '../../assets/images/pontos.png'

import './index.css'

export default function QuestionResult() {
    return (
        <>
            <div id="page-result">
                <form>
                    <fieldset>
                        <div class="img2">
                            <div class="lg1">
                                <img src={trion} alt="Logo marca" width="210px" height="90px" />
                            </div>
                            
                            <div class="lg2">
                                <img src={satc} alt="Logo marca" width="210px" height="90px" />
                            </div>
                        </div>

                        <h1 className="title-missao">Missão Diária</h1>

                        <div class="drawing">
                            <img src={pontos} alt="Pontos" width="150px" height="150px" />
                        </div>

                        <p className="congratulation-text">Parabéns você acertou 100%</p>

                        <div class="bt">
                            <Link to="/gabarito"><button>Gabarito</button></Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
