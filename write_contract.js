const { ethers, Signer } = require('ethers');
const transfer = require('./transfer.json');

const account1 = '0x1F3c66d5f5C23943291924c8d597aa7cB4A07fd4'; // Your public address here
const privateKey = '7ecf1e5f9ef489148807d788bdc7cc317f876536bba331d7b87ece1a1f7ebb90'; // put your private key here
const RPC = 'https://eth-goerli.g.alchemy.com/v2/HAqjSP9SbTtVPXCtgn74iCVz5O-PkaDZ'; // your rpc url here

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const wallet = new ethers.Wallet(privateKey, provider);

const contractAddress = '0xae22bb29abb3d35663cc620f9e8cb58e5fb0695d';
const ABI = transfer.abi;

async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        wallet//pass the signer
    )

    console.log(`${account1} : ${ethers.utils.formatEther(await provider.getBalance(account1))}`)//it will show the account1 address and balance 

    console.log(`${await wallet.getAddress()} : ${ethers.utils.formatEther(await wallet.getBalance())}`)//it will show the private key account address and the balance 

    const tx = await contract._transfer(account1, {
        value: ethers.utils.parseEther('0.15')
    })

    await tx.wait();

    console.log(`${account1} : ${ethers.utils.formatEther(await provider.getBalance(account1))}`)

    console.log(`${await wallet.getAddress()} : ${ethers.utils.formatEther(await wallet.getBalance())}`)

    console.log(tx);



}

call();