var Bank_3 = artifacts.require('Bank_3');

contract('Bank_3', function(accounts) {

  it('should not allow to make recursive transactions', function() {
    var account_one = accounts[0];
    var account_two = accounts[1];
    var initialAmount = 1;
    var amount = 10;
    var bank;
    
    return Bank_3
      .deployed()
      .then(function(instance) {
        bank = instance;
        // TODO: transfer funds recursively
      });
  });

});