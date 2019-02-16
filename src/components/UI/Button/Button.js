import React from 'react';
// CSS
import classes from './Button.module.css';

const button = (props) => {
    // Success/Danger classes
    let logo = null;
    let children = props.children;
    const buttonClass = [props.className];
    buttonClass.push(classes.Button);
    switch (props.type) {
        case 'danger':
            buttonClass.push(classes.Danger);
            break;
        case 'primary':
            buttonClass.push(classes.Primary);
            break;
        case 'default':
            buttonClass.push(classes.Default);
            break;
        default:
            buttonClass.push(classes.Default);
            // do nothing
    }
    if (props.blockButton) {
        buttonClass.push(classes.BlockButton);
    }
    return (
      <button
          style={props.style}
          tabIndex={props.tabIndex}
          className={buttonClass.join(' ')}
          type={props.submit ? 'submit' : 'button'}
          disabled={props.disabled}
          onClick={props.clicked}>{logo}{children}</button>
    );
}

export default button;