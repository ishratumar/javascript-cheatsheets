//HTML
<p> <span class="far fa-copyright year"></span>  all rights reserved.</p>
  
  
//JavaScript
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();
