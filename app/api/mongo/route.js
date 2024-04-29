import {MongoClient} from "mongodb"
import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({"a": 34})
}


// Replace the uri string with your connection string.
const uri = "mongodb+srv://Patshala-Students:0V28OWZ9OCUbkiro@cluster0.oartu2f.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('Prdhan-Patshala');
    const movies = database.collection('users');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);