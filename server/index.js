const express = require('express')
const app = express()
const port=process.env.PORT||3003;
const cors = require('cors');

app.use(cors()); //middleware
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello world!!")
})

//mongo-db configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-stack-book:x6RLSAZZrNpu5B0U@cluster0.2al65tk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    //creating a collection
    const bookCollections = client.db("BookInventery").collection("books");

    //inserting a book using post method.
    app.post("/upload-book",async(req,res)=>{
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    })

    //get all the books from database
    app.get("/all-books",async(req,res)=>{
      const books = bookCollections.find()
      const result =await books.toArray()
      res.send(result)
    })

    //updating books.
    app.patch("/book/:id",async(req,res)=>{
      const id = req.params.id;
      //console.log(id)
      const updateBookData = req.body
      const filter = {_id :new ObjectId(id)} //gives a objectid to the given object so that mongodb can work with it.
      const options = { upsert:true } //for inserting a document if no doocuments match the filter.
      const updateDoc ={
        $set:{
          ...updateBookData
        },
      }
      const result = await bookCollections.updateOne(filter,updateDoc,options)
      res.send(result)
    })

    //deleting books.
    app.delete("/book/:id",async(req,res)=>{
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)}
      const result = await bookCollections.deleteOne(filter)
      res.send(result)

    })
    //find by category
    app.get("/all-books",async(req,res)=>{
      let query = {}  //an empty object is created where we can insert categorised results in.
      if(req.query?.category){
        query ={category: req.query.category }
      }
      const result = await bookCollections.find(query).toArray()
      res.send(result)
    })
    app.get("/book/:id",async(req,res)=>{
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)}
      const result = await bookCollections.findOne(filter)
      res.send(result)

    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);


app.listen(port,()=>{
    console.log(`app is listening at port ${port}`)
})