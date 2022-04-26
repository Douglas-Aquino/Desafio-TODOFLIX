import React from "react";
import styled from "styled-components";
import ModalHeader from "./ModalCategorias";
import Modal from "react-modal/lib/components/Modal";


const StyleButton = styled.button`
border:none;


`
export default class Categorias extends React.Component{


    state = {
        Aberto:false
    }

    HendeleLista = () => {
        this.setState({
            Aberto: !this.state.Aberto 
        })
    }
    render(){
        return(
            <>
                <StyleButton onClick={this.HendeleLista}>Categorias</StyleButton> 
                {this.state.Aberto && <ModalHeader/>}
            </>
        )
    }
}