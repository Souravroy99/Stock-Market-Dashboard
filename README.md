# 📈 Stock Market Dashboard

A full-stack web application to visualize real-time and historical stock market data for multiple companies.
Built with **React**, **Chart.js**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

### **Frontend**

* Responsive UI built with **React** and **Tailwind CSS**
* Left panel with scrollable list of companies
* Main panel with:

  * Company **logo** & **name**
  * Key **stock metrics** (52-week high, 52-week low, moving averages, etc.)
  * **Interactive line chart** of historical stock prices
* Smooth loading states and error handling

### **Backend**

* REST API built with **Node.js** and **Express**
* Routes for:

  * Get all companies
  * Get company by ID
  * Get historical stock data for a company
  * Get latest stock metrics
* Uses **Axios** or `node-fetch` to retrieve live stock data from APIs (e.g., Alpha Vantage, Yahoo Finance)
* Data validation with **Mongoose schemas**
* Error handling middleware

### **Database**

* **MongoDB** for storing:

  * Company details (`name`, `ticker`, `sector`, `logoUrl`)
  * Historical stock data (date, open, high, low, close, volume)
* Indexed fields for faster queries

---

## 🏗️ Project Structure

```
📦 stock-dashboard
 ┣ 📂 backend
 ┃ ┣ 📂 controllers
 ┃ ┃ ┣ company.controller.js
 ┃ ┃ ┣ stock.controller.js
 ┃ ┣ 📂 models
 ┃ ┃ ┣ Company.js
 ┃ ┃ ┣ StockData.js
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ company.routes.js
 ┃ ┃ ┣ stock.routes.js
 ┃ ┣ app.js
 ┃ ┣ index.js
 ┃ ┗ .env
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ Sidebar.jsx
 ┃ ┃ ┃ ┣ StockChart.jsx
 ┃ ┃ ┣ App.jsx
 ┃ ┃ ┣ main.jsx
 ┃ ┗ tailwind.config.js
 ┗ README.md

```

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/your-username/stock-dashboard.git
cd stock-dashboard
```

### **2️⃣ Backend Setup**

```bash
cd backend
npm install
```

**Create `.env` file:**

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/stocks
CORS_ORIGIN=*
```

**Run the backend:**

```bash
npm run dev
```

---

### **3️⃣ Frontend Setup**

```bash
cd ../frontend
npm install
npm run dev
```

Visit: **[http://localhost:5173](http://localhost:5173)**

---

## 📌 API Routes

### 🏢 Company Routes
| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | `/api/companies`    | Get all companies        |
| GET    | `/api/company/:id`  | Get a company by ID      |
| POST   | `/api/company`      | Create a new company     |

### 📈 Stock Data Routes
| Method | Endpoint                   | Description                       |
|--------|----------------------------|-----------------------------------|
| GET    | `/api/stock/:companyId`    | Get stock data for a company      |
| POST   | `/api/stock`               | Add stock data for a company      |

---

## 🛠 Tech Stack

**Frontend:** React, Tailwind CSS, Chart.js
**Backend:** Node.js, Express, Axios
**Database:** MongoDB, Mongoose

---

## 📌 Future Improvements

* Add user authentication for personalized watchlists
* Enable real-time WebSocket updates for live prices
