const sdk = require('@defillama/sdk')

async function tvl(timestamp, ethBlock, chainBlocks) {

    const nestVault = '0x65e7506244CDdeFc56cD43dC711470F8B0C43beE';
    const NEST_token = '0x98f8669F6481EbB341B522fCD3663f79A3d1A6A7'

    const strat_bal = (
        await sdk.api.abi.call({
          abi: 'erc20:balanceOf',
          target: NEST_token,
          params: nestVault,
          chain: "bsc",
          block: chainBlocks["bsc"],
        })
      ).output;

    return {
        'nest': Number(strat_bal) / 1e18
    };
}

module.exports = {
    timetravel: true,
    misrepresentedTokens: false,
    methodology: 'TVL counts NEST tokens used as collateral by the protocol.',
    bsc: {
        tvl 
    }
}