
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const User = new Schema({
		id: String,
		displayName: String,
		username: String,
		password: String,
		twitterId: String,
		githubId: String,
		userData: Array
});

export default mongoose.model('User', User);