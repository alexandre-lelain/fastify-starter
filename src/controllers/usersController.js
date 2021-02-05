import User from '../models/user.js'
import { calculateAge } from './../services/userService.js'

export default {
  create: async (request, reply) => {
    try {
      const { body: user } = request
      const realAge = calculateAge(user.age)
      const newUser = await User.create({ ...user, age: realAge })
      reply.code(201).send(newUser)
    } catch (e) {
      if (e.code === 11000) {
        reply.code(409).send('This email is already taken.')
      }
      reply.code(500).send(e)
    }
  },

  fetch: async (_, reply) => {
    try {
      const users = await User.find({})
      reply.code(200).send(users)
    } catch (e) {
      reply.code(500).send(e)
    }
  },

  get: async (request, reply) => {
    try {
      const { id } = request.params
      const user = await User.findById(id)
      reply.code(200).send(user)
    } catch (e) {
      reply.code(500).send(e)
    }
  },

  update: async (request, reply) => {
    try {
      const { params, body: user } = request
      const userUpdated = await User.updateOne({ id: params.id, ...user })
      reply.code(200).send(userUpdated)
    } catch (e) {
      reply.code(500).send(e)
    }
  },

  delete: async (request, reply) => {
    try {
      const { id } = request.params
      const deletedUser = await User.deleteOne({ id })
      reply.code(200).send(deletedUser)
    } catch (e) {
      reply.code(500).send(e)
    }
  },
}
