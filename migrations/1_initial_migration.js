const Migrations = artifacts.require("Migrations");
const ERC721 = artifacts.require("ERC721");
const Minter = artifacts.require("Minter");
module.exports = function(deployer) {
  //deployer.deploy(Migrations);
  deployer.deploy(Minter);
};
