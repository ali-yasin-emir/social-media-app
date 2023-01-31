import './Profile.scss';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import Posts from '../../components/posts/Posts';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='profile'>
      <div className='images'>
        <img
          className='cover'
          src='https://images.unsplash.com/photo-1675110972343-67d9aaaea396?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt=''
        />
        <img className='profilePic' src={currentUser.profilePic} alt='' />
      </div>
      <div className='profileContainer'>
        <div className='uInfo'>
          <div className='left'>
            <a href='https://www.facebook.com'>
              <FacebookOutlinedIcon fontSize='large' />
            </a>
            <a href='https://www.instagram.com'>
              <InstagramIcon fontSize='large' />
            </a>
            <a href='https://www.twitter.com'>
              <TwitterIcon fontSize='large' />
            </a>
            <a href='https://www.linkedin.com'>
              <LinkedInIcon fontSize='large' />
            </a>
            <a href='https://www.pinterest.com'>
              <PinterestIcon fontSize='large' />
            </a>
          </div>
          <div className='center'>
            <span>Ali Yasin Emir</span>
            <div className='info'>
              <div className='item'>
                <PlaceIcon />
                <span>TR</span>
              </div>
              <div className='item'>
                <LanguageOutlinedIcon />
                <span>weakton.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className='right'>
            <EmailOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
