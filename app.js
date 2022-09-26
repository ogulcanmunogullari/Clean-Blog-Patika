import express from "express"

const app = express()
app.set("view engine", "ejs")

//Middleware
app.use(express.static("public"))

//Routes
app.get("/", (req, res) => {
  res.render("index")
})
app.get("/about", (req, res) => {
  res.render("about")
})
app.get("/post", (req, res) => {
  res.render("post")
})
app.get("/add-post", (req, res) => {
  res.render("add_post")
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
