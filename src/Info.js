
import React, {Component} from 'react';
import { InfoConsumer } from './componets/context';
import { Link } from 'react-router-dom';


class Info extends Component {

    render() {

        const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img
        } = this.props.item;

        return (
            <InfoConsumer>
                {data => (                    
                    <div className=" col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{width: '18rem'}}>
                            <img src={img} className="card-img-top" alt={headerTitle} />
                                <div className="card-body">
                                    <h3 className="card-title text-uppercase">{headerTitle}</h3>
                                    <h5 className="card-title">{headerSubTitle}</h5>
                                    <p className="card-text">{headerText}</p>
                                    <Link onClick={() => data.hadleDetail(id)}
                                    to={`/details`} className="btn btn-outline-primary text-uppercase">Read More</Link>
                                    
                            </div>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        )
    }
}

export default Info;

