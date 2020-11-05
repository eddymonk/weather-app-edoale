import React from 'react'
import './Form.css'


const Form = (props) => {
 return (
     <form onSubmit={props.getWeather}>
         <input
         type='text'
         placeholder='City'
         name='city'
         />

         <button>Submit</button>
     </form>
 );
}

export default Form; 
