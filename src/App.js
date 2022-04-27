import React from "react"
import styled from "styled-components"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import Categorias from "./Component/CategotiasHeader"
import Inicío from "./Component/Inicío"
import { createGlobalStyle } from "styled-components"
import IcoRoxo from "./Imagens/IcoRoxo.svg"
import setabaixo from "./Imagens/setabaixo.svg"
import Lupa from "./Imagens/Lupa.svg"
import Modal from "react-modal/lib/components/Modal"
import Todos from "./Component/Todos"
import AddModal from "./Component/ModalAdd"

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style:none;
    text-decoration:none;
    background-color:black;
    color:white;
  }
`

const CotainHeader = styled.div`
ul{
  color:red;
display:flex;
justify-content:space-around;
align-items:center;
}

h1{
  color:red;
  font-size:3vw;
  font-family: 'Bebas Neue', cursive;
}`

const List1 = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
width:40vw;
`
const List2 = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:40vw;
padding:1vw;
`
const StyleInput = styled.input`
padding:0.5vw;
background-color:grey;
border-radius:5px;
width:20vw;
border:solid black;

::placeholder {
  color:white;
}
`
const StyleButton = styled.button`
background-color:red;
padding:0.5vw;
border-radius:5px;
`


export default class App extends React.Component{
 
state={
  Add:false,
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
    }],
  FilmeInput:[]
}

ModalAdd = () => {
this.setState({add: !this.state.Add})
}

HendoFilter = (e) => {
  const {FilmeInput} = this.state

  const FilterMovies  = FilmeInput.filter((item) => {
    if(item.toLowerCase().includes(e.target.value.toLowerCase())){
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
      <Router>
      <GlobalStyle/>
        <nav>
          <CotainHeader>
            <ul>
              <List1>
              <h1>TODOFLIX</h1>
              <Link to="/">Inicío</Link>
              <h3><Categorias/></h3>
              </List1>
              <List2>

                <li>
                <StyleButton onClick={this.ModalAdd}>Adicionar filme</StyleButton >
                  {this.state.Add && <AddModal/>}
                </li> 
                
                <StyleInput type="text" placeholder="🔎 Pesquisar" onChange={this.HendoFilter}/>
              
                
                <div>
                <img src={IcoRoxo} alt="Icone"/>
              <img src={setabaixo} alt="seta"/>
              </div>
              
             </List2>
            </ul>
          </CotainHeader>
        </nav>
        <Routes>
          <Route path="/" element={<Inicío/>}/>
          <Route path="/Todos" element={ <Todos/>} />
        </Routes>
      </Router>
    )
  }
}

//Chave token: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;