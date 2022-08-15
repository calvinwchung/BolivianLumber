import TararaImg from '../app/assets/tarara.png';
import { Col, Row, Container } from 'reactstrap';
import '../components/WoodList.css';

const Tarara = () => {
    return (
        <div className="woodImages">
            <img className='woodImg' src={TararaImg} alt='tarara lumber' />
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
                            <Col>Tarara wood is a colorful exotic located in the forests of Brazil and Bolivia. Its heartwood color can be bright yellow to orange with long distinctive streaks of purple, red, and black.</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Other Names</Col>
                            <Col>Centrolobium microchaete, Canary Wood</Col>
                            
                        </Row>
                        <Row className='wood1'>
                            <Col className='woodName' sm='2' >Origin</Col>
                            <Col>Bolivia and Brazil, South-America</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Density</Col>
                            <Col>As Canarywood ages the colors carmelize slowly while losing none of the beautiful wood figure, eventually yielding a more figured teak-like result. Tarara Amarilla is without question one of the most beautiful woods on the planet.</Col>
                            
                        </Row>
                        <Row className='wood1'>
                            <Col className='woodName' sm='2' >Workability</Col>
                            <Col>Tarara is durable and hard, but also rated as easy to work with, which is why, combined with its inherent attractiveness, it is often a choice for furniture makers. It's grain is irregular and interlocked, and has a lustrous surface with a medium and uniform texture.</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Durability</Col>
                            <Col>Janka hardness is 2000 pounds of force. . Drying & shrinkage: It dries at a moderate rate with very little or no warp and shrinkage. Average reported shrinkage values (green to ovendry) are 2.4% radial, 5.6% tangential and 8.4% volumetric. The wood is dimensionally stable.</Col>
                            
                        </Row>
                    </Col>
                </Row>

        </Container>
        </div>
    );
}

export default Tarara;