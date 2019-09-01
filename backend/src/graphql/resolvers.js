// Imports:
import { getCourse, getCourses, getCoursesByDificulty } from '../modules/courses/getCourse';
import { updateCourseTopic } from '../modules/courses/updateCourse';

// GraphQL: Resolvers
  const resolvers = {    
    Query: {
        getCourse,
        getCourses,
        getCoursesByDificulty
    },
    Mutation: {
        updateCourseTopic,
    }
};
// Exports
export default resolvers;