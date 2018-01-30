pragma solidity ^0.4.17;

contract Bank_Final {

  address bank;
  mapping(address => uint256) balances;
  
  function Bank_Final() public payable {
    balances[msg.sender] = msg.value;
    bank = this;
  }

  function saveAccount() public payable {
    if (msg.sender != bank) {
      balances[msg.sender] = balances[msg.sender] + msg.value;
    }
  }

  function recursiveTransfer(uint amount) public {
    Bank_Final(bank).saveAccount.value(amount)();
  }

  function getBalance(address aAddress) public constant returns(uint256) {
    return balances[aAddress];
  }

}
