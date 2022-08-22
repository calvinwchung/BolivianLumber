import MoradoImg from '../../app/assets/morado.png'
import { Col, Row, Container } from 'reactstrap';
import './WoodList.css';

const Morado = () => {
    return (
        <div className="woodImages">
            <img className='woodImg' src={MoradoImg} alt='morado lumber' />
            <Container>
            <Row className='align-items-center'>
                </Row>
                <Row className='row-content formBody woodList'>
                    <Col xs='7' className=''>
                        <h2 className='tableHeader1'>SPECIES INFORMATION</h2>
                        <hr/>
                    </Col>
                    <Col md='7' className=''>
                        <Row className='wood1'>
                            <Col className='woodName' sm='2' >Description</Col>
                            <Col>Morado, which is also commonly referred to as Bolivian Rosewood, is a wildly beautiful species. The color of its heartwood is highly varied with shades of yellow, brown, red, orange, & violet intermixed with occasional black striping.</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Other Names</Col>
                            <Col>Caviuna, pau ferro, capote, siete cueros, cascarón, chiche, tuseque, jacarandá and jacarandá pardo</Col>
                            
                        </Row>
                        <Row className='wood1'>
                            <Col className='woodName' sm='2' >Origin</Col>
                            <Col>Bolivia and Brazil, South-America</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Density</Col>
                            <Col>The grain is straight to irregular with a fine to coarse texture and a medium to high luster. Density: It is a fairly hard wood. Average reported specific gravity varies from 0.65 to 0.75(ovendry weight/green volume), equal to an air-dried weight of 49 to 57 pcf.</Col>
                            
                        </Row>
                        <Row className='wood1'>
                            <Col className='woodName' sm='2' >Workability</Col>
                            <Col>Morado is considered overall to be of fair workability, as it can blunt the cutting edges of tools, and any irregular grain has a tendency to tearout during machining operations. Applications: Flooring, decorative veneers, specialty items, cabinet work.</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Durability</Col>
                            <Col>It is rated as a fairly durable wood. The heartwood is highly resistant to attack by decay fungi. Uses: Morado is primarily used as an alternative to Brazilian rosewood although it is also recognized for its own unique characteristics.</Col>
                            
                        </Row>
                    </Col>
                </Row>

        </Container>
        </div>
    );
}

export default Morado;