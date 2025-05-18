import mongoose from "mongoose";
import express from "express";
import { Employ } from "./models/Employ.js";

let conn = await mongoose.connect("mongodb://localhost:27017/employees");
const app = express();
const port = 3000;

const titles = ["Developer", "Manager", "Tester", "Designer"];
const languages = ["python", "react", "javaScript", "php", "Express"];
const cities = ["Noida", "delhi", "dehradun", "Mohali", "Bettiah"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getRandomSalary(min = 20000, max = 100000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/", async (req, res) => {
  for (let i = 1; i <= 10; i++) {
    const title = getRandomItem(titles);

    const emp = new Employ({
      title: title,
      salary: getRandomSalary(),
      language: getRandomItem(languages),
      city: getRandomItem(cities),
      isManager: title ==="Manager"
    });
    await emp.save();
  }
  console.log("✅ 10 random employees created without faker!");
  res.send("Hello World34!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
