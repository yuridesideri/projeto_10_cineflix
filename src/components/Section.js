import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components";

export default function Section(props) {
    const { idMovie } = useParams();
    const [movieData, setMovieData] = useState(null);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getMovieData(), [])

    const getMovieData = () => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`)
        .then( response => setMovieData(response.data))
    }

    return (
        <Sections>
            <h1>Selecione o horário</h1>

            { movieData && movieData.days.map(el => {
                return (
                <div key={el.id}>
                    <p>{el.weekday} - {el.date}</p>
                    
                    <div className="buttons">
                        {el.showtimes.map(but => <button key={but.id}>
                            {but.name}
                        </button>)}
                    </div>
                </div>
                )
            })}
            
           { movieData &&
           <footer>
                <div>
                    <img src={movieData.posterURL} alt="" />
                </div>
            </footer>
           }
        </Sections>
    )
};

const Sections = styled.section`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 23px;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 0.04em;
        width: 374px;
        height: 97px;
    }
    div{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        p{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            display: flex;
            align-items: center;
            letter-spacing: 0.02em;
        }
        .buttons{
            flex-direction: row;
            margin-top: 15px;
            margin-bottom: 23px;
            button{
                margin-right: 8px;
                width: 83px;
                height: 43px;
                color: white;
                background: #E8833A;
                border-radius: 3px;
            }
        }
    }

    footer{
        position: fixed;
        width: 100%;
        bottom: 0;
        background-color: rgba(158, 173, 186, 1);
        border: 1px solid #9EADBA;
        div{
            width: 64px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 2px;
            img{
                width: 100%;
            }
        }
    }
`
