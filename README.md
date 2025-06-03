# 📦 Blockchain REST API

A simplified blockchain implementation built with Node.js and Express. This REST API allows you to create and explore blocks that are mined using a Proof of Work algorithm.

## 🚀 Features

- RESTful API with Express
- **Create**, **list**, and **retrieve** blocks
- Implements **Proof of Work** with adjustable difficulty
- Block data stored persistently in a `JSON` file
- Centralized **error handling** and **logging**
- Uses **ES6 modules**
- **Test-driven development** using `vitest`
- Logs and errors written to physical `.log` files
- Stores complex object data inside blocks

## 📂 Project Structure

```
src/
├── controllers/         # Handles request logic
├── middleware/          # Error handling and logging
├── models/              # Block and Blockchain logic
├── routes/              # Express route definitions
├── services/            # Logging and file IO
├── tests/               # Unit tests with vitest
├── database/            # Persistent blockchain storage
└── app.js               # Entry point
```

## 📦 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/Ferenc02/Blockchain-Rest-API
   cd Blockchain-Rest-API
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the server**

   ```bash
   npm run start
   ```

4. **Run tests**
   ```bash
   npm run test
   ```

## 🧪 API Endpoints

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| GET    | `/api/blocks`     | List all blocks               |
| POST   | `/api/blocks`     | Create a new block with data  |
| GET    | `/api/blocks/:id` | Retrieve a block by its index |

**Example POST body (JSON):**

```json
{
  "sender": "Frank",
  "recipient": "Bob",
  "amount": 50000
}
```

## 🛠 Technologies Used

- Node.js
- Express.js
- Vitest (Testing)
- File system (for persistence)
- SHA-256 Hashing via `crypto`

## 📁 Logs

- Error logs: `logs/[date]/[timestamp].log`

## ✅ Assignment Compliance Checklist

| Requirement                          | Status |
| ------------------------------------ | ------ |
| MVC Architecture                     | ✅     |
| REST API                             | ✅     |
| ES6 Modules                          | ✅     |
| JSON Persistence                     | ✅     |
| Centralized Error Handling & Logging | ✅     |
| Proof-of-Work Implementation         | ✅     |
| Complex Object Storage               | ✅     |
| TDD with vitest                      | ✅     |
