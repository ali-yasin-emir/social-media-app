import './Stories.scss';

import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  // TEMPORARY

  const stories = [
    {
      id: 1,
      name: 'Martin Eden',
      img: 'https://images.pexels.com/photos/13772488/pexels-photo-13772488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Ruth Morse',
      img: 'https://images.pexels.com/photos/12877971/pexels-photo-12877971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Lizzie Connolly',
      img: 'https://images.pexels.com/photos/14980849/pexels-photo-14980849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Joe Dawson',
      img: 'https://images.pexels.com/photos/3185493/pexels-photo-3185493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className='stories'>
      <div className='story'>
        <img src={currentUser.profilePic} alt='' />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className='story' key={story.id}>
          <img src={story.img} alt='' />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
