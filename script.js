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
    let filled=false;
    let board=gameboard;
    let player1=player("random","X");
    let player2=player("computer","O");
    let currentplayer=player1;
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
                console.log("The game is tied.Reset to start the game again.")
            }
            else{
            console.log("Invalid Index!A marker already exists");
            switchplayer();
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
                break;
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
            break;
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
        if(filled==true){
            console.log('The game is Tied.Press Reset to restart the game');
        }
    }
    if(truthcol==false && truthrow==false)
        switchplayer();
   else{
    console.log(`${currentplayer.name} has won already!! Reset to Start a new game.`);
}
    }
    return{play};
})();
game.play(0);
game.play(2);
game.play(6);
game.play(3);
game.play(8);
game.play(4);
game.play(5);
game.play(7);
game.play(1);
game.play(1);

