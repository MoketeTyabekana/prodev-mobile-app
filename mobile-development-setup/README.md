# ProDev Mobile Setup

## 📌 Objective
This project guides you through setting up and testing your **mobile development environment** for React Native using the **Expo Framework**.  
Expo simplifies mobile app development by allowing you to build, test, and run applications directly on your physical device without needing heavy emulators.

---

## ✅ Requirements
Before starting, ensure you have the following installed:

- [Node.js LTS](https://nodejs.org/en/)  
- [Visual Studio Code](https://code.visualstudio.com/) (recommended IDE)  
- macOS, Linux, or Windows operating system  
- [Expo Go](https://expo.dev/go) installed on your physical device (Android or iOS)

---

## 🚀 Why Expo Go?
Unlike traditional mobile development that relies on resource-heavy emulators, **Expo Go** provides a cost-effective solution:  

- Runs React Native apps directly on your phone.  
- Works seamlessly with both **iOS and Android**.  
- Eliminates the need to purchase or maintain multiple devices/emulators.  
- Perfect for quick testing and iteration.  

---

## 📲 Installing Expo Go
1. Visit the official [Expo Go homepage](https://expo.dev/go).  
2. Select the latest SDK version.  
3. Install the app on your device:  
   - **Android** → [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)  
   - **iOS** → [Apple App Store](https://apps.apple.com/app/expo-go/id982107779)  
4. Open the Expo Go app on your device.  
5. Create a new account or log in with an existing one.  

---

## 🛠️ Setup Process
- Install Node.js and verify installation:
  ```bash
  node -v
  npm -v


npm install -g expo-cli
npx create-expo-app my-app
cd my-app
npm start

prodev-mobile-setup/
│
├── mobile-development-setup/
│   └── README.md   # Setup instructions & progress documentation
