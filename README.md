# Hovedopgave App

A simple plain React Native app to build onto.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v16 or higher)
- npm or yarn
- For iOS development: Xcode and CocoaPods
- For Android development: Android Studio and Android SDK

## Installation

1. Clone the repository:
```bash
git clone https://github.com/NEMOrganization/hovedopgave-jan2026.git
cd hovedopgave-jan2026
```

2. Install dependencies:
```bash
npm install
```

3. For iOS (macOS only):
```bash
cd ios
pod install
cd ..
```

## Running the App

### Start the Metro bundler:
```bash
npm start
```

### Run on Android:
```bash
npm run android
```

### Run on iOS (macOS only):
```bash
npm run ios
```

## Project Structure

```
.
├── App.tsx              # Main application component
├── index.js            # Application entry point
├── app.json            # App configuration
├── android/            # Android native code
├── ios/                # iOS native code
├── babel.config.js     # Babel configuration
├── metro.config.js     # Metro bundler configuration
└── tsconfig.json       # TypeScript configuration
```

## Available Scripts

- `npm start` - Start the Metro bundler
- `npm run android` - Run the app on Android
- `npm run ios` - Run the app on iOS
- `npm test` - Run tests
- `npm run lint` - Lint the code

## Built With

- [React Native](https://reactnative.dev/) - The mobile framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Metro](https://facebook.github.io/metro/) - JavaScript bundler

## License

This project is open source and available under the ISC License.