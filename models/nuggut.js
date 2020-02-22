const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const nuggutSchema = new Schema({ 
	item: { 
		type: String, 
		required: [true, 'The text field is required'] 
	} 
})

const nuggut = mongoose.model('nuggut', nuggutSchema);

module.exports = nuggut;