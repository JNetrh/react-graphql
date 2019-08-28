// Imports:
import { getCourse, getCourses } from '../modules/courses/getCourse';
import { updateCourseTopic } from '../modules/courses/updateCourse';

// GraphQL: Resolvers
  const RESOLVERS = {    
    Query: {      
        getCourse,
        getCourses,
    },
    Mutation: {
        updateCourseTopic
    }
};
// Exports
export default RESOLVERS;