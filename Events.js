const {ethers} = require('ethers');
const transfer = require('./transfer.json');

const RPC = 'https://eth-goerli.g.alchemy.com/v2/HAqjSP9SbTtVPXCtgn74iCVz5O-PkaDZ'; // Your RPC url here

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const contractAddress = '0xae22bb29abb3d35663cc620f9e8cb58e5fb0695d';
const ABI = transfer.abi;

async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    )

    //const block = await provider.getBlockNumber();
    

    //const trans = contract.filters.transactions(null, '1000000000000000000');
    const transactions = await contract.queryFilter('transactions')
    //console.log(transactions)

    transactions.map((item) => {
        console.log(item.args.to, ":", ethers.utils.formatEther(item.args.amount))
    })

    
}

call();