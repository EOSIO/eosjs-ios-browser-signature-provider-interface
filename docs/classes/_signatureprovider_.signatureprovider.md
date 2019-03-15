[@blockone/eosjs-ios-browser-signature-provider-interface](../README.md) > ["SignatureProvider"](../modules/_signatureprovider_.md) > [SignatureProvider](../classes/_signatureprovider_.signatureprovider.md)

# Class: SignatureProvider

## Hierarchy

 `SignatureProviderInterface`

**↳ SignatureProvider**

## Implements

* `SignatureProvider`

## Index

### Constructors

* [constructor](_signatureprovider_.signatureprovider.md#constructor)

### Methods

* [cancelRequest](_signatureprovider_.signatureprovider.md#cancelrequest)
* [clearCachedKeys](_signatureprovider_.signatureprovider.md#clearcachedkeys)
* [getAvailableKeys](_signatureprovider_.signatureprovider.md#getavailablekeys)
* [getCachedKeys](_signatureprovider_.signatureprovider.md#getcachedkeys)
* [setCachedKeys](_signatureprovider_.signatureprovider.md#setcachedkeys)
* [sign](_signatureprovider_.signatureprovider.md#sign)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SignatureProvider**(args: *`SignatureProviderInterfaceParams`*): [SignatureProvider](_signatureprovider_.signatureprovider.md)

*Overrides SignatureProviderInterface.__constructor*

*Defined in [SignatureProvider.ts:17](https://github.com/EOSIO/ios-browser-auth-signature-provider/blob/b6c3c84/src/SignatureProvider.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| args | `SignatureProviderInterfaceParams` |

**Returns:** [SignatureProvider](_signatureprovider_.signatureprovider.md)

___

## Methods

<a id="cancelrequest"></a>

###  cancelRequest

▸ **cancelRequest**(): `void`

*Inherited from SignatureProviderInterface.cancelRequest*

*Defined in /Users/ryanwiesjahn/Development/block.one/ios-browser-auth-signature-provider/node_modules/@blockone/eosjs-signature-provider-interface/dist/SignatureProviderInterface.d.ts:53*

**Returns:** `void`

___
<a id="clearcachedkeys"></a>

###  clearCachedKeys

▸ **clearCachedKeys**(): `void`

*Overrides SignatureProviderInterface.clearCachedKeys*

*Defined in [SignatureProvider.ts:35](https://github.com/EOSIO/ios-browser-auth-signature-provider/blob/b6c3c84/src/SignatureProvider.ts#L35)*

**Returns:** `void`

___
<a id="getavailablekeys"></a>

###  getAvailableKeys

▸ **getAvailableKeys**(): `Promise`<`string`[]>

*Inherited from SignatureProviderInterface.getAvailableKeys*

*Defined in /Users/ryanwiesjahn/Development/block.one/ios-browser-auth-signature-provider/node_modules/@blockone/eosjs-signature-provider-interface/dist/SignatureProviderInterface.d.ts:30*

SignatureProvider Methods

**Returns:** `Promise`<`string`[]>

___
<a id="getcachedkeys"></a>

###  getCachedKeys

▸ **getCachedKeys**(): `string`[]

*Defined in [SignatureProvider.ts:26](https://github.com/EOSIO/ios-browser-auth-signature-provider/blob/b6c3c84/src/SignatureProvider.ts#L26)*

**Returns:** `string`[]

___
<a id="setcachedkeys"></a>

###  setCachedKeys

▸ **setCachedKeys**(keys: *`string`[]*): `void`

*Defined in [SignatureProvider.ts:31](https://github.com/EOSIO/ios-browser-auth-signature-provider/blob/b6c3c84/src/SignatureProvider.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| keys | `string`[] |

**Returns:** `void`

___
<a id="sign"></a>

###  sign

▸ **sign**(params: *`SignParams`*): `Promise`<`RpcInterfaces.PushTransactionArgs`>

*Inherited from SignatureProviderInterface.sign*

*Defined in /Users/ryanwiesjahn/Development/block.one/ios-browser-auth-signature-provider/node_modules/@blockone/eosjs-signature-provider-interface/dist/SignatureProviderInterface.d.ts:31*

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | `SignParams` |

**Returns:** `Promise`<`RpcInterfaces.PushTransactionArgs`>

___

