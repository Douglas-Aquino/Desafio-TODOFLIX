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
}
`
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
// background-image:url(${Lupa}); 
padding:0.5vw;
background-color:grey;
border-radius:5px;
width:20vw;

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
  Input:[]
}

ModalAdd = () => {
this.setState({add: !this.state.Add})
}

// HendoleInput = (e) => {
//   this.setState({Input:e.target.value})
// }



  render(){
    return(
      <Router> <GlobalStyle/>
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
                <StyleButton onClick={this.ModalAdd} >Adicionar filme</StyleButton >
                  {this.state.Add && <AddModal/>}
                </li> 

                <StyleInput type="text" placeholder="🔎 Pesquisar" onChange={this.HendoleInput} />
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