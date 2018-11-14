import React, { Component } from 'react';
import LaptopList from "./laptopList"
import LaptopFilters from "./filters"
import "./main.css"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarOpen: true
    }

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(e) {
    e.preventDefault()
    this.setState(prev => {
      return {
        sidebarOpen: !prev.sidebarOpen
      }
    })
  }

  render() {
    const {sidebarOpen} = this.state
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <h1 className="navbar-brand">Jakes Laptop App</h1>
        </nav>
        <div className="utility-bar">
          <button className="filter-tab" onClick={this.handleClose}>FILTER<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg></button>
        </div>
        <div className="wrapper">
          <div className={sidebarOpen ? "sidebar active" : "sidebar"}>
            <div className="sidebar-header">
              <h4>Filters</h4>
              <button className="sidebar-close" onClick={this.handleClose}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>
            </div>
            <LaptopFilters />

          </div>

          <div className={sidebarOpen ? "main" : "main active"}>
            <LaptopList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
