import { title } from "process"

export const student = {
  name: 'studente',
  title: 'Student Profile',
  Registration: 'Student Registration Number',
  DOB: 'Student Date of Birth',
  Parental: 'Name of Father',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Student Name'
    },
    {
        name: 'Father',
        type: 'string',
        title: 'Name of Student Father'
      }, 
    {
      name: 'DOB',
      type: 'date',
      title: 'Student Date of Birth'
    }, 
      {
        name: 'age',
        type: 'number',
        title: 'Student Age'
      },

      {
        name: 'Registration',
        type: 'number',
        title: 'Student Roll Number'
      },
      {
        name:"gender",
        type:"string",
        title:"Gender",
        options:{
          list:[
            {title:"Male", value:"male"},
            {title:"Female", value:"female"},
            {title:"Transgender", value:"transgender"}
          ],
          layout:"dropdown",
        },
      },
      {
        name:"image",
        type:"image",
        title:"Student Image"
      },   
      {
        title:"Hobby",
        name:"hobby",
        type:"array",
        of: [{type:"string"}]
      },  
        {
          title: 'Tags / Qualities',
          name: 'tags',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'tags'
          }
          
      }, 
      {
        name:"formb",
        type:"file",
        title:"Upload B-Form"
      },
      {
        name:"BirthCertificate",
        type:"file",
        title:"Upload Birth Certificate/ CNIC",
      },
      {
        name:"Domicile",
        type:"file",
        title:"Upload Domicile/ PRC",
      },
      {
        name:"address",
        type:"object",
        title:"Address",
        fields:[
          {
            name:"street", type:"string", title:"Street Name"
          },
          {
            name:"house", type:"number", title:"Hosue/Flat Number"
          },
          {
            name:"Town", type:"string", title:"Town/ Sector"
          },
          {
            name:"City", type:"string", title:"City Name"
          },
          ]
      },
      {
        name:"socialUrl",
        type:"url",
        title:"Social Media Link",
      },
      {
        name:"faculty",
        type:"string",
        title:"Choose Faculty/Group",
        options:{
          list:[
            {title:"Pre Engineer", value:"pe"},
            {title:"Pre Medical", value:"pm"},
            {title:"Computer Science", value:"cs"},
            {title:"Arts", value:"arts"},
            {title:"Commerce", value:"comerce"},
            {title:"Bio Medical", value:"biomedical"},
          ],
          layout:"dropdown",
        },
    },
  {
    title: 'Subjects',
    name: 'subjcet',
    type: 'array',
    of: [{type: 'string'}],
    options: {
      layout: 'dropdown'
    }   
}, 
{
  title: "Are you agree with all terms and conditions",
  name: "subject",
  type: "boolean",
}, 
  
  ],
};