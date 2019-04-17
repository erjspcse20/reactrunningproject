import React from 'react';
import "../../../assets/css/bootstrap.less";
import "../../../assets/css/style.less";
import "../../../assets/fonts/font-awesome/css/font-awesome.min.less";
import "../../../assets/css/jquery.animateSlider.less";
import "../../../assets/css/styles.less";
export default class TopNav extends React.Component {
    constructor(props){
        super();

    }
    render() {
        return (
            <div className = "row">
                <div className = "navbar navbar-default"
                    role = "navigation"
                    id = "slide-nav">
                    <div className = "container">
                        <div className = "navbar-header col-md-3">
                            <a className = "navbar-toggle"> <span
                            className = "sr-only"> Toggle navigation </span> <span className="icon-bar"></span> <span
                            className = "icon-bar"> </span> <span className="icon-bar"></span> </a>
                            <a className="navbar-brand" href="index.html"><img src={require('../../../assets/images/logo.png')} alt="logo" className="img - responsive"/>
                            </a>
                        </div>
                        <div id = "slidemenu" className = "col-md-7">
                            <div className = "row form">
                                <div className = "input-group" id = "adv-search">
                                    <div className = "input-group-btn">
                                        <div className = "btn-group" role = "group">
                                            <div className = "dropdown dropdown-lg">
                                                <button type = "button" className = "btn btn-default dropdown-toggle" data-toggle = "dropdown" aria-expanded = "false"> All
                                                Categories <span className = "caret"> </span></button>
                                                <ul className = "dropdown-menu" role = "menu">
                                                    <li> <a href = ""> All Categories </a></li>
                                                    <li> <a href = ""> Staples </a></li>
                                                    <li> <a href = ""> Packagesd Food </a></li>
                                                    <li> <a href = ""> Beverages </a></li>
                                                    <li> <a href = ""> Fruits </a></li>
                                                    <li> <a href = ""> Vegetables </a></li>
                                                    <li> <a href = ""> Dairy & Bakery </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <input type = "text"
                                        className = "form-control"
                                        placeholder = "Search for snippets" />
                                    <span className = "input-group-btn">
                                        <button
                                            type = "button"
                                            className = "btn btn-primary"> <span
                                            className = "glyphicon glyphicon-search"
                                            aria-hidden = "true"> </span></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-2 paddingright3per">
                            <ul className = "nav navbar-nav nav6 navbar-right text-uppercase">
                                <li> <a href = "" className = "cart">
                                        <span className = "cart-border"> <i className = "fa fa-shopping-cart"> </i> 0 Items - <strong>Rs. 0.00</strong>
                                        </span>
                                    </a>
                                    <ul>
                                        <li>
                                            <div className = "widget_shopping_cart_content">
                                                <h5 className = "page-header"> <strong> Recently Added </strong></ h5>
                                                <table width = "100%" border = "0">
                                                    <tbody>
                                                    <tr>
                                                        <td> <img src = {require('../../../assets/images/Gift-Box-Bath-Care-200x200.jpg')} alt = "pro" width = "80" height = "80"/> </td>
                                                        <td colSpan="2"> CHANNA DAL<br/> 1 × <span className="price">Rs. 349.00</span></td>
                                                        <td width="10px"><a href=""><i className="fa fa-times-circle-o"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <img
                                                            src = {require('../../../assets/images/Gift-Box-Bath-Care-200x200.jpg')}
                                                            alt = "product"
                                                            width = "80"
                                                            height = "80"/> </td>
                                                        <td colSpan="2"> CHANNA DAL<br/>
                                                            1 × <span className="price"><strong>Rs. 349.00</strong></span></td>
                                                        <td><a href=""><i className="fa fa-times-circle-o"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            colSpan = "2"> <p> <span
                                                            className = "total"> Cart total </span></
                                                            p> </td>
                                                        <td colSpan="2" align="right"><p><span className="amount"><strong>Rs.&nbsp;349.00</strong></span></p></td>
                                                    </tr>
                                                    </tbody>
                                                </table>


                                                    <p>
                                                        <button className="btn btn-block btn-default btn-ghost">View Cart</button>
                                                    </p>
                                                    <p>
                                                        <button
                                                            className = "btn btn-block btn-primary login"> Checkout </button>
                                                    </p>
                                                    </div>
                                        </li>
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