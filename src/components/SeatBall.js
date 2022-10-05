import styled from "styled-components";

export default function SeatBall (props){
    const {type, number, clickable, setSelectedSeats, id, setSelectedSeatsName} = props;

    const green = ["#8DD7CF", "#45BDB0"];
    const yellow = ["#FBE192", "#F7C52B"];
    const uncolored = ["#C3CFD9", "#808F9D"];
    return (
        <BallComponent color={
        type === 'selected'? green : 
        type === 'unavailable' ? yellow : 
        type === 'available'? uncolored : 
        null}
        disabled={!clickable}
        onClick={(e) => {
            setSelectedSeats(old => old.includes(id) ? old.filter(el => el !== id) : [...old, id])
            setSelectedSeatsName(old => old.includes(number) ? old.filter(el => el !== number) : [...old, number])
        }}>
        {number}
        </BallComponent>
    )
}
const BallComponent = styled.button`
    width: 26px;
    height: 26px;
    font-size: 11px;
    background-color: ${(props) => props.color[0]};
    border: 1px solid ${(props) => props.color[1]};
    border-radius: 16px;
`