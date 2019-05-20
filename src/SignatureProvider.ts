import {
  instanceOfResponseEnvelope,
  packEnvelope,
  SignatureProviderInterface,
  SignatureProviderInterfaceParams,
  SignatureProviderRequestEnvelope,
  unpackEnvelope,
} from '@blockone/eosjs-signature-provider-interface'

import { ExpiringLocalStorageProvider } from './ExpiringLocalStorageProvider'
import * as utils from './utils'

declare const window: any

export class SignatureProvider extends SignatureProviderInterface {
  private localStorage: ExpiringLocalStorageProvider
  private expiryMs: number
  private protocol: string

  constructor(args: SignatureProviderInterfaceParams) {
    super(args)
    this.localStorage = new ExpiringLocalStorageProvider()
    this.expiryMs = 100 * 60 * 1000 // Cache for 100 minutes
    this.protocol = args.options.protocol
    window.addEventListener('hashchange', this.onWindowHashChange)
  }

  public getCachedKeys(): string[] {
    const keys = this.localStorage.get('publicKeys')
    return keys || []
  }

  public setCachedKeys(keys: string[]): void {
    this.localStorage.set('publicKeys', keys, this.expiryMs)
  }

  public clearCachedKeys(): void {
    this.localStorage.remove('publicKeys')
  }

  public cleanUp(): void {
    window.removeEventListener('hashchange', this.onWindowHashChange)
  }

  protected sendRequest(requestEnvelop: SignatureProviderRequestEnvelope) {
    utils.removeHash()
    utils.appendRequestId(requestEnvelop.id)

    const browserUrl = window.location.href
    const arr = browserUrl.split('/')
    const declaredDomain = `${arr[0]}//${arr[2]}`

    requestEnvelop.declaredDomain = declaredDomain
    requestEnvelop.returnUrl = window.location.href
    requestEnvelop.callbackUrl = ''

    const encoded = packEnvelope(requestEnvelop)
    const url = `${this.protocol}://request?payload=${encoded}`

    window.location = url
    window.open(url, '_system')
  }

  private onWindowHashChange = () => {
    const response = window.location.hash.replace('#', '')
    const responseEnvelope = unpackEnvelope(response)

    if (!instanceOfResponseEnvelope(responseEnvelope)) { return }

    utils.removeRequestId()
    this.handleResponse(responseEnvelope)
  }
}
