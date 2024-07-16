// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "hardhat/console.sol";

interface IContract {
    function attempt() external;
}

contract EmitWinner {

    function checkwinner(address winner) external {
        IContract(winner).attempt();
    }
}
