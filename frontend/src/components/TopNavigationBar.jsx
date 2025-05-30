import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList.jsx'
import FavBadge from './FavBadge.jsx'

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge />
    </div>
  )
};

export default TopNavigation;
