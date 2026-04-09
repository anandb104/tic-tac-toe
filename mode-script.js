function filldetailsfortwoplayer(){
let details=document.getElementById("details");
details.innerHTML = `
<div class='input-div'>
<label for='p1marker'>Enter Player 1's marker:</label>
<select id='p1marker' name='p1marker'>
<option value='X'>X</option>
<option value='O'>O</option>
</select>
</div>

<div class='input-div'>
<label for='p1name'>Enter Player 1's name:</label>
<input type='text' id='p1name'>
</div>

<div class='input-div'>
<label for='p2marker'>Enter Player 2's marker:</label>
<select id='p2marker' name='p2marker'>
<option value='X'>X</option>
<option value='O'>O</option>
</select>
</div>

<div class='input-div'>
<label for='p2name'>Enter Player 2's name:</label>
<input type='text' id='p2name'>
</div>
<div class='input-div'>
<button onclick="window.location.href='index.html'" id='submit'>Submit</button>
</div>
`;
}
function filldetailsforsingleplayer(){
    let details=document.getElementById("details");
    details.innerHTML = `
    <div class='input-div'>
    <label for='p1marker'>Enter Player's marker:</label>
    <select id='p1marker' name='p1marker'>
    <option value='X'>X</option>
    <option value='O'>O</option>
    </select>
    </div>
    
    <div class='input-div'>
    <label for='p1name'>Enter Player's name:</label>
    <input type='text' id='p1name'>
    </div>

    <div class='input-div'>
    <button onclick="window.location.href='index.html'"id='submit'>Submit</button>
    </div>
    `;
    }
function filldetails(){
    let p1name = document.getElementById("p1name").value;
    let p1marker = document.getElementById("p1marker").value;

    let p2name = document.getElementById("p2name").value;
    let p2marker = document.getElementById("p2marker").value;
    return{p1name,p2name,p1marker,p2marker};
}
function startgame(){
    
}
