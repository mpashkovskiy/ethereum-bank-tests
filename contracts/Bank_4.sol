pragma solidity ^0.4.17;

contract Bank_4 {

  mapping(address => uint256 ) balances;
  
  function Bank_4() public payable {
    balances[msg.sender] = msg.value;
  }

  function saveAccount() public payable {
    balances[msg.sender] = balances[msg.sender] + msg.value;
  }

  function recursiveTransfer(uint amount) public {
    // TODO: call saveAccount() and transfer amount of either
  }

  function getBalance(address aAddress) public constant returns(uint256) {
    return balances[aAddress];
  }

}
