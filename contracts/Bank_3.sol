pragma solidity ^0.4.17;

contract Bank_3 {

  mapping(address => uint256 ) balances;
  
  function Bank_3() public payable {
    balances[msg.sender] = msg.value;
  }

  function saveAccount() public payable {
    balances[msg.sender] = balances[msg.sender] + msg.value;
  }

  function getBalance(address aAddress) public constant returns(uint256) {
    return balances[aAddress];
  }

}
