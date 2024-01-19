const express = require ("express")

const app = express ()
app.use(express.static('.'))
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html")
})
app.listen("8080", () => console.log("Running"))
