import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'; 
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import {Route,BrowserRouter as Router,Switch,Link} from 'react-router-dom';

import './index.css';
import reducer from '../src/reducer/index.js'
// import App from './App';
import Home from '../src/containers/home.js';
// import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 

const createStoreWithMiddleware=applyMiddleware(
	thunk
)(createStore)
const store=createStoreWithMiddleware(reducer)

ReactDOM.render(
	<Provider store={store}>
		<div>
		 	<Router>
		 		<div>
		 			<nav className="navbar navbar-default">
						<div className="container-fluid">
							<div className="navbar-header">
		                        <span className="navbar-brand" href="#">
		                            <Link to="/index">Redux</Link>
		                        </span>
		                    </div>						
							<ul className="nav navbar-nav">
							 	<li>
							 		<Link to='/index'>计算器</Link>
							 	</li>
							 </ul>	
						 </div>	 				
		 			</nav>
 					
			  		<Switch>
			  			<Route path='/index' exact component={Home} />
			  		</Switch>		 			
		 		</div>
		  </Router>
	  </div>
	</Provider>
	, document.getElementById('root'));

