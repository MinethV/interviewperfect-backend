import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import backgroundImage from "../images/background.png";
import LandingImg from '../images/crudapp.png';

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="min-vh-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Row className="align-items-center">
                <Col md={6} className="d-flex align-items-center">
                    <img src={LandingImg} className="img-fluid mt-5 ms-5" alt="CRUD App" style={{width: '85%', height: 'auto'}} />
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center me-5 me-md-0 ">
                    <Card className="p-4 box rounded-5 col-lg-5 col-md-6 offset-md-3 col-sm-12 h-500 d-flex flex-column justify-content-center align-items-center" style={{ height: '500px', width: '500px', background: 'rgba(255,255,255,0.5)', '-webkit-backdrop-filter': 'blur(10px)', 'backdrop-filter': 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '45px', marginRight: '250px' }}>
                        <h1 className="lh-1 heading text-center  " style={{color: '#434445' , fontWeight: 'bold'}}>Database<br />
                            Management<br />
                            System</h1><br /><br />
                            <p className="fs-5 fw-light text-center" style={{color: '#616364',fontWeight: 'bold'}}>You can Create, Update, Search and <br />
                            Delete questions in this application<br />
                        </p><br /><br />
                        <Button variant="primary" style={{backgroundColor: '#3288FF', ':hover': {backgroundColor: '#003366'}, borderRadius: '5rem', padding: '10px 30px', fontSize: '1.5rem'}} onClick={() => navigate('/read')}>Visit the DBMS</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
