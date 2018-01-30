var Bank_Final = artifacts.require("./Bank_Final.sol");

module.exports = function(deployer, accounts) {
  deployer.deploy(Bank_Final, {value: 1});
};
