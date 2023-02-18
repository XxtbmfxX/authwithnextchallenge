import prisma from "../../prisma/client";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        const email = req.body.email;
        const result = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        return res.status(200).json(result);
      case "POST":
        const { name, bio, image, phone, id } = req.body;
        const postRes = await prisma.user.update({
          where: { id: id },
          data: {
            name: name,
            bio: bio,
            image: image,
            phone: phone,
          },
        });
        return res.status(204).json(postRes);

      default:
        break;
    }
  } catch (err) {
    res.status(500).json(err);
  }
}
