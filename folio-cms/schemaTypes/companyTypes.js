import { defineField, defineType } from 'sanity'

export const companyType = defineType({
    name: 'company',
    title: 'Company',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Company Name',
            type: 'string',
            validation: Rule => Rule.required().error('Company name is required'),
        }),
        defineField({
            name: 'link',
            title: 'Company URL',
            type: 'url',
            validation: Rule => Rule.required().error('Company URL is required'),
        }),
        defineField({
            name: 'logo',
            title: 'Company Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required().error('Company logo is required'),
        }),
    ],
});