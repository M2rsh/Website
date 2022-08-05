// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req: any, res: any) {
    res.status(Number(req.query.status)).json({ error: Number(req.query.status), message: "Test Error" });
}
  