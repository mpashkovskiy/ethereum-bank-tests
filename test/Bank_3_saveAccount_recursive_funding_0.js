var Bank_3 = artifacts.require('Bank_3');

contract('Bank_3', function() {

  it('should allow to make recursive transactions', function() {
    var initialAmount = 1;
    var bank;
    
    return Bank_3
      .deployed()
      .then(function(instance) {
        bank = instance;
        return bank.saveAccount({from: bank.address, value: initialAmount});
      });
  });

});