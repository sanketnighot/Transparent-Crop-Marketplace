// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Products {
    
    // Variable: Owner
    address public owner;
    
    // Variable: product Count
    uint productCount;
    
    // Event: 'State' with value 'ForSale'
    enum State { ForSale, Sold }
    
    // Struct: Product. name, id, MSP, sellingprice, state, seller
    struct Product {
        string pName;
        uint pID;
        uint MSP;
        State  state;
    }
    
    mapping(uint => Product) products;
    
    // Events
    event ForSale(uint skuCount);
    event Sold(uint sku);
    
    // Modifier: Only Owner see if msg.sender == owner of the contract
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    // Define a modifier that verifies that the product is available
     modifier isProduct(uint _pID) {
        require(products[_pID].pID ==  _pID);
        _;
    }
    
    // Define a modifier that checks if an product.state of a pID is ForSale
    modifier forSale(uint _pID) {
        require(products[_pID].state == State.ForSale);
        _;
    }
    
      // Define a modifier that checks if an product.state of a pID is Sold
    modifier sold(uint _pID) {
        require(products[_pID].state == State.Sold);
        _;
    }
    constructor()  {
        owner = msg.sender;
        productCount = 0;
    }
    
    
    function addProduct(string memory _pName, uint _MSP, uint _sellingPrice) onlyOwner public {
        // Increment product
        productCount = productCount + 1;
        
        // Emit the appropriate event
        emit ForSale(productCount);
        
        // Add the new item into inventory and mark it for sale
        products[productCount] = Product({pName: _pName, pID: productCount, MSP: _MSP, sellingPrice: _sellingPrice, state: State.ForSale, seller: msg.sender});
    }
    
     function removeProduct(uint _pID) external onlyOwner {
         
         
        
    }
    
    function updateProduct() external onlyOwner {
        
    }
    
    // fetch the price from external source at the time of execution
    function setMSP() onlyOwner external {
        
    }
    
    function viewProduct(uint _pID) public view returns (string memory pName, uint pID, uint MSP, uint sellingPrice, string memory stateIs, address seller ) {
        uint state;
        pName = products[_pID].pName;
        pID = products[_pID].pID;
        MSP = products[MSP].MSP;
        sellingPrice = products[_pID].sellingPrice;
        state = uint(products[_pID].state);

        if( state == 0) {
            stateIs = "For Sale";
        }

        if( state == 1) {
            stateIs = "Sold";
        }

        seller = products[_pID].seller;
    }
}
