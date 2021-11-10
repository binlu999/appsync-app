const graphql = require("graphql");
const _ = require('lodash')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt,GraphQLSchema } = graphql;

//Dummy data
const users=[
  {id:"11",name:"name 11", age:11,profession:"profession 11"},
  {id:"1",name:"name 1", age:1,profession:"profession 1"},
  {id:"111",name:"name 111", age:111,profession:"profession 111"},
  {id:"1111",name:"name 1111", age:1111,profession:"profession 1111"}
];

//Dummy Hobby data
const hobbies=[
  {id:"1", title:"Hobby 1",description:"hobby dews 1"},
  {id:"2", title:"Hobby 2",description:"hobby dews 2"},
  {id:"3", title:"Hobby 3",description:"hobby dews 3"},
  {id:"4", title:"Hobby 4",description:"hobby dews 4"}
]

//Post dummy data
const posts=[
  {id:"1",comment:"post comment 1"},
  {id:"2",comment:"post comment 2"},
  {id:"3",comment:"post comment 3"},
  {id:"4",comment:"post comment 4"},
];
//Types
const UserType = new GraphQLObjectType({
  name: "User",
  description: "Documentation for user ...",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    profession:{type: GraphQLString}
  }),
});

//Hobby type
const HobbyType = new GraphQLObjectType({
  name:"Hobby",
  description:"Hobby type",
  fields:()=>({
    id:{type:GraphQLID},
    title:{type:GraphQLString},
    description:{type:GraphQLString}
  })
});
//Post type
const PostType = new GraphQLObjectType({
  name:"Post",
  description:"Post type",
  fields:()=>({
    id:{type:GraphQLID},
    comment:{type:GraphQLString}
  })
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
        return _.find(users,{id:args.id});
      }
    },
    hobby:{
      type:HobbyType,
      args:{id:{type:GraphQLID}},
      resolve(parent,args){
        return _.find(hobbies,{id:args.id});
      }
    },
    post:{
      type:PostType,
      args:{id:{type:GraphQLID}},
      resolve(parent,args){
        return _.find(posts,{id:args.id});
      }
    }
  }
});


/*Sample graphQL
{
  user(id:"1"){
  id
  name
  age
}
,
hobby(id:"1"){
  id
  title
  description
},
post(id:"1"){
  id
  comment
}
}
*/


module.exports = new GraphQLSchema({
  query:RootQuery
});