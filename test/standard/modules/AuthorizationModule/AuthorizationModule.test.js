const CMTAT = artifacts.require('CMTAT')
const AuthorizationModuleCommon = require('../../../common/AuthorizationModule/AuthorizationModuleCommon')
const { ZERO_ADDRESS } = require('../../../utils')

contract(
  'Standard - AuthorizationModule',
  function ([_, admin, address1, address2]) {
    beforeEach(async function () {
      this.cmtat = await CMTAT.new(_, false, admin, 'CMTA Token', 'CMTAT', 'CMTAT_ISIN', 'https://cmta.ch', ZERO_ADDRESS, { from: admin })
    })

    AuthorizationModuleCommon(admin, address1, address2)
  }
)
