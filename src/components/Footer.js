// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>

          <Col md={4} className="mb-4">
            <h5>John Doe</h5>
            <p className='dev'>40 rue Laure Diebold</p>
            <p className='dev'>690009 Lyon, France</p>
            <p className='dev'>10 20 30 40 50</p>
            <p className='dev'>john.doe@gmail.com</p>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Liens Utiles</h5>
            <ul className="list-unstyled">
              <li className='footerlink'><a href="#home" className="text-white">Home</a></li>
              <li className='footerlink'><a href="#services" className="text-white">Services</a></li>
              <li className='footerlink'><a href="#portfolio" className="text-white">portfolio</a></li>
              <li className='footerlink'><a href="#contact" className="text-white">Me contacter</a></li>
              <li className='footerlink'><a href="#mentions légales" className="text-white">Mentions légales</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li className='footerlink'><a href="#Fresh Food" className="text-white">Fresh Food</a></li>
              <li className='footerlink'><a href="#Restaurant Akira" className="text-white">Restaurant Akira</a></li>
              <li className='footerlink'><a href="#Espace bien-etre" className="text-white">Espace bien-etre</a></li>
              <li className='footerlink'><a href="#SEO" className="text-white">SEO</a></li>
              <li className='footerlink'><a href="#Création d'une API" className="text-white">Création d'une API</a></li>
              <li className='footerlink'><a href="#Maquette d'un site" className="text-white">Maquette d'un site</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      </div>
    </footer>
  );
}

export default Footer;
