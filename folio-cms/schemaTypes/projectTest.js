import { defineField, defineType } from 'sanity'

export const postType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Project Images',
            type: 'array',
            of: [{
                type: 'image',
                options: {
                    hotspot: true,
                },
            }]
        }),
        defineField({
            name: 'projectLink',
            title: 'Project URL',
            type: 'url',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'hashtags',
            title: 'Hash Tags',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (rule) => rule.unique(),
        }),
        defineField({
            name: 'stack',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (rule) => rule.unique(),
        }),
        defineField({
            name: 'description',
            title: 'Project Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})