const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
	_id : mongoose.Schema.Types.ObjectId,
	name : String,
	genre : String,
	poster : String,
	link : String,
	disp : String,
	duration: String
})

module.exports = mongoose.model('movie',movieSchema);