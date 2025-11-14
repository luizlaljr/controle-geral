import express, { Request, Response } from "express";
import usersRoutes from "./routes/usersRoutes";

const app = express();
app.use(express.json());

app.use(usersRoutes);

const port = process.env.PORT || 3000;

/*
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World 🌍");
});
*/

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
