// Imports:
import { getCourse, getCourses } from '../modules/courses/getCourse';
import { updateCourseTopic } from '../modules/courses/updateCourse';

// GraphQL: Resolvers
  const resolvers = {    
    Query: {
        getCourse: (obj, args) => getCourse(args),
        getCourses: (obj, args) => getCourses(args),
    },
    Mutation: {
        updateCourseTopic: (obj, args) => updateCourseTopic(args),
    }
};
// Exports
export default resolvers;