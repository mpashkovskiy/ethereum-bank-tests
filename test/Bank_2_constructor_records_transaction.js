var Bank_2 = artifacts.require('Bank_2');

contract('Bank_2', function(accounts) {

  it('should record contract deployment transactions', function() {
    var account_one = accounts[0];
    var initialAmount = 1;
    var bank;
    
    return Bank_2
      .deployed()
      .then(function(instance) {
        bank = instance;
        return bank.getBalance.call(account_one);
      })
      .then(function(balance) {
        assert.equal(balance.toNumber(), initialAmount);
      });
  });

});