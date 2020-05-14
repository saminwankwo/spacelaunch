const { GraphQlObjectType, GraphQLInt, GraphQLString } = require('graphql');

//launch type
const launchType = new GraphQlObjectType({
    name: 'launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        : { type: GraphQLInt },
        
    })
});