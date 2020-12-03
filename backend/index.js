const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 2020;
const SECRET_KEY = 'telkomathon123';

//Get the default connection
app.use(bodyParser.json());

/**middleware & helper function*/
function parseToken(req, res, next) {
	const token = getToken(req.headers);
	let resp = {};
	try {
		let decoded = jwt.verify(token, SECRET_KEY);
		req.userid = decoded.userid;
		next();
	} catch (err) {
		resp.code = 500;
		resp.message = err;
		res.status(500).send(resp)
	}
	
}
const getToken = (headers) => {
	if (headers && headers.authorization && headers.authorization.includes('Bearer')) {
		const parted = headers.authorization.split(' ');
		if (parted.length === 2) {
			return parted[1];
		}
	}
	return undefined;
};
//**end midleware & helper function */

app.get('/', (req, res) => {
	res.send('Hello World!')
});

app.post('/user/register', function (req, res) {
	const body = req.body;
	//TODO: saving body data to mongodb. hash the password
	res.send(body);
});

app.post('/user/login', function (req, res) {
	const employee = { //dummy data, TODO: check data from MongoDB
		userid: '1',
		username: 'telkomathon',
		password: '12345678'
	};
	const body = req.body;
	let resp = {};
	if (body.username == employee.username && body.password == employee.password) {
		//send response success and jwt for authentication
		let token = jwt.sign({ userid: employee.userid }, SECRET_KEY)
		resp.code = 200;
		resp.data = {
			token: token
		};
	} else {
		resp.code = 500;
		resp.message = 'Authentication Failed';
	}
	res.send(resp);
});

app.post('/user/checkin', parseToken, function (req, res) {
	let resp = {};
	if (!req.userid) {
		resp.code = 500;
		resp.message = 'User Id Not Found';
	} else {
		//fetch from db by userid to get user detail
		resp.code = 200;
		resp.data = {
			userid: req.userid
		}
	}
	res.send(resp)
});

app.get('/user/activity', function (req, res) {
	const activities = [{ //get activity by user id
		activityId: '1',
		activityName: 'Meeting TelkomAthon',
	},
	{
		activityId: '1',
		activityName: 'Mentoring TelkomAthon',
	}
	];

	const resp = {
		code: '200',
		message: 'success',
		data: activities
	};
	res.send(resp);
});

app.delete('/user/activity/:id', function (req, res) {
	const activity_id = req.params.id;
	//cotinue to process delete from mongo
	res.send('Got a DELETE request at /activity')
});

app.put('/activity', function (req, res) {
	res.send('Got a update request at /activity')
});

app.post('/user/checkout', function (req, res) {
	res.send('Got a checkout request at /user')
});

app.post('/user/logout', function (req, res) {
	res.send('Got a logout request at /user')
});

app.post('/user/activity', function (req, res) {
	res.send('Got a post request at /activity test')
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});

