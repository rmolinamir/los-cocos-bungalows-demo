import React from 'react';
// CSS
import classes from './Panel.module.css';

const panel = (props) => {
  return (
    <div className={[classes.Panel, props.className].join(' ')}>
      {/* Only render panel header if there is one */}
      {props.header ? 
        <div style={props.bold ? {fontWeight: 600} : null} className={classes.Header}>
          <span>{props.header}</span>
        </div>
        : null}
      <div style={{ height: props.height, width: props.width }} className={classes.Body}>
        {props.children}
      </div>
    </div>
  );
}

export default panel;