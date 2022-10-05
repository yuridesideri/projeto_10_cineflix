import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components";

export default function Confirmation(props) {
    const location = useLocation();
    const {seats, buyer, movie} = location.state;
    const navigate = useNavigate();
    useEffect(()=>{sendConfirmationToAPI()}, [])

    const sendConfirmationToAPI = () =>{
        
    }
    return (
        <ConfirmationComponent>
            <h1 className="confirmation-h1">Pedido feito com sucesso!</h1>
            <div data-identifier="movie-session-infos-reserve-finished" className="movie-section">
                <h1>Filme e Sessão</h1>
                <p>{movie.movie.title}</p>
                <p>{movie.day.date} {movie.name}</p>
            </div>
            <div data-identifier="seat-infos-reserve-finished" className="tickets">
                <h1>Ingressos</h1>
                {seats.numbers.map(el => <p key={el}>Assento {el}</p>)}
            </div>
            <div data-identifier="buyer-infos-reserve-finished" className="buyer">
                <h1>Comprador</h1>
                <p>Nome: {buyer.buyerName}</p>
                <p>CPF: {buyer.buyerCPF}</p>
            </div>
            <button data-identifier="back-to-home-btn" onClick={() => navigate('/')}>Voltar para Home</button>
        </ConfirmationComponent>
    )
};

const ConfirmationComponent = styled.section`
    font-family: 'Roboto', normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        display: flex;
        width: 100%;  
        letter-spacing: 0.04em;
        margin-top: 20px;
    }
    div{
        width: 100%;
        padding-left: 29px;
        margin-top: 20px;
        width: 100%;
        box-sizing: border-box;
        p{
            width: auto;
            font-weight: 400;
            font-size: 22px;
            line-height: 26px;
            display: flex;
            letter-spacing: 0.04em;
            color: #293845;
        }
    }
    .confirmation-h1{
        width: 170px;
        color: #247A6B;
        text-align: center;
    }
    button{
    margin-top: 80px;
        width: 225px;
        height: 42px;
        left: 74px;
        top: 622px;
        background-color: #E8833A;
        border-radius: 3px;
        color: white;
    }
`