


//
//function getRandomColor() {
//    var letters = '0123456789ABCDEF';
//    var color = '#';
//    for (var i = 0; i < 6; i++ ) {
//        color += letters[Math.floor(Math.random() * 16)];
//    }
//    return color;
//};

//
//function set_color(){
//var color=getRandomColor();
//document.getElementById('gallery').style.backgroundColor=color;
//alert(color);
//};


var bw_01 = ['images/bw_72x48_01.jpg', 'Marker on canvas', '72x48in', 'Black and White'];
var bw_02 = ['images/bw_72x48_02.jpg', 'Marker on canvas', '72x48in', 'Black and White'];
var bw_03 = ['images/bw_72x48_03.jpg', 'Marker on canvas', '60x48in', 'Black and White'];
var bw_04 = ['images/bw_60x48_01.jpg', 'Marker on canvas', '60x48in', 'Black and White'];
var bw_05 = ['images/bw_48x36_01.jpg', 'Marker on canvas', '48x36in', 'Black and White'];
var bw_06 = ['images/bw_48x36_02.jpg', 'Marker on canvas', '60x48in', 'Black and White'];



var color_01 = ['images/color_16x20_01.jpg', 'Acrylic on canvas', '16x20in', 'Color'];
var color_02 = ['images/color_16x20_02.jpg', 'Acrylic on canvas', '16x20in', 'Color'];
var color_03 = ['images/color_16x20_03.jpg', 'Acrylic on canvas', '16x20in', 'Color'];
var color_04 = ['images/color_16x20_04.jpg', 'Acrylic on canvas', '16x20in', 'Color'];
var color_05 = ['images/color_16x20_05.jpg', 'Acrylic on canvas', '16x20in', 'Color'];
var color_06 = ['images/color_16x20_06.jpg', 'Acrylic on canvas', '16x20in', 'Color'];
var color_07 = ['images/color_16x20_07.jpg', 'Acrylic on canvas', '16x20in', 'Color'];
var color_08 = ['images/color_36x48_01.jpg', 'Acrylic on canvas', '36x48in', 'Color'];
var color_09 = ['images/color_36x48_02.jpg', 'Acrylic on canvas', '36x48in', 'Color'];
var color_10 = ['images/color_36x48_03.jpg', 'Acrylic on canvas', '36x48in', 'Color'];
var color_11 = ['images/color_36x48_04.jpg', 'Acrylic on canvas', '36x48in', 'Color'];
var color_12 = ['images/color_36x48_05.jpg', 'Acrylic on canvas', '36x48in', 'Color'];
var color_13 = ['images/color_36x48_06.jpg', 'Acrylic on canvas', '36x48in', 'Color'];
var color_12 = ['images/color_36x48_07.jpg', 'Acrylic on canvas', '36x48in', 'Color'];
var color_13 = ['images/color_36x48_08.jpg', 'Acrylic on canvas', '36x48in', 'Color'];
var color_14 = ['images/color_36x48_09.jpg', 'Acrylic on canvas', '36x48in', 'Color'];
var color_15 = ['images/color_36x48_10.jpg', 'Acrylic on canvas', '36x48in', 'Color'];
var color_16 = ['images/color_48x72_01.jpg', 'Acrylic on canvas', '36x48in', 'Color'];
    

var bw_image_list = [bw_01, bw_02, bw_03, bw_04, bw_05,bw_06];
var color_image_list = [color_01, color_02, color_03, color_04, color_05, color_06, color_08, color_09, color_10, color_11, color_12, color_13, color_14, color_15, color_16];
    
function set_image(x){
var new_img =document.createElement('img');
    new_img.className='gallery';
    new_img.src=x;
    
 
    
document.getElementById('gallery').innerHTML='';    
document.getElementById('gallery').appendChild(new_img);  
    
};
        
function load_gallery_bw(){
    document.body.style.backgroundImage='url(images/background_01.jpg)';
    document.getElementById('gallery_parent').style.backgroundImage='url(images/background_02.jpg)';
    document.getElementById('gallery_parent').innerHTML='';
    var new_div=document.createElement('div');
    new_div.id='scroller';
    new_div.style.backgroundColor='none';
    new_div.style.width='16vw';
  new_div.style.height='68vh'; 
  new_div.style.margin='3vh 2vw';
    new_div.style.padding='0';
    new_div.style.overflowY='scroll';

document.getElementById('gallery_parent').appendChild(new_div);
 
    var new_ul=document.createElement('ul');
    new_ul.id='scroller_ul';
    new_ul.padding='0';
    new_ul.margin='0';
    new_ul.style.listStyle='none';
    document.getElementById('scroller').appendChild(new_ul);
    
   for(i in bw_image_list)
  {
    var new_li = document.createElement('li');
        new_li.className = 'thumbnail';
       
        new_li.innerHTML='<img src='+bw_image_list[i][0]+' onclick=set_image("'+bw_image_list[i][0]+'")>';
    
      document.getElementById('scroller_ul').appendChild(new_li);
      
};
var new_gallery=document.createElement('div');
    new_gallery.id='gallery'

    
    document.getElementById('gallery_parent').appendChild(new_gallery);
    };
        

function load_gallery_color(){
   document.body.style.backgroundImage='url(images/background_02.jpg)'; document.getElementById('gallery_parent').style.backgroundImage='url(images/background_01.jpg)';
      document.getElementById('gallery_parent').innerHTML='';
    var new_div=document.createElement('div');
    new_div.id='scroller';
    new_div.style.backgroundColor='none';
    new_div.style.width='16vw';
  new_div.style.height='68vh'; 
  new_div.style.margin='3vh 2vw';
    new_div.style.padding='0';
    new_div.style.overflowY='scroll';
document.getElementById('gallery_parent').appendChild(new_div);
 
    var new_ul=document.createElement('ul');
    new_ul.id='scroller_ul';
    new_ul.padding='0';
    new_ul.margin='0';
    new_ul.style.listStyle='none';
    document.getElementById('scroller').appendChild(new_ul);
    
   for(i in color_image_list)
  {
    var new_li = document.createElement('li');
        new_li.className = 'thumbnail';
//  
        new_li.innerHTML='<img src='+color_image_list[i][0]+' onclick=set_image("'+color_image_list[i][0]+'")>';
      document.getElementById('scroller_ul').appendChild(new_li);
      
};
var new_gallery=document.createElement('div');
    new_gallery.id='gallery'

    
    document.getElementById('gallery_parent').appendChild(new_gallery);
    };
        


function load_sound(){
    document.body.style.background='black';
    document.getElementById('gallery_parent').style.background='black';
    document.getElementById('gallery_parent').innerHTML='';
    var new_div=document.createElement('div');
    new_div.color='black';
    new_div.style.height='65vh';
    new_div.style.width='57vw';
    new_div.style.backgroundColor='white';

    new_div.style.margin='5vh 10vw'
    new_div.padding='10vh 10vw';
    new_div.innerHTML='<h2>COMING SOON</h2>';
    
    document.getElementById('gallery_parent').appendChild(new_div);
};




function set_contact(){
  document.getElementById('gallery_parent').style.background='white';
document.getElementById('gallery_parent').innerHTML='';
    var new_div = document.createElement('div');
    new_div.id='contact';
    new_div.innerHTML='For inquiries on specific works or more general questions, please email me at <h3>leifgrimson@gmail.com<h3>';
//    new_div.style.margin='15vh 10vw';
//    new_div.style.fontSize='5vh';
//    new_div.style.lineHeight='10vh';
    document.getElementById('gallery_parent').appendChild(new_div);
 
};


function set_about(){
    document.getElementById('gallery_parent').innerHTML='';
    var new_div=document.createElement('div');
    new_div.style.height='35vh';
    new_div.style.width='40vw';
    new_div.style.margin='10vh 18vw';
    new_div.style.backgroundColor='white';
    new_div.style.padding='20vh 0 0 0';
    new_div.innerHTML='COMING SOON';
    document.getElementById('gallery_parent').appendChild(new_div);
};