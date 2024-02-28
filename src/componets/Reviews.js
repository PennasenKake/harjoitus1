import React, { Component } from 'react';
import { InfoConsumer } from "./context";
import ReviewCard from './reviewCard';

class Reviews extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => (
                    data.reviews.map(person => (
                        <ReviewCard key={person.id} person={person} />
                    ))
                )}
            </InfoConsumer>
        );
    }
}

export default Reviews;
