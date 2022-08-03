// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req: any, res: any) {
  if ((req.query.name).toLowerCase === "coffee") {
    res.status(418).json({ error: 418, message: "I'm a teapot" });
  } else {
    res.status(200).json({ name: req.query.name ? req.query.name : "World" });
  }
}
