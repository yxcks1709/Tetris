# 🎮 Tetris – JavaScript Game

A classic **Tetris** clone built entirely with **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6 Modules)**.  
This project was developed from scratch to practice data structures, DOM manipulation, `requestAnimationFrame()` game loops, and **Canvas rendering**.

---

## 🧩 Features

- ✅ Smooth piece movement with collision detection  
- ✅ Clockwise and counter-clockwise rotation  
- ✅ Automatic line clearing  
- ✅ Dynamic scoring system  
- ✅ Preview of the next 3 tetrominoes  
- ✅ **HOLD** system to store and swap pieces  
- ✅ Drop shadow (*ghost piece*)  
- ✅ Hard drop with the spacebar  
- ✅ Restart after *Game Over*  
- ✅ Retro-style pixel art interface 🎮

---


## 🎮 Controls
| Key     | Action                     |
| ------- | -------------------------- |
| ⬅️ / ➡️ | Move piece left / right    |
| ⬇️      | Soft drop (faster descent) |
| ⬆️      | Rotate piece clockwise     |
| `C`     | Hold / swap current piece  |
| `Space` | Hard drop (instant fall)   |

---

## 📸 Preview

<img width="1919" height="953" alt="image" src="https://github.com/user-attachments/assets/21734ec3-d90c-4f79-a53f-addf484ce436" />


---

## 🛠️ Installation & Run

1. Clone this repository:

```bash
git clone https://github.com/yxcks1709/Tetris.git
Open the project in your favorite code editor (VS Code recommended).
Open index.html directly in your browser or use a local server like Live Server for a better development experience.
```

---
## 📁 Project Structure

```bash
Tetris/
├── index.html           # Main HTML structure
├── style.css            # Retro pixel-art styling
└── scripts/
    ├── main.js          # Entry point: initializes and runs the game loop
    ├── game.js          # Core game logic and state handling
    ├── boardTetris.js   # Board handling, line clearing, and collision detection
    ├── tetromino.js     # Tetromino shapes, rotations, and color rendering
    └── grid.js          # Base grid class for drawing and positioning
```

---

## 🧠 Game Architecture

- Game – Controls the main game loop (update()), handles scoring, auto-fall, HOLD logic, and keyboard input.
- BoardTetris – Extends Grid and manages the board state, collision checks, line clearing, and Game Over detection.
- Tetromino – Defines all 7 Tetris pieces with their shapes, rotations, and custom colors.
- TetrominoBag – Implements the 7-bag randomization system, manages piece generation, and controls the preview queue.
- BoardNext & BoardHold – Handle rendering of the upcoming pieces and the held piece respectively

---

## 👤 Author

Ariel Muñoz – @yxcks1709
