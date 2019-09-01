// Imports: GraphQL
import { gql } from 'apollo-server-express';
// GraphQL: TypeDefs
const typeDefs = gql`
    type Query {
        getCourse(id: Int!): Course
        getCourses(topic: String): [Course]
        getCoursesByDificulty(dificulty: Int): [Course]
    }
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
        dificulty: Int
    }
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
    }
`;
// Exports
export default typeDefs;