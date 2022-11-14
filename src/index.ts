import express from "express";
const app = express()

app.use(express.json())
app.get("/", (req, res) => {
  return res.send("hello word ts with express")
})
app.get("/test", (req, res) => {
  return res.send("hello word ts with express test")
})

app.post("/api/data", (req, res) => {
  console.log(req.body)

  return res.sendStatus(200)
})
app.all("/api/all", (req, res) => {
  return res.sendStatus(200)
})


app.listen(4001, () => {
  console.log("Server running in localhost:4001")
})