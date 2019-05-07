/**
 * Auto-generated action file for "Cloud Testing" API.
 *
 * Generated at: 2019-05-07T14:42:04.405Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-testing-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'testing.projects.testMatrices.create'
 * Endpoint Path: '/v1/projects/{projectId}/testMatrices'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "projectId",
    "requestId",
    "alt",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "projectId": "projectId",
    "requestId": "requestId",
    "alt": "alt",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "clientInfoDetails": "clientInfoDetails",
    "name": "name",
    "clientInfo": "clientInfo",
    "androidDevices": "androidDevices",
    "androidDeviceList": "androidDeviceList",
    "androidModelIds": "androidModelIds",
    "androidVersionIds": "androidVersionIds",
    "locales": "locales",
    "orientations": "orientations",
    "androidMatrix": "androidMatrix",
    "iosDevices": "iosDevices",
    "iosDeviceList": "iosDeviceList",
    "environmentMatrix": "environmentMatrix",
    "flakyTestAttempts": "flakyTestAttempts",
    "invalidMatrixDetails": "invalidMatrixDetails",
    "gcsPath": "gcsPath",
    "googleCloudStorage": "googleCloudStorage",
    "executionId": "executionId",
    "historyId": "historyId",
    "toolResultsExecution": "toolResultsExecution",
    "toolResultsHistory": "toolResultsHistory",
    "resultStorage": "resultStorage",
    "state": "state",
    "testExecutions": "testExecutions",
    "testMatrixId": "testMatrixId",
    "appApk": "appApk",
    "bundleLocation": "bundleLocation",
    "appBundle": "appBundle",
    "appPackageId": "appPackageId",
    "orchestratorOption": "orchestratorOption",
    "testApk": "testApk",
    "testPackageId": "testPackageId",
    "testRunnerClass": "testRunnerClass",
    "testTargets": "testTargets",
    "androidInstrumentationTest": "androidInstrumentationTest",
    "appInitialActivity": "appInitialActivity",
    "maxDepth": "maxDepth",
    "maxSteps": "maxSteps",
    "roboDirectives": "roboDirectives",
    "roboScript": "roboScript",
    "startingIntents": "startingIntents",
    "androidRoboTest": "androidRoboTest",
    "scenarioLabels": "scenarioLabels",
    "scenarios": "scenarios",
    "androidTestLoop": "androidTestLoop",
    "autoGoogleLogin": "autoGoogleLogin",
    "disablePerformanceMetrics": "disablePerformanceMetrics",
    "disableVideoRecording": "disableVideoRecording",
    "networkProfile": "networkProfile",
    "iosTestSetup": "iosTestSetup",
    "appBundleId": "appBundleId",
    "testsZip": "testsZip",
    "xcodeVersion": "xcodeVersion",
    "xctestrun": "xctestrun",
    "iosXcTest": "iosXcTest",
    "googleAuto": "googleAuto",
    "account": "account",
    "additionalApks": "additionalApks",
    "directoriesToPull": "directoriesToPull",
    "environmentVariables": "environmentVariables",
    "filesToPush": "filesToPush",
    "testSetup": "testSetup",
    "testTimeout": "testTimeout",
    "testSpecification": "testSpecification",
    "timestamp": "timestamp",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'testing.projects.testMatrices.create',
        pathName: '/v1/projects/{projectId}/testMatrices',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}