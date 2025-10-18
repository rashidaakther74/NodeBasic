const express = require("express");

const app = express();

app.get("/products/:id", (req,res) =>{

    if (!/^[0-9]+$/.test(req.params.id)) {
    return res.status(400).send("Invalid ID. Only numbers are allowed.");
  }
    res.send(`<h2> ID =${req.params.id} </h2>`);
});


app.use((req, res) => {
  res.status(404).send({
    message: "Not a valid route",
  });
});

app.listen(3000, () => {
    console.log("server is running at http:// localhost:3000");
});