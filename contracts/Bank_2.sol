pragma solidity ^0.4.17;

contract Bank_2 {

  mapping(address => uint256 ) balances;
  
  function Bank_2() public payable {
    balances[msg.sender] = msg.value;
  }

  function saveAccount() public payable {
    balances[msg.sender] = balances[msg.sender] + msg.value;
  }

  function getBalance(address aAddress) public constant returns(uint256) {
    return balances[aAddress];
  }

}
