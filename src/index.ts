import express, { Request, Response } from "express";

const app = express();

const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.get("/gm", (req: Request, res: Response) => {
  res.json({ message: "Hello good morning peeps" });
});

app.get("/greetings/night", (req: Request, res: Response) => {
  res.json({ message: "Hello good night peeps, have a great day" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
