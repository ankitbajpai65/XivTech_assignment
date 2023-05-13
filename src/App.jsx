import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Content from './Components/Content';
import { Data } from './Components/Data'
import '../src/Content.css'

const App = () => {
  return (
    <>
      <div className="mt-5 mb-5">
        {Data.map((val, id) => {
          return (
            <Content key={id} head={val.head} des={val.des} info={val.info} img={val.img} />
          );
        })
        }
      </div>
    </>
  );
}

export default App;
