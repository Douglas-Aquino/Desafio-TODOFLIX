import React from "react"
import styled from "styled-components"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import Categorias from "./Component/CategotiasHeader"
import Inicío from "./Component/Inicío"
import { createGlobalStyle } from "styled-components"
import IcoRoxo from "./Imagens/IcoRoxo.svg"
import setabaixo from "./Imagens/setabaixo.svg"
import Lupa from "./Imagens/Lupa.svg"

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
`;

const CotainHeader = styled.div`
ul{
  color:red;
border:solid green;
display:flex;
justify-content:space-around;
align-items:center;
}

h1{
  color:red;
  font-size:3vw;
}
`
const List1 = styled.div`
border:solid black;
display:flex;
align-items:center;
justify-content:space-between;
width:45vw;
`
const List2 = styled.div`
border:solid red;
display:flex;
align-items:center;
justify-content:space-between;
width:40vw;
padding:1vw;
`
const StyleInput = styled.input`
Background-image:URL("blob:https://xd.adobe.com/680a7845-6293-4e3a-9087-5714b1f13d43");
padding:0.5vw;
background-color:grey;
border-radius:5px;
width:20vw;

::placeholder {
  color:white;
  background-image:URL={Lupa}; 
}
`
const StyleButton = styled.button`
background-color:red;
padding:0.5vw;
border-radius:5px;
`
export default class App extends React.Component{

  
  
  
  
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
                <StyleButton >Adicionar filme</StyleButton >  
                </li> 

                <StyleInput type="text" placeholder="Pesquisar" />
              <div>
                <img src={IcoRoxo} alt="dor"/>
              <img src={setabaixo} alt="seta"/>
              </div>
              
             </List2>
            </ul>
          </CotainHeader>
        </nav>
        <Routes>
          <Route path="/" element={<Inicío/>}/>
        </Routes>


      </Router>
    )
  }
}