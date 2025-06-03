// posttest.js
const sendAllureReportNotification = require('./utils/slackNotifier');

(async () => {
    await sendAllureReportNotification();
})();
