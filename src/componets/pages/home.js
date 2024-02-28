// Home.js
import React from 'react';
import { InfoConsumer } from '../context';
import Info from '../../Info';

function Home() {
  return (
    <div className="container">
      <div className="row mt-5">
        <InfoConsumer>
          {value => value.info.map(item => <Info key={item.id} item={item} />)}
        </InfoConsumer>
      </div>
    </div>
  );
}

export default Home;
