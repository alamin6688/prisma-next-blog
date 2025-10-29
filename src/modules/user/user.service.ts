import { prisma } from "../../config/db";

const creatUser = async (payload: any) => {
  console.log({ payload });
  const createdUser = await prisma.user.create({
    data: payload,
  });
  return createdUser;
};

export const UserService = {
  creatUser,
};
