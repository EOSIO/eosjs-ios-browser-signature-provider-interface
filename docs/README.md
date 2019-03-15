
EOSJS Signature Provider for iOS Safari
=======================================

A [SignatureProviderInterface](https://github.com/EOSIO/eosjs-signature-provider-interface) for communicating with an authenticator from iOS Safari using the [EOSIO Authentication Transport Protocol Specification](https://github.com/EOSIO/eosio-authentication-transport-protocol-spec).

When plugged into `eosjs`, this signature provider enables iOS web applications to route signing requests to an iOS authenticator app. Full instructions for `eosjs` can be found [here](https://github.com/EOSIO/eosjs).

Notes
-----

This signature provider currently only works for mobile Safari. However, there is an [example using the webhook transport for mobile Chrome](./src/reference/mobileChromeExample.js).

Basic Usage
-----------

```
import { Api, JsonRpc } from "eosjs"
import { SignatureProvider } from "@blockone/eosjs-ios-browser-signature-provider-interface"

const rpc = new JsonRpc("RPC_ENDPOINT_HERE")
const signatureProvider = new SignatureProvider({
  declaredDomain: "YOUR_DOMAIN", // This domain must have a `chainManifests.json` file at the root
  returnUrl: "YOUR_DOMAIN",
})
const api = new Api({
  rpc,
  signatureProvider,
})

api.transact(...)

```

## Index

### External modules

* ["ExpiringLocalStorageProvider"](modules/_expiringlocalstorageprovider_.md)
* ["SignatureProvider"](modules/_signatureprovider_.md)
* ["index"](modules/_index_.md)
* ["utils"](modules/_utils_.md)

---
