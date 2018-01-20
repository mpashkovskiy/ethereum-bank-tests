var Bank_3 = artifacts.require("./Bank_3.sol");

module.exports = function(deployer, accounts) {
  deployer.deploy(Bank_3, {value: 1});
};
