import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'myInfo',
  title: 'My Info',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'profileImageUrl',
      title: 'Profile Image Url',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
    }),
  ],
})
