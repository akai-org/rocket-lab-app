import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  description: String,
})

export const Item = mongoose.models.Item || mongoose.model('Item', itemSchema)
