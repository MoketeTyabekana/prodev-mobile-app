# ProDev Mobile App – 0x00

## 📌 Objective
The purpose of this task is to **set up your first mobile application** using the **Expo Router template**.  
You will scaffold a new Expo project, explore the file structure of a React Native application, modify the home screen, and document the behavior of the `reset-project` command.

---

## 🛠️ Steps to Scaffold the Project

1. **Navigate to the Project Directory**
   ```bash
   cd prodev-mobile-setup

npx create-expo-app@latest .

app/                  # Core application screens (using file-based routing)
app/(tabs)/index.tsx  # Home screen (default route)
constants/Colors.ts   # Color constants for styling
package.json          # Project metadata & dependencies

app/(tabs)/index.tsx


npx expo start


---

## 🔄 Resetting the Project
Run the reset command:
```bash
npm run reset-project

Do you want to move existing files to /app-example instead of deleting them? (Y/n): y
📁 /app-example directory created.
➡️ /app moved to /app-example/app.
➡️ /components moved to /app-example/components.
➡️ /hooks moved to /app-example/hooks.
➡️ /constants moved to /app-example/constants.
➡️ /scripts moved to /app-example/scripts.

📁 New /app directory created.
📄 app/index.tsx created.
📄 app/_layout.tsx created.

✅ Project reset complete. Next steps:
1. Run `npx expo start` to start a development server.
2. Edit app/index.tsx to edit the main screen.
3. Delete the /app-example directory when you're done referencing it.

**Key Notes**
1.The original project files were moved into a backup folder: /app-example/.
2.A fresh app/ directory was generated with minimal files (index.tsx and _layout.tsx).
3.This is useful for starting fresh while keeping a backup of your previous code for reference.