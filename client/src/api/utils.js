// upload image in IMGBB
// export const imageUpload = async image => {
//   const formData = new FormData()
//   formData.append('image', image)
//   const url = `https://api.imgbb.com/1/upload?key=${
//     import.meta.env.VITE_IMGBB_KEY
//   }`
//   const response = await fetch(url, {
//     method: 'POST',
//     body: formData,
//   })
//   const data = await response.json()
//   return data
// }

//uploading image to cloudinary
export const imageUpload= async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append(
    "upload_preset",
    `${import.meta.env.VITE_IMAGE_CLOUDINARY_UPLOAD_PRESET}`
  );
  //uploading images in a specific folder
  formData.append("folder", "AishaHaven/AddRooms");
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${
    import.meta.env.VITE_IMAGE_CLOUDINARY_NAME
  }/image/upload`;
  console.log(cloudinaryUrl)
  const response = await fetch(cloudinaryUrl, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};

