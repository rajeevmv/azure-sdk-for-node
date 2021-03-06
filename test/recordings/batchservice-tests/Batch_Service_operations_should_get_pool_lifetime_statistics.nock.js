// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/lifetimepoolstats?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#poolstats/@Element\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/lifetimepoolstats\",\"usageStats\":{\r\n    \"startTime\":\"2016-03-30T21:42:42.2828968Z\",\"lastUpdateTime\":\"2016-07-29T16:00:00Z\",\"dedicatedCoreTime\":\"P226DT11H32M33.571S\"\r\n  },\"resourceStats\":{\r\n    \"startTime\":\"2016-03-30T21:42:42.2828968Z\",\"diskReadIOps\":\"177868\",\"diskWriteIOps\":\"78082976\",\"lastUpdateTime\":\"2016-07-29T16:00:00Z\",\"avgCPUPercentage\":0.5068412594402818,\"avgMemoryGiB\":3.5558828496067378,\"peakMemoryGiB\":1.2284660339355469,\"avgDiskGiB\":90.015018358346836,\"peakDiskGiB\":18.54864501953125,\"diskReadGiB\":3.0179367065429687,\"diskWriteGiB\":1054.8126907348633,\"networkReadGiB\":8.2545192372053862,\"networkWriteGiB\":6.710637591779232\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f562fc0e-bbca-4e57-b77e-4db4d39e0a84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:47:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/lifetimepoolstats?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#poolstats/@Element\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/lifetimepoolstats\",\"usageStats\":{\r\n    \"startTime\":\"2016-03-30T21:42:42.2828968Z\",\"lastUpdateTime\":\"2016-07-29T16:00:00Z\",\"dedicatedCoreTime\":\"P226DT11H32M33.571S\"\r\n  },\"resourceStats\":{\r\n    \"startTime\":\"2016-03-30T21:42:42.2828968Z\",\"diskReadIOps\":\"177868\",\"diskWriteIOps\":\"78082976\",\"lastUpdateTime\":\"2016-07-29T16:00:00Z\",\"avgCPUPercentage\":0.5068412594402818,\"avgMemoryGiB\":3.5558828496067378,\"peakMemoryGiB\":1.2284660339355469,\"avgDiskGiB\":90.015018358346836,\"peakDiskGiB\":18.54864501953125,\"diskReadGiB\":3.0179367065429687,\"diskWriteGiB\":1054.8126907348633,\"networkReadGiB\":8.2545192372053862,\"networkWriteGiB\":6.710637591779232\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f562fc0e-bbca-4e57-b77e-4db4d39e0a84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:47:32 GMT',
  connection: 'close' });
 return result; }]];