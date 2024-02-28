import React from "react";
import styled from "styled-components";


function Footer() {

    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a>Lorem ipsum</a></li>
                            <li><a>Lorem ipsum</a></li>
                            <li><a>Lorem ipsum</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                        </ul>
                    </div>                    
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                        </ul>
                    </div>                    
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                        </ul>
                    </div>
                </div>
                {/* footerin ala osa */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        Copyright &copy; 2024. All rights reserved.
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 2rem;
    color: var(--mainWhite);
}

.footer-bottom{
    padding-top: 2rem;
    padding-bottom: 2rem;
}

ul li a{
    color: var(--mainGrey);
}

ul li a: hover{
    color: var(--mainLightGrey);
}

`;

