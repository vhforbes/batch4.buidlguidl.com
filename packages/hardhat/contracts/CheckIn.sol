// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface BatchRegistryInterface {
	function checkIn() external;
}

contract CheckIn is Ownable {
	address public BatchRegistryAddress;
	BatchRegistryInterface public batchRegistryContract;

	constructor(address _batchRegistryAddress, address _owner) {
		BatchRegistryAddress = _batchRegistryAddress;
		batchRegistryContract = BatchRegistryInterface(_batchRegistryAddress);
		super.transferOwnership(_owner);
	}

	function checkIn() public onlyOwner {
		batchRegistryContract.checkIn();
	}
}
