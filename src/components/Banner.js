import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/images/header-img.svg';

const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>
                    Welcome to my Portfolio
                </span>
                <h1>{`Hi I'm Ege`}<span className='wrap'>Full Stack Developer</span></h1>
                <p>Lorem ipsum dolor sit amet. Simply a dummy text of the printing dummy texts.</p>
                <button onCanPlay={() => console.log("connect")}>Let's connect. <ArrowRightCircle size={25} /></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt='Header Img' />
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;
