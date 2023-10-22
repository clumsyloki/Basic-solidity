pragma solidity 0.8.19;
// SPDX-License-Identifier: MIT

contract Info {
    uint256[] public  list ;

    function set() public {
        list.push(block.timestamp);
    }

    function get() public view returns (uint256 [] memory) {
        return list;
    }
}