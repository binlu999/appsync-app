const graphql = require("graphql");

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt,GraphQLSchema } = graphql;

//Types
const UserType = new GraphQLObjectType({
  name: "User",
  description: "Documentation for user ...",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

//Root query
const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  description:'Root Query Type',
  fields:{
    user:{
      type:UserType,
      args:{id:{type:GraphQLString}},
      resolve(parent,args){
        //Resolve data haere
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query:RootQuery
});