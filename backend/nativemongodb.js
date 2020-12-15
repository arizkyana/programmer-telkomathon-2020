const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

const app = express();
const port = 2020;
const SECRET_KEY = 'telkomathon123';

//mongodb connect
const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'test';

let client;
const connectDB = async() => {
	if(!client){
		client = await MongoClient.connect(url);
	}
}
const db = () => {
	return client.db(dbName);
}
//end mongodb connect


//Get the default connection
app.use(bodyParser.json());


app.post('/user/activity', async function (req, res) {
	const body = req.body;
	await connectDB();

	//we define the collection
	const collection = db().collection('activities');
	const insertActivity = await collection.insertOne({
		activityUserId: '1',
		acitivityName: body.activityName,
		activityDescription: body.activityDescription,
		activityPercentage: body.activityPercentage
	});
	if(insertActivity){
		res.send('success insert activity')
	}else{
		res.send('failed insert activity')
	}
});

app.get('/user/activity', async function (req, res){
	const userid = '1';
	await connectDB();
	const collection = db().collection('activities');
	const listActivity = await collection.find({activityUserId: userid}).toArray();
	res.send(listActivity);
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});

