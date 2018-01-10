// 计数器
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { increase, decrease } from '../action/count.js'

class Home extends Component{
	render(){
		const {number,increase,decrease} =this.props
		return(
			<div>
			  <p>这里显示的是当前值: <span className="badge">{number}</span></p>
			  <br />
			  <button type="button" onClick={()=>increase(1)} className="btn btn-default">+1按钮</button>
			  {' '}
			  <button type="button" onClick={()=>decrease(1)} className="btn btn-default">-1按钮</button>
			  {' '}
			</div>
		)
	}
}

const getNumber = state => {
	return{
		number:state.update.number
	}
}

export default connect(
	getNumber,
	{increase, decrease}
)(Home)


