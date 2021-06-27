// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract FarmerContract {

    struct FarmerDetail {
        uint256 id;
        address farmerAccount;
        string farmerName;
        string[] products;
        uint256[] productsId;
        uint256 location;
    }
    struct FarmersPoduct {
        uint pID;
        uint sellingPrice;
    }
    mapping(address=> FarmersPoduct[]) public FarmersProduct;
    mapping(uint256 => FarmerDetail) public Farmers; 
    
    modifier isfarmer(uint _id){
        require(Farmers[_id].farmerAccount == msg.sender);
        _;
    }
    
    modifier hasProduct(uint256 _id, uint256 _productId){
        for(uint i=0;i < Farmers[_id].productsId.length; i++){
        require(Farmers[_id].productsId[i] == _productId);
        }
        _;
    }
    
    function newFarmer(uint256 _id,address _farmerAccount, string memory _farmerName,string[] memory _products,uint256[] memory _productsId,uint256 _location) public {
        Farmers[_id] = FarmerDetail(_id,_farmerAccount,_farmerName,_products,_productsId,_location);
        
    }
    
    function removeFarmer(uint256 _id) internal isfarmer(_id) returns(bool){
        delete Farmers[_id];
        return true;
    } 
    
    function viewFarmer(uint256 _id)  public isfarmer(_id) view returns (
            uint256,
            address,
            string memory,
            string[] memory,
            uint256[] memory,
            uint256
        )
    {
        return (
            Farmers[_id].id,
            Farmers[_id].farmerAccount,
            Farmers[_id].farmerName,
            Farmers[_id].products,
            Farmers[_id].productsId,
            Farmers[_id].location
        );
    }
    
    function updateproduct(uint256 _id, string memory _product,uint256 _productId) internal{
        Farmers[_id].products.push(_product);
        Farmers[_id].productsId.push(_productId);
    }
    
}    
