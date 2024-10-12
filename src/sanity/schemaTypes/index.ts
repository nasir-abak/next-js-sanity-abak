import { type SchemaTypeDefinition } from 'sanity'
import { student } from './student'
import { teacher } from './teacher'

import product from "./products"



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [student, teacher],
}
