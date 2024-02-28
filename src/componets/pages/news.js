import React, { Component } from "react";
import NewCard from "../newCard";
import { InfoConsumer } from "../context";

class News extends Component {
    render() {
        return (
            <InfoConsumer>
                {value => {
                    return value.news.map(item => { 
                        return <NewCard key={item.id} item={item} />; 
                    });
                }}
            </InfoConsumer>
        );
    }
}

export default News;
