import React, { Component } from 'react';
import api from '../../services/api'
import queryString from 'query-string'

import '../../styles/css/bootstrap.css';
import './index.css';

import Profile from '../Profile';
import ScoreBoard from '../ScoreBoard';
import Missions from '../Missions';
import ProgressBoard from '../ProgressBoard';
import Rules from '../Rules';
import Alerts from '../Alerts';
import Awards from '../Awards';

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aluno: {}
        }
    }

    componentDidMount() {
        const query = queryString.parse(this.props.location.search)

        api.get(`/user/${query.userid}`)
            .then(resp => {
                this.setState({ aluno: resp.data })
                localStorage.setItem('user', resp.data)
            })
    }

    returnMenuComponent(pathname) {
        switch (String(pathname)) {
            case "/":
                return <Missions />
                break;
            case "/missoes":
                return <Missions />
                break;
            case "/conquistas":
                return <ProgressBoard />
                break;
            case "/avisos":
                return <Alerts />
                break;
            case "/regras":
                return <Rules />
                break;
            case "/recompensas":
                return <Awards />
                break;
            default:
                return <ProgressBoard />
                break;
        }
    }

    returnMenuColor(pathname) {
        switch (String(pathname)) {
            case "/":
                return 'rgb(74, 177, 152)'
                break;
            case "/missoes":
                return 'rgb(74, 177, 152)'
                break;
            case "/conquistas":
                return 'rgb(178, 203, 65)'
                break;
            case "/avisos":
                return 'rgb(253, 116, 0)'
                break;
            case "/regras":
                return 'rgb(0, 92, 120)'
                break;
            case "/recompensas":
                return 'rgb(201, 63, 101)'
                break;
            default:
                return ''
                break;
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="card-main shadow-lg"
                        style={{
                            backgroundColor: this.returnMenuColor(this.props.location.pathname),
                            borderRadius: '5px'
                        }}
                    >
                        <div className="row">

                            <div className="col-12 col-sm-3">
                                <Profile
                                    aluno={this.state.aluno.nome}
                                    fraqueza={this.state.aluno.fraqueza}
                                    habilidade={this.state.aluno.habilidade}
                                />
                            </div>

                            <div className="col-12 col-sm-9 mt-3">
                                <div className="row">
                                    <div className="card-missions">

                                        {this.returnMenuComponent(String(this.props.location.pathname))}

                                    </div>
                                </div>

                                <ScoreBoard
                                    nivel={this.state.aluno.nivel}
                                    cartas={this.state.aluno.cartas}
                                    pontos={this.state.aluno.pontos}
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}