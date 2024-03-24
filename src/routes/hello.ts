import { Router } from "express";
const router = Router();

type helloResponse = string;

router.get<{}, helloResponse>("/", (req, res) => {
  res.json("Hello!!s!");
});

export default router;
