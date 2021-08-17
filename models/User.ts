import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
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

UserSchema.plugin(uniqueValidator)

export default mongoose.models.User || mongoose.model('User', UserSchema)
