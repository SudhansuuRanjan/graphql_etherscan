const { RESTDataSource } = require("apollo-datasource-rest");

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  async etherBalanceByAddress() {
    const module = 'account';
    const action = 'balance';
    const tag = 'latest';

    return this.get('', {
      module,
      action,
      address: eth_address,
      tag,
      apiKey: process.env.ETHERSCAN_API,
    });
  }

  async totalSupplyOfEther() {
    const module = 'stats';
    const action = 'ethsupply';
    return this.get('', {
      module,
      action,
      apiKey: process.env.ETHERSCAN_API,
    });
  }
}

module.exports = EtherDataSource;
