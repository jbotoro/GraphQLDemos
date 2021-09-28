const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GrapQLNonNull,
} = require('graphql');


// Hardcoded Data

const customers = [
    {id: '1', name: 'John Doe', email: 'jdoe@gmail.com', age:35}
    {id: '2', name: 'Fred Birch', email: 'fbirc@gmail.com', age:23}
    {id: '3', name: 'Justin Blake', email: 'jblke@gmail.com', age:26}
    {id: '4', name: 'Barry White', email: 'bwhte@gmail.com', age: 70}
]


// Customer Type

const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLString}
    }),
});

// Root Query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    customer: {
        type: CustomerType,
        args: {
            id: {GraphQLString}
        },
        resolve(parentValue, args){
            for(let i = 0; i < customers.length; i++){
                if(customers[i].id === args.id){
                    return customers[i]
                }
            }
        }
    }
});


module.exports = new GraphQLSchema({

})