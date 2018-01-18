var M8BadgeToken = artifacts.require("./M8BadgeToken.sol");

contract('M8BadgeToken', function (accounts) {
    M8BadgeToken.deployed().then(instance => { return instance.ownerOf(accounts[0]); }).then( value => { return value.toNumber() });
});