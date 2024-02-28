import React, { Component } from 'react';
import { InfoConsumer } from './context';
import { Link } from 'react-router-dom';

class NewCard extends Component {
    render() {
        return (
            <InfoConsumer>
                {value => (
                    <div className="card container mt-2 mb-3 p-5">
                        <div className="card-body">
                            <h5 key={this.props.item.id} className="card-title">{this.props.item.newsTitle}</h5>
                            <p className="card-text">{this.props.item.newsText}</p>
                            <Link className="card-link">Read More</Link>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        );
    }
}

export default NewCard;
