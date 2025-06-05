const sendSlackNotification = require('./test/utils/slackNotifier.js');
const allure = require('@wdio/allure-reporter').default;

exports.config = {
    runner: 'local',

    specs: ['./test/specs/**/*.js'],

    suites: {
        buyer: [
            './test/specs/buyer/login.e2e.js',
            './test/specs/buyer/register.e2e.js'
        ],
        seller: [
            './test/specs/seller/login.e2e.js',
            './test/specs/seller/register.e2e.js'
        ]
    },

    maxInstances: 1,

    capabilities: [{
        platformName: "Android",
        "appium:platformVersion": "14.0",
        "appium:deviceName": "R8YX1048WPJ",
        "appium:automationName": "UiAutomator2",
        "appium:app": "/Users/rainbowphi/mobile-test-framework/app-release.apk",
        "appium:autoGrantPermissions": true,
        "appium:appPackage": "com.rainbow_mobile",
        "appium:appActivity": "com.rainbow_mobile.MainActivity",
        "appium:noReset": true,
        "appium:fullReset": false,
        "appium:newCommandTimeout": 300,
        "appium:adbExecTimeout": 60000,
        "appium:enforceXPath1": true
    }],

    services: ['appium'],
    port: 4723,

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    logLevel: 'info',

    mochaOpts: {
        timeout: 60000
    },

  beforeSuite: async function (suite) {
        console.log(`🧹 Clearing app data before suite: ${suite.title}`);
        await driver.execute('mobile: terminateApp', { appId: 'com.rainbow_mobile' });
        await driver.execute('mobile: clearApp', { appId: 'com.rainbow_mobile' });
        await driver.execute('mobile: activateApp', { appId: 'com.rainbow_mobile' });
    },

    afterTest: async function (test, context, { error, result, duration, passed }) {
        try {
            const screenshot = await driver.takeScreenshot();
            allure.addAttachment(
                `Screenshot - ${passed ? 'PASS' : 'FAIL'}: ${test.title}`,
                Buffer.from(screenshot, 'base64'),
                'image/png'
            );
        } catch (err) {
            console.error('Error taking screenshot:', err);
        }
    },

    // Uncomment to enable Slack notifications after run
    // onComplete: async function(exitCode, config, capabilities, results) {
    //     await sendSlackNotification();
    // }
};
