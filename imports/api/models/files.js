/* eslint-disable import/prefer-default-export */
import SimpleSchema from 'simpl-schema';

export const Files = new Mongo.Collection('Files');

const FilesSchema = new SimpleSchema({
    uploadedBy: String,
    file: Object,
    uploadedOn: Date,
});

Files.schema = FilesSchema;
