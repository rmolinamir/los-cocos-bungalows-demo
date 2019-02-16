import React from 'react';
// CSS
import classes from './Breadcrumb.module.css';

const Breadcrumb = (props) => {
  const steps = props.steps.map((step, index) => {
    const wrapperClasses = [classes.Wrapper];
    /**
     * If the active step is equal to the array's step (index + 1) then add the .Active class CSS.
     */
    if (props.activeStep >= index + 1) {
      wrapperClasses.push(classes.Active)
    }
    return (
      <li 
        key={index}
        className={wrapperClasses.join(' ')}>
          <div className={classes.Container}>
            <div className={classes.Step}>{index}</div>
            <div className={classes.Details}>{step}</div>
          </div>
      </li>
    );
  });

  // If the last step is active, push active to the breadcumb classes to fill the progress bar.
  const breadcrumbClasses = [classes.Breadcrumb];
  if (props.activeStep === props.steps.length) {
    breadcrumbClasses.push(classes.Active);
  }
  return (
    <ul className={breadcrumbClasses.join(' ')}>
      {steps}
    </ul>
  );
}

export default Breadcrumb;
