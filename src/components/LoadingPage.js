import {Col, Container, Row} from 'react-bootstrap';


function LoadingPage() {
    return (
        <Container>
            <Row>
                <Col md={12} className="d-flex justify-content-center">
                <img src={require('../assets/loadingGIF.gif')} className="" alt="Loading..."/>
                </Col>
            </Row>
        </Container>  
    );
}

export default LoadingPage;