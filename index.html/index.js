
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

//   call button features section..

let Coins = 100;

const CoincountElement = document.getElementById('Call-Count');
const Callingbutton = document.getElementsByClassName('Call-button');
const CallHistory = document.getElementById('Call-History');

for(const btn of Callingbutton){
    btn.addEventListener('click',function(){

          const card = btn.closest('.card')
        const Servicename = card.querySelector('.service-name').textContent;
        const Servicenumber = card.querySelector('.service-number').textContent; 

     if(Coins < 20){
        alert(" Not enough coins to make a call! You need at least 20 coins.")
        return;
     }
         Coins -= 20;
        CoincountElement.innerText = Coins;

        alert(` Calling ${Servicename} to ${Servicenumber}...`)

         const div = document.createElement('div')

         const Time = new Date().toLocaleTimeString();

         div.innerHTML =`
         <div class="flex items-center p-2 mt-2 rounded-xl bg-gray-200">
                        <div>
                        <h2 class="font-bold">${Servicename}</h2>
                        <span class=" mt-2">${Servicenumber}</span>
                       </div>
                       <div><span class="mt-3">${Time}</span></div>
                       </div>
     `    
         CallHistory.appendChild(div);

       document.getElementById('clear-button').
       addEventListener('click',function(){
         CallHistory.innerText = ""
       })
    })
    
}

 

