# Kappka
Apliacja do zbierania butelek i puszek objętych systemem kaucyjnym w Polsce od 1 października 2025 roku.
Stworzona przy pomocy EXPO i React Native, zaprojektowana jako dodatkowa "gra" do zbierania opakowań objętych kaucją.

## Wymagania

Przed uruchomieniem aplikacji na własnym systemie, zainstaluj
* **Node.js** razem z **npm**
* **npm** lub **yarn**
* **Expo Go** (na telefonie Android/iOS) lub **emulator** do testowania aplikacji.
    *   [Expo Go (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US)
    *   [Expo Go (iOS)](https://apps.apple.com/us/app/expo-go/id1258282411)


## Instalacja
1. **Sklonuj/Pobierz repozytorium:**
    ```
    git clone https://github.com/kamemae/kappka.git
    cd kappka
    ```
2. **Zainstaluj zależnośći:** (mega śmiesznie to brzmi po polsku)
    ```
    npm i
    # lub yarn install
    ```
3. **Uruchom serwer EXPO:**
    ```
    npx expo start
    ```
4. **Uruchom aplikacje na telefonie/emulatorze:**
    * **EXPO GO:** Zesnakuj kod QR z terminala
    * **EMULATOR:** Naciśnij `a` (Android) lub `i` (iOS) w oknie terminala odpowiedzialnego za uruchomiony serwer `npx expo start` (upewnij sie ze masz emulator)
    * **Development Build:** zrzuć okiem na [development build](https://docs.expo.dev/develop/development-builds/introduction/)


## Użycie
Kiedy aplikacja zostanie uruchomiona:
1. **UŻYWAĆ SKANERA KODÓW KRESKOWYCH**: Aplikacja może zapytać cię o dostęp do aparatu, który jest podstawową funkcją do poprawnego działania aplikacji.
2. Nrazie tyle, prace nad aplikacją trwają, dlatego jeszcze nie można jej pobrać z zakładki `releases`.


## API
Aplikacja korzysta z wewnętrznego api do operowania na skanarze (api załadowane razem z aplikacją).

## Konfiguracja 
Konfiguracja dla EXPO znajduje się w `app.json`. Tam można zmieniać ustawienia tj
*   `name`: Wyświetlana nazwa aplikacji
*   `slug`: URL aplikacji
*   `version`: Wersja aplikacji
*   `icon`, `splash`: Ikona i Splashscreen aplikacji
*   `andoird`, `ios`: Konfiguracje dla poszczegolnych platform
*   `plugins`: Wtyczki expo używane w projekcie (tj. `expo-router`).

Przykład (`app.json`):
```json
{
  "expo": {
    "name": "kappka",
    "slug": "kappka",
    "version": "0.0.0",
    "orientation": "portrait",
    "icon": "./assets/expo.icon/Assets/icon.json",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/expo.icon/Assets/images/android-icon-foreground.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}
```



## Licencja
Projekt jest chroniony przez **MIT License**. Sprawdź [LICENSE](LICENSE) aby dowiedzieć się więcej

<hr/>

# Kappka
An application for collecting returnable bottles and cans under "system kaucyjny" in Poland. Made using EXPO and React Native.

## NOTE
This part of readme is ai generated because I'm really bad in writting readme for my repos.

# 🚀 Requirements

Before you begin, ensure you have the following installed on your development machine:

*   **Node.js**: [LTS version recommended](https://nodejs.org/en/download/) (Includes npm)
*   **npm** or **Yarn**: For package management.

*   **Expo Go App**: Install on your mobile device (iOS/Android) or use an emulator/simulator for easy testing.
    *   [Expo Go for iOS](https://apps.apple.com/us/app/expo-go/id1258282411)
    *   [Expo Go for Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US)

## 📦 Installation & Setup

Follow these steps to get your development environment set up:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kamemae/kappka.git
    cd kappka
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```

3.  **Start the Expo development server:**
    ```bash
    npx expo start
    ```
    This command will open a new tab in your browser with the Expo Dev Tools, and display a QR code in your terminal.

4.  **Open the app on your device/emulator:**
    *   **Using Expo Go:** Scan the QR code displayed in your terminal or in the Expo Dev Tools with the Expo Go app on your phone.
    *   **Using an Emulator/Simulator:** Press `a` for Android emulator or `i` for iOS simulator in the terminal where `npx expo start` is running (ensure you have an emulator/simulator set up).
    *   **Development Build:** For more advanced testing and native module access, consider creating a [development build](https://docs.expo.dev/develop/development-builds/introduction/).

## 💡 Usage

Once the app is running, you can:

1.  **Grant Camera Permissions**: The app may prompt you to grant camera access, which is necessary for its core functionality.
2.  **Explore the UI**: Navigate through the various screens and components built with React Native and Expo Router.

### API Overview

The project includes internal utility functions, such as `getDataFromScaner`, located in `services/api/device/api.js`. This function is designed to facilitate data retrieval from a scanning mechanism.

```javascript
// services/api/device/api.js
export default async function getDataFromScaner() {
    // Implementation details for scanner data retrieval
    // ... (e.g., interact with expo-camera, process frames, return data)
}
```

## ⚙️ Configuration

The primary configuration for the Expo project is managed in `app.json`. Here you can define various settings including:

*   `name`: The display name of your app.
*   `slug`: The URL slug for your app.
*   `version`: Your app's version number.
*   `icon`, `splash`: Paths to your app's icon and splash screen assets.
*   `ios`, `android`: Platform-specific configurations.
*   `plugins`: Expo plugins used in the project (e.g., `expo-router`).

Example (`app.json` snippet, inferred from project structure):
```json
{
  "expo": {
    "name": "kappka",
    "slug": "kappka",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/expo.icon/Assets/icon.json",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/expo.icon/Assets/images/android-icon-foreground.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}
```
*Note: Some asset paths in this example are simplified based on the provided project structure and may require actual file creation or adjustment.*

## 🤝 Contributing

We welcome contributions to `kappka`! If you're interested in improving the project, please follow these general guidelines:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3.  **Make your changes and test thoroughly.**
4.  **Commit your changes** with clear and concise commit messages.
5.  **Push your branch** to your forked repository.
6.  **Open a Pull Request** to the `main` branch of this repository, describing your changes in detail.

Please ensure your code adheres to the project's coding style and practices.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

## 🙏 Acknowledgments

*   Built with [Expo](https://expo.dev) and [React Native](https://reactnative.dev/).
*   Initiated using [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
*   Thanks to the maintainers of all the open-source libraries used in this project.