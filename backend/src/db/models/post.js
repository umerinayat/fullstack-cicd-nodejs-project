import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    contents: String,
    tags: { type: [String], required: true },
  },
  { timestamps: true },
)

export const Post = mongoose.model('post', postSchema)
