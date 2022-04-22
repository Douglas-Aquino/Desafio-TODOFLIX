import React from "react"
import Carousel from "react-elastic-carousel"
import Eternos from "../Imagens/Eternos.png"
import styled from "styled-components"


const Intro = styled.div`
border:red solid;
margin-top:5vw;
display:flex;
align-items:center;
img{
    width:30vw;
}
margin-left:5vw;
width:80vw;
`
const StyleText = styled.div`
border:solid blue;
display:flex;
flex-direction: column;
justify-content:space-evenly;
align-items:start;
padding:3vw 0.5vw;
line-height:2vw;

button{
    width:1vw;
    background-color:grey;
}
`
// const StyleCarouse = styled

export default class Inicío extends React.Component{

state = {
    Filmes:[
        {
            nome:"sherek",
            descriçao:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            poster:'blob:https://xd.adobe.com/07848b4e-5de5-4b2b-a59c-1cd69a157be2'
        },
        {
            nome:"sherek",
            descriçao:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            poster:'blob:https://xd.adobe.com/07848b4e-5de5-4b2b-a59c-1cd69a157be2'
        },
        {
            nome:"sherek",
            descriçao:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            poster:'blob:https://xd.adobe.com/07848b4e-5de5-4b2b-a59c-1cd69a157be2'
        },
        {
            nome:"sherek",
            descriçao:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            poster:'blob:https://xd.adobe.com/07848b4e-5de5-4b2b-a59c-1cd69a157be2'
        },
        {
            nome:"sherek",
            descriçao:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            poster:'blob:https://xd.adobe.com/07848b4e-5de5-4b2b-a59c-1cd69a157be2'
        },
        {
            nome:"sherek",
            descriçao:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            poster:'https://images8.alphacoders.com/679/679877.jpg'
        }]
} 


    render(){
        return(
            <>
            <Intro>
                <img src={Eternos} alt="Eternos"/>
                <StyleText>
                    <button>coração</button>
                    <p>Visto resentemente </p>
                    <h2>Eternos</h2>
                    <p>Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas civilizações enquanto batalhavam os malignos Deviantes.</p>
                </StyleText>
            </Intro>
            <h3>Destaques</h3>
            
            <Carousel itemsToShow={4}>
                {this.state.Filmes.map((item) => (
                <ul>
                    <img src={item.poster}/>
                    <h4>{item.nome}</h4>
                    <p>{item.descriçao}</p>
                </ul>
                ))}
            </Carousel>
            
            </>
        )
    }
}