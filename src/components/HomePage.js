import React, {Component} from 'react';
import CatsListItem from './CatsListitem';
import {connect} from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

  //pass props to route render={(props) => <HomePage cats = {this.props.cats} {...props}/>}

const HomePage = ({props, cats}) => {
    return (
        <TransitionGroup className = 'cat__gallery'>
            {cats.map((item, index) => <CSSTransition key = {index} classNames = 'fade' timeout = {500}><CatsListItem  cat = {item} /></CSSTransition>)}
        </TransitionGroup>
    );
}  


const mapStateToProps = ({cats}) => ({
  cats
});

export default connect(mapStateToProps)(HomePage);