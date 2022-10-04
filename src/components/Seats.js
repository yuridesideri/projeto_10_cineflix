import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

export default function Seat(props) {

    const [sectionData, setSectionData] = useState(null);
    const { idSection } = useParams()
    useEffect(() => getSectionData(), [])

    const getSectionData = () => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`)
        .then(response => setSectionData(response.data));
    }
    return (
        <SeatsComponent>
            <section className="seats">
                <h1>Selecione o(s) assento(s)</h1>

                { sectionData && sectionData.seats.map(ball => <Ball key={ball.id} number={ball.name} type={ball.isAvailable? 'available' : 'unavailable'} />)}

                <div className="demo-div">
                    <div className="balls">
                        <Ball type="selected" number={null} clickable={false} />
                        <p>Selecionado</p>
                    </div>
                    <div className="balls">
                        <Ball type="available" number={null} clickable={false} />
                        <p>Disponível</p>
                    </div>
                    <div className="balls">
                        <Ball type="unavailable" number={null} clickable={false} />
                        <p>Indisponível</p>
                    </div>
                </div>
            </section>
            <section className="buyer-data">

            </section>
            <button className="confirmation-button">

            </button>
            {sectionData && <Footer 
            image={sectionData.movie.posterURL}
            title={sectionData.movie.title}
            time ={sectionData.day.weekday + ' - ' + sectionData.name}
             />}
        </SeatsComponent>
    )
};


const SeatsComponent = styled.section`
    font-family: 'Roboto', sans-serif;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
        width: 374px;
        height: 110px;

    }
    .demo-div{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        .balls{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`




function Ball (props){
    const {type, number, clickable} = props;

    const green = ["#8DD7CF", "#45BDB0"];
    const yellow = ["#FBE192", "#F7C52B"];
    const uncolored = ["#C3CFD9", "#808F9D"];

    return (
        <BallComponent color={
        type === 'selected'? green : 
        type === 'unavailable' ? yellow : 
        type === 'available'? uncolored : 
        null}
        disabled={!clickable}>
        {number}
        </BallComponent>
    )
}
const BallComponent = styled.button`
    width: 26px;
    height: 26px;
    background-color: ${(props) => props.color[0]};
    border: 1px solid ${(props) => props.color[1]};
    border-radius: 16px;
`