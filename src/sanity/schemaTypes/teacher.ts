import { title } from "process"

export const teacher = {
  name: 'techer',
  title: 'Teacher Profile',
  Contact: 'Teacher Cotact Number',
  DOB: 'Teacher Date of Birth',
  Parental: 'Teacher of Father',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Teccher Name'
    },
    {
        name: 'Father',
        type: 'string',
        title: 'Name of Teacher Father'
      }, 
    {
      name: 'DOB',
      type: 'number',
      title: 'TEacher Date of Birth'
    }, 
      {
        name: 'age',
        type: 'number',
        title: 'Peson Age'
      },
      {
        name: 'Contact',
        type: 'number',
        title: 'Teacher Phone Number'
      },
       
  ],
}