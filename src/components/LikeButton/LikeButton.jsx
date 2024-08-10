import {useState} from 'react'
import axios from 'axios';

function LikeButton({photo, getPhotos}) {

    const [clickCount, setClickCount] = useState(0);

    // 'PUT' function
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
        <>
            <button onClick={handleOnClick} >Like</button>
            <p>This photo has {photo.likes} likes!</p>
        </>
    )

}

export default LikeButton;