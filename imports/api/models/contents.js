import SimpleSchema from 'simpl-schema';

const Contents = new Mongo.Collection('Contents');

const ContentTopicsSchema = new SimpleSchema({
    topic: {
        type: String,
        required: true,
    },
    addedBy: {
        type: String,
        required: true,
    },
    addedOn: {
        type: String,
        required: true,
    },
    yetToBeApproved: Boolean,
});

const SourceMetaSchema = new SimpleSchema({
    description: {
        type: 'String',
    },
    lang: {
        type: 'String',
    },
    keywords: {
        type: 'String',
    },
    favicon: {
        type: 'String',
    },
    canonical: {
        type: 'String',
    },
    encoding: {
        type: 'Date',
    },
});

const SourceOGSchema = new SimpleSchema({
    title: {
        type: 'String',
    },
    description: {
        type: 'String',
    },
    keywords: {
        type: 'String',
    },
    image: {
        type: 'String',
    },
    url: {
        type: 'String',
    },
    type: {
        type: 'String',
    },
    site_name: {
        type: 'String',
    },
});

const ContentSourceSchema = new SimpleSchema({
    meta: SourceMetaSchema,
    image: {
        type: 'Mixed',
    },
    domain: {
        type: 'String',
    },
    title: {
        type: 'String',
    },
    cleaned_text: {
        type: 'String',
    },
    opengraph: SourceOGSchema,
    tags: {
        type: 'Array',
    },
    tweets: {
        type: 'Array',
    },
    movies: {
        type: 'Array',
    },
    links: {
        type: 'Array',
    },
    authors: {
        type: 'Array',
    },
    publish_date: {
        type: 'Date',
    },
    text_summary: {
        type: 'String',
    },
    url: {
        type: 'String',
    },
});

const ContentImageSchema = new SimpleSchema({
    ETag: {
        type: 'String',
    },
    ServerSideEncryption: {
        type: 'String',
    },
    Location: {
        type: 'String',
    },
    key: {
        type: 'String',
    },
    Key: {
        type: 'String',
    },
    Bucket: {
        type: 'String',
    },
    mimeType: {
        type: 'String',
    },
});

const ContentsSchema = new SimpleSchema(
    {
        title: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        type: {
            type: String, // ARTICLE | VIDEO | SOCIAL POST
            required: true,
        },
        summery: {
            type: String,
            required: true,
        },
        image: {
            type: ContentImageSchema,
        },
        source: ContentSourceSchema,
        topics: {
            type: Array,
            required: true,
        },
        'topics.$': ContentTopicsSchema,
        url: {
            type: String,
            required: true,
        },
        cronSession: {
            type: String, // empty in case of user created content
        },
        createdOn: {
            type: Date,
            required: true,
        },
        createdBy: {
            type: String, // userId if directly created | else SYSTEM
            required: true,
        },
    },
    { requiredByDefault: false }
);

Contents.schema = ContentsSchema;

export default Contents;
