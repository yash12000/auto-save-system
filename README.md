# Auto-Saving System (BlackRock Challenge)

## 🚀 How to Run

### Install
npm install

### 🌐 Start Server

The application runs locally at:

http://localhost:5477

⚠️ Note:
This is a local server URL and will only work after running the project on your machine or via Docker.

## 📌 API Endpoints

### Transactions
POST /blackrock/challenge/v1/transactions:parse  
POST /blackrock/challenge/v1/transactions:validator  
POST /blackrock/challenge/v1/transactions:filter  

### Returns
POST /blackrock/challenge/v1/returns:nps  
POST /blackrock/challenge/v1/returns:index  

### Performance
GET /blackrock/challenge/v1/performance  

---

## ⚙️ Features

- Auto-saving via expense rounding
- q (fixed override), p (extra addition), k (grouping)
- Inflation-adjusted returns
- NPS and Index Fund calculations
- Handles large datasets (up to 1M transactions)

---

## 🐳 Docker

### Build
docker build -t blk-hacking-ind-yash-janbandhu .

### Run
docker run -p 5477:5477 blk-hacking-ind-yash-janbandhu

---

## 🧠 Design

- Modular architecture (controllers, services, utils)
- Rule engine for temporal constraints
- Scalable processing (O(n))

---

## 🌐 Live Deployment

API is live at:

https://auto-save-system.onrender.com

### Health Check
GET / → confirms server is running

### Example APIs
POST /blackrock/challenge/v1/returns:index  
GET /blackrock/challenge/v1/performance  

## 👨‍💻 Author
Yash Janbandhu # auto-save-system
