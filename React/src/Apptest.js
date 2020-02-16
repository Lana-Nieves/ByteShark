import React from 'react';
import './App.css';
import './mainpage.css'
import './NavigationBar'
import Navaigator from "./NavigationBar";
import StudyGroup from "./StudyGroup";
import ReactDOM from 'react-dom';


class Testing extends React.Component{
    getNavi(){
        return(<Navaigator/>);
    }

    loadStudyGroup(){
        return(ReactDOM.render(<StudyGroup/>,document.getElementById("test2")));
    }

    render(){
        return (
          <div className="Testing11">
              <div>
                  {this.getNavi()}
              </div>
              <div className="test2" id="test2">
                  <div className="left Panels" onClick={this.loadStudyGroup}>
                      Study
                  </div>
                  <div className="middle Panels">
                      test2
                  </div>
                  <div className="right Panels">
                      test3
                  </div>
              </div>





          </div>


        );
    }
}





export default Testing;