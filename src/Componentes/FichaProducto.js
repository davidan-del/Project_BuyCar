import { Alert } from 'bootstrap';
import React from 'react';
import {Button, Container, Modal, ModalHeader, ModalBody, ModalFooter,CardImg} from 'reactstrap';
import {listaCarrito} from '../listaCarrito';

import './FichaProducto.css'
import './Producto.css'


class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state = {
            modal:false,
            listaCarrito,
            stock: props.props.stock
        };
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    toggle(){
        console.log('entro aqui');
        this.setState(prevState => ({
            modal:!prevState.modal
        }));
    }

    agregarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
            });

            this.setState(prevState => ({
                modal:!prevState.modal
            }));

            if (this.state.stock !== 0) {
                this.setState(prevState => ({
                    stock : prevState.stock - 1
                }));
            } else {
                    Alert('Stock Agotado')
            }

            const badge = document.getElementById("Badge1");
            badge.innerText = listaCarrito.length;   
    } 

    render(){
        return(
            <Container>
                <Button className="Button" onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader> {this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>El detalle del producto seleccionado es el siguiente:</p>
                        {this.props.props.descripcion}
                        <p>Este producto tiene un valor de:<b> {this.props.props.precio} </b> pesos </p>
                        <p>Hay: <b> {this.state.stock} </b> unidades de este producto disponible</p>
                    </ModalBody>
                    <ModalFooter className="ModalFooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al Carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver Atrás</Button>
                    </ModalFooter>
                </Modal>
             </Container>
        );
    }
}

export default FichaProducto;