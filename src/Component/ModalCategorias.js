import React from "react";
import styled from "styled-components";
import Todos from "./Todos";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"

const ListRouter = styled(Router)`
border:solid red;
margin-top:5vw;
position:absolute;
top:-1vw;
left:43.2vw;
`
const T2 =styled.h2`
border:solid red;
width:10vw;
margin-top:5;
`

export default class ModalHeader extends React.Component{
    
    
    render(){
        return(
            <>
            <h2>Essa é o ModalHeader</h2>

            <ListRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Todos">Todos</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/Todos" element={ <Todos/>} />
                    </Routes>
                    

            </ListRouter>
            </>
        )
    }
}