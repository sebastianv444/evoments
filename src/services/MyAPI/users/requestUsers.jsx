import EvoApi from "../EvoApi";

export const postUser = async (
  clerkId,
  email,
  firstName,
  lastName,
  phoneNumber,
  username
) => {
  try {
    const res = await EvoApi.post(`/api/users/sync`, {
      clerkId,
      email,
      firstName,
      lastName,
      phoneNumber,
      username,
    });
    return res.data;
  } catch (error) {
    console.error("Error al enviar el usuario a la base de datos:", error.status);
  }
};
