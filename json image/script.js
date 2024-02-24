document.addEventListener("DOMContentLoaded", function() {
  // Sample JSON data for images and URLs
  var imageData = [
    { "url": "https://dixiemedicalclinic.com/assets/images/doctor.png", "link": "https://www.gettyimages.in/photos/human-heart-doctor" },
    { "url": "https://www.swaddorset.org/wp-content/uploads/2020/09/Healthcare-Professional-scaled.jpg", "link":"https://www.practo.com/Bangalore/doctor/aparnaa-panda-gynecologist-obstetrician?sltopn=630936" },
    { "url": "https://th.bing.com/th/id/OIP.aCH23MsqOUHrgocpqR-Z-gAAAA?w=427&h=374&rs=1&pid=ImgDetMain", "link": "https://meet-my-doctor.firebaseapp.com/" },
    { "url": "https://thumbs.dreamstime.com/b/doctor-holding-heart-white-background-attractive-young-red-balloon-31416862.jpg", "link": "https://meet-my-doctor.firebaseapp.com/" },
{ "url": "https://dixiemedicalclinic.com/assets/images/doctor.png", "link": "https://www.gettyimages.in/photos/human-heart-doctor" },
    { "url": "https://www.swaddorset.org/wp-content/uploads/2020/09/Healthcare-Professional-scaled.jpg", "link":"https://www.practo.com/Bangalore/doctor/aparnaa-panda-gynecologist-obstetrician?sltopn=630936" },
    { "url": "https://th.bing.com/th/id/OIP.aCH23MsqOUHrgocpqR-Z-gAAAA?w=427&h=374&rs=1&pid=ImgDetMain", "link": "https://meet-my-doctor.firebaseapp.com/" },
    { "url": "https://thumbs.dreamstime.com/b/doctor-holding-heart-white-background-attractive-young-red-balloon-31416862.jpg", "link": "https://meet-my-doctor.firebaseapp.com/" },
{ "url": "https://dixiemedicalclinic.com/assets/images/doctor.png", "link": "https://www.gettyimages.in/photos/human-heart-doctor" },
    { "url": "https://www.swaddorset.org/wp-content/uploads/2020/09/Healthcare-Professional-scaled.jpg", "link":"https://www.practo.com/Bangalore/doctor/aparnaa-panda-gynecologist-obstetrician?sltopn=630936" },
    { "url": "https://th.bing.com/th/id/OIP.aCH23MsqOUHrgocpqR-Z-gAAAA?w=427&h=374&rs=1&pid=ImgDetMain", "link": "https://meet-my-doctor.firebaseapp.com/" },
    { "url": "https://thumbs.dreamstime.com/b/doctor-holding-heart-white-background-attractive-young-red-balloon-31416862.jpg", "link": "https://meet-my-doctor.firebaseapp.com/" },
{ "url": "https://dixiemedicalclinic.com/assets/images/doctor.png", "link": "https://www.gettyimages.in/photos/human-heart-doctor" },
    { "url": "https://www.swaddorset.org/wp-content/uploads/2020/09/Healthcare-Professional-scaled.jpg", "link":"https://www.practo.com/Bangalore/doctor/aparnaa-panda-gynecologist-obstetrician?sltopn=630936" },
    { "url": "https://th.bing.com/th/id/OIP.aCH23MsqOUHrgocpqR-Z-gAAAA?w=427&h=374&rs=1&pid=ImgDetMain", "link": "https://meet-my-doctor.firebaseapp.com/" },
    { "url": "https://thumbs.dreamstime.com/b/doctor-holding-heart-white-background-attractive-young-red-balloon-31416862.jpg", "link": "https://meet-my-doctor.firebaseapp.com/" },
{ "url": "https://dixiemedicalclinic.com/assets/images/doctor.png", "link": "https://www.gettyimages.in/photos/human-heart-doctor" },
    { "url": "https://www.swaddorset.org/wp-content/uploads/2020/09/Healthcare-Professional-scaled.jpg", "link":"https://www.practo.com/Bangalore/doctor/aparnaa-panda-gynecologist-obstetrician?sltopn=630936" },
    { "url": "https://th.bing.com/th/id/OIP.aCH23MsqOUHrgocpqR-Z-gAAAA?w=427&h=374&rs=1&pid=ImgDetMain", "link": "https://meet-my-doctor.firebaseapp.com/" },
    { "url": "https://thumbs.dreamstime.com/b/doctor-holding-heart-white-background-attractive-young-red-balloon-31416862.jpg", "link": "https://meet-my-doctor.firebaseapp.com/" },
 ];

  var gallery = document.getElementById("gallery");

  // Generate HTML for each image
  imageData.forEach(function(image) {
    var img = document.createElement("img");
    img.setAttribute("src", image.url);
    img.setAttribute("alt", "Image");
    img.classList.add("gallery-image");
    img.addEventListener("click", function() {
      window.location.href = image.link; // Redirect to the URL on click
    });
    gallery.appendChild(img);
  });
});
