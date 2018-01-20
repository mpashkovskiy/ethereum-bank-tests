var Bank_0 = artifacts.require('Bank_0');

contract('Bank_0', function(accounts) {

  it('should send either to saveAccount', function() {
    var account_one = accounts[0];
    var amount = 10;
    var bank;
    
    return Bank_0
      .deployed()
      .then(function(instance) {
        bank = instance;
        return bank.saveAccount({from: account_one, value: amount});
      });
  });

});