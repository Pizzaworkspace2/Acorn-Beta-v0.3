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

  };
};
    
  
                                           
