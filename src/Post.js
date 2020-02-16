import React from 'react';

class Post extends React.Component{

    render(){
        return(
            <div className={`Post container`} >
                <div className='title'> Title goes here </div>
                <div className='tags'> Tags go here </div>
            </div>
        );

    }
}

export default Post