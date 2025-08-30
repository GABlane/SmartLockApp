### Set up an Android device with a development build (your own Expo Go)
1. Install EAS CLI
```bash
npm install -g eas-cli
```
2. Create an Expo account and login
```bash
eas login
```
3. Configure your project
```bash
eas build:configure
```
4. Create a build
```bash
eas build --platform android --profile development
```
5. Wait for the build to finish
At the end of the build, EAS CLI will show you:
- A QR code
- A download link for the .apk
6. Install the APK on your device
7. Open your app
After installing:
- Find your app icon (e.g., SmartVault) on your phone.   
- Open it — this is now your development client.
- You can refresh, debug, and connect it to your dev server.

### build your dev server
- start the dev client
```bash
npx expo start --dev-client
```
- scan the qr
