import React from 'react';

const calendar = (props) => {
  return (
    <svg 
      x='0px' 
      y='0px'
      viewBox='0 0 512 512' 
      style={props.style ? props.style : { enableBackground: '0 0 512 512' }}
      className={props.className}
      width={props.width ? props.width : '22px'} 
      height={props.height ? props.height : '22px'}>
      {props.gradient ? 
        <linearGradient id='a' gradientTransform='matrix(1 0 0 -1 0 -9462)' gradientUnits='userSpaceOnUse' x1='0' x2='512' y1='-9718' y2='-9718'>
          <stop offset='0' stop-color={props.fill ? props.fill[0] : '#00f38d'} />
          <stop offset='1' stop-color={props.fill ? props.fill[1] : '#009eff'} />
        </linearGradient>
      : null}
      <path d='m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0' fill='url(#a)' />
      <g fill={props.gradient ? '#484848' : (props.fill ? props.fill : '#484848')}>
          <path d='m390.542969 106.457031h-15.203125v-27.457031h-30v27.457031h-178.679688v-27.457031h-30v27.457031h-15.203125c-23.410156 0-42.457031 19.046875-42.457031 42.457031v241.628907c0 23.410156 19.046875 42.457031 42.457031 42.457031h269.085938c23.410156 0 42.457031-19.046875 42.457031-42.457031v-241.628907c0-23.410156-19.046875-42.457031-42.457031-42.457031zm-269.085938 30h15.203125v27.457031h30v-27.457031h178.679688v27.457031h30v-27.457031h15.203125c6.867187 0 12.457031 5.589844 12.457031 12.457031v31.679688h-294v-31.679688c0-6.867187 5.589844-12.457031 12.457031-12.457031zm269.085938 266.542969h-269.085938c-6.867187 0-12.457031-5.589844-12.457031-12.457031v-179.949219h294v179.949219c0 6.867187-5.589844 12.457031-12.457031 12.457031zm0 0' />
          <path d='m132.441406 238.152344h27.457032v27.457031h-27.457032zm0 0' />
          <path d='m187.355469 238.152344h27.457031v27.457031h-27.457031zm0 0' />
          <path d='m242.269531 238.152344h27.460938v27.457031h-27.460938zm0 0' />
          <path d='m297.1875 238.152344h27.457031v27.457031h-27.457031zm0 0' />
          <path d='m352.101562 238.152344h27.457032v27.457031h-27.457032zm0 0' />
          <path d='m132.441406 293.066406h27.457032v27.460938h-27.457032zm0 0' />
          <path d='m187.355469 293.066406h27.457031v27.460938h-27.457031zm0 0' />
          <path d='m242.269531 293.066406h27.460938v27.460938h-27.460938zm0 0' />
          <path d='m297.1875 293.066406h27.457031v27.460938h-27.457031zm0 0' />
          <path d='m132.441406 347.984375h27.457032v27.457031h-27.457032zm0 0' />
          <path d='m187.355469 347.984375h27.457031v27.457031h-27.457031zm0 0' />
          <path d='m242.269531 347.984375h27.460938v27.457031h-27.460938zm0 0' />
          <path d='m297.1875 347.984375h27.457031v27.457031h-27.457031zm0 0' />
          <path d='m352.101562 293.066406h27.457032v27.460938h-27.457032zm0 0' />
      </g>
    </svg>
  );
}

export default calendar;