import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"



const ListLink = styled.div`
display:flex;
justify-content:space-around;
align-items:flex-start;
width:8vw;
position:absolute;
top:3.2vw;
left:33.1vw;
font-size:1vw;
font-weight:300;
height:8vw;


ul{
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:flex-start;
    flex-direction:column;
    height:8vw;

    a{

&:hover{
    cursor:pointer;
    text-decoration:underline white;
}
    }
}
`

export default class ModalHeader extends React.Component{
    
    
    render(){
        return(
            <ListLink>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Todos">Todos</Link>
                            </li>
                            <li>
                                <a href="">Favoritos</a>
                            </li>
                            <li>
                                <a href="">Já vistos</a>
                            </li>
                            <li>
                                <a href="">Adicionados</a>
                            </li>
                        </ul>
                    </nav>
            </ListLink>
        )
    }
}