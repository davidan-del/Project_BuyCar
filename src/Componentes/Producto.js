import React from 'react';
import {CardBody, CardTitle, CardSubtitle, CardImg,Card, Col} from 'reactstrap';
import './Producto.css'
import FichaProducto from './FichaProducto';

    //function Producto(props){
    class Producto extends React.Component{
        render(){
            return (
                <Col sm="4">   
                    <Card className="Card" body outline color="primary">
                        <CardImg src={this.props.imagen}/>
                    <CardBody>
                        <CardTitle>{this.props.titulo} </CardTitle>
                        <CardSubtitle><b>Descripcion:</b> {this.props.descripcion}</CardSubtitle>
                        <CardSubtitle><b>Precio:</b> {this.props.precio}</CardSubtitle>
                    </CardBody>
                    <FichaProducto props={this.props}/>
                    </Card>
                 </Col>
            );
        };
    };

    export default Producto;