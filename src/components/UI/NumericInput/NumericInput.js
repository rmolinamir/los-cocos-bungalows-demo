import React, { useState, useRef, useEffect } from 'react';
// CSS
import classes from './NumericInput.module.css';
// JSX
import SVG from '../../SVG/SVG';
import Button from '../Button/Button';

const numericInput = (props) => {
  const [value, setValue] = useState(props.value);
  const [bIsShown, setIsShown] = useState(false);

  const myInput = useRef(null);

  const toggleInput = () => {
    setIsShown(!bIsShown)
  }

  /**
   * The input will only unmount IF the focus target is outside myInput.
   */
  const onBlurHandler = (event) => {
    const bIsChildrenFocused = myInput.current.contains(event.relatedTarget);
    if (!bIsChildrenFocused) {
      setIsShown(false)
    }
  }

  /**
   * Each time the input mounts, focus it.
   */
  useEffect(() => {
    if (bIsShown) {
      if (myInput.current) { myInput.current.focus(); }
    }
  }, [bIsShown]);

  const onIconClickHandler = (handler) => {
    // Dispatch it.
    if (props.onChange) {
      let newValue = value;
      switch (handler) {
        case 'SUM': 
          newValue++;
          props.onChange(newValue);
          onChange(newValue);
          break;
        case 'DIF': 
          newValue--;
          if (newValue < 0) { newValue = 0 } // Prevents from going negative
          onChange(newValue);
          break;
        default:
          // do nothing
      }
    }
  }

  const onChange = (value) => {
    value = Clamp(Number(value), -1, 15);
    setValue(value);
    if (props.onChange) {
      props.onChange(value);
    }
  }

  const onChangeHandler = (event) => {
    let value = event.target.value.replace(/\D/,'');
    onChange(value);
  }

  return (
    <span className={classes.Anchor}>
      <Button className={[props.className, classes.Button].join(' ')} clicked={toggleInput}>{props.display}: {props.value}<SVG svg='down-arrow'/></Button>
      {bIsShown ? 
        <div 
          tabIndex='1'
          ref={myInput} 
          className={classes.Wrapper}
          onBlur={onBlurHandler}>
          <i onClick={() => onIconClickHandler('DIF')} className={classes.Icon}><SVG svg='minus-symbol'/></i>
          <input
            className={classes.Input} 
            placeholder={0}
            value={value} 
            onChange={onChangeHandler}/>
          <i onClick={() => onIconClickHandler('SUM')} className={classes.Icon}><SVG svg='plus-symbol'/></i>
        </div>
        : null}
    </span>
  );
}

/**
 * Clamps the number, meaning it won't let it go beyond or below the min or max values.
 */
const Clamp = (num, min, max) => {
  return Math.max(min, Math.min(num, max));
}

export default numericInput
