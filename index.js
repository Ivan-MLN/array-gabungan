const express = require ("express")

const app = express ()
app.use(express.static('.'))
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html")
})
app.listen("5000", () => console.log("Running"))
