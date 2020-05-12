import React, {useState} from 'react';
import Forms from '../Forms/Forms'



const HomePageMembers = () =>{

    const [memberOn, setmemberOn] = useState([
        {
            Name: 'Anam',
            Age : '29',
            Email : 'akhan@gmail.com',
            Role : 'Front-end'
        },

        {
            Name: 'Khan',
            Age: '29',
            Email : 'akhan20@gmail.com',
            Role: 'Front-end'
        },


    ])

    const AddPeople = variable =>{
            setmemberOn([...memberOn, variable])
    }

return(
    <div>
       
       {
        memberOn.map(props =>{
          return(
              <div>
            <h1>{props.Name}</h1>
            <h1>{props.Age}</h1>
            <h1>{props.Email}</h1>
            <h1>{props.Role}</h1>
            </div>
          )  
        })
    }
    <Forms  AddPeople={AddPeople} />
    </div>
);

};
export default HomePageMembers; 