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
export default class ModalHeader extends React.Component{
    
    
    render(){
        return(
            <ListRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to="Todos">Todos</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="Todos" element={ <Todos/>} />
                    </Routes>
                    

            </ListRouter>
        )
    }
}