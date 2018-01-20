var Bank_4 = artifacts.require("./Bank_4.sol");

module.exports = function(deployer, accounts) {
  deployer.deploy(Bank_4, {value: 1});
};
