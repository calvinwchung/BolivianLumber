import CutaImg from '../app/assets/cuta.png';
import { Col, Row, Container } from 'reactstrap';
import '../components/WoodList.css';

const Cuta = () => {
    return (
        <div className="woodImages">
            <img className='woodImg' src={CutaImg} alt='cuta lumber' />
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
                            <Col>The heartwood is often described as lemon yellow and sometimes have a tinge of brown. The sapwood is also yellowish but may be nearly white. Grain: Straight grain and homogenous, with slightly interlocked grain.</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Other Names</Col>
                            <Col>San Domingo Boxwood, Phyllostylon Rhamnoides</Col>
                            
                        </Row>
                        <Row className='wood1'>
                            <Col className='woodName' sm='2' >Origin</Col>
                            <Col>Southern Brazil and Cuba</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Density</Col>
                            <Col>The density at a moisture content of u = 12% is specified about 0.90 t/m3 . The wood can be dried only slowly, but then without cracks.</Col>
                            
                        </Row>
                        <Row className='wood1'>
                            <Col className='woodName' sm='2' >Workability</Col>
                            <Col>Easy to work with both hand and machine tools. Also has excellent finishing qualities.</Col>
                            
                        </Row>
                        <Row className='wood'>
                            <Col className='woodName' sm='2' >Durability</Col>
                            <Col>Fine pores, scattered and numerous. Texture is fine and uniform. This species is very high density, resulting in a very hard wood.</Col>
                            
                        </Row>
                    </Col>
                </Row>

        </Container>
        </div>
    );
}

export default Cuta;