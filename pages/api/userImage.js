import prisma from "../../prisma/client";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        const { image, id } = req.body;
        console.log(image);
        const result = await prisma.user.findUnique({
          where: {
            id: id,
          },
        });

        if (result.image === image) {
          return res.status(204).json(postRes);
        }
        const postRes = await prisma.user.update({
          where: { id: id },
          data: {
            image: image,
            photo: image,
          },
        });
        console.log(postRes);
        return res.status(204).json(postRes);

      default:
        break;
    }
  } catch (err) {
    res.status(500).json(err);
  }
}
