import GalleryItem from '../GalleryItem/GalleryItem'



function GalleryList({photoData, getPhotos}) {

    return (
        <div data-testid="galleryList">
            {photoData.map((photo) => {
                return (
                    <div key={photo.id}>    
                        <GalleryItem photo={photo} 
                                    getPhotos={getPhotos} />
                    </div>
                )
            })} 
            
        </div>
    )

}

export default GalleryList;