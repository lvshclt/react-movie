import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// const Mew = (props) => {
//   console.log(props.mewmew);
//   return <div> a </div>;
// };

// props.mewmew
// {mewmew} = props
const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg/1200px-Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg',
    ratings: 3,
  },
  {
    id: 2,
    name: 'zzuggumi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg/1200px-Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg',
    ratings: 3,
  },
  {
    id: 3,
    name: 'pizza',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg/1200px-Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg',
    ratings: 3,
  },
  {
    id: 4,
    name: 'kimchi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg/1200px-Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg',
    ratings: 3,
  },
];

const renderFood = (v) => {
  return <Food key={v.id} name={v.name} picture={v.image} ratings={v.ratings} />;
};

const Food = ({ name, picture, ratings }) => {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{ratings}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
};

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    return <div> {foodILike.map(renderFood)}</div>;
  }
}

export default App;
