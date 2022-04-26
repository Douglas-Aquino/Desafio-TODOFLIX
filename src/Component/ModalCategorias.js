import React from "react";
import styled from "styled-components";
import Todos from "./Todos";


const ListLink = styled.div`
width:8vw;
position:absolute;
top:3.2vw;
left:36.2vw;
font-size:1vw;
font-weight:300;
height:8vw;

ul{
    display:flex;
    justify-content:space-around;
    align-items:start;
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
                                <a href="">Todos</a>
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