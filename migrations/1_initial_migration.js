const Migrations = artifacts.require("Migrations");
const ERC721 = artifacts.require("ERC721");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ERC721);
};
