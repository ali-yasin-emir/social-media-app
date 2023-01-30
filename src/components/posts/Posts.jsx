import Post from '../post/Post';
import './Posts.scss';

const Posts = () => {
  // TEMPORARY

  const posts = [
    {
      id: 1,
      name: 'Ali Yasin Emir',
      userId: 1,
      profilePic: 'https://i.hizliresim.com/d2m90i3.jpg',
      img: 'https://images.unsplash.com/photo-1566470709058-51b3039af264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      desc: 'Just had the best day exploring the city with my friends! So glad we were able to capture some memories with our camera 📷✨ Check out my latest Instagram post for all the photos 💕 #cityadventures #friendshipgoals #neverstopexploring',
    },
    {
      id: 2,
      name: 'Emma Smith',
      userId: 2,
      profilePic:
        'https://images.pexels.com/photos/5302926/pexels-photo-5302926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img: 'https://images.unsplash.com/photo-1535305377477-34336ec00b20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      desc: 'Today was a great day for a hike in the mountains 🏔️ The view from the top was breathtaking! Check out my latest post for more 📷 #hikingadventures #naturelover #neverstoplearning 🌄',
    },
    {
      id: 3,
      name: 'Olivia Brown',
      userId: 3,
      profilePic:
        'https://images.pexels.com/photos/15161727/pexels-photo-15161727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img: 'https://images.unsplash.com/photo-1671553272412-ea0a97ab7639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      desc: '',
    },
    {
      id: 4,
      name: 'William Baker',
      userId: 4,
      profilePic:
        'https://images.pexels.com/photos/10274719/pexels-photo-10274719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img: 'https://images.unsplash.com/photo-1585950425263-265dfd7a7094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      desc: '',
    },
  ];

  return (
    <div className='posts'>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
