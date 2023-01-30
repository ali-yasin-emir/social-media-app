import { useContext } from 'react';
import './Comments.scss';
import { AuthContext } from '../../context/authContext';

const comments = [
  {
    id: 1,
    name: 'Emily Robertson',
    userId: 1,
    profilePic:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    img: 'https://images.unsplash.com/photo-1566470709058-51b3039af264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    desc: 'This is such a great post! Love the colors and composition 🔥📷',
  },
  {
    id: 2,
    name: 'Liam Parker',
    userId: 2,
    profilePic:
      'https://images.pexels.com/photos/5302926/pexels-photo-5302926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img: 'https://images.unsplash.com/photo-1535305377477-34336ec00b20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    desc: 'You always have the best ideas for your posts! Keep it up 💡💕',
  },
  {
    id: 3,
    name: 'Ava Johnson',
    userId: 3,
    profilePic:
      'https://images.pexels.com/photos/15161727/pexels-photo-15161727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img: 'https://images.unsplash.com/photo-1671553272412-ea0a97ab7639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    desc: 'I love how creative you are with your posts! So inspiring 🎨🎬',
  },
  {
    id: 4,
    name: 'Michael Brown',
    userId: 4,
    profilePic:
      'https://images.pexels.com/photos/10274719/pexels-photo-10274719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img: 'https://images.unsplash.com/photo-1585950425263-265dfd7a7094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    desc: 'Your posts always brighten up my day! Keep sharing your positivity 🌞😊',
  },
];

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='comments'>
      <div className='write'>
        <img src={currentUser.profilePic} alt='' />
        <input type='text' placeholder='write a comment' />
        <button>Send</button>
      </div>

      {comments.map((comment) => (
        <div className='comment'>
          <img src={comment.profilePic} alt='' />
          <div className='info'>
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className='date'>1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
