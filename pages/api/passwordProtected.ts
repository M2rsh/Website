// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req: any, res: any) {
    if ((req.query.key) === process.env.PRIVATE_KEY) {
      res.status(200).json({ message: "Wellcum", "secret data": "cum :flushed:" });
    } else {
      res.status(401).json({ error: 401, message: "Unauthorized" });
    }
  }
  