const { deployProxy } = require('@openzeppelin/truffle-upgrades')
const CMTAT = artifacts.require('CMTAT_PROXY')
const ERC20BaseModuleCommon = require('../../common/BaseModuleCommon')
const { ZERO_ADDRESS } = require('../../utils')

contract(
  'Proxy - ERC20BaseModule',
  function ([_, admin, address1, address2, address3]) {
    beforeEach(async function () {
      this.flag = 5
      this.cmtat = await deployProxy(CMTAT, [admin, 'CMTA Token', 'CMTAT', 'CMTAT_ISIN', 'https://cmta.ch', ZERO_ADDRESS, 'CMTAT_info', this.flag], {
        initializer: 'initialize',
        constructorArgs: [_]
      })
    })

    ERC20BaseModuleCommon(admin, address1, address2, address3, true)
  }
)
