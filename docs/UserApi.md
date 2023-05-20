# BrevoNode.UserApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvitedUsersList**](UserApi.md#getInvitedUsersList) | **GET** /organization/invited/users | Get the list of all your users
[**getUserPermission**](UserApi.md#getUserPermission) | **GET** /organization/user/{email}/permissions | Check user permission


<a name="getInvitedUsersList"></a>
# **getInvitedUsersList**
> GetInvitedUsersList getInvitedUsersList()

Get the list of all your users

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.UserApi();
apiInstance.getInvitedUsersList().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetInvitedUsersList**](GetInvitedUsersList.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserPermission"></a>
# **getUserPermission**
> GetUserPermission getUserPermission(email)

Check user permission

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.UserApi();

var email = "email_example"; // String | Email of the invited user.

apiInstance.getUserPermission(email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email of the invited user. | 

### Return type

[**GetUserPermission**](GetUserPermission.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
