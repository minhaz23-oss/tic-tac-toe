let boxes = document.querySelectorAll('.boxes');
let heading = document.querySelector('.heading');

let resetBtn = document.querySelector('.reset-btn')

let line1 = document.querySelector('.line-1')
let line2 = document.querySelector('.line-2')
let line3 = document.querySelector('.line-3')
let line4 = document.querySelector('.line-4')
let line5 = document.querySelector('.line-5')
let line6 = document.querySelector('.line-6')
let line7 = document.querySelector('.line-7')
let line8 = document.querySelector('.line-8')
let count = 0;
let gameWon = false;

const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const lineArr = [line1,line2,line3,line4,line5,line6,line7,line8]

let turn = true;
boxes.forEach(function(box){
    resetBtn.addEventListener('click',function(){
        box.innerHTML = '';
        box.disabled = false;
        heading.innerHTML = '';
        lineArr.forEach(function(val){
            val.style.display = 'none';
        })
    })
    box.addEventListener('click',function(){
        if(turn === true){
            box.innerHTML = 'x';
            turn = false;
        }else{
            box.innerHTML = 'o';
            turn = true;
        }
        box.disabled = true;
        count++;
        
       showWinners();
       
      

    })
})

const showWinners = () => {
    winningPattern.forEach((e) => {
        let one = boxes[e[0]].innerHTML;
        let two = boxes[e[1]].innerHTML;
        let three = boxes[e[2]].innerHTML;
        if(one !== '' && two !== '' && three !== ''){
            
            if(one === two && two === three){
               heading.innerHTML = `${one} is the winner`;
               boxes.forEach(function(box){
                    box.disabled = true;
               })
               
               if(e[0] === 0 && e[1] === 1 && e[2] === 2){
                line1.style.display = 'block' ;
                
              }
              if(e[0] === 3 && e[1] === 4 && e[2] === 5){
                line2.style.display = 'block' ;
                
              }
              if(e[0] === 6 && e[1] === 7 && e[2] === 8){
                line3.style.display = 'block' ;
                
              }
              if(e[0] === 0 && e[1] === 3 && e[2] === 6){
                line4.style.display = 'block' ;
                
              }
              if(e[0] === 1 && e[1] === 4 && e[2] === 7){
                line5.style.display = 'block' ;
                
              }
              if(e[0] === 2 && e[1] === 5 && e[2] === 8){
                line6.style.display = 'block' ;
                
              }
              if(e[0] === 0 && e[1] === 4 && e[2] === 8){
                line8.style.display = 'block' ;
                
              }
              if(e[0] === 2 && e[1] === 4 && e[2] === 6){
                line7.style.display = 'block' ;
                
              }

              gameWon = true;
              
            }
        }
        
        
    })
    
if(!gameWon && count === 9){
  heading.innerHTML = 'This match is draw'
}
}


