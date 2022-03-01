import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Burgers = [{ id: 1, name: 'Swiss Burger', cheese: 'swiss' }, { id: 2, name: 'Bleu Burger', cheese: 'roquefort' }]
}


export const dbContext = new DbContext()
