import express from "express";
import usersRouter from "./routes/usersRouter.js";
import todosRouter from "./routes/todosRouter.js";
import { notFoundHandler } from "./middleware/endpointnotfound.js";



//sorgu parametreleri


const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/todos", todosRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Todo API");
}); 

app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
