// @dev. This script will deploy this V1.1 of Skadi. It will deploy the whole ecosystem except for the LP tokens and their bonds. 
// This should be enough of a test environment to learn about and test implementations with the Skadi as of V1.1.
// Not that the every instance of the Treasury's function 'valueOf' has been changed to 'valueOfToken'... 
// This solidity function was conflicting w js object property name

const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);

    // Initial staking index
    const initialIndex = '7675210820';

    // First block epoch occurs
    const firstEpochBlock = '8961000';

    // What epoch will be first epoch
    const firstEpochNumber = '338';

    // How many blocks are in each epoch
    const epochLengthInBlocks = '2200';

    // Initial reward rate for epoch
    const initialRewardRate = '3000';

    // Ethereum 0 address, used when toggling changes in treasury
    const zeroAddress = '0x0000000000000000000000000000000000000000';

    // Large number for approval for wAvax and MIM
    const largeApproval = '100000000000000000000000000000000';

    // Initial mint for wAvax and MIM (10,000,000)
    const initialMint = '10000000000000000000000000';

    // MIM bond BCV
    const mimBondBCV = '369';

    // wAvax bond BCV
    const wavaxBondBCV = '690';

    // Bond vesting length in blocks. 33110 ~ 5 days
    const bondVestingLength = '33110';

    // Min bond price
    const minBondPrice = '50000';

    // Max bond payout
    const maxBondPayout = '50'

    // DAO fee for bond
    const bondFee = '10000';

    // Max debt bond can take on
    const maxBondDebt = '1000000000000000';

    // Initial Bond debt
    const intialBondDebt = '0';

    // AVAX/USD price feed address
    const avaxUsdPriceFeedAddress = '0x5498BB86BC934c8D34FDA08E81D444153d0D06aD';

    // ATN-MIM lp token address
    const atnMimLpTokenAddress = '0x4aEAa4C4c82E0c6511B12a9BC8881E97133F3b4b';

    // ATN-AVAX lp token address
    const atnAvaxLpTokenAddress = '0x4185CDBd8A32eFE1A753950c5B4C74AE4899b11f';

    // WAVAX address
    const wavaxAddress = '0xd00ae08403b9bbb9124bb305c09058e32c39a48c';

    // // Deploy DAO
    // const DAO = await ethers.getContractFactory('MultiSigWalletWithDailyLimit');
    // const dao = await DAO.deploy([deployer.address], 1, 0);
    // console.log("dao deployed on ", dao.address);

    // // Deploy ATN
    // const ATN = await ethers.getContractFactory('AthenaERC20Token');
    // const atn = await ATN.deploy();
    // console.log("atn deployed on ", atn.address);

    // // Deploy MIM
    // const MIM = await ethers.getContractFactory('AnyswapV5ERC20');
    // const mim = await MIM.deploy("Magic Internet Money", "MIM", 18, zeroAddress, deployer.address);
    // console.log("mim deployed on ", mim.address);

    // // Deploy 10,000,000 mock MIM
    // await mim.initVault(deployer.address);
    // await mim.mint( deployer.address, initialMint );
    // console.log("mim minted ", initialMint);

    // // Deploy treasury
    // //@dev changed function in treaury from 'valueOf' to 'valueOfToken'... solidity function was conflicting w js object property name
    // const Treasury = await ethers.getContractFactory('AthenaTreasury');
    // const treasury = await Treasury.deploy( atn.address, mim.address, 0 );
    // console.log("treasury deployed on", treasury.address);

    // // Deploy bonding calc
    // const AthenaBondingCalculator = await ethers.getContractFactory('AthenaBondingCalculator');
    // const athenaBondingCalculator = await AthenaBondingCalculator.deploy( atn.address );
    // console.log("athenaBondingCalc deployed on ", athenaBondingCalculator.address);

    // // Deploy staking distributor
    // const Distributor = await ethers.getContractFactory('Distributor');
    // const distributor = await Distributor.deploy(treasury.address, atn.address, epochLengthInBlocks, firstEpochBlock);
    // console.log("distributor deployed on ", distributor.address);

    // // Deploy SATN
    // const SATN = await ethers.getContractFactory('sAthena');
    // const satn = await SATN.deploy();
    // console.log("satn deployed on ", satn.address);

    // // Deploy WATN
    // const WATN = await ethers.getContractFactory('wATN');
    // const watn = await WATN.deploy(satn.address);
    // console.log("watn deployed on ", watn.address);

    // // Deploy Staking
    // const Staking = await ethers.getContractFactory('AthenaStaking');
    // const staking = await Staking.deploy( atn.address, satn.address, epochLengthInBlocks, firstEpochNumber, firstEpochBlock );
    // console.log("athenaStaking deployed on ", staking.address);

    // // Deploy staking warmpup
    // const StakingWarmpup = await ethers.getContractFactory('StakingWarmup');
    // const stakingWarmup = await StakingWarmpup.deploy(staking.address, satn.address);
    // console.log("stakingWarmup deployed on ", stakingWarmup.address);

    // // Deploy staking helper
    // const StakingHelper = await ethers.getContractFactory('StakingHelper');
    // const stakingHelper = await StakingHelper.deploy(staking.address, atn.address);
    // console.log("stakingHelper deployed on ", stakingHelper.address);

    // // Initialize sski and set the index
    // await satn.initialize(staking.address);
    // await satn.setIndex(initialIndex);
    // console.log("Initialize satn and set the index");

    // // set distributor contract and warmup contract
    // await staking.setContract('0', distributor.address);
    // await staking.setContract('1', stakingWarmup.address);
    // console.log("set distributor contract and warmup contract");

    // // Set treasury for ATN token
    // await atn.setVault(treasury.address);
    // console.log("Set treasury for ATN token");

    // // Add staking contract as distributor recipient
    // await distributor.addRecipient(staking.address, initialRewardRate);
    // console.log("Add staking contract as distributor recipient");

    // // queue and toggle reward manager
    // await treasury.queue('8', distributor.address);
    // console.log("queue reward manager");
    // await treasury.toggle('8', distributor.address, zeroAddress);
    // console.log("toggle reward manager");

    // // queue and toggle deployer reserve depositor
    // await treasury.queue('0', deployer.address);
    // console.log("queue deployer reserve depositor");
    // await treasury.toggle('0', deployer.address, zeroAddress);
    // console.log("toggle deployer reserve depositor");

    // // queue and toggle liquidity depositor
    // await treasury.queue('4', deployer.address, );
    // console.log("queue liquidity depositor");
    // await treasury.toggle('4', deployer.address, zeroAddress);
    // console.log("toggle liquidity depositor");

    // // Approve the treasury to spend MIM
    // await mim.approve(treasury.address, largeApproval );
    // console.log("Approved the treasury to spend MIM");

    // // Approve staking and staking helper contact to spend deployer's ATN
    // await atn.approve(staking.address, largeApproval);
    // await atn.approve(stakingHelper.address, largeApproval);
    // console.log("ATN approved stakingHelper");

    // // Deposit 9,000,000 MIM to treasury, 600,000 SKI gets minted to deployer and 8,400,000 are in treasury as excesss reserves
    // await treasury.deposit('9000000000000000000000000', mim.address, '8400000000000000');
    // console.log("treasury deposited mim");

    // // Stake ATN through helper
    // await stakingHelper.stake('100000000000', deployer.address);
    // console.log("Staked ATN through helper");

    // // Deploy MIM bond
    // //@dev changed function call to Treasury of 'valueOf' to 'valueOfToken' in BondDepository due to change in Treasury contract
    // const MIMBond = await ethers.getContractFactory('AthenaBondDepository');
    // const mimBond = await MIMBond.deploy(atn.address, mim.address, treasury.address, dao.address, zeroAddress);
    // console.log("mimBond deployed on ", mimBond.address);

    // // Approve mim bonds to spend deployer's MIM
    // await mim.approve(mimBond.address, largeApproval );
    // console.log("Approved mim bond to spend deployer's MIM");
    
    // // Deploy AVAX bond
    // //@dev changed function call to Treasury of 'valueOf' to 'valueOfToken' in BondDepository due to change in Treasury contract
    // const AvaxBond = await ethers.getContractFactory('AtnBondDepository');
    // const avaxBond = await AvaxBond.deploy(atn.address, wavaxAddress, treasury.address, dao.address, avaxUsdPriceFeedAddress);
    // console.log("avaxBond deployed on ", avaxBond.address);

    // Deploy ATN-MIM bond
    //@dev changed function call to Treasury of 'valueOf' to 'valueOfToken' in BondDepository due to change in Treasury contract
    const ATNMIMBond = await ethers.getContractFactory('AthenaBondDepository');
    const atnMimBond = await ATNMIMBond.deploy('0x5749ED765a983660eaEAfe03B9C2Bfe3CCbfc263', atnMimLpTokenAddress, '0x55ec777545f2f36e688454C0d0153bFBB1f065fD', '0x4AEE7d5CCcb90fBBF2869C091F9eDB0d70B3557a', '0xe54c6212Ac47675706C7317b9f5502DEfAED5AF2');
    console.log("atnMimBond deployed on ", atnMimBond.address);

    // Deploy ATN-AVAX bond
    //@dev changed function call to Treasury of 'valueOf' to 'valueOfToken' in BondDepository due to change in Treasury contract
    const AtnAvaxBond = await ethers.getContractFactory('AthenaBondDepository');
    const atnAvaxBond = await AtnAvaxBond.deploy('0x5749ED765a983660eaEAfe03B9C2Bfe3CCbfc263', atnAvaxLpTokenAddress, '0x55ec777545f2f36e688454C0d0153bFBB1f065fD', '0x4AEE7d5CCcb90fBBF2869C091F9eDB0d70B3557a', '0xe54c6212Ac47675706C7317b9f5502DEfAED5AF2');
    console.log("atnAvaxBond deployed on ", atnAvaxBond.address);

    // // queue and toggle MIM and WAVAX reserve token
    // await treasury.queue('2', mim.address);
    // await treasury.toggle('2', mim.address, zeroAddress);
    // await treasury.queue('2', wavaxAddress);
    // await treasury.toggle('2', wavaxAddress, zeroAddress);
    // console.log("queue and toggle MIM and WAVAX reserve token");

    // // // queue and toggle JLP token
    // // await treasury.queue('5', skiMimLpTokenAddress);
    // // await treasury.toggle('5', skiMimLpTokenAddress, skadiBondingCalculator.address);
    // // await treasury.queue('5', skiAvaxLpTokenAddress);
    // // await treasury.toggle('5', skiAvaxLpTokenAddress, skadiBondingCalculator.address);
    // // console.log("queue and toggle JLP token");

    // // queue and toggle MIM bond reserve depositor
    // await treasury.queue('0', mimBond.address);
    // await treasury.toggle('0', mimBond.address, zeroAddress);
    // console.log("queue and toggle MIM bond reserve depositor");

    // // queue and toggle WAVAX bond reward manager
    // await treasury.queue('8', avaxBond.address);
    // await treasury.toggle('8', avaxBond.address, zeroAddress);
    // console.log("queue and toggle WAVAX bond reward manager");

    // // // queue and toggle LP bond liquidity depositor
    // // await treasury.queue('4', atnMimBond.address);
    // // await treasury.queue('4', atnAvaxBond.address);
    // // await treasury.toggle('4', atnMimBond.address, zeroAddress);
    // // await treasury.toggle('4', atnAvaxBond.address, zeroAddress);
    // // console.log("queue and toggle SKI-MIM and ATN-AVAX bond liquidity depositor");

    // // Set MIM bond terms
    // await mimBond.initializeBondTerms(mimBondBCV, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt, bondVestingLength);
    // console.log("Set MIM bond terms");
    // await avaxBond.initializeBondTerms(wavaxBondBCV, minBondPrice, maxBondPayout, maxBondDebt, intialBondDebt, bondVestingLength);
    // console.log("Set WAVAX bond terms");
    // // await atnMimBond.initializeBondTerms(mimBondBCV, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt, bondVestingLength);
    // // console.log("Set ATN-MIM bond terms");
    // // await atnAvaxBond.initializeBondTerms(wavaxBondBCV, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt, bondVestingLength);
    // // console.log("Set ATN-WAVAX bond terms");

    // // Set staking for MIM bond
    // await mimBond.setStaking(staking.address, 0);
    // await mimBond.setStaking(stakingHelper.address, 1);
    // await avaxBond.setStaking(staking.address, 0);
    // await avaxBond.setStaking(stakingHelper.address, 1);
    // // await atnMimBond.setStaking(staking.address, 0);
    // // await atnMimBond.setStaking(stakingHelper.address, 1);
    // // await atnAvaxBond.setStaking(staking.address, 0);
    // // await atnAvaxBond.setStaking(stakingHelper.address, 1);
    // console.log("Set staking for MIM bond");

    // // Bond 1,000 ATN in each of their bonds
    // await mimBond.deposit('1000000000000000000000', '60000', deployer.address );
    // console.log("mimBond deposited");

    // console.log( "ATN: " + atn.address );
    // console.log( "MIM: " + mim.address );
    // console.log( "sATN: " + satn.address );
    // console.log( "wATN: " + watn.address );
    // console.log( "Treasury: " + treasury.address );
    // console.log( "Calculator: " + athenaBondingCalculator.address );
    // console.log( "Staking: " + staking.address );
    // console.log( "Distributor: " + distributor.address );
    // console.log( "Staking Wawrmup: " + stakingWarmup.address );
    // console.log( "Staking Helper: " + stakingHelper.address );
    // console.log( "MIM Bond: " + mimBond.address );
    // console.log( "wAvax Bond: " + avaxBond.address );
    // // console.log( "AtnMim Bond: ", atnMimBond.address );
    // // console.log( "AtnAvax Bond: ", atnAvaxBond.address );
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})