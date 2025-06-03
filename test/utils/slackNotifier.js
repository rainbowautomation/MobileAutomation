// utils/slackNotifier.js
const axios = require('axios');

const webhookUrl = 'https://hooks.slack.com/services/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'; // Your Slack webhook

// Get report URL from env var or fallback to localhost
const reportUrl = process.env.ALLURE_REPORT_URL || 'https://551c-5-151-39-76.ngrok-free.app';

async function sendAllureReportNotification() {
    const payload = {
        text: `✅ *Test Execution Completed*\n📊 *Allure Report*: <${reportUrl}|Click to View>`
    };

    try {
        await axios.post(webhookUrl, payload);
        console.log('✅ Slack notification sent!');
    } catch (error) {
        console.error('❌ Failed to send Slack message:', error.message);
    }
}

module.exports = sendAllureReportNotification;
