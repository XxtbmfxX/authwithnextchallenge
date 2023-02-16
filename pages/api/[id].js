import prisma from "../../prisma/client";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "PUT":
        const { id } = req.query;

        const updatedRecord = await prisma.user.update({
          where: { id: Number(id) },
          data: { ...req.body },
        });

        return res.status(200).json(updatedRecord);

      default:
        break;
    }
  } catch (err) {
    res.status(500).json({ err: err });
  }
}
