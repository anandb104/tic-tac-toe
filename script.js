let gameboard=(function(){
    let board=[["","",""],["","",""],["","",""]];
    function getboard(row,col){
    return board[row][col];
    }
    function setboard(index,marker){
        let row=Math.floor(index/3);
        let col=index%3;
        if(board[row][col]==""){
            board[row][col]=marker;
            return true;
        }
        else{
            return false;
        }
    }
    return {getboard,setboard};
})();
function player(name,marker){
    return{name,marker};
}
let game=(function(){
    let truthrow=false;
    let truthcol=false;
    let truthdiagonal=false;
    let filled=false;
    let board=gameboard;
    let player1=player("random","X");
    let player2=player("computer","O");
    let currentplayer=player1;
    function Currentplayer(){
        return currentplayer;
    }
    function switchplayer(){
      if(currentplayer==player1){
        currentplayer=player2;
      }
      else{
        currentplayer=player1;
      }
    }
    function play(index){
        let success=board.setboard(index,currentplayer.marker);
        if(!success){
            if(filled==true){
                console.log("The game is tied.Reset to start the game again.");
                return false;
            }
            else{
            console.log("Invalid Index!A marker already exists");
            return false;
            }
        }
        else{
        console.log(`${currentplayer.name} played ${currentplayer.marker} at row=${Math.floor(index/3)} and col=${index%3}`);
            for(let i=0;i<=2;i++){
                let truth=true;
             for(let j=1;j<=2;j++){
                if((board.getboard(i,j)==board.getboard(i,j-1)) && (board.getboard(i,j)!="")){
                    truth=true;
                }
                else{
                    truth=false;
                    break;
                }
             }
             if(truth==true){
                console.log(`${currentplayer.name} has won`);
                truthrow=true;
                return true;
             }
        }
       if(truthrow==false){
        for(let j=0;j<=2;j++){
            let truth=true;
         for(let i=1;i<=2;i++){
            if((board.getboard(i,j)==board.getboard(i-1,j)) && (board.getboard(i,j)!="")){
                truth=true;
            }
            else{
                truth=false;
                break;
            }
         }
         if(truth==true){
            console.log(`${currentplayer.name} has won`);
            truthcol=true;
            return true;
         }
    }
    if(truthrow==false && truthcol==false){
         if((board.getboard(0,2)==board.getboard(1,1))&&(board.getboard(1,1)==board.getboard(2,0))&&(board.getboard(0,2)!="")){
            console.log(`${currentplayer.name} has won`);
            truthdiagonal=true;
            return true;
         }
          truth=true;
         for(let i=0;i<=1;i++){
            if((board.getboard(i,i)==board.getboard(i+1,i+1)) && (board.getboard(i,i)!="")){
                truth=true;
            }
            else{
                truth=false;
                break;
            }
         }
         if(truth==true){
            console.log(`${currentplayer.name} has won`);
            truthdiagonal=true;
            return true;
         }
    }
        }
        for(let i=0;i<=2;i++){
            for(let j=0;j<=2;j++){
                if(board.getboard(i,j)!=""){
                    filled=true;
                }
                else{
                    filled=false;
                    break;
                }
            }
            if(filled==false){
                break;
            }
        }
        if((filled==true) &&(truthcol==false && truthrow==false)){
            console.log('The game is Tied.Press Reset to restart the game');
        }
    }
    if(truthcol==false && truthrow==false && truthdiagonal==false){
    switchplayer();
    return true;
    }
   else{
    console.log(`${currentplayer.name} has won already!! Reset to Start a new game.`);
    return false;
       }
    }
    return{play,Currentplayer};
})();

function dom(){
    let gamer=game;
    let cells=[
    document.getElementById("index-0"),
    document.getElementById("index-1"),
    document.getElementById("index-2"),
    document.getElementById("index-3"),
    document.getElementById("index-4"),
    document.getElementById("index-5"),
    document.getElementById("index-6"),
    document.getElementById("index-7"),
    document.getElementById("index-8"),
    ];
cells.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        let current=gamer.Currentplayer();
        if(gamer.play(index))
        element.textContent=`${current.marker}`;
    })
})
}
dom();

