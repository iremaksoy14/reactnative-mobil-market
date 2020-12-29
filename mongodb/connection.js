import mongodb from 'mongodb'
const { MongoClient } = mongodb

const URL = 'mongodb://localhost:27017';

MongoClient.connect(URL, (err, client) => {
  if (err) throw err;
  const db=client.db('yeni')
 const sorgu={}
  db.collection('Kahvaltilik').findOne(sorgu,(err,result)=>{
    if(err) throw(err);
    console.log(result)
    client.close;
  })
 
});