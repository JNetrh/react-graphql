import { coursesData } from '../../mockData/courses';

export const getCourse = (args) => {
    console.log(args);
    const id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}

export const getCourses = (args) => {
    console.log(args);
    if(args.topic) {
        const topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    }
    else {
        return coursesData;
    }
}