import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
// CSS
import classes from './NavigationItems.module.css';
// Logo
import logo from '../../../assets/images/logo.png'
// JSX
import NavigationItem from './NagivationItem/NagivationItem';
import Separator from './Separator/Separator';

const renderNavigationItems = (props) => {
	switch (props.navbarType) {
		case 'Default':
			return (
				<>
					{props.width < 1121 ? 
						null : 
						<div className={classes.Wrapper}>
              <div className={classes.Container}>
                <NavigationItem {...props} link="/">
                  Home
                </NavigationItem>
                <NavigationItem {...props} link="/rooms">
                  Rooms
                </NavigationItem>
                <NavigationItem {...props} link="/restaurant">
                  Restaurant
                </NavigationItem>
              </div>
              <NavLink className={[classes.NavbarLogo, classes.Logo].join(' ')} to ="/">
                <img src={logo} draggable='false' alt='' />
              </NavLink>
              <div className={classes.Container}>
                <NavigationItem {...props} link="/weedings">
                  Weedings
                </NavigationItem>
                <NavigationItem {...props} link="/membership">
                  Membership
                </NavigationItem>
                <NavigationItem {...props} link="/contact">
                  Contact
                </NavigationItem>
              </div>
						</div>
					}
				</>
			);
      case 'MobileDrawer':
        return (
          <>
            {props.width < 1121 ? 
              null : 
              <>
              
                <NavLink className={[classes.NavbarLogo, classes.MobileLogo].join(' ')} to ="/">
                  <img src={logo} draggable='false' alt='' />
                </NavLink>
                <div className={classes.Spacing} />
                <Separator />
                <NavigationItem {...props} link="/">
                  Home
                </NavigationItem>
                <NavigationItem {...props} link="/rooms">
                  Rooms
                </NavigationItem>
                <NavigationItem {...props} link="/restaurant">
                  Restaurant
                </NavigationItem>
                <NavigationItem {...props} link="/weedings">
                  Weedings
                </NavigationItem>
                <NavigationItem {...props} link="/membership">
                  Membership
                </NavigationItem>
                <NavigationItem {...props} link="/contact">
                  Contact
                </NavigationItem>
                <Separator />
              </>
            }
          </>
        );
		default:
			return (
				<>
					{props.width < 1121 ? 
						<>
							<NavigationItem {...props} link="/publish/overview">
								Publish
							</NavigationItem>
							<NavigationItem {...props} link="/services">
								Services
							</NavigationItem>
							<NavigationItem {...props} link="/help">
								Help
							</NavigationItem>
						</>
					: null }
				</>
			);
	}
};
const nagivationItems = (props) => {
	return (
		<>
			<ul className={classes.NavigationItems}>
				{renderNavigationItems(props)}
			</ul>
		</>
	);
};

export default withRouter(nagivationItems);
