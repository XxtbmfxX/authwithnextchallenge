import prisma from "../../prisma/client";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        const data = await prisma.user.findMany();
        return res.status(200).json(data);
      case "POST":
        const postRes = await prisma.user.create({
          data: {
            ...req.body,
          },
        });
        return res.status(200).json(postRes);

      default:
        break;
    }
  } catch (err) {
    res.status(500).json(err);
  }
}
