import {defineField, defineType} from 'sanity'
import {MdDomain as icon} from 'react-icons/md'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'scopes',
      title: 'Scopes',
      of: [
        {
          type: 'string',
        },
      ],
      type: 'array',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      of: [
        {
          type: 'string',
        },
      ],
      type: 'array',
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
  orderings: [{title: 'Order', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
})
