require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth snow coast hockey kitten sun sleep'; 
let testAccounts = [
"0x45e956ea1e5d810e7ec91de4dac0a3edaaa87a0d8d8e25a656a2e74323d5cc92",
"0x39a7aa735478e3b1bf62a71fd0f517f7f285f18906f64d74f23030c9bed696b8",
"0x06a28f4d97cf6211fa989284881f4ce8ad24438c8ab76c06c4f95c7afcbc0b23",
"0xfa3092b1e3d7db471ad765fc7c6b24581ef276c1b3e8a1d79f5d2bf66d49c5b4",
"0xac2c89e5dda3c89538668f0a2d31602e2f4fdc97a7c1b95ab2fb1189eebc1ea1",
"0x636745e498fefb5dec54ce80d737426b5f3ae8ab7b25a82aefff36928fbd2ee7",
"0x6e9ec0563e3d4ea935baa786e23f77bd810a8b52a6d462732259b15cfbc5de5f",
"0xcaef237aae040817d23bdb8b9165747831f1ed8f998b5f954f4327c838e352d1",
"0x4e70596cd90ae2f9913d49c46cc617ed755e385cde93f607d056b729afa2c590",
"0x2c19e94cd9f00ecc99355bbfbe9983932b22c6f7151459b5638630d20da4956c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

