import React from 'react';

const plusSymbol = (props) => {
  return (
    <svg 
        x='0px' 
        y='0px' 
        viewBox='0 0 31.444 31.444' 
        style={props.style ? props.style : { enableBackground: '0 0 31.444 31.444' }}
        className={props.className}
        width={props.width ? props.width : '28px'} 
        height={props.height ? props.height : '28px'} >
      <path sfill={props.fill ? props.fill : '#484848'} d='M1.119,16.841c-0.619,0-1.111-0.508-1.111-1.127c0-0.619,0.492-1.111,1.111-1.111h13.475V1.127  C14.595,0.508,15.103,0,15.722,0c0.619,0,1.111,0.508,1.111,1.127v13.476h13.475c0.619,0,1.127,0.492,1.127,1.111  c0,0.619-0.508,1.127-1.127,1.127H16.833v13.476c0,0.619-0.492,1.127-1.111,1.127c-0.619,0-1.127-0.508-1.127-1.127V16.841H1.119z' />
    </svg>
  );
}

export default plusSymbol;