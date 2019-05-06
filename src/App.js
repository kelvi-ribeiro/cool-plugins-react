import React, { Component } from "react";
import { Button, Alert, ThemeProvider, Container, Row, Col, Image } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Buttons</h1>
        <ThemeProvider prefixes={{ btn: 'my-btn' }}>
          <Button variant="primary">My Button</Button>
        </ThemeProvider>{' '}
        <Button bsPrefix="super-btn" variant="primary">
          Super button
        </Button>
        <h1>Alertas</h1>
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
        </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
        </p>
        </Alert>
        <Container>
          <h1>Imagens</h1>
          <Row>
            <Col xs={6} md={4}>
              <Image style={style.img} src="https://cdn.ome.lt/_1KF0rLSFPxVwCR-u5XA6Mc-k4E=/1200x630/smart/extras/conteudos/goku3.jpg" rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image style={style.img} src="https://www.whats-on-netflix.com/wp-content/uploads/2018/09/naruto-on-netflix.jpg" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image style={style.img} src="https://i.pinimg.com/originals/bf/94/f2/bf94f27a6835f873c2ecc770ff9e9897.jpg" thumbnail />
            </Col>
          </Row>
        </Container>;
      </React.Fragment>
    )
  }
}

const style =  {
  img: {
    maxHeight:'50vh', 
    maxWidth:'50vh'
  }
}