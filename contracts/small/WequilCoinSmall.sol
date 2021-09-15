// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./PaymentSplitter.sol";
import "./ERC20.sol";

contract WEquilCoinSmall is ERC20, PaymentSplitter {
    constructor(address[] memory payees, uint256[] memory shares_) 
        ERC20(unicode"WEquilCoin 😃", "WEQC") 
        PaymentSplitter(payees, shares_) {
            uint256 dec = 10 ** decimals();
            // 40 million created and given to the owner
            _mint(msg.sender, 40_000_000 * dec);
            // 20 million for public usability
            _mint(address(this), 20_000_000 * dec);
    }
    
    // So we need to create a method to sell this token.
    function buyCoin() external payable virtual {
        // Here, we sell 1000 token for 1 ETH. The _transfer method and the balanceOf method come from the ERC20 library
        uint256 token = msg.value * 1000;
        assert (balanceOf(address(this)) >= token);
        emit PaymentReceived(msg.sender, msg.value);
        _transfer(address(this),msg.sender, token);
    }
    
}