# Snowfox 

### The browser that makes companies cry for your data.

![Linux](https://img.shields.io/badge/Linux-Available-238636?style=for-the-badge&logo=linux&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-Available-238636?style=for-the-badge&logo=windows&logoColor=white)

![Firefox](https://img.shields.io/badge/Based%20on-Firefox-FF7139?style=for-the-badge&logo=firefoxbrowser&logoColor=white)
![Status](https://img.shields.io/badge/Status-Beta-6E7681?style=for-the-badge)
![Privacy](https://img.shields.io/badge/Privacy-First-2EA043?style=for-the-badge)

</div>

---

Snowfox is a Firefox-based browser focused on privacy and reducing browser fingerprinting.

It ships with privacy-focused defaults, a clean interface, and useful extensions already set up so you don’t have to spend time configuring everything after install.

---

## Features

- Privacy-focused defaults out of the box
- Browser fingerprinting resistance
- Enhanced tracking protection
- SearXNG as the default search engine
- Vertical and horizontal tab support
- Dark UI by default
- uBlock Origin included
- Telemetry disabled
- Pocket disabled
- Sponsored content disabled

---

## Included Extensions

Snowfox ships with:

- ClearURLs
- Firefox Multi-Account Containers
- Mullvad Browser Extension
- NoScript
- uBlock Origin
- User-Agent Switcher and Manager

Everything here has a purpose — blocking trackers, isolating sessions, and making fingerprinting harder without adding unnecessary clutter.

---

## Screenshot

<img width="1577" height="860" alt="da browser" src="https://github.com/user-attachments/assets/2fbf9b4e-fcba-4678-890b-bdff9de2cc7d" />

---

## Fingerprinting Test

Snowfox running the EFF Cover Your Tracks test:

<img width="984" height="299" alt="results ahah" src="https://github.com/user-attachments/assets/55ebd1a9-240e-4517-b1cb-a3f63c5dc074" />

---

## Downloads

Get the latest build from the Releases page.

| Platform | File |
|----------|------|
| Windows | Snowfox-win64.zip |
| Linux | Snowfox-x86_64.AppImage |

Windows and Linux builds are available now. 

---

## Project Structure

```text
Snowfox/
├── browser/
│   ├── branding/
│   │   └── snowfox/
│   └── app/
│       └── distribution/
│           └── policies.json
├── build/
├── docs/
├── assets/
├── mozconfig
├── LICENSE
└── README.md
