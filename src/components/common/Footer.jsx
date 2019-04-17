import React from 'react';
import "../../../assets/css/bootstrap.less";
import "../../../assets/css/style.less";
import "../../../assets/fonts/font-awesome/css/font-awesome.min.less";
import "../../../assets/css/jquery.animateSlider.less";
import "../../../assets/css/styles.less";
export default class Footer extends React.Component {
    render() {
        return (
            <div className="row footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-6">
                                    <p className="text-uppercase"><strong>About Sri Maa Annapurna</strong></p>
                                    <ul className="list-unstyled">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="media.html">Media</a></li>
                                        <li><a href="terms-conditions.html">Terms of Use</a></li>
                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                        <li><a href="testimonial.html">Testimonials</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6">
                                    <p className="text-uppercase"><strong>Payment & Shipping</strong></p>
                                    <ul className="list-unstyled">
                                        <li><a href="payment.html">Payment Methods</a></li>
                                        <li><a href="shipping-policy.html">Shipping Policy</a></li>
                                        <li><a href="location-we-ship.html">Locations We Ship To</a></li>
                                        <li><a href="estimated-delivery.html">Estimated Delivery Time</a></li>
                                        <li><a href="shipping-return.html">Return Policy</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6">
                                    <p className="text-uppercase"><strong>Contact Us</strong></p>
                                    <ul className="list-unstyled">
                                        <li><a href="contact.html">Contact Form</a></li>
                                        <li><a href="location-map.html">Location Map</a></li>
                                        <li><a href="info@smaretails.com">info@smaretails.com</a></li>
                                        <li><a href="#">6701 500 720</a></li>
                                        <li><a href="#">05813, Ground Floor<br/>
                                            New Vihar, Phase-V<br/>
                                            Sonipat-122016</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6">
                                    <p className="text-uppercase"><strong>Coupon Partners</strong></p>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Coupon Dunia</a></li>
                                        <li><a href="#">Couponhaat.in</a></li>
                                        <li><a href="#">info@smaretails.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 subscribe">
                            <p><strong>JOIN WITH US</strong></p>
                            <div className="social">
                                <div className="div">
                                    <a href="#"><span>Facebook</span></a>
                                    <a href="#"><span>Twitter</span></a>
                                    <a href="#"><span>Google+</span></a>
                                    <a href="#"><span>Github</span></a>
                                    <a href="#"><span>Dribbble</span></a>
                                    <a href="#"><span>CodePen</span></a>
                                </div>
                            </div>
                            <p><strong>SUBSCRIBE MAIL</strong></p>
                            <p>
                                <small className="text-muted"> Register now to get updates on promotions.</small>
                            </p>
                            <div className="form-horizontal">
                                <div className="form-group">
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group text-right">
                                    <button className="btn btn-warning btn-orange">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
