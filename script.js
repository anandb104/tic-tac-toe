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
            switchplayer();
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
    if(truthcol==false && truthrow==false){
        switchplayer();
    return true;
    }
   else{
    console.log(`${currentplayer.name} has won already!! Reset to Start a new game.`);
    return falsel
}
    }
    return{play,Currentplayer};
})();

function dom(){
    let board=gameboard;
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
    function setdom(index){
        cells[index].textContent=`${gamer.Currentplayer().marker}`;
    }
    return {setdom};
}
let display=dom();
if(game.play(0));
display.setdom(0);
if(game.play(2));
display.setdom(2);
if(game.play(6));
display.setdom(6);
if(game.play(3));
display.setdom(3);
if(game.play(8));
display.setdom(8);
if(game.play(4));
display.setdom(4);
if(game.play(5));
display.setdom(5);
if(game.play(7));
display.setdom(7);
if(game.play(1));
display.setdom(1);
if(game.play(1));
display.setdom(1);

