function showSlide(slideShowName, displayElementId, desiredImageUrl) {
    let displayImage = document.getElementById(displayElementId);
    displayImage.style.display = '';
    displayImage.src = desiredImageUrl;

    let thumbnails = document.getElementsByClassName(slideShowName + ' thumbnail');
    for (let i = 0; i < thumbnails.length; i++) {
        let thumbnail = thumbnails[i];
        if (isImageBeingDisplayed(thumbnail, desiredImageUrl)) {
            if (isThumbnailActive(thumbnail)) {
                hideMainImage(displayImage);
                deactivateThumbnail(thumbnail);
            } else {
                activateThumbnail(thumbnail);
            }
        } else {
            deactivateThumbnail(thumbnail);
        }
    }
}

function isImageBeingDisplayed(thumbnail, desiredImageUrl) {
    return thumbnail.src.replace(window.location.origin, '') === desiredImageUrl;
}

function isThumbnailActive(thumbnail) {
    return thumbnail.className.indexOf('active') != -1;
}

function activateThumbnail(thumbnail) {
    thumbnail.className += ' active';
}

function hideMainImage(displayImage) {
    displayImage.src = '';
    displayImage.style.display = 'none';
}

function deactivateThumbnail(thumbnail) {
    thumbnail.className = thumbnail.className.replace(' active', '');
}
