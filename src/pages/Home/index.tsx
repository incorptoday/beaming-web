import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <h1>Beem</h1>

        <h3>Beaming App</h3>

        <div className="home__btns">
          <a>
            <img
              alt="image"
              src={require('../../assets/images/googleplay.png')}
            />
          </a>

          <a
            target="_blank"
            href="https://apps.apple.com/us/app/beem-beaming-app/id6451088060"
          >
            <img
              alt="image"
              src={require('../../assets/images/appstore.png')}
            />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
