import ImageGallery from "./ImageGallery";
import "./styles.css"

function GalleryPage() {
  return (
        <div id="gallery-page" className="page-container">
            <div className="page-section">
                <h3 className="section-head">Gallery</h3>
                <ImageGallery />
            </div>
        </div>
    );
}

export default GalleryPage