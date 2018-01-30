var Bank_Final = artifacts.require('Bank_Final');

contract('Bank_Final', function(accounts) {

  it('should not allow to make recursive transactions', function() {
    var account_one = accounts[0];
    var initialAmount = 1;
    var bank;
    
    return Bank_Final
      .deployed()
      .then(function(instance) {
        bank = instance;
        return bank.getBalance.call(account_one);
      })
      .then(function(balance) {
        assert.equal(balance.toNumber(), initialAmount);
        return bank.recursiveTransfer(initialAmount);
      })
      .then(function(tx) {
        return bank.getBalance.call(bank.address);
      })
      .then(function(balance) {
        assert.equal(balance.toNumber(), 0);
      });
  });

});