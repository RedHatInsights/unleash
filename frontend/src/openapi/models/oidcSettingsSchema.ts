/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { OidcSettingsSchemaDefaultRootRole } from './oidcSettingsSchemaDefaultRootRole';
import type { OidcSettingsSchemaIdTokenSigningAlgorithm } from './oidcSettingsSchemaIdTokenSigningAlgorithm';

/**
 * Settings for configuring OpenID Connect as a login provider for Unleash
 */
export interface OidcSettingsSchema {
    /** Authentication Context Class Reference, used to request extra values in the acr claim returned from the server. If multiple values are required, they should be space separated. 
 Consult [the OIDC reference](https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint) for more information 
 */
    acrValues?: string;
    /** Auto create users based on email addresses from login tokens */
    autoCreate?: boolean;
    /** The OIDC client ID of this application. */
    clientId: string;
    /** [Default role](https://docs.getunleash.io/reference/rbac#standard-roles) granted to users auto-created from email. Only relevant if autoCreate is `true` */
    defaultRootRole?: OidcSettingsSchemaDefaultRootRole;
    /** The [.well-known OpenID discover URL](https://swagger.io/docs/specification/authentication/openid-connect-discovery/) */
    discoverUrl?: string;
    /** Comma separated list of email domains that are automatically approved for an account in the server. Only relevant if autoCreate is `true` */
    emailDomains?: string;
    /** `true` if OpenID connect is turned on for this instance, otherwise `false` */
    enabled?: boolean;
    /** Support Single sign out when user clicks logout in Unleash. If `true` user is signed out of all OpenID Connect sessions against the clientId they may have active */
    enableSingleSignOut?: boolean;
    /** The signing algorithm used to sign our token. Refer to the [JWT signatures](https://jwt.io/introduction) documentation for more information. */
    idTokenSigningAlgorithm?: OidcSettingsSchemaIdTokenSigningAlgorithm;
    /** Shared secret from OpenID server. Used to authenticate login requests */
    secret: string;
}
