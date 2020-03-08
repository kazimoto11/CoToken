const Co = artifacts.require("./Co.sol");

module.exports = function(deployer) {
  deployer.deploy(Co);
};
