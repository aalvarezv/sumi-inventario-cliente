import React from 'react';
import {Table} from 'react-bootstrap';


const TableInventario = ({registros}) => {

    return (
        <>
            <Table striped bordered hover variant="light"> 
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Rack</th>
                    <th>Usuario</th>
                    <th>Maquina</th>
                    <th>Producto</th>
                    <th>Fecha</th>
                    <th>Lecturas</th>
                    <th>Total</th>
                    </tr>
    
                </thead>
                <tbody>
                    {registros.length > 0 &&
                        registros.map((registro, index) =>{
                            const {codigo_rack, codigo_maquina,
                                fecha_hora_ultima_marca, lecturas, total, producto, usuario} = registro
                            const {descripcion : producto_descripcion} = producto
                            const {nombre : usuario_nombre} = usuario
                            return(
                                <tr >
                                <td>{index+1}</td>  
                                <td>{codigo_rack}</td>    
                                <td>{usuario_nombre}</td>
                                <td>{codigo_maquina}</td>
                                <td>{producto_descripcion}</td>
                                <td>{fecha_hora_ultima_marca}</td>
                                <td>{lecturas}</td>
                                <td>{total}</td>
                                </tr>
                            )
                        })
                    }  
                    
                </tbody>
            </Table>
        </>
    )
}

export default TableInventario;