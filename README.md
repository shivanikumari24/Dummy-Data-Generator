# 🧪 Dummy Employee Data Generator

This project is a full-stack web app built using **Express.js**, **MongoDB**, and **Mongoose**, with a minimal frontend using plain HTML + JavaScript. It generates 10 random employee records in a MongoDB collection called `employees`, inside a database named `company`.

Every time the **"Generate Data"** button is clicked, the app:
- Clears existing data in the `employees` collection
- Generates 10 new employee documents with random values
- Includes fields like `name`, `salary`, `language`, `city`, `isManager`, and `title`

---

📦 Sample Employee Document

```json
{
  "name": "XYZ",
  "title": "Manager",
  "salary": 450000,
  "language": "Python",
  "city": "Bettiah",
  "isManager": true
}

```
---
🚀 Features

- One-click generation of dummy employee data
- Auto-clears old entries before each generation
- Dynamic randomization of fields like skills, title, and more
- Fully integrated with MongoDB using Mongoose
- Clean RESTful API with POST request to /generate
