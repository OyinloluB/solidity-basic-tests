const { expect } = require('chai');
const { ethers } = require("hardhat");

// unit test
describe('Box', function () {
    before(async function () {
        this.Box = await ethers.getContractFactory('Box');
    })

    beforeEach(async function () {
        this.box = await this.Box.deploy();
        await this.box.deployed();
    })

    it('retrieve returns a value previously stored', async function () {
        await this.box.store(42);

        expect((await this.box.retrieve()).toString()).to.equal('42');
    })
})

// automated test using openzeppelin helpers
// BN: Big Number support
// constants: Common constants, like the zero address and largest integers
// expectEvent: Assertions for emitted events
// expectRevert: Assertions for transactions that should fail
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const Box = artifacts.require('Box');

contract('Box', function ([ owner, other ]) {
  const value = new BN('42');

  beforeEach(async function () {
    this.box = await Box.new({ from: owner });
  });

  it('retrieve returns a value previously stored', async function () {
    await this.box.store(value, { from: owner });
    expect(await this.box.retrieve()).to.be.bignumber.equal(value);
  });

  it('store emits an event', async function () {
    const receipt = await this.box.store(value, { from: owner });

    expectEvent(receipt, 'ValueChanged', { value: value });
  });

  it('non owner cannot store a value', async function () {
    await expectRevert(
      this.box.store(value, { from: other }),
      'Ownable: caller is not the owner',
    );
  });
});