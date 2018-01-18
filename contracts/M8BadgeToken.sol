pragma solidity ^0.4.17;
import "./M8BadgeOwnership.sol";
import 'node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol';

contract M8BadgeToken is M8BadgeOwnership, Ownable {    

    function M8BadgeToken() public {
        create(0, "Initialization Badge", msg.sender);
    }

    function create(uint256 _donationTransactionId, string _name, address _owner ) onlyOwner public returns (uint) {
        return _createBadge(_donationTransactionId, _name, _owner);
    }
}