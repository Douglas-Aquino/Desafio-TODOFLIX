import React from "react";
import styled from "styled-components";

const ContainMap = styled.div`
display:flex;
width:93vw;
margin-top:3vw;
margin-left:3vw;
flex-wrap:wrap;

ul{
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:30vw;
    padding:2vh;

    li{
        padding:2vh 0;
        width:100%;
        
    }

img{
    margin-left:25%;
    width:15vw;
    border-radius:10px;
}
`
const T2 = styled.h2`
margin-left:10vw;
margin-top:2vw;
font-size:3vw;
`
const ContainInput = styled.div`
display:flex;
width:93vw;
margin-top:3vw;
margin-left:3vw;
flex-wrap:wrap;

ul{
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:30vw;
    padding:2vh;

    li{
        padding:2vh 0;
        width:100%;
        
    }

img{
    margin-left:25%;
    width:15vw;
    border-radius:10px;
}
`
const StyledInput =styled.input`
padding:0.5vw;
background-color:grey;
border-radius:5px;
width:20vw;
border:solid black;
position:absolute;
top:2vh;
left:66vw;
z-index:100;

::placeholder {
  color:white;
}
`
export default class Todos extends React.Component{

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
                nome:"uncharted fora do mapa",
                descriçao:"Nathan Drake e seu parceiro canastrão Victor Sully Sullivan embarcam em uma perigosa busca para encontrar o maior tesouro jamais encontrado. Enquanto isso, eles também rastreiam pistas que podem levar ao irmão perdido de Nathan.",
                poster:"https://ingresso-a.akamaihd.net/prd/img/movie/uncharted-fora-do-mapa/479c44b0-e337-43af-bf4a-52dee561bb31.jpg?impolicy=nsm-poster"
            },{
                nome:"Filhos do Privilégio",
                descriçao:"Um adolescente e seus amigos investigam uma série de acontecimentos sobrenaturais e descobrem uma conspiração sinistra.",
                poster:"https://br.web.img2.acsta.net/c_310_420/pictures/22/02/09/22/32/5111529.jpg"
            },{
                nome:"Pânico 5",
                descriçao:"Vinte e cinco anos após uma série de crimes brutais chocar a tranquila Woodsboro, um novo assassino se apropria da máscara de Ghostface e começa a perseguir um grupo de adolescentes para trazer à tona segredos do passado mortal da cidade.",
                poster:"https://br.web.img3.acsta.net/pictures/21/10/13/21/56/4755833.jpg"
            },{
                nome:"Juntos e enrolados",
                descriçao:"Após dois anos de união e muita economia financeira, Júlio e Daiana finalmente alcançaram o sonho de realizar a festa de casamento. Tudo parece estar indo bem, até que o noivo recebe uma mensagem em seu celular antes da cerimônia começar. Uma confusão generalizada acontece, mas a festa precisa continuar.",
                poster:"https://assetsgn.nowonline.com.br/assets/p17809274_v_v8_ac.jpg"
            },
            {
                nome:"Shrek",
                descriçao:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
                poster:"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg"
            }],
            FilmeInput:[]
    } 

    HendoFilter = (e) => {
        const {Filmes} = this.state
      
        const FilterMovies  = Filmes.filter((item) => {
          if(item.nome.toLowerCase().includes(e.target.value.toLowerCase())){
            return true
          }
        })
        this.setState({
          FilmeInput:FilterMovies
        })
        if(e.target.value === ""){
          this.setState({FilmeInput:[]})
        }
      }


    render(){
        return(
            <>
            <div>
                <T2>Todos:</T2>
                <StyledInput type="text"  placeholder="🔎 Pesquisar" onChange={this.HendoFilter}/>
                <ContainInput>
                    {this.state.FilmeInput.map(item => (
                        <ul>
                        <img src={item.poster}/> 
                        <li>{item.nome}</li> 
                        <li>{item.descriçao}</li>
                        </ul>
                    ))}
                </ContainInput>
                
            </div>
                <ContainMap>  
                    {this.state.Filmes.map(item => (
                    <ul>
                       
                       <li> <img src={item.poster}/></li> 
                       <li>{item.nome}</li> 
                       <li>{item.descriçao}</li>
                    </ul>
                ))}
                </ContainMap>
            </>
        )
    }
}