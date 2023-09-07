require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 8000;
const URI = process.env.URI;

// define the user schema
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
});

// create a User model based on the schema
const User = mongoose.model('User', userSchema);

// add cors to allow requests from our react app port
app.use(cors());

// without this, we cannot pass json in post req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/users', async (req, res) => {
	try {
		// use destructuring to extract properties from req.body
		const { name, age, gender } = req.body;
		// create new object using above properties
		const newUser = new User({ name, age, gender });
		await newUser.save();
		res.status(201).json(newUser);
	} catch (error) {
		console.log(error);
	}
});

async function connectDB() {
	try {
		await mongoose.connect(URI);
		console.log('connected to mongoDB');
	} catch (error) {
		console.log('connection to db failed', error);
	}
}

connectDB();

app.listen(PORT, () => {
	console.log('Server chal raha hai');
});
