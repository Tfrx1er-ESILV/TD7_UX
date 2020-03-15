pragma solidity ^0.6.0;

import "./ERC721.sol";
contract Minter is ERC721
{
    function createToken (uint256 tokenID) payable public
    {
        require(msg.value >= 0.1 ether);
        _safeMint(msg.sender, tokenID)
    }
}