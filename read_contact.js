const {ethers} = require('ethers');
const transfer = require('./transfer.json');

const RPC = 'https://eth-goerli.g.alchemy.com/v2/HAqjSP9SbTtVPXCtgn74iCVz5O-PkaDZ'; // your rpc url here

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const contractAddress = '0xae22bB29aBB3D35663Cc620F9E8Cb58e5FB0695D';
const ABI = transfer.abi;

async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    )

    console.log(`The address of owner: ${await contract.owner()}`);
}

call();
