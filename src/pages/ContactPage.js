import { Container, Col, Row } from 'reactstrap';
import ContactForm from '../components/ContactForm';
import Calvin from '../app/assets/calvin.png';
import Jason from '../app/assets/jason.png';

const ContactPage = () => {
    return (
        <Container>
            <Row className='row-content align-items-center forms'>
                
            </Row>
            <Row className='row-content formBody'>
                <Col xs='7' className='formBody'>
                    <h2 className='contactText'>CONTACT US!</h2>
                  
                    <hr/>
                </Col>
                <Col md='7' className='formBody'>
                    <ContactForm />
                </Col>
            </Row>
            <h5 className='pi'>Email: sales@bolivianlumber.org</h5>
                    <div className='pi'>
                        <div className='jason'>
                            <img src={Jason} alt='jason cho' className='jasonPic'/>
                            <div className='position'>
                                <h5>Jason Cho: </h5>
                                <p>Head of Sales/Operations</p>
                                <p>267.475.1307</p>
                            </div>
                        </div>
                        <div className='calvin'>
                            <img src={Calvin} alt='calvin chung' className='calvinPic'/>
                            <div className='position'>
                                <h5>Calvin Chung: </h5>
                                <p>Head of Finance/Tech</p>
                                <p>267.818.0847</p>
                            </div>
                        </div>
                    </div>
            
        </Container>
    )
};

export default ContactPage;