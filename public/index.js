const url_string = window.location.href;
const url = new URL(url_string);
let paramValue = url.searchParams.get("img");

if (!paramValue) {
  paramValue = 19;
}

const panorama = new PANOLENS.ImagePanorama( `./static/${paramValue}.jpg` );
const viewer = new PANOLENS.Viewer();
viewer.add( panorama );
