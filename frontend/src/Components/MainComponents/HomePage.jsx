import React from 'react';
import MainNavigation from "../Common/Navigation/MainNavigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import nature from '../../Images/nature.svg';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
        <MainNavigation/>
        <Container style={{marginTop:"5%", alignitems:"center"}}>
            <Row>
                <Col sm={7}>
                <div style={{verticalAlign: "middle", height:"100%", width:"100%" }}><br/><br/>
                    <b><h1 style={{color:"#1976d2", weight:"bolder"}}>agroCHAIN</h1></b> <br/>
                    <h4 style={{color:"#2196f3"}}> A Decentralized Marketplace for Agriculural Products </h4> <br/><br/>
                    <center><span style={{color:"#64b5f6", weight:"italic", fontSize:"150%"}}><em>“Transparent crop marketplace to track agreements for selling crops to vendors and facilitate the purchase of crops without middlemen.”</em></span></center>
                    <br/><br/>
                    <center>
                        <Link to="/buyerdashboard"><Button variant="primary" size="lg">Buy Products</Button></Link> &nbsp; &nbsp;
                        <Link to="/sellerdashboard"><Button variant="outline-primary" size="lg">Sell Products</Button></Link>
                    </center>
                    <br/><br/>
                    <Button variant="link" size="lg">Learn More</Button>
                </div>
                </Col>
                <Col sm={5} xs={{ order: 1 }}>
                <Image
                    style={{marginLeft:"10%"}}
                    src={nature}
                    alt="Nature"
                    rounded
                    fluid
                />
                </Col>
            </Row>

        </Container>
    </>    
  );
}

export default HomePage;