import mongoose from 'mongoose'

const { Schema, model, models } = mongoose

const userSchema = new Schema({
  name: String,
  age: Number,
})

const User = models.User || model('User', userSchema)

export { userSchema }
export default User
