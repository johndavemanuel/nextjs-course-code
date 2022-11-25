import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://dave:xnKgJLRtv7YKOO66@cluster0.z4uxy.mongodb.net/udemy-next-js?retryWrites=true&w=majority"
  );

  return client;
}
