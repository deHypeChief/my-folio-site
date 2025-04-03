import { defineField, defineType } from 'sanity'

export const expType = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'expType',
            title: 'Experience Type',
            type: 'string',
        }),
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
        }),
    ],
});