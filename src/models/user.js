import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

import { contactSchema } from './contact.js'

const SALT_WORK_FACTOR = 10

const { Schema, model, models } = mongoose
const { isEmail } = validator

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail, 'invalid email'],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contacts: [contactSchema],
  age: Number,
})

userSchema.pre('save', async function (next) {
  const user = this

  if (!user.isModified('password')) {
    return next()
  }

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
    this.password = await bcrypt.hash(this.password, salt)
    return next()
  } catch (err) {
    return next(err)
  }
})

userSchema.methods.validatePassword = async function (data) {
  return bcrypt.compare(data, this.password)
}

const User = models.User || model('User', userSchema)

export { userSchema }
export default User
