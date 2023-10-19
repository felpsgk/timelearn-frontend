import React, { } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { useAuth, AuthCheck } from '../scripts/auth'; // Importe o módulo 'auth'
import Navbar from '../components/navbar';

function App() {
  const { userData, loading } = useAuth();

  return (
    <Container fluid>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <Container>
          <Row>
            <AuthCheck userData={userData} loading={loading}>
              {userData && (
                <Col>teste dash.</Col>
              )}
            </AuthCheck>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default App;