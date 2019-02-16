import React from 'react';
// Assets
import logo from '../../../assets/images/logo_mobile.png';
// CSS
import classes from './Footer.module.css';
// JSX
import { NavLink } from 'react-router-dom';
import SVG from '../../SVG/SVG';
// Logo
import ImageFadeIn from '../ImageFadeIn/ImageFadeIn';

const footer = () => {
    return (
        <div className={classes.Footer}>
            <div>
                {/* <div className={classes.BannerWrapper}>
                    <div 
                        style={{backgroundImage: `url()`}} 
                        className={classes.BannerBackground} />
                    <div className={classes.BannerContainer}>
                        <div className={classes.SocialMedia}>
                            <div className={classes.FollowUs}>Follow Us</div>
                            <div className={classes.MediaLinks}>
                                <span className={classes.MediaLink}><a href='/' target='_blank'><SVG svg='facebook' /></a></span>
                                <span className={classes.MediaLink}><a href='/' target='_blank'><SVG svg='instagram' /></a></span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className={classes.FooterWrapper}>
                    <div className={classes.NavLinks}>
                        <NavLink className={classes.LogoWrapper} to='/'>
                          <ImageFadeIn className={classes.Logo} draggable='false' src={logo} alt='' />
                        </NavLink>
                        <NavLink activeClassName={classes.active} className={classes.NavLink} to='/services'><span className={classes.Link}>Terms and Conditions</span></NavLink>
                        <NavLink activeClassName={classes.active} className={classes.NavLink} to='/help'><span className={classes.Link}>Privacy Policy</span></NavLink>
                        <NavLink activeClassName={classes.active} className={classes.NavLink} to='/contact'><span className={classes.Link}>About us</span></NavLink>
                        <NavLink activeClassName={classes.active} className={classes.NavLink} to='/contact'><span className={classes.Link}>Partners</span></NavLink>
                    </div>
                    <div className={classes.Contact}>
                        <a className={classes.Email} href='mailto:reservations@loscocosbungalows.com' target='_blank' rel="noopener noreferrer">reservations@loscocosbungalows.com</a>
                        <span className={classes.Phone}>Tlf: +34 982 458 720</span>
                        <span className={classes.MediaLink}><a href='/' target='_blank'><SVG svg='facebook' /></a></span>
                        <span className={classes.MediaLink}><a href='/' target='_blank'><SVG svg='instagram' /></a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;