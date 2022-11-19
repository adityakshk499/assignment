import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesAlt,
  faHeart,
  // faMicrophoneAltSlash,
  faPlayCircle,
  faSearch, faStream,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';
import {Link} from 'react-router-dom'
import './Sidebar.css'

function handleClick(e){
  const arrOfIds = ['discover','search','favourites','playlists','charts']
  var index = arrOfIds.indexOf(e.target.parentNode.id)
  arrOfIds.splice(index,1)
  e.target.parentNode.classList.add('sidebar__option--selected')
  arrOfIds.map(id => 
   document.getElementById(`${id}`).classList.remove('sidebar__option--selected')
  )
  

}


// const id =document.getElementById('discover')


function renderSideBarOption(id,link, icon, text, { selected } = {}) {
  return (
    <div id={id}
       className={cx('sidebar__option', { 'sidebar__option--selected': selected })}
    >
      <FontAwesomeIcon icon={icon} />
   <Link  onClick={handleClick}  className='link' to={link}>{text}</Link>
    </div>
  )
}

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>Bob Smith</p>
      </div>
      <div className="sidebar__options">
        {renderSideBarOption('discover','/', faHeadphonesAlt, 'Discover', { selected: true })}
        {renderSideBarOption('search','/search', faSearch, 'Search')}
        {renderSideBarOption('favourites','/favourites', faHeart, 'Favourites')}
        {renderSideBarOption('playlists','/playlists', faPlayCircle, 'Playlists')}
        {renderSideBarOption('charts','/charts', faStream, 'Charts')}
      </div>
    </div>
  );
}
