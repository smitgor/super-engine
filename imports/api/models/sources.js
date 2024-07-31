import SimpleSchema from 'simpl-schema';

const Sources = new Mongo.Collection('Sources');

const SourcesSchema = new SimpleSchema(
    {
        name: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        createdOn: Date,
        createdBy: String,
        mainContentSelector: {
            type: String,
        },
        contentSelector: {
            type: String,
        },
    },
    { requiredByDefault: false }
);

Sources.schema = SourcesSchema;

export default Sources;
