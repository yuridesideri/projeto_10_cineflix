import styled from "styled-components"

export default function Error(props) {
    return (
        <ErrorComponent>
            <h1>ERROR! PAGE NOT FOUND!</h1>
        </ErrorComponent>
    )
};


const ErrorComponent = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-family: 'Roboto', sans-serif;
        font-size: 50px;
        color: red;
        text-align: center;
    }
`