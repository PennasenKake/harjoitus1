import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class NotFoundPage extends Component {
    render() {
        return (
            <ComponentNotFound className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Oops!</h1>
                            <h2>404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occurred. Requested page not found!
                            </div>
                            <div className="error-actions">
                                <Link to="/home" className="btn btn-outline-primary btn-lg">
                                    &#127968; Back to Home
                                </Link>
                            </div>
                            <div className="error-actions">
                                <Link to="/contact" className="btn btn-outline-secondary btn-lg">
                                    &#9993; Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ComponentNotFound>
        );
    }
}

export default NotFoundPage;

const ComponentNotFound = styled.div`

.error-template {
    padding: 40px 15px;
    text-align: center;
}

.error-actions {
    margin-top: 15px;
    margin-bottom: 15px;

}

.btn {
    margin-right: 10px;

}

`;	
