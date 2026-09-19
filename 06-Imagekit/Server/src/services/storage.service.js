import ImageKit, { toFile } from "@imagekit/nodejs";
import dotenv from "dotenv";

dotenv.config();

const storageInstance = new ImageKit({
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
  urlEndpoint: process.env.IK_URL,
});

export const sendFiles = async (file, fileName) => {
  if (
    !process.env.IK_PUBLIC_KEY ||
    !process.env.IK_PRIVATE_KEY ||
    !process.env.IK_URL
  ) {
    throw new Error("ImageKit env variables are missing");
  }

  if (!file || !fileName) {
    throw new Error("File or fileName is missing");
  }

  const obj = {
      file: await toFile(file, fileName),
    fileName: fileName,
    folder: "cohort-3",
  };

  return await storageInstance.files.upload(obj);
};