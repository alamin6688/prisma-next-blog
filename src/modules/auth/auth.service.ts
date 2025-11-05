import { error } from "console";
import { prisma } from "../../config/db";

const loginWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      email,
      status: "ACTIVE",
    },
  });
  if (!user) {
    throw new Error("User not found!");
  }

  if (password === user.password) {
    return user;
  } else {
    throw new Error("Password is incorrect!");
  }
};

const authWithGoogle = async (req: Request, res: Response) => {};

export const AuthService = {
  loginWithEmailAndPassword,
  authWithGoogle,
};
