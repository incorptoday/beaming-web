import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <h1>Beem</h1>

        <h3>Coming Soon</h3>

        <div className="home__btns">
          <a href="#">
            <img alt="image" src={require('../../assets/images/googleplay.png')} />
          </a>

          <a href="#">
            <img alt="image" src={require('../../assets/images/appstore.png')} />
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default Home;