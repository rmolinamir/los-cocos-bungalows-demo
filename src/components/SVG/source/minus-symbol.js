import React from 'react';

const minusSymbol = (props) => {
  return (
    <svg 
      x='0px' 
      y='0px' 
      viewBox='0 0 31.427 31.427' 
      style={props.style ? props.style : { enableBackground: '0 0 31.427 31.427' }}
      className={props.className}
      width={props.width ? props.width : '28px'} 
      height={props.height ? props.height : '28px'}>
      <path fill={props.fill ? props.fill : '#484848'} d='M1.111,16.832C0.492,16.832,0,16.325,0,15.706c0-0.619,0.492-1.111,1.111-1.111H30.3  c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H1.111z' />
    </svg>
  )
}

export default minusSymbol;