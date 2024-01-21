export const downloadImage = (url, width, height) => {
  const img = new Image();
  img.src = url;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  img.onload = function () {
    ctx.drawImage(img, 0, 0, width, height);
    const link = document.createElement("a");
    link.download = "downloaded_image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
};
