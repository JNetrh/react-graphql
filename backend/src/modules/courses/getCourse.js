import { coursesData } from '../../mockData/courses';

export const getCourse = (obj, args) => {
    console.log(args);
    const id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}

export const getCourses = (obj, args) => {
    console.log(args);
    if(args.topic) {
        const topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    }
    else {
        return coursesData;
    }
}

export const getCoursesByDificulty = (obj, args) => {
    if(args.dificulty) {
        const dificulty = args.dificulty;
        return coursesData.filter(course => course.dificulty === dificulty);
    }
    else {
        return coursesData;
    }
}