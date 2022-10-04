import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import SeatBall from "./SeatBall"

export default function Seat(props) {

    const [sectionData, setSectionData] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const { idSection } = useParams();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getSectionData(), [])
    useEffect(() => console.log(selectedSeats), [selectedSeats])

    const getSectionData = () => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`)
        .then(response => setSectionData(response.data));
    }
    return (
        <SeatsComponent>
            <section className="seats">
                <h1>Selecione o(s) assento(s)</h1>
                <div className="seats-grid">
                    { sectionData && sectionData.seats.map(ball => (
                    <SeatBall 
                        key={`seat${ball.id}`} 
                        id={ball.id} 
                        number={ball.name} 
                        type={selectedSeats.includes(ball.id) ? 'selected' : ball.isAvailable ? 'available' : 'unavailable'} 
                        clickable={ball.isAvailable} 
                        setSelectedSeats={setSelectedSeats}/>)
                        )}
                </div>
                <div className="demo-div">
                    <div className="balls">
                        <SeatBall type="selected" number={null} clickable={false} />
                        <p>Selecionado</p>
                    </div>
                    <div className="balls">
                        <SeatBall type="available" number={null} clickable={false} />
                        <p>Disponível</p>
                    </div>
                    <div className="balls">
                        <SeatBall type="unavailable" number={null} clickable={false} />
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
    .seats{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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
    .seats-grid{
        min-width: 327px;
        width: 87.2vw;
        max-width: 400px;
        gap: 8px;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
    }
    .demo-div{
        margin-top: 16px;
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


