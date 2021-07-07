import React from 'react';

import meals from '../../assets/meals.jpg';

import HeaderCartButton from './HeaderCartButton';


import classes from './Header.module.css';

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShow}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="A table full of delicious meals!"/>
            </div>
        </React.Fragment>
    )

}

export default Header;
