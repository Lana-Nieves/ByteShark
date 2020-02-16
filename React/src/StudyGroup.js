import React from 'react';
import Post from './Post';
import ReactDOM from "react-dom";
let posts = [];

let post = {
    'title' : null,
    'tags' : null,
    'host': null,
};




class StudyGroup extends React.Component{

    loadPost(){
        return (ReactDOM.render(<Post/>,document.getElementById("test2")));
    }

    loadStudyGroup(){
        return(ReactDOM.render(<StudyGroup/>,document.getElementById("test2")));
    }

    render(){
        return(
          <div className="container">
              <div className='posting' onClick={this.loadPost}>
                  <div className='title'> We are studying Computer Science</div>
                  <div className='tags'> Tag: Machine Learning, Python</div>
              </div>
              <div className='posting'>
                  <div className='title'> Econ 201 Study Group</div>
                  <div className='tags'> Tag: First Year</div>
              </div>
              <div className='posting'>
                  <div className='title'> Japanese Study Group</div>
                  <div className='tags'> Tag: Beginner, Intermediate</div>
              </div>

          </div>
        );
    }
}

export default StudyGroup;