import React from 'react';
import { connect } from 'react-redux';
import"../../../assets/css/bootstrap.less";
import"../../../assets/css/style.less";
import"../../../assets/fonts/font-awesome/css/font-awesome.min.less";
import"../../../assets/css/jquery.animateSlider.less";
import"../../../assets/css/styles.less";
class Header extends React.Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <div className="row top">
                <div className="row">
                    <div className="col-md-7">
                        <div className="row text-right">

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-right">
                            <ul className="list-inline nav5">
                                <li> <a href=""> Support : +919479275716 </a> </li>
                                <li className="vendor"> <a href=""> Login / Register </a>
                                    <ul>
                                        <li>
                                            <label>Username or email address *</label>
                                            <input type="text" className="form-control"/>
                                        </li>
                                        <li>
                                            <label>Username or email address *</label>
                                            <input type="text" className="form-control"/>
                                        </li>
                                        <li className="text-center">
                                            <button className="btn btn-primary login">Sign In</button>
                                            <a href="">Lost password?</a> <a href=""><strong>New Customer ?
                                            Sign up</strong></a></li>
                                        <li>
                                            <div className="social-login"> Connect with:<a href=""><i className="fa fa-facebook-f"></i></a></div>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row text-right">
                            <ul className="list-inline nav5 after-login">
                                <li><a href="">Hi, subodh</a>
                                    <ul>
                                        <li><a href="">My Account</a></li>
                                        <li><a href="">My Order</a></li>
                                        <li><a href="">My Wishlist</a></li>
                                        <li><a href="">Edit Address</a></li>
                                        <li><a href="">Edit Account</a></li>
                                        <li><a href="">Logout</a></li>
                                    </ul>

                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null)(Header);