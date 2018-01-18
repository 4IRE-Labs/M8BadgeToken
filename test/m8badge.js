var M8BadgeToken = artifacts.require("./M8BadgeToken.sol");

contract('M8BadgeToken', function (accounts) {
    M8BadgeToken.deployed().then(instance => {
        return instance.ownerOf(0);
    }).then( address => {
        assertEqual(address, accounts[0], "Owner of 0 (Genesis) badge should be the contract owner.")
    });
});