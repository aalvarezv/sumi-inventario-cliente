import React, {useState, useEffect}  from 'react';
import clienteAxios from '../../config/axios'
import { Button, Row, Col, Container} from 'react-bootstrap';
import TableRegistroInventario from '../tables/TableRegistroInventario';
import ExportCSV from '../ExportCSV';

const ResumenInventario = () => {

    const [registros, setRegistro] = useState([]);

    useEffect(() => {
        handleListarInventario()
    }, [])

    const handleListarInventario = async () => {
         try{
             const resp = await clienteAxios.get(`/api/registros`);
             setRegistro(resp.data.rack_productos)
         }catch(e){
             console.log(e)
         }
     }

     let registrosFormat = []
     useEffect(() => {

        registrosFormat = registros.map((registro, index) => {
            return {
                id: index + 1,
                rack: registro.codigo_rack,
                usuario: registro.usuario.nombre,
                maquina: registro.codigo_maquina,
                codigo_producto: registro.codigo_producto,
                nombre_producto: registro.producto.descripcion,
                fecha_hora_ultima_marca: registro.fecha_hora_ultima_marca,
                lecturas: registro.lecturas,
                total: registro.total,
            }
        })

     }, [registros])

 
    return ( 
        <Container>
            <Row className="d-flex justify-content-center my-5">
                <h3>Registro Inventario</h3>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button className="mr-2"
                            variant="primary"
                            onClick={handleListarInventario}>
                            Refrescar
                    </Button> 
                    <ExportCSV buttonName="Descargar Resumen" csvData={registrosFormat} fileName="ResumenInventario" />
                </Col>
                

            </Row>
            <Row>
                <TableRegistroInventario
                registros = {registros}/>
            </Row>
            
            
        </Container>    
     );
}
 
export default ResumenInventario;