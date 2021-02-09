import React from 'react';
//import logo from './logo.svg';
import Producto from './Componentes/Producto';
import Navegacion from './Componentes/Navegacion';
import {Container, Row} from 'reactstrap';
import {listaProductos} from './listaProductos.json';
import './App.css';

//function App() {

//console.log(listaProductos);

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        listaProductos
    };
  }

    render() {

      const arregloComponentes = this.state.listaProductos.map(
        (listaProductos,i) => {
          //console.log(i);
          return (
            <Producto 
            key = {i}
            titulo = {listaProductos.titulo}
            imagen = {listaProductos.imagen}
            precio = {listaProductos.precio}
            descripcion = {listaProductos.descripcion}
            stock =  {listaProductos.stock}
            />
          );
        }
      );

      return (
          <Container>
            <Navegacion titulo="Mi primer sitio de compras en React"/>
            <Row>
              {arregloComponentes}
            </Row>
          </Container>
      );
    }
}

export default App;
