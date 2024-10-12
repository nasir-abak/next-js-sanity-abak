export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'productImage',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true, // Allows image cropping in the Sanity studio
        },
      },
      {
        name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
