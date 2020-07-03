import React from 'react'
import { Link } from 'react-router-dom'

import logoTrion from '../../assets/images/trion.png'
import logoSATC from '../../assets/images/satc.png'

import './styles.css'

export default function Home() {
    return (
        <>
            <div className="page-home">
                <header>
                    <img src={logoSATC} alt="Logo marca" width={210} height={90} />
                </header>

                <main>
                    <div className="img trion">
                        <img src={logoTrion} alt="Logo marca" width={350} height={150} />
                    </div>

                    <Link to="/login">
                        <button type="submit">Acesse</button>
                    </Link>

                    <p>Divirta-se aprendendo!</p>

                </main>
            </div>
        </>
    )
}
