// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract MainContract {
    
    // Address of one who deploys contract
    address public contractCreator;
    constructor() {
        contractCreator = msg.sender;
    }
    
    // Struct for transaction
    struct Transaction {
        uint transactionId;
        uint productId;
        uint buyerId;
        uint farmerId;
        uint price;
        uint transactionTimestamp;
        Status transactionStatus;
        
    }
    
    // Enum for status of transaction
    enum Status{ PENDING, SUCCESSFUL, FAILED }
    enum Signature{NotSigned, SignedByFarmer, SignedByBuyer}
        
    // Mapping of all Transactions
    mapping (uint => Transaction) Transactions;
        
    // Initializing a transaction
    function initializeTransaction(uint _transactionId, uint _productId, uint _buyerId, uint _farmerId, uint _price) external returns(Transaction memory _transaction){
        Transactions[_transactionId] = Transaction(_transactionId, _productId, _buyerId, _farmerId, _price, block.timestamp, Status.PENDING);
        return Transactions[_transactionId];
    }
    
    // Fetching the previous transactions
    function viewTransaction(uint _transactionId) external view returns(Transaction memory _transaction){
        return Transactions[_transactionId];
    }
    
    // Validating the transaction
    function validateTransaction(uint _transactionId, Status _transactionAction) external returns(Transaction memory _transaction){
        Transactions[_transactionId].transactionStatus = _transactionAction;
        return Transactions[_transactionId];
    }
}
