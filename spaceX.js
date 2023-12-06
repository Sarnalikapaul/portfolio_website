(function(){
let socials = document.querySelectorAll('.Social div');

socials.forEach(function(social,index){
    social.style.animation = `moveIn 1s cubic-bezier(.51,.92,.24,1.15) forwards ${index/5}s`;
});





}());



//set waypoints
setTimeout(function(){
var waypoint = new Waypoint({
    element: document.getElementById('exp-Id'),
    handler: function() {
     //Expeirence Section

   var p = document.querySelectorAll(".progress-bar");
   p[0].setAttribute("style","width:70%;transition:1s all");
   p[1].setAttribute("style","width:60%;transition:1.2s all");
   p[2].setAttribute("style","width:40%;transition:1.4s all");
   p[3].setAttribute("style","width:30%;transition:1.7s all");
   p[4].setAttribute("style","width:50%;transition:1.9s all");
    },
  offset: '90%'     
    
  });

},1000)