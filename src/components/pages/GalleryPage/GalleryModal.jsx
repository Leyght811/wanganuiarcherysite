import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GalleryModal({ img, visible, closeFunc }) {
    return (
        <div id="gallery-modal" style={{ display: visible }}>
            {/* <div id="gallery-modal-image" style={{backgroundImage:`url(${img})`}} /> */}
            <div id="gallery-modal-image-container">
                <span
                    id="gallery-modal-image-close-button"
                    onClick={() => closeFunc()}
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </span>
                <img src={img} id="gallery-modal-image" />
            </div>
        </div>
    );
}
