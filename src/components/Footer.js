import styled from "styled-components"

export default function Footer(props) {
    const {image, title, time } = props;

    return(
        <FooterComponent>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <p>{title}</p>
                <p>{time && time}</p>
            </div>
        </FooterComponent>
    )
};


const FooterComponent = styled.div`
    font-family: 'Roboto', sans-serif;
    position: fixed;
    height: 117px;
    width: 100vw;
    bottom: 0;
    background-color:#DFE6ED;
    border: 1px solid #9EADBA;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    div:first-child{
        width: 64px !important;
        justify-content: center;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 8px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        background-color: white;
        margin-left: 14px;

        img{
            width: 100%;
        }
    }

    p{
        font-size: 20px;
        margin-left: 14px;
        margin-right: 14px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`