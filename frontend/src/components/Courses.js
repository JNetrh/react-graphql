import React from 'react';
import { Query } from 'react-apollo';
import qql from 'graphql-tag';


const Courses = () => (
     <Query query={qql`
         {
             course(id: 1) {
                 id
                 title
                 author
                 description
                 topic
                 url
             }
         }
     `}>
         {({loading, error, data}) => {
             if (loading) return <p>loading ...</p>;
             if (error) {
                 console.log(error);
                 return <p>error ...</p>;
             };

             return data.allCourses.map(({id, title, author, description, topic, url}) => (
                 <div key={id}>
                     <p>{`${title} by ${author}`}</p>
                 </div>
             ));
         }}
     </Query>
);

export default Courses;