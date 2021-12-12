
const { ethers } = require("hardhat");
const { solidity } = require("ethereum-waffle");
const { expect } = require("chai");

describe('OlySaleNew', () => {

    let
        Treasury,
        treasury,
        Trader, 
        trader,
        OLY,
        oly,
        MIM,
        mim,
        Sale,
        sale,
        deployer,
        addr1

    beforeEach(async () => {
        [deployer, addr1] = await ethers.getSigners();

        OLY = await ethers.getContractFactory('AthenaERC20TOken');
        oly = await OLY.deploy();

        MIM = await ethers.getContractFactory('MIM');
        mim = await MIM.deploy(9);

        Treasury = await ethers.getContractFactory('MockTreasury');
        treasury = await Treasury.deploy();

        Sale = await ethers.getContractFactory('OlySaleNew');
        sale = await Sale.deploy();

        Trader = await ethers.getContractFactory('UniV2CompatTrader');
        trader = await Trader.deploy();
    });

    describe('setTreasury()', () => {

        it('should let the owner set the treasury address', async () => {
            await sale.setTreasury(treasury.address);
        });

        it('should not let the owner set the treasury if it has already been set', async () => {
            await sale.setTreasury(treasury.address);
            await expect(sale.setTreasury(deployer.address)).to.be.revertedWith('');
        });

        it('should NOT let a non owner set the treasury address', async () => {
            await expect(sale.connect(addr1).setTreasury(treasury.address)).to.be.revertedWith('');
        });

        it('should NOT let a non owner set the treasury if it has already been set', async () => {
            await sale.setTreasury(treasury.address);
            await expect(sale.connect(addr1).setTreasury(deployer.address)).to.be.revertedWith('');
        });
    });

    describe('listToken()', () => {

        it('should allow to list OLY as token to sell', async () => {
            await sale.listToken(oly.address, mim.address, trader.address, deployer.address, deployer.address);
        });

        it('should allow to list MIM as token to sell', async () => {
            await sale.listToken(mim.address, oly.address, trader.address, deployer.address, deployer.address);
        });

        it('should NOT allow non owner address to call function', async () => {
            await expect(sale.connect(addr1).listToken(mim.address, oly.address, trader.address, deployer.address, deployer.address))
            .to.be.revertedWith('');
        });
    });

    describe('executeEpochSale()', () => {
        it('function call should work', async () => {
            await sale.executeEpochSale( oly.address, 10000000, 1000000000, 1, 2, 3);
        });
        
    });


});