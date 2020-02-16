import React from 'react';
import ReactDOM from "react-dom";
import Post from "./Post";

class Favors extends React.Component{


    loadFavor(){
        return (ReactDOM.render(<Favor/>,document.getElementById("test2")));
    }

    render() {
        return(
          <div className='container'>
              <div className={Favors}>
                  <div className='Favor'>
                      <div className='Title' onClick={this.loadFavor}> I need a calculator!</div>
                      <div className='user'>Random1</div>
                  </div>

              </div>

          </div>
        );
    }
}

class Favor extends React.Component{

    render() {
        return(
            <div className={Favor}>
                <div className="title"> I need a calculator!</div>
                <div className='note'> Can I borrow one? </div>
                <div className='UserName'> Random1</div>
            </div>

        );

    }
}

export default Favors