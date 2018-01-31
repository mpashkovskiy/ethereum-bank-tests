pragma solidity ^0.4.17;

contract Bank_4 {

  address bank;
  mapping(address => uint256) balances;
  
  function Bank_4() public payable {
    balances[msg.sender] = msg.value;
    bank = this;
  }

  function saveAccount() public payable {
    balances[msg.sender] = balances[msg.sender] + msg.value;
  }

  function recursiveTransfer(uint amount) public {
    this.saveAccount.value(amount)();
  }

  function getBalance(address aAddress) public constant returns(uint256) {
    return balances[aAddress];
  }

}
