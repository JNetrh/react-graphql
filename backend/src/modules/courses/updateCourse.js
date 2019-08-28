import { coursesData } from '../../mockData/courses';

export const updateCourseTopic = ({id, topic}) => {
    coursesData.map(course => {
        if (course.id === id) {
            course.topic = topic;
            return course;
        }
    })
    return coursesData.filter(course => course.id === id)[0];
}
