import React from 'react';

export default function Alert(props) {
  
    const capitalize=(word)=>{
      if(word==='danger'){
        word='error';
      }
     let lower = word.toLowerCase();
     return word.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
     {props.alert && <div className='alert alert-success' role='alert'>
      {capitalize(props.alert.type)}: {props.alert.msg}
      </div>};
      </div>
  );
}
