import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import SeatBall from "./SeatBall"

export default function Seat(props) {

    const [sectionData, setSectionData] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedSeatsName, setSelectedSeatsName] = useState([]);
    const [inputValue, setInputValue] = useState({buyerName: null, buyerCPF: null});
    const { idSection } = useParams();
    const navigate = useNavigate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getSectionData(), [])

    const getSectionData = () => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`)
        .then(response => setSectionData(response.data));
    }

    const handleConfirmation = () => {
        const cpfNumberChar =  inputValue.buyerCPF !== null && inputValue.buyerCPF.length === 11;
        const cpfNumberOnly = !isNaN(inputValue.buyerCPF);
        const nameNotEmpty =  inputValue.buyerName !== null && inputValue.buyerName.length > 2;
        const seatNotZero = selectedSeats.length > 0;


        if (cpfNumberChar && cpfNumberOnly && nameNotEmpty && seatNotZero){
            axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
            {
                ids: selectedSeats,
                name: inputValue.buyerName,
                cpf: inputValue.buyerCPF,
            }
            ).then((r) => {
                navigate('/confirmation', {
                    state: {buyer: inputValue,
                            movie: sectionData,
                            seats: {ids: selectedSeats,
                                    numbers: selectedSeatsName}
                            }
                        })
                    }).catch(error => console.log(error))
            }
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
                        setSelectedSeats={setSelectedSeats}
                        setSelectedSeatsName={setSelectedSeatsName}
                        />)
                        )}
                </div>
                <div className="demo-div">
                    <div data-identifier="seat-selected-subtitle" className="balls">
                        <SeatBall type="selected" number={null} clickable={false} />
                        <p>Selecionado</p>
                    </div>
                    <div data-identifier="seat-available-subtitle" className="balls">
                        <SeatBall type="available" number={null} clickable={false} />
                        <p>Disponível</p>
                    </div>
                    <div data-identifier="seat-unavailable-subtitle" className="balls">
                        <SeatBall type="unavailable" number={null} clickable={false} />
                        <p>Indisponível</p>
                    </div>
                </div>
            </section>
            <section className="buyer-data">
                <div>
                    <label htmlFor="buyer-name">Nome do comprador:</label>
                    <input data-identifier="buyer-name-input" onChange={(e) => {setInputValue({...inputValue, buyerName: e.target.value})}} type="text" name="buyer-name" placeholder="Digite seu nome..."/>
                </div>
                <div>
                    <label htmlFor="buyer-cpf">CPF do comprador:</label>
                    <input data-identifier="buyer-cpf-input" onChange={(e) => {setInputValue({...inputValue, buyerCPF: e.target.value})}} type="text" name="buyer-cpf" placeholder="Digite seu CPF..."/>
                </div>
            </section>
            <section className="buttons">
                <button data-identifier="reservation-btn" onClick={() => {handleConfirmation()}} className="confirmation-button">
                            Reservar Assento(s)
                </button>
            </section>
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
    .buyer-data{
        display: flex;
        flex-direction:column;
        font-size: 18px;
        width: 100%;
        align-items: center !important;
        div{
            width: 327px;
            margin-top: 20px;
        }
        input{
            margin: auto;
            width: 327px;
            height: 51px;
            font-size: 18px;
            font-style: italic;
            border: 1px solid #D5D5D5;
            border-radius: 3px; 
            text-indent: 20px;
            &::placeholder{
                color: #AFAFAF;
                text-indent: 20px;
                
            }
        }
    }
    .buttons{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        .confirmation-button{
            background-color: #E8833A;
            border-radius: 3px;
            width: 225px;
            height: 42px;
            font-family: 'Roboto', sans-serif;
            color: white;
            font-weight: 400;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 0.04em
        }

    }
`


