// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./access-control/auth.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Box {
    uint256 private _value;
    Auth private _auth;

    event ValueChanged(uint256 value);

   function initialize() public initializer {
        _auth = new Auth(msg.sender);
    }

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function store(uint256 value) public {
        require(_auth.isAdministrator(msg.sender), "Ownable: caller is not the owner");
         
        _value = value;
        emit ValueChanged(value);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }
}