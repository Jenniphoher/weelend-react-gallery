import axios from 'axios';
import {useState} from 'react'
import LikeButton from '../LikeButton/LikeButton';

function GalleryItem({photo, getPhotos}) {

    const [imgToggle, setImgToggle] = useState(true);
    const [clickCount, setClickCount] = useState(photo.likes);

    const toggle = () => {
        setImgToggle(!imgToggle) 
    }

    const visible = imgToggle ? (
        <div width='300px' height='300px'>
            <h2>{photo.title}</h2>
            <img data-testid="toggle"
            src={photo.url} 
            width='300px'
            height='300px'
            onClick={toggle} />

        </div>
    ) : (
        <div width='300px' height='300px'>
            <h2>{photo.title}</h2>
            <span data-testid="toggle"
            className='photoDes'
            onClick={toggle}>
                {photo.description}
            </span>
        </div>
    );

    // console.log('imgToggle is:', imgToggle);

    const handleOnClick = () => {

        const currentCount = clickCount + 1;
        setClickCount(currentCount);
        console.log('This is currentCount:', currentCount);

        axios({
            method: 'PUT',
            url: `/api/gallery/like/${photo.id}`,
            data: {likes: currentCount}
        }) .then((response) => {
            const data = response.data;
            getPhotos(data)
        }) .catch((err) => {
            console.log('Error in liking:', err);
        })
    }

    return (
        <div data-testid="galleryItem">
            
            {visible}
            {/* <LikeButton data-testid="like"
                    photo={photo} 
                    getPhotos={getPhotos} /> */}
            <button data-testid="like" onClick={handleOnClick}>Like</button>
            <p>This photo has {photo.likes} likes!</p>
        </div>
    )

}

export default GalleryItem;