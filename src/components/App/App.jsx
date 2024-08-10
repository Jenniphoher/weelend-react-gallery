// import useState() && useEffect()
// 'GET' function
// import RenderPhotos()
// import axios

import axios from 'axios';
import '../App/App.css'
import {useEffect, useState} from 'react';
import Header from '../Header/Header'
import GalleryList from '../GalleryList/GalleryList';

function App() {

  // useState() for setting data:
  const [photoData, setPhotoData] = useState([]);

  // useEffect():
  useEffect(() => {
    getPhotos();
  }, []);

  // 'GET' function for grabbing data from database:
  const getPhotos = () => {

    axios({
      method: 'GET',
      url: '/api/gallery'
    }) .then((response) => {
      const data = response.data;
      setPhotoData(data);
    }) .catch((err) => {
      console.log('Error getting data:', err);
    })

  }

    return (
      <div data-testid="app">
        <header>
            <h1>React Gallery</h1>
        </header>

        <GalleryList photoData={photoData} 
                    getPhotos={getPhotos} />
      </div>
    );

}

export default App;
