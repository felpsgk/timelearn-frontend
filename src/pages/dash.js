import React, { } from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import { getToday } from '../scripts/todayDate';
// import axios from 'axios';
import { useAuth, AuthCheck } from '../scripts/auth'; // Importe o módulo 'auth'
import Navbar from '../components/navbar';
// import '../App.css';
// async function handleLogout() {
//   try {
//     const response = await axios.get('http://localhost:3000/logout');
//     if (response.status === 200) {
//       //window.location.reload();
//     }
//   } catch (error) {
//     console.error('Erro durante o logout:', error);
//     // Lidar com erros de logout, se necessário
//   }
// }
const Dash = () => {
  const { userData, loading } = useAuth();
  const dataDeHoje = getToday();

  return (
    <Container fluid>
      <Row className=''>
        <Navbar />
      </Row>
      <Row>
        <AuthCheck userData={userData} loading={loading}>
          <Col className='p-1 text-center' >
            <Row>
              <CardGroup>
                <Col sm={{ span: 2, offset: 0 }}>
                  <Card >
                    <Card.Body>
                      {userData && (
                        <Card.Title>Bem-vindo, {userData.nome}!</Card.Title>
                      )}
                      <Card.Subtitle><hr></hr></Card.Subtitle>
                      <Card.Text>Você tem 0 agendas hoje</Card.Text>

                    </Card.Body>
                    <Card.Footer>
                      <Col>{dataDeHoje}</Col>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col sm={{ span: 8, offset: 0 }}>
                  <Card >
                    <Card.Body>
                      <Card.Title>titulo</Card.Title>
                      <Card.Subtitle>subtitulo</Card.Subtitle>
                      <Card.Text>texto card</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Col>Update Now</Col>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col sm={{ span: 2, offset: 0 }}>
                  <Card >
                    <Card.Body>
                      <Card.Title>titulo</Card.Title>
                      <Card.Subtitle>subtitulo</Card.Subtitle>
                      <Card.Text>texto card</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Col>aaa</Col>
                    </Card.Footer>
                  </Card>
                </Col>
              </CardGroup>
            </Row>
          </Col>
        </AuthCheck>
      </Row>
    </Container>

  );
};

export default Dash;