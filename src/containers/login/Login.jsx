import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/common/Header';
import TopNav from '../../components/common/TopNav';
import LoginDesign from '../../components/login/LoginDesign';
import Footer from '../../components/common/Footer';
class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <TopNav/>
                <LoginDesign/>
                <Footer/>
            </div>
        );
    }
}
export default connect(null)(Login)