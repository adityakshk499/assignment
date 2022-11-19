import React  from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

export default function Discover ({apidata}) {
 

  
    

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={apidata[0].data.albums.items} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={apidata[1].data.categories.items}  imagesKey={true}/>
        <DiscoverBlock text="BROWSE" id="browse" data={apidata[2].data.playlists.items} />
      </div>
    );
  
}
