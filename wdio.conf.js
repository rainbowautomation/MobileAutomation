const sendSlackNotification = require('./test/utils/slackNotifier.js');
const allure = require('@wdio/allure-reporter').default;

exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    services: ['appium'],
    port: 4723,

    capabilities: [{
        platformName: "Android",
        "appium:platformVersion": "14.0",
        "appium:deviceName": "R8YX1048WPJ",
        "appium:automationName": "UiAutomator2",
        "appium:app": "/Users/rainbowphi/mobile-test-framework/app-release.apk",
        "appium:autoGrantPermissions": true,
        "appium:appPackage": "com.rainbow_mobile",
        "appium:appActivity": "com.rainbow_mobile.MainActivity",
        "appium:enforceXPath1": true
    }],

    logLevel: 'info',

    mochaOpts: {
        timeout: 60000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
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

    // Uncomment if you want Slack notifications on test completion
    // onComplete: async function(exitCode, config, capabilities, results) {
    //     await sendSlackNotification();
    // }
};
