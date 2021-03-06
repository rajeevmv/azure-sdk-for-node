// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls5550\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5550\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3781.azuredatalakeanalytics.net\",\"accountId\":\"5b2ae05d-86fd-4266-ac01-5a66e6135f80\",\"creationTime\":\"2017-01-22T06:46:13.0145297Z\",\"lastModifiedTime\":\"2017-01-22T06:46:13.0145297Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781\",\"name\":\"xplattestadla3781\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '907',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a7b31443-fab5-47fa-9878-2ece04fb62b1',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '80e5b55f-10a8-4d17-bae7-a14641957f42',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064928Z:80e5b55f-10a8-4d17-bae7-a14641957f42',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls5550\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5550\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3781.azuredatalakeanalytics.net\",\"accountId\":\"5b2ae05d-86fd-4266-ac01-5a66e6135f80\",\"creationTime\":\"2017-01-22T06:46:13.0145297Z\",\"lastModifiedTime\":\"2017-01-22T06:46:13.0145297Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3781\",\"name\":\"xplattestadla3781\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '907',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a7b31443-fab5-47fa-9878-2ece04fb62b1',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '80e5b55f-10a8-4d17-bae7-a14641957f42',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T064928Z:80e5b55f-10a8-4d17-bae7-a14641957f42',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:49:27 GMT',
  connection: 'close' });
 return result; }]];