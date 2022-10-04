import { useEffect, useState } from "react"
import axios from "axios";
import styled from "styled-components";
import Movie from "./Movie";


export default function Movies(props) {
    const [movies, setMovies] = useState(null);

    useEffect(() => getMovies(), [])

    const getMovies = () => {
        axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        .then( response => setMovies(response.data));
    }

    return (
        <Catalogue>
        <p>Escolha o filme:</p>
        <div>
            {movies && movies.map(el => <Movie key={el.id} movie={el}/>)}
        </div>
        </Catalogue>
    )
};


const Catalogue = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-family: 'Roboto', sans-serif;
        margin-top: 20px;
        width: 374px;
        height: 70px;
        text-align: center;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        letter-spacing: 0.04em;
    }
    div{
    width: 100%;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-right: 10px;
    margin-left: 10px;
    padding-top: 20px;
    }
`