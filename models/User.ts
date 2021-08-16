import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  email: String,
  email_verified: Boolean,
  records: [
    {
      exercise: String,
      date: {
        type: Date,
        default: Date.now(),
      },
      set: Number,
      rep: Number,
      weight: Number,
      rpe: Number,
      totalVolume: Number,
    },
  ],
})

const User = mongoose.model('User', UserSchema)

export default User
