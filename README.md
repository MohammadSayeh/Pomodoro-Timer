# Pomodoro Timer ⏱️

A simple and functional Pomodoro Timer app built using **JavaScript ES Modules**, **Webpack**, and **pure CSS**.  
It includes custom work/break durations, sound notifications, persistent settings, a task list, and a responsive UI.

---

## 🚀 Features

- 🔁 Work & Break modes (with auto-switching)
- ⏳ Customizable durations with input validation
- 🔊 Selectable notification sounds
- 📋 Task list with delete option
- 💾 Settings saved with `localStorage`
- 📱 Responsive design
- 🎨 Styled with pure CSS

---

## 📁 Folder Structure

```
pomodoro-timer/
├── dist/                   # Webpack output (auto-generated)
├── node_modules/           # Installed dependencies
├── src/                    # Source code
│   ├── assets/             # Assets (sounds, images, etc.)
│   │   ├── default.mp3     # Default sound
│   │   ├── chime.mp3       # Optional sound
│   │   └── alarm.mp3       # Optional sound
│   ├── index.js            # App entry point
│   ├── timer.js            # Timer logic
│   ├── ui.js               # DOM handling
│   ├── settings.js         # Settings management
│   ├── tasks.js            # Task list logic
│   ├── notifications.js    # Sound alerts
│   └── style.css           # App styling
├── index.html              # HTML template
├── package.json            # Project metadata & scripts
├── webpack.config.js       # Webpack config
└── README.md               # You're here!

```

---

## 🛠️ Installation & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/pomodoro-timer.git
cd pomodoro-timer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App in Development Mode

```bash
npm start
```

It will open in your browser at [http://localhost:8080](http://localhost:8080)

### 4. Build for Production

```bash
npm run build
```

This will generate optimized files in the `/dist` folder.

---

## 📌 Implementation Notes

- **Modular JS**: Organized using ES Modules for maintainability.
- **Bundling**: Handled with Webpack, configured to load HTML, CSS, and sound assets.
- **Persistent Settings**: Stored in `localStorage` so user preferences remain across sessions.
- **Custom Sounds**: Users can choose between multiple alert sounds.
- **Responsiveness**: Uses media queries to adapt for small screen devices.
- **Clean UI**: Designed with pure CSS and semantic HTML.

---

## 📸 Demo Screenshot (optional)

![image](https://github.com/user-attachments/assets/a44c329b-6d7a-43d8-8769-8af6d2aa50b5)


---

## 📄 License

MIT License – Feel free to use and modify.

---

Made with ❤️ for learning and productivity!
