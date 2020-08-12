import React from 'react'

import { Link } from 'react-router-dom'

import trion from '../../assets/images/trion.png'
import satc from '../../assets/images/satc.png'
import pontos from '../../assets/images/pontos.png'
import gabarito from '../../assets/images/gabarito.png'

import '../QuestionResult/index.css'

export default function QuestionGabarito() {
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

                        <div class="drawing">
                             <img src={gabarito} alt="Logo marca" width="200px" height="500px" />
                        </div>

                        <div class="bt">
                            <Link to="/"><button>Voltar</button></Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
