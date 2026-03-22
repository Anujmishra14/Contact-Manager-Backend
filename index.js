const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const mongoUri=process.env.MONGO_URI;
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(mongoUri)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// routes
app.use("/api/contacts", require("./routes/contactRoutes"));
const PORT=process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));