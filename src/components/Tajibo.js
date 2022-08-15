import TajiboImg from '../app/assets/tajibo.png';
import { Col, Row, Container } from 'reactstrap';
import '../components/WoodList.css';

const Tajibo = () => {
    return (
        <div className="woodImages">
            <img className='woodImg' src={TajiboImg} alt='tajibo lumber' />
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
                            <Col>Pronounced “e-pay”, Ipe is widely recognized as one of the hardest and most durable timber species in the world. Its wide color variation provides a striking appearance on decking, siding and other uses. It is naturally durable and resistant to rot and decay, making it an excellent choice for exterior applications.</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Other Names</Col>
                            <Col>Ipe, Brazilian Walnut, Lapacho, Pau Lope™</Col>
                            
                        </Row>
                        <Row className='wood1'>
                            <Col className='woodName' sm='2' >Origin</Col>
                            <Col>Brazil, tropical South-America</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Density</Col>
                            <Col>Janka scale hardness is 3684, making it extremely hard and durable</Col>
                            
                        </Row>
                        <Row className='wood1'>
                            <Col className='woodName' sm='2' >Workability</Col>
                            <Col>Ipe can be difficult to work with, without the proper tooling. It can have a blunting effect on cutting edges, so pre-drilling for screws is recommended. Carbide-tipped saw blades should be used, making it much easier to cut. Ipe comes in long lengths, but planks do not bend well. It sands very smoothly with little or no splintering. Boards can be straight-line ripped and the edges can be eased, or rounded, using carbide tooling. Biscuit joiners work well for grooving hidden fastener systems. Ipe is said to glue well with certain adhesives and it is advised to use caution if using a nail gun for fastening.</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Durability</Col>
                            <Col>Ipe can be used without preservatives or additional treatments. Ipe is expected to last 25+ years with little to no degradation from rot, decay or termite infestation</Col>
                            
                        </Row>
                    </Col>
                </Row>

        </Container>
        </div>
    );
}

export default Tajibo;