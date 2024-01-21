export const downloadImage=(url, width, height)=>{
  // Create a new image element
  const img = new Image();

  // Set the image source to the provided URL
  img.src = url;

  // Create a canvas element
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Set the canvas dimensions to the desired size
  canvas.width = width;
  canvas.height = height;

  // When the image is loaded, draw it onto the canvas
  img.onload = function () {
    ctx.drawImage(img, 0, 0, width, height);

    // Create a download link
    const link = document.createElement('a');

    // Set the download attribute and convert canvas content to data URL
    link.download = 'downloaded_image.png';
    link.href = canvas.toDataURL('image/png');

    // Trigger a click on the link to start the download
    link.click();
  };
}
