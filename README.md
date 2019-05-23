# ![LOGO](logo.png) Cloud Testing **flow**ground Connector

## Description

A generated **flow**ground connector for the Cloud Testing API (version v1).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/testing/v1/swagger.json<br/>
Generated at: 2019-05-23T12:13:45+03:00

## API Description

Allows developers to run automated tests for their mobile applications on Google infrastructure.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Gets the details of an Android application APK.

*Tags:* `applicationDetailService`

#### Input Parameters
* `$.xgafv` - _optional_ - V1 error format.
    Possible values: 1, 2.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates and runs a matrix of tests according to the given specifications.<br/>
> Unsupported environments will be returned in the state UNSUPPORTED.<br/>
> Matrices are limited to at most 200 supported executions.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to write to project<br/>
> - INVALID_ARGUMENT - if the request is malformed or if the matrix expands<br/>
>                      to more than 200 supported executions

*Tags:* `projects`

#### Input Parameters
* `projectId` - _required_ - The GCE project under which this job will run.
* `requestId` - _optional_ - A string id used to detect duplicated requests.
Ids are automatically scoped to a project, so
users should ensure the ID is unique per-project.
A UUID is recommended.

Optional, but strongly recommended.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Checks the status of a test matrix.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to read project<br/>
> - INVALID_ARGUMENT - if the request is malformed<br/>
> - NOT_FOUND - if the Test Matrix does not exist

*Tags:* `projects`

#### Input Parameters
* `projectId` - _required_ - Cloud project that owns the test matrix.
* `testMatrixId` - _required_ - Unique test matrix id which was assigned by the service.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Cancels unfinished test executions in a test matrix.<br/>
> This call returns immediately and cancellation proceeds asychronously.<br/>
> If the matrix is already final, this operation will have no effect.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to read project<br/>
> - INVALID_ARGUMENT - if the request is malformed<br/>
> - NOT_FOUND - if the Test Matrix does not exist

*Tags:* `projects`

#### Input Parameters
* `projectId` - _required_ - Cloud project that owns the test.
* `testMatrixId` - _required_ - Test matrix that will be canceled.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets the catalog of supported test environments.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - INVALID_ARGUMENT - if the request is malformed<br/>
> - NOT_FOUND - if the environment type does not exist<br/>
> - INTERNAL - if an internal error occurred

*Tags:* `testEnvironmentCatalog`

#### Input Parameters
* `environmentType` - _required_ - Required. The type of environment that should be listed.
    Possible values: ENVIRONMENT_TYPE_UNSPECIFIED, ANDROID, IOS, NETWORK_CONFIGURATION, PROVIDED_SOFTWARE.
* `projectId` - _optional_ - For authorization, the cloud project requesting the TestEnvironmentCatalog.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

## License

**flow**ground :- Telekom iPaaS / googleapis-com-testing-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
