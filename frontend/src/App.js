import BuyersNavigationBar from "./Common/BuyerNavbar";
import FarmersNavigationBar from "./Common/FarmerNavbar";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
      <BuyersNavigationBar/>
      <Jumbotron>
        <h1>Welcome to Blockchain Agro Marketplace.</h1>
        <p>
          A simple, transparent marketplace for buying/selling agricultural crops among different farmers and buyers 
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>    
  );
}

export default App;