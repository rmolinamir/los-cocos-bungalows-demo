import React from 'react';
// CSS
import classes from './SearchBox.module.css';

const Container = (props) => {

  return (
    <div className={classes.SearchBox}>
      {props.children}
    </div>
  )
}

const searchBox = {
    widescreen: (props) => {
        const { categoriesDatalist } = props;
        return (
            <div className={[classes.Widescreen, props.className].join(' ')} style={{ width: props.width, height: props.height }}>
                <Container id={'Widescreen_SearchBox'} categoriesDatalist={categoriesDatalist}>
                  {props.children}
                </Container>
            </div>
        );
    },
    mobile: (props) => {
        const { categoriesDatalist } = props;
        return (
            <div className={[classes.Mobile, props.className].join(' ')} style={{ width: props.width, height: props.height }}>
                <Container id={'Mobile_SearchBox'}  categoriesDatalist={categoriesDatalist}>
                  {props.children}
                </Container>
            </div>
        );
    }
}

export default searchBox;