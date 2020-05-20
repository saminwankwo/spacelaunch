const 
const { GraphQlObjectType, GraphQLInt, GraphQLString, GraphQlBoolean, GraphQLList } = require('graphql');

//launch type
const LaunchType = new GraphQlObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQlBoolean },
        rocket: { type: RocketType },
        
    })
});

//rocket type
const RocketType = new GraphQlObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
    })
});

//root query
const RootQuery = new GraphQlObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type
        }
    }
})