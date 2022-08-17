// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req: any, res: any) {
    if ((req.query.key) === process.env.PRIVATE_KEY) {
      res.status(200).json({ message: "Welcum admin or sum shit im so fucking stupid this gonna be breached in like 5 minutes cause im an idiot", "secret data": "cum :flushed:" });
    } else {
      res.status(401).json({ error: 401, message: "Unauthorized" });
    }
  }
  