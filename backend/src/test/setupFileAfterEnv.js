import mongoose from 'mongoose'
import { beforeAll, afterAll } from '@jest/globals'
import { initDatabase } from '../db/init'

beforeAll(async () => {
  await initDatabase()
})

afterAll(async () => {
  await mongoose.disconnect()
})
