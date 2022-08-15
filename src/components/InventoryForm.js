import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../components/InventoryForm.css';

const InventoryForm = () => {
    return (
        <Container>
            <Row className='align-items-center'>
                </Row>
                <Row className='row-content formBody woodList'>
                    <Col xs='7' className=''>
                        <h2 className='tableHeader1'>BOLIVIAN SPECIES</h2>
                        <hr/>
                    </Col>
                    <Col md='7' className=''>
                        <Row className='tableHeader'>
                            <Col>Trade Name</Col>
                            <Col>Scientific Name</Col>
                            <Col>Price/bdft</Col>
                        </Row>
                        <Row className='wood'>
                            <Col>
                                <Link to='/tajibo'>Tajibo</Link>
                            </Col>
                            <Col>Tabebuia impetiginosa</Col>
                            <Col>$10.40</Col>
                        </Row>
                        <Row className='wood1'>
                            <Col>
                                <Link to='/morado'>Morado</Link>
                            </Col>
                            <Col>Machaerium scleroxylon</Col>
                            <Col>$19.20</Col>
                        </Row>
                        <Row className='wood'>
                            <Col>
                                <Link to='/tarara'>Tarara</Link>
                            </Col>
                            <Col>Centrolobium microchaete</Col>
                            <Col>$6.40</Col>
                        </Row>
                        <Row className='wood1'>
                            <Col>
                                <Link to='/pauqio'>Pauqio</Link>
                            </Col>
                            <Col>Hymenaea courbaril</Col>
                            <Col>$6.40</Col>
                        </Row>
                        <Row className='wood'>
                            <Col>
                                <Link to='/cuta'>Cuta</Link>
                            </Col>
                            <Col>Phyllostylon rhamnoides</Col>
                            <Col>$4.80</Col>
                        </Row>
                    </Col>
                </Row>

        </Container>
    );
}

export default InventoryForm;