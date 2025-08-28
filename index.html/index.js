
// hard icon clicked feacture..

 let heartCount = 0;

 const heartCountElement = document.getElementById('Heart-count');
 const heartButtons = document.getElementsByClassName('Heart-icon');
 
  for(const button of heartButtons){
    button.addEventListener('click',function(){
        heartCount++

        heartCountElement.innerText = heartCount ;;
    })
  }
 

