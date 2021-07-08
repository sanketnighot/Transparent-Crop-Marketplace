import React from 'react';
import MainNavigation from "../Common/Navigation/MainNavigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const BuyerDashboard = () => {
  return (
    <>
        <MainNavigation/>
			<Container fluid="true">
				<Row>
					<Col sm={2} style={{height:"705px",backgroundColor:"grey", overflowY:"scroll" }}>
						<center><br/>
						<AccountCircleIcon fontSize="large" style={{color:"white", fontSize:60}}/>	<br/>
						Address<br/>
						<Button variant="outlined" size="small"> Edit Profile </Button>
						<hr style={{width:"75%", size:10, color:"black"}}/>
						
						<Button  size="large" style={{width:"100%", textTransform:"capitalize"}}>Add Order</Button><br/>
						<Button  size="medium" style={{width:"100%"}}>View Previous Orders</Button><br/>
						<Button  size="medium" style={{width:"100%"}}>View Transaction History</Button><br/>
						<Button  size="medium" style={{width:"100%"}}>Open Seller Marketplace</Button>
						</center>
					</Col>
					<Col style={{height:"100%"}}>
						<center><h1>Buyer Dashboard</h1></center>
					</Col>
				</Row>
			</Container>
    </>   
  );
}

export default BuyerDashboard;