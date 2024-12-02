const express = require("express");
const userRouter = require("./routes/users.routes");
const port = 4000;

const app = express();


app.use(express.urlencoded({extended : true}));
app.use(userRouter);


app.get("/", (req, res) => {
    console.log("Welcome to the User Registration System!");
});


app.use((req, res) => {
    res.status(404).json({
        message: "404 !!! Not Found",
    });
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});