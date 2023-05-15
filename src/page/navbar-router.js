import React from 'react'
import { BrowserRouter, NavLink, Routes, Route, } from 'react-router-dom'
import Home from './home'
import Member from './member'
import Product from './product'


export default function NavlinkRoute() {
  return (
    <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav nav-pills">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/member" className="nav-link" >Member</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/product" className="nav-link" >Product</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/member" element={<Member />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
  )
}
