import mongoose from 'mongoose'

const { Schema, model, models } = mongoose

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
})

const Contact = models.Contact || model('Contact', contactSchema)

export { contactSchema }
export default Contact
