function showSlide(slideShowName, displayElementId, thumbnailIndex, desiredImageUrl) {
    let displayImage = document.getElementById(displayElementId);
    displayImage.src = desiredImageUrl;

    let thumbnails = document.getElementsByClassName(slideShowName + ' thumbnail');
    for (let i = 0; i < thumbnails.length; i++) {
        let thumbnail = thumbnails[i];
        if (thumbnail.src.replace(window.location.origin, '') === desiredImageUrl) {
            if (thumbnail.className.indexOf('active') != -1) {
                displayImage.src = '';
                thumbnail.className = thumbnail.className.replace(' active', '');
            } else {
                thumbnail.className += ' active';
            }
        } else {
            thumbnail.className = thumbnail.className.replace(' active', '');
        }
    }
}
