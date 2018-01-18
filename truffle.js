module.exports = {
  networks: {
    testrpc: {
      host: "testrpc",
      port: 8545,
      network_id: "*",
      gas: 4600000
    },
    devchain: {
      host: "geth",
      port: 8544,
      network_id: "2017111499",
      gas: 4612388
    }
  }
};
