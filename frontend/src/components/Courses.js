import React, { Component } from 'react';



class Courses extends Component {
    render() {
      const { loading, error, getCourses } = this.props.data;
      console.log(loading)
      if (loading) return <p>loading ...</p>;
        if (error) {
            console.log(error);
            return <p>error ...</p>;
        };

        return getCourses.map(({id, title, author, description, topic, url}) => (
            <div key={id}>
                <p>{`${title} by ${author}`}</p>
            </div>
        ));
      
    }
  }

/* const Courses = () => (
     <Query query={qql`
         {
             getCourse(id: 1) {
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
); */

export default Courses;