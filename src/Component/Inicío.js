import React from "react"
import Carousel from "nuka-carousel"
import Eternos from "../Imagens/Eternos.png"
import styled from "styled-components"
// import Coraçao from "../Imagens/Coraçao"


const Intro = styled.div`
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
const T3 =styled.div`
margin-top:2vw;
margin-left:3vw;
font-size:1.5rem;
`

const ContainCarrossel = styled.div`
display:flex;
align-items:flex-start;
justify-content:center;
margin-top:2vw;
border:solid blue;

img{
    width:10vw;
    border-radius:10px;
    
}

ul{
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    flex-direction:column;
    width:100%;
    height:100%;
    border:solid ;
}

h4{
    border:solid red;

}

p{
    border:solid red;

}
`

export default class Inicío extends React.Component{

state = {
    Filmes:[
        {
            nome:"Red",
            descriçao:"Uma menina de 13 anos começa a se transformar em um panda vermelho gigante sempre que fica animada.",
            poster:"https://pbs.twimg.com/media/FEcVUyPXsAQohDs?format=jpg"
        },
        {
            nome:"Moonfall",
            descriçao:"No filme Moonfall, de Roland Emmerich, uma força misteriosa tira a Lua da sua órbita em torno da Terra e envia-a numa rota de colisão capaz de aniquilar a vida como a conhecemos.",
            poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1YNmkeDvjY02ul689RVA88XuhWU9bYDogyLsKNvdElB50wIvtmTfgTa_LL-V49UbQZU&usqp=CAU"
        },
        {
            nome:"The Batman",
            descriçao:"Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.",
            poster:"https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/03/06/1303576951-batman-pattinson.jpg"
        },
        {
            nome:"Sem saída",
            descriçao:"A vida de Nathan vira de cabeça para baixo quando ele encontra sua verdadeira identidade com a ajuda da amiga Karen. Mas o caminho não será fácil, pois a dupla passará a ser perseguida e precisará correr para salvar suas vidas.",
            poster:"http://www.setcenas.com.br/wp-content/uploads/2021/08/poster-brasileiro-1.jpg"
        },
        {
            nome:"Projeto Adam",
            descriçao:"Um viajante do tempo volta ao ano de 2022 por acidente e acaba se encontrando com seu eu mais novo. Juntos, e sendo caçados por forças do futuro, os dois embarcam em uma missão para consertar a linha temporal e salvar seus entes queridos.",
            poster:"https://br.web.img2.acsta.net/pictures/22/03/02/17/11/3732338.png"
        },
        {
            nome:"Shrek",
            descriçao:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            poster:"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg"
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
            <T3>Destaques</T3>
            <ContainCarrossel>
               
            
                <Carousel slidesToShow={3}
                wrapAround={true}
                autoplay={false}
                pagination={false}
                >
                    {this.state.Filmes.map(item => (
                    <ul>
                        <img src={item.poster}/>
                        <h4>{item.nome}</h4>
                        <p>{item.descriçao}</p>
                    </ul>
                    ))}
                </Carousel>
            </ContainCarrossel>
            </>
        )
    }
}