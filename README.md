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
