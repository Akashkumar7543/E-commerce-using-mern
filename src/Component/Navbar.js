import React from 'react';
import '../App.css';
function Navbar() {
    return (
        <div className="main-navbar shadow-sm sticky-top">
            <div className="top-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                            <h5 className="brand-name">Multi Vendor</h5>
                        </div>
                        <div className="col-md-5 my-auto">
                            <form role="search">
                                <div className="input-group">
                                    <input type="search" placeholder="Search your product" className="form-control" />
                                    <button className="btn bg-white" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 my-auto">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-shopping-cart"></i> Cart (0)
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-user"></i> User
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-user"></i> Profile</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-list"></i> My Orders</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-heart"></i> My Wishlist</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-shopping-cart"></i> My Cart</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-sign-out"></i> Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-white" aria-label="Eleventh navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample09">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">All Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">New Arrivals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Featured Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Electronics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fashions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accessories</a>
                        </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Other Products</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Grocery</a></li>
                                    <li><a className="dropdown-item" href="#">Bills</a></li>
                                    <li><a className="dropdown-item" href="#">Payment</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;