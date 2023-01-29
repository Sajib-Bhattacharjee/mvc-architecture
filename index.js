const express = require("express");
const app = express();
const PORT = 4000;

const userRouter = require("./routes/users.route");
const adminRouter = require("./routes/admin.route");

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(adminRouter);

//Error Handling...
app.use((req, res, next) => {
  res.status(404).json({
    message: "Something Broke...",
  });
});

//Server Running....
app.listen(PORT, () => {
  console.log(
    `This Server is successfully running at http://localhost:${PORT}`
  );
});
