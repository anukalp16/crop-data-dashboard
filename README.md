# 🌾 Crop Data & Revenue Dashboard

A lightweight vanilla JavaScript and HTML web application that fetches and visualizes agricultural crop data and revenue statistics from the [Open Government Data (OGD) Platform India](https://api.data.gov.in).

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project pulls real-time and historical agricultural data from India's official open data portal (`api.data.gov.in`) and presents it in a clean, interactive interface. It covers crop production statistics, seasonal trends, and revenue insights across various states and districts.

---

## ✨ Features

- 📊 Fetch and display crop production data by state, district, or season
- 💰 View revenue and yield statistics for major crops
- 🔍 Filter data by crop type, year, or region
- 📱 Responsive layout — works on desktop and mobile
- ⚡ Zero dependencies — pure HTML, CSS, and vanilla JavaScript
- 🔄 Live API calls with loading indicators and error handling

---

## 🛠 Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Markup     | HTML5                   |
| Styling    | CSS3                    |
| Logic      | Vanilla JavaScript (ES6+)|
| Data Source| api.data.gov.in (REST)  |

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- An API key from [data.gov.in](https://data.gov.in/help/how-use-datasets-apis)
- A local server (optional, but recommended to avoid CORS issues)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/crop-data-dashboard.git
   cd crop-data-dashboard
   ```

2. **Add your API key**

   Open `config.js` (or wherever you store your key) and replace the placeholder:
   ```js
   const API_KEY = "your_api_key_here";
   ```

3. **Run the project**

   You can open `index.html` directly in a browser, or use a local server to avoid CORS issues:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve .
   ```

   Then visit `http://localhost:8000` in your browser.

---

## 🌐 API Reference

This project uses the **Open Government Data Platform India** API.

**Base URL:**
```
https://api.data.gov.in/resource/
```

**Sample Endpoint:**
```
GET https://api.data.gov.in/resource/{resource-id}?api-key={YOUR_KEY}&format=json&limit=10
```

**Common Query Parameters:**

| Parameter  | Description                              |
|------------|------------------------------------------|
| `api-key`  | Your API key from data.gov.in            |
| `format`   | Response format (`json` or `csv`)        |
| `limit`    | Number of records to fetch               |
| `offset`   | Pagination offset                        |
| `filters`  | Field-level filters (e.g., `state=Punjab`)|

**Example Datasets Used:**

- [Crop Production Statistics](https://data.gov.in) — State/district-wise crop yield
- [Agricultural Revenue Data](https://data.gov.in) — MSP and revenue by crop

> 💡 You can browse available datasets at [data.gov.in/catalogs](https://data.gov.in/catalogs).

---

## 📁 Project Structure

```
crop-data-dashboard/
├── index.html          # Main HTML entry point
├── style.css           # Styling and layout
├── app.js              # Core application logic
├── api.js              # API fetch functions
├── config.js           # API key and base URL config
└── README.md           # Project documentation
```

---

## ⚙️ Configuration

All API settings are managed in `config.js`:

```js
const CONFIG = {
  BASE_URL: "https://api.data.gov.in/resource/",
  API_KEY: "your_api_key_here",
  FORMAT: "json",
  DEFAULT_LIMIT: 20,
};
```

> ⚠️ **Never commit your API key to a public repository.** Consider using environment variables or a `.env` file (with a gitignore entry) for production use.

---

## 📖 Usage

1. Open the app in your browser.
2. Use the filter controls to select a **crop type**, **state**, or **year range**.
3. Click **Fetch Data** to load results from the API.
4. Browse the table or chart view for production and revenue insights.
5. Use the **Export** button (if available) to download data as CSV.

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

Please make sure your code follows the existing style and is well-commented.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Open Government Data Platform India](https://data.gov.in) for making agricultural data publicly accessible.
- Ministry of Agriculture & Farmers Welfare, Government of India.