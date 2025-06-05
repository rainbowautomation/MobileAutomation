# 📱 Mobile Test Automation Framework – Android (Real Device)

This repository contains a test automation setup for Android applications using **WebdriverIO**, **Appium**, **Allure Reports**, and real Android devices.

---

## 📦 Tooling Stack

| Tool           | Purpose                             |
|----------------|-------------------------------------|
| Appium         | Mobile automation framework         |
| WebdriverIO    | JavaScript-based test runner        |
| Mocha          | JavaScript test framework           |
| Allure         | Test report generation              |
| Android SDK    | Real device connectivity & ADB      |
| Java           | Required for Appium & APK signing   |

---

## 📱 Real Device Requirements

| Requirement         | Description                                       |
|---------------------|--------------------------------------------------|
| Android Device       | Developer Mode & USB Debugging enabled          |
| USB Connectivity     | Use USB cable or ADB over WiFi                  |
| ADB Installed        | Android Debug Bridge installed in system PATH  |
| Permissions          | `autoGrantPermissions` set via capabilities     |

---

## ✅ Acceptance Criteria

- Device is recognized via `adb devices`
- APK is installed and launched
- Test scripts run successfully via WebdriverIO
- Allure reports are generated
- Screenshots are captured on failure
- Page Object Model (POM) is followed

---

## ⚙️ Setup & Configuration

### 1. Prerequisites

Install the following on your system:

- **Java**  
  ```bash
  java -version

node -v
npm -v
mkdir mobile-test-framework
cd mobile-test-framework
npm init -y


npx wdio config

Desired Capabilities (Example for Appium Inspector)
{
  "platformName": "Android",
  "appium:deviceName": "R8YX1048WPJ",
  "appium:platformVersion": "14.0",
  "appium:automationName": "UiAutomator2",
  "appium:appPackage": "com.rainbow_mobile",
  "appium:appActivity": "com.rainbow_mobile.MainActivity",
  "appium:autoGrantPermissions": true,
  "appium:noReset": true
}
adb devices


allure generate allure-results --clean && allure open

