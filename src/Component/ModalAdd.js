import React from "react";
import styled from "styled-components";
import Modal from "react-modal/lib/components/Modal";
import ImgModal from "../Imagens/ImgModal.svg"

const AddButton = styled.button`
border:solid red;
width:10vw;
padding:0.5vw;
background-color:red;
border-radius:5px;
`
const XButton = styled.button`
border:none;
font-size:2vw;
position:relative;
top:0;
left:47vw;
`
const ElementsModal = styled.div`
display:flex;
flex-wrap:wrap;
`
const Element1 = styled.section`
`
const Element2 = styled.section`
margin-left:1vw;

button{
    background-color:white;
    color:black;
    border-radius:5px;
    padding:0.5vw;
}
`
const ElementNome = styled.div`
input{
    width:25vw;
    border:none;
    border-radius:5px;
    background-color:#585858;
    margin-top:0.5vh;
    padding:0.5vw;
}
`
const ElementDesc = styled.div`
margin-top:1vw;
input{
    width:25vw;
    height:5vw;
    border:none;
    border-radius:5px;
    background-color:#585858;
    margin-top:0.5vh;
    padding:0.5vw;
}
`
const ElementStatus = styled.div`
padding:1vw 0;
div{
    display:flex;
    justify-content:space-around;
    padding:0.5vw;
    input{
        width:1.5vw;
        border-radius:50%;
        &:hover{
            background-color:#585858;
            border:solid black;
        }
}
}
`
const Buttons = styled.div`
margin-top:5vw;
margin-left:18vw;

button{
    border:none;
    padding:0.5vw;
    border-radius:5px;
    margin-left:0.2vw;
}
`
const StyledB = styled.button`
background-color:red;
color:white;
`

export default class AddModal extends React.Component {

    state = {
        ModalAberto: true
    }

    handleModal = () => {
        this.setState({
            ModalAberto: !this.state.ModalAberto
        })
    }
    render() {
        return (
            <>
                <AddButton onClick={this.handleModal}>Adicionar filme</AddButton>
                <Modal style={{ content: { backgroundColor: "black", color: "white", width: 700, marginLeft: 300, borderRadius: 10 } }}
                    isOpen={this.state.ModalAberto}
                >

                    <XButton onClick={this.handleModal}>X</XButton>
                    <h2>Adicionar Filme</h2>
                    <ElementsModal>
                        <Element1>
                            <ElementNome>
                                <h4>Nome:</h4>
                                <input type="text" placeholder="Nome a ser adicionado" />
                            </ElementNome>
                            <ElementDesc>
                                <h4>Descrição:</h4>
                                <input type="text" />
                            </ElementDesc>
                            <ElementStatus>
                                <h4>Status</h4>
                                <div>
                                    <input type="submit" value="" />
                                    <label>Já assisti</label>
                                    <input type="submit" value=""/>
                                    <label>Não assisti assisti</label>
                                </div>
                            </ElementStatus>
                            <div>
                                <h4>Nota</h4>
                            </div>
                        </Element1>

                        <Element2>
                            <h4>Imagem da capa</h4>
                            <figure>
                                <img src={ImgModal} alt="" />
                            </figure>
                            <button>Selecionar imagem</button>
                        </Element2>
                        <Buttons>
                            <button>Cancelar</button>
                            <StyledB>Confirmar</StyledB>
                        </Buttons>
                    </ElementsModal>
                </Modal>
            </>
        )
    }
}