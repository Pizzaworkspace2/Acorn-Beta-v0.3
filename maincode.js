skins = [ "freddy", "blueberry", "snoo", ]
//progress on skins
document.addEventListener('DOMContentLoaded', (event) => {
const acorntitle = document.getElementById('home');
const characters = document.getElementById('characters');
const play = document.getElementById('play');

  characters.style.display = 'none';

  play.addEventListener('click', function() {
    acorntitle.style.display = 'none';
    characters.style.display = 'block';

  });
  
 const freddy = document.getElementById('freddy');
 const chardisplay = document.getElementById('chardisplay');

  freddy.addEventListener('click', function() {
    chardisplay.style.background = 'url("assets/Freddy.png")';
    });
  document.getElementById('gameframe').style.animationPlayState = 'paused';
  //start running
  document.addEventListener('keydown', function(event) {
    if(event.key === 'w') {
       document.getElementById('gameframe').style.animationPlayState = 'running';
    }
  });
});
    
  
                                           
