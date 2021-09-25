// import React, {Component} from 'react';
// import { Switch, NavLink, Route } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import {connect} from 'react-redux';
// import HomePage from './HomePage';
// import CatImg from './CatImg';
// import Footer from './Footer';
// import CategoriesList from './CategoriesLIst';
// import PropTypes from 'prop-types';


  


// class App extends Component {
//   //pass props to route render={(props) => <HomePage cats = {this.props.cats} {...props}/>}
//   render() {
//     const activeStyle = { color: '#e73d13', fontWeight: 'bold' };
//     return (
//       <div>
//         <div className = 'navigation'>
//           <a className = 'logo'>Images from cats API (task: Narek Totolyan)</a>
//         </div>
//         <CategoriesList/>
//         <main className = 'container'>
//         <TransitionGroup>
//           <CSSTransition key = {this.props.routing.location.key} classNames = 'fade' timeout = {300}>
//             <Switch location={this.props.routing.location}>
//               <Route path = '/:id' component = {CatImg} />
//             </Switch>
//           </CSSTransition>
//         </TransitionGroup>
//         </main>
//         <Footer/>
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({routing}) => ({
//   routing
// });

// export default connect(mapStateToProps)(App); 


import React, {Component} from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import HomePage from './HomePage';
//import AboutPage from './AboutPage';
import CatImg from './CatImg';
import CategoriesList from './CategoriesLIst';



class App extends Component {

  render (props) {
    return (
      <div>
        <div className = 'navigation'>
          <a className = 'narek'>Images from cats API (task: Narek Totolyan)</a>
        </div>
        <CategoriesList/>
        <HomePage />
      </div>
    );
  }
}


const mapStateToProps = ({routing}) => ({
  routing
});

export default connect(mapStateToProps)(App); 