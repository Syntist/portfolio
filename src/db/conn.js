// src/db/conn.ts
import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
const dbName = process.env.COLLECTION_DB || "";

// store the client in globalThis to persist across reloads
let cachedClient= null;
let cachedDb = null

export async function connectDB() {
  if (cachedDb) {
    return cachedDb;
  }

  if (!connectionString) {
    throw new Error("Please define ATLAS_URI in .env");
  }

  if (!dbName) {
    throw new Error("Please define COLLECTION_DB in .env");
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(connectionString);
    await cachedClient.connect();
    console.log("✅ Database connected");
  }

  cachedDb = cachedClient.db(dbName);
  return cachedDb;
}