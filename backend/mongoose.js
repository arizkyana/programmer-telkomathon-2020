const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const Activity = require('./models/Activity');

const app = express();
const port = 2020;
const SECRET_KEY = 'telkomathon123';

//mongodb connect
const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'test';

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
app.use(bodyParser.json());

app.post('/user/register', function (req, res) {
	const body = req.body;
	//TODO: saving body data to mongodb. hash the password
	res.send(body);
});


app.put('/user/activity/:id', async function (req, res) {
	console.log(req.params.id);
	try {
		const activity = await Activity.findOne({ _id: req.params.id })
		const body = req.body;
		activity.activityName = body.activityName;
		activity.activityDescription = body.activityDescription;
		activity.activityPercentage = body.activityPercentage;
		await activity.save()
		res.send(activity)
	} catch {
		res.status(404)
		res.send({ error: "activity doesn't exist!" })
	}
	res.send('Got a update request at /activity')
});


app.post('/user/activity', async function (req, res) {
	const body = req.body;
	const activity = new Activity({
		activityUserId: '1',
		acitivityName: body.activityName,
		activityDescription: body.activityDescription,
		activityPercentage: body.activityPercentage
	});
	try{
		await activity.save();
		res.send('success insert activity')
	}catch(e){
		res.send(e.message);
	}
});

app.get('/user/activity', async function (req, res){
	const userid = '1';
	const activities = await Activity.find({activityUserId: userid});
	res.send(activities);
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});

