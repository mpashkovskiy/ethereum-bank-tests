var Bank_2 = artifacts.require("./Bank_2.sol");

module.exports = function(deployer, accounts) {
  deployer.deploy(Bank_2, {value: 1});
};
