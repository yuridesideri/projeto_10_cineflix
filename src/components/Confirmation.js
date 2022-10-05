import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export default function Confirmation(props) {
    const location = useLocation();
    const {seats, buyer, movie} = location.state;

    useEffect(()=>{sendConfirmationToAPI()}, [])

    const sendConfirmationToAPI = () =>{
        
    }
    return (
        <>
            <h1>{seats.numbers}</h1>
            <h1>{buyer.buyerName}</h1>
            <h1>{movie.movie.title}</h1>
        </>
    )
};
