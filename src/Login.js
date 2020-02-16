import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';

class Login extends React.Component {

    

    render(){
        
        return(
            <div className={Login}>

                <div className='container'>
                    <form>
                        <FormGroup controlId="email">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl autoFocus type="email" value={email} >
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="password">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type='password'>
                                
                            </FormControl>
                        </FormGroup>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;