import React, { useState } from "react";
import GalleryModal from "./GalleryModal";

function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

export default function ImageGallery() {
    const [modalImg, setModalImg] = useState(null);
    const [displayModal, setDisplayModal] = useState("none");
    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(
        require.context("./galleryImages/", false, /\.(png|jpe?g|svg)$/),
    );

    const displayImg = (img) => {
        setModalImg(img);
        setDisplayModal("flex");
    };

    const rows = chunkArray(images, 3);
    // console.log(images);
    return (
        <div id="image-gallery">
            {rows.map((row, rowIndex) => (
                <div className="gallery-row" key={rowIndex}>
                    {row.map((img, imgIndex) => (
                        // <img className="gallery-item" key={imgIndex} src={img} alt="" />
                        <div
                            style={{ backgroundImage: `url(${img})` }}
                            className="gallery-item"
                            onClick={() => displayImg(img)}
                        />
                    ))}
                </div>
            ))}
            <GalleryModal
                visible={displayModal}
                img={modalImg}
                closeFunc={() => setDisplayModal("none")}
            />
        </div>
    );
}
