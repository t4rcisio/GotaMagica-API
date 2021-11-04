import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.DATABASE_URL)

export default async function connect(){
   if(!client.isConnected){
       await client.connect()
   }

   const db = client.db(process.env.DATABASE_NAME)
   return { db, client}
}