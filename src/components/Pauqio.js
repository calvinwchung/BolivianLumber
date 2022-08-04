import PauqioImg from '../app/assets/pauqio.png';
import { Col, Row, Container } from 'reactstrap';

const Pauqio = () => {
    return (
        <div className="woodImages">
            <img className='woodImg' src={PauqioImg} alt='pauqio lumber' />
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
                            <Col>Jatoba is best knon as “Brazilian Cherry” in the hardwood flooring industry. Other uses include handles and other applications where good shock resistance is needed, steam-bent parts, flooring, turnery, furniture and cabinet work, railroad crossties tree-nails, gear cogs, wheel rims, and other specialty items.</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Other Names</Col>
                            <Col>Jatoba, Brazilian Cherry</Col>
                            
                        </Row>
                        <Row className='wood1'>
                            <Col className='woodName' sm='2' >Origin</Col>
                            <Col>Brazil, Peru</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Density</Col>
                            <Col>Janka scale hardness ranges from 2,350 to 3,290 for dry material</Col>
                            
                        </Row>
                        <Row className='wood1'>
                            <Col className='woodName' sm='2' >Workability</Col>
                            <Col>Jatoba is moderately difficult to saw and machine largely because of its high density, but except in planing it can be machined to a smooth surface. The wood is somewhat difficult to plane because of the interlocked grain. It is easy to glue and finish satisfactorily; steam-bending properties comparable to white oak</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Durability</Col>
                            <Col>Very resistant to brown-rot and white-rot fungi. Heartwood is also rated very resistant to dry-wood termites; little resistance to marine borers</Col>
                            
                        </Row>
                    </Col>
                </Row>

        </Container>
        </div>
    );
}

export default Pauqio;