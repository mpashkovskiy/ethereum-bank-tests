pragma solidity ^0.4.17;

contract Bank_Final_Simple {

  mapping(address => uint256) balances;
  
  function Bank_Final() public { }

  function saveAccount() public payable {
    balances[msg.sender] = balances[msg.sender] + msg.value;
  }

}
