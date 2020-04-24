import SimpleSchema from 'simpl-schema';
export const Product = new Mongo.Collection('product');

const schema = new SimpleSchema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    desc: {
        type: String,
        optional: true
    },
    createdBy: {
        type: String
    }
});
Product.attachSchema(schema);