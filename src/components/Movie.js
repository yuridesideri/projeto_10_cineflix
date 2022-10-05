import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Movie(props) {
    const {id,  posterURL, } = props.movie;
    const navigate = useNavigate();

    return (
        <MovieBox data-identifier="movie-outdoor" onClick={() => navigate(`/sections/${id}`)}>
            <img src={posterURL} alt="" />
        </MovieBox>
    )
};


const MovieBox = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 34.4% !important;
    max-width: 200px !important;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    padding: 8px !important;
    border-radius: 3px;  
    img{
        width: 100%;
    }
`