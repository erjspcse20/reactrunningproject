import React, { Component } from 'react';
import "../../../assets/css/bootstrap.less";
import "../../../assets/css/style.less";
import "../../../assets/fonts/font-awesome/css/font-awesome.min.less";
import "../../../assets/css/jquery.animateSlider.less";
import "../../../assets/css/styles.less";
export default class LoginDesign extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="row login-register">
                        <div className="col-md-6">
                            <div className="left-sidebar contact-form">
                                <h4 className="text-muted text-center text-uppercase"><strong>I already have an account
                                    here</strong></h4>
                                <div className="form-horizontal">
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <p>Username or email address *</p>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <p>Password *</p>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <label className="checkbox-inline">
                                                <input type="checkbox"/>
                                                    Remember me </label>
                                            <span className="pull-right">
                                                <button className="btn btn-primary login">Login</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <p><strong><a href="password-recovery.html">Lost your password?</a></strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <div className="social-share-box">
                                                <ul className="list-inline">
                                                    <li className="share-label">Connect with:</li>
                                                    <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="contact-form">
                                <div className="page-title section-title being text-center">
                                    <h2><span>I am New Here</span></h2>
                                </div>
                                <div className="form-horizontal">
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <p>Email address *</p>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <p>Mobile*</p>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <p>Password *</p>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <label className="checkbox-inline">
                                                <input type="checkbox"/>
                                                    Apply to become a vendor? </label>
                                            <span className="pull-right">
                                            <button className="btn btn-primary login">Register</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
