const img = document.querySelector('img');
const mediaQueryListXs = window.matchMedia('(min-width: 320px)');
const mediaQueryListS = window.matchMedia('(min-width: 640px)');
const mediaQueryListM = window.matchMedia('(min-width: 768px)');
const mediaQueryListL = window.matchMedia('(min-width: 1280px)');

const widtWindow= innerWidth;
if(widtWindow<=320){
  img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_480.jpg';
 }
 else if(widtWindow>320 && widtWindow <=640){
  img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg';
}
else if(widtWindow>640 && widtWindow <=768){
  img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1002.jpg';
}
else if(widtWindow>768 && widtWindow<=1280){
  img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1234.jpg';
}
else if(widtWindow>1280){
  img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1394.jpg';
}


function screenTest(e) {
  if (e.matches) {
    if(innerWidth<=320){
      img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_480.jpg';
     }
    else if(innerWidth>320 && innerWidth <=640){
      img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg';
    }
    else if(innerWidth>640 && innerWidth <=768){
      img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1002.jpg';
    }
    else if(innerWidth>768 && innerWidth<=1280){
      img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1234.jpg';
    }
    else if(innerWidth>1280){
      img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1394.jpg';
    }
  }
   else {
     if(innerWidth<=320){
      img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_480.jpg';
     }
     else if(innerWidth>320 && innerWidth <=640){
      img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg';
    }
    else if(innerWidth>640 && innerWidth <=768){
      img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1002.jpg';
    }
    else if(innerWidth>768 && innerWidth<=1280){
      img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1234.jpg';
    }
    else if(innerWidth>1280){
      img.src = 'images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1394.jpg';
    }
  }
}


mediaQueryListXs.addListener(screenTest);
mediaQueryListS.addListener(screenTest);
mediaQueryListM.addListener(screenTest);
mediaQueryListL.addListener(screenTest);
