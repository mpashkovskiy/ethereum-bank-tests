var Bank_4 = artifacts.require('Bank_4');

contract('Bank_4', function() {

  it('should not allow to make recursive transactions', function() {
    var initialAmount = 1;
    var bank;
    
    // return Bank_4
    //   .deployed()
    //   .then(function(instance) {
    //     bank = instance;
    //     return bank.recursiveTransfer(initialAmount);
    //   })
    //   .then(function(tx) {
    //     return bank.getBalance.call(bank.address);
    //   })
    //   .then(function(balance) {
    //     assert.equal(balance.toNumber(), initialAmount);
    //   });
  });

});