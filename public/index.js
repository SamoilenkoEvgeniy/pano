console.log(window.location.href);

const url_string = window.location.href;
const url = new URL(url_string);
const paramValue = url.searchParams.get("img");
alert(paramValue);

const panorama = new PANOLENS.ImagePanorama( './static/19.jpg' );
const viewer = new PANOLENS.Viewer();
viewer.add( panorama );
