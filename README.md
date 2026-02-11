# General Keyboard Page Turner (Left/Right Keys)

[繁體中文版](./README_zh.md)

A versatile and lightweight userscript that allows you to navigate through pages using your keyboard's arrow keys. No more hunting for the "Next" button with your mouse!

## 🚀 Features

* **Keyboard Navigation**: Use `Left Arrow` for the previous page and `Right Arrow` for the next page.
* **Smart Detection**: Automatically identifies pagination elements based on text, titles, or aria-labels.
* **Multi-language Support**: Supports English (Next, Prev, etc.), Traditional Chinese, and Simplified Chinese.
* **Smart Focus Protection**: Automatically disables shortcuts when you are typing in input fields or textareas to prevent accidental navigation.
* **Broad Compatibility**: Works on most websites with standard pagination (A tags, Buttons, Divs, etc.).

## 🛠️ How it Works

The script scans the page for specific keywords such as:
- **Previous**: `Previous`, `Prev`, `Older`, `Back`, `上一頁`, etc.
- **Next**: `Next`, `Forward`, `Newer`, `下一頁`, etc.

It priority-checks for direct links (`<a>` tags) for stability but can also simulate clicks on buttons or interactive elements.

## 📦 Installation

1.  Install a userscript manager like **Tampermonkey** or **Violentmonkey**.
2.  Create a new script and paste the code from this repository.
3.  Save and refresh the page you want to use it on.

## ⌨️ Shortcuts

| Action | Key |
| :--- | :--- |
| **Previous Page** | `←` (Left Arrow) |
| **Next Page** | `→` (Right Arrow) |

---

**Author:** Howard Zhen  
**Version:** 1.0
