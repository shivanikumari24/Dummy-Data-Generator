import mongoose from "mongoose";
import express from "express";
import { Employ } from "./models/Employ.js";

let conn = await mongoose.connect("mongodb://localhost:27017/company");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getRandomSalary(min = 20000, max = 100000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/generate", async (req, res) => {
  //clear the employee
  await Employ.deleteMany({});
  //generate random data
  let titles = ["Developer", "Manager", "Tester", "Designer"];
  let languages = ["python", "react", "javaScript", "php", "Express"];
  let cities = ["Noida", "delhi", "dehradun", "Mohali", "Bettiah"];

  for (let i = 1; i <= 10; i++) {
    const title = getRandomItem(titles);

    const emp = new Employ({
      title: title,
      salary: getRandomSalary() ,
      language: getRandomItem(languages),
      city: getRandomItem(cities),
      isManager: title === "Manager",
    });
    await emp.save();
  }
  console.log("✅ 10 random employees created without faker!");
});

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
