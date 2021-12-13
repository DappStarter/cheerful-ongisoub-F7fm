require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember universe guess entire swift tuition'; 
let testAccounts = [
"0x548e166cf1192d571081d344e49863892eb74b62e65bf2801c8ab6c523ae56e5",
"0xecef0680f1941132f498051246e8a396c0090c2fe8afbf5f27f544372c4d20d7",
"0x226c49312de0366a15415e27e7cfddbbe2303963045c9c1ab5dd59e7f4ce88b9",
"0x0c29da9b4e4bc8037d9c636eee54e5567be5de325dba9775196b137b61b93971",
"0x9f048c40c3b05e1db67adf4fa62776ea6a6eae14927a8650c5a52936ba29674c",
"0xbfb4f7b0c8fd9104988958eddc9ff366a0ed5cde67d00c1dd5696e45217a2431",
"0x75b5525f6e938d6632e510b8ca5f861a753c6c8b0732337f11b747d2a4840711",
"0x454e68049a195fb712411a19cca11d3b04b68f4703de104c096850c2f6486481",
"0xc0c446632bc616ea80aab8ec3e70b38602dbbbe79b3c4d81e59e3149d756d13b",
"0x28e31b182a5e2e3d6ad2393fc089183ddeeb7b28bde9d00efb27b09fae363d25"
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

