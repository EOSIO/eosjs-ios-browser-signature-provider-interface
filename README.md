# EOSJS iOS Signature Provider for EOSIO Authenticator
A [Signature Provider Interface](https://github.com/EOSIO/eosjs-signature-provider-interface) for communicating with an authenticator from iOS Safari using the [EOSIO Authentication Transport Protocol Specification](https://github.com/EOSIO/eosio-authentication-transport-protocol-spec).

## Overview
When plugged into `eosjs`, this signature provider enables iOS web applications to route signing requests to an iOS authenticator app. Full instructions for `eosjs` can be found [here](https://github.com/EOSIO/eosjs).

## Notes
This signature provider currently only works for mobile Safari.

## Installation
```bash
yarn add @blockone/eosjs-ios-browser-signature-provider-interface
```

## Basic Usage
```javascript
import { Api, JsonRpc } from "eosjs"
import { SignatureProvider } from "@blockone/eosjs-ios-browser-signature-provider-interface"

const rpc = new JsonRpc("RPC_ENDPOINT_HERE")
const signatureProvider = new SignatureProvider({
  declaredDomain: "YOUR_DOMAIN", // This domain must have a `chain-manifests.json` file at the root
  returnUrl: "YOUR_DOMAIN",
})
const api = new Api({
  rpc,
  signatureProvider,
})

api.transact(...)

```

## Links
- [Signature Provider Interface](https://github.com/EOSIO/eosjs-signature-provider-interface)
- [EOSIO Authentication Transport Protocol Specification](https://github.com/EOSIO/eosio-authentication-transport-protocol-spec)

## Contribution
Check out the [Contributing](https://github.com/EOSIO/eosjs-ios-browser-signature-provider-interface/blob/develop/CONTRIBUTING.md) guide and please adhere to the [Code of Conduct](https://github.com/EOSIO/eosjs-ios-browser-signature-provider-interface/blob/develop/CONTRIBUTING.md#conduct)

## License
[MIT licensed](https://github.com/EOSIO/eosjs-ios-browser-signature-provider-interface/blob/develop/LICENSE)

## Important

See LICENSE for copyright and license terms.  Block.one makes its contribution on a voluntary basis as a member of the EOSIO community and is not responsible for ensuring the overall performance of the software or any related applications.  We make no representation, warranty, guarantee or undertaking in respect of the software or any related documentation, whether expressed or implied, including but not limited to the warranties or merchantability, fitness for a particular purpose and noninfringement. In no event shall we be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or documentation or the use or other dealings in the software or documentation.  Any test results or performance figures are indicative and will not reflect performance under all conditions.  Any reference to any third party or third-party product, service or other resource is not an endorsement or recommendation by Block.one.  We are not responsible, and disclaim any and all responsibility and liability, for your use of or reliance on any of these resources. Third-party resources may be updated, changed or terminated at any time, so the information here may be out of date or inaccurate.
