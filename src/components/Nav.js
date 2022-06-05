import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Nav() {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/home">Sách Mới</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/thuattoan">Sách Thuật Toán</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/python">Sách Python</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/javascript">Sách Javascript</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">Khác</a>
            </li>
        </ul>
    )
}

export default Nav;