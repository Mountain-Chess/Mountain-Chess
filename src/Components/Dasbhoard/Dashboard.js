import React, { Component } from 'react'
import './Dashboard.css'
import Sidebar from '../Sidebar/Sidebar'

class Dashboard extends Component {
  // constructor() {
  //   super ()
  // }


  render() {
    return(
      <div>
        <Sidebar />
        <div className="logo">
          {/* <h1 className="title"> Mountain Chess </h1> */}
        </div>
        
      </div>
    )
  }
}

export default Dashboard 