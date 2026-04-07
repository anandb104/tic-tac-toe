let gameboard=(function(){
    let board=["","","","","","","","",""];
    function getboard(){
    return board;
    }
    function setboard(index,marker){
        if(board[index]==""){
            board[index]=marker;
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
    let board=gameboard;
    let player1=player("random",'X');
    let player2=player("computer",'O');
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
            console.log("Invalid Index!A marker already exists");
        }
        else{
        console.log(`${currentplayer.name} played ${currentplayer.marker} at ${index}`);
        }
        switchplayer();
    }
    return{play};
})();
game.play(0);
game.play(1);
game.play(1);
game.play(2);
game.play(3);
