import React, {useState, useDebugValue} from 'react'
import Button from 'react-bootstrap/Button';


function Forms (props){
    const [formOn, setformOn] = useState({Name:"", Email:"", Age:"", Role:""});

    const handleNameChange = event => {
        setformOn({ ...formOn, Name: event.target.value });
    }

    const handleEmailChange = event => {
        setformOn({ ...formOn, Email: event.target.value });
    }    

    const handleAgeChange = event => {
        setformOn({ ...formOn, Age: event.target.value });
     }

    const handleRoleChange = event => {
        setformOn({ ...formOn, Role: event.target.value });
    }

    const handleChange = event => {
        setformOn(event.target.value);
      };
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formOn);
        props.AddPeople({
        ...formOn  
        })
      };
    return(
        <div>
            <form
             onSubmit={event => handleSubmit(event)}>
            <label>
                Name:
                <input type= "text"  onChange={event => handleNameChange(event)} />
            </label>
            <label>
                Age:
                <input type= "text" onChange={event => handleAgeChange(event)}/>
            </label>

            <label>
                Email:
                <input type="text" onChange={event => handleEmailChange(event)}/>
            </label>

            <label>
                Role:
                <input type="text" onChange={event => handleRoleChange(event)}/>
            </label>
            <Button variant="success" type='submit'>Add a Member!</Button>
            </form>


        </div>
    )
}

export default Forms;