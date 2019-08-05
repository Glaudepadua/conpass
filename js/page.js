const overlay = document.querySelector('.image-overlay');
const dataField = document.querySelector('.data');

const points = [
  {
    x: '29.5%', //320
    y: '26px', //50
    data: 'Extended Cockpit'
  },
  {
    x: '43%', //460
    y: '25px', //210
    data: 'Targeting Lasers'
  },
  {
    x: '46%', //250
    y: '98px', //350
    data: 'Sheild Generators'
  }
];

points.forEach((point) => {
  let img = document.createElement('img'); 
  img.style.left = point.x;
  img.style.top = point.y;
  img.title = point.data;
  img.className= 'overlay-image';
  img.src="img/hotspot.png"
  overlay.appendChild(img);
  img.data = point.data;
  img.addEventListener('mouseenter', handleMouseEnter);
  img.addEventListener('mouseleave', handleMouseLeave);
  img.dataToggle = "popover";
});

function handleMouseEnter(event) {
  dataField.innerHTML = event.currentTarget.data;
}


function handleMouseLeave(event) {
  dataField.innerHTML = '&nbsp;';
}