//Adding an event litsener to toggle the menu button
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

menuBtn.addEventListener('click', ()=>{
    console.log('button clicked');
    menuBtn.classList.toggle('open');
    nav.classList.toggle('hidden');
})

// var text1 = document.getElementById("box-text").innerHTML = "Hello";
// About us Tab

var aboutUs = {
    "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
    "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
    "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
  };
  
  var unseletectedColor = "#646872";
  var seletectedColor = "#2A2D34";

  //Pratice
  var subtitleTexts = document.getElementsByClassName('subtitle');

  for (var a = 0; a < subtitleTexts.length; a++){
    // console.log(typeof subtitleTexts[a]);
    subtitleTexts[a].onclick = function(){
      // console.log(aboutUs[this.innerHTML]);
      document.getElementById('box-text').innerHTML = aboutUs[this.innerHTML];

      for ( var b = 0; b < subtitleTexts.length; b++){
        console.log(subtitleTexts[b])
          subtitleTexts[b].style['background-color'] = unseletectedColor;
          subtitleTexts[b].style['font-weight'] = 'normal' 
        }
         this.style['background-color'] = seletectedColor;
          this.style['font-weight'] = 'bold';
    
        
      }
    }
   
    
  
















// var aboutUsTab = document.getElementsByClassName('subtitle');
// // console.log(aboutUsTab);
// //LOOP through the array of objects
// for (var a = 0; a < aboutUsTab.length; a++){
//     // console.log(aboutUsTab[a])
//     aboutUsTab[a].onclick = function(){
//         var selectedValue = this.innerHTML;
//         // console.log(aboutUs[selectedValue]);
//         document.getElementById('box-text').innerHTML  = aboutUs[selectedValue];

//         for(var b = 0; b < aboutUsTab.length; b++){
//             aboutUsTab[b].style.backgroundColor = unseletectedColor;
//             aboutUsTab[b].style.fontWeight = 'normal';
//         }
//         this.style.backgroundColor = seletectedColor;
//         this.style.fontWeight = 'bold';
//     }
   
// }


// Service slider

  var ourServices = [
    {
      'title': 'Web design. ',
      'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
    },
  
    {
      'title': 'Branding. ',
      'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
    },
  
    {
      'title': 'Digital Marketing. ',
      'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
    },
    {
      'title': 'Test Services. ',
      'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
    }
    
  ];

//Create the various variables
var nextArrow = document.getElementById("service-next");
var preArrow = document.getElementById("service-pre");
var servicesTitle = document.getElementById("service-subtitle");
var servicesText = document.getElementById("service-text");
var currentServiceIndex = 0;


//Algorithms on how to make sliders
//Adding an event listener to the next arrow
nextArrow.addEventListener('click', ()=>{

  if( currentServiceIndex == (ourServices.length - 1)){
    currentServiceIndex = 0;
  }else{
    currentServiceIndex ++;
  }

  //Create a variables to hold the key-value pairs of the object and set the innerhtml property of the Dom
  var title = ourServices[currentServiceIndex].title;
  var text = ourServices[currentServiceIndex].text;

  servicesTitle.innerHTML = title;
  servicesText.innerHTML = text;
  
  console.log( ourServices[currentServiceIndex].title);
});
//Adding an event listener to the pre arrow

preArrow.addEventListener('click', ()=>{
  
  if( currentServiceIndex == 0){
    currentServiceIndex = ourServices.length - 1;
  }else{
    currentServiceIndex --;
  }


  title = ourServices[currentServiceIndex].title;
  text = ourServices[currentServiceIndex].text;

  servicesTitle.innerHTML = title;
  servicesText.innerHTML = text;
  console.log( ourServices[currentServiceIndex].title);

});
 

//contact form

var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});
