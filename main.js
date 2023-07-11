let title = document.querySelector('.title')
let turn = 'x';
let squars = [];
function winner()
{
    for( i=1;i<10;i++){
       squars[i] = document.getElementById('item' + i ).innerHTML;
    }
    if(squars[1] == squars[2] && squars[2] == squars[3] && squars[1] != '')
    {
        title.innerHTML=squars[1] + ' is the winner';
        document.getElementById('item' + 1).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 2).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 3).style.background='rgb(85, 255, 0)';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);
        var audio0 = new Audio('winner.mp3');
        audio0.play();
    }
    else if(squars[4] == squars[5] && squars[5] == squars[6] && squars[4] != '')
    {
        title.innerHTML=squars[4] + ' is the winner';
        document.getElementById('item' + 4).style.background='rgb(85, 255, 0))';
        document.getElementById('item' + 5).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 6).style.background='rgb(85, 255, 0)';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);
        var audio0 = new Audio('winner.mp3');
        audio0.play();
    }
    else if(squars[7] == squars[8] && squars[8] == squars[9] && squars[7] != '')
    {
        title.innerHTML=squars[7] + ' is the winner';
        document.getElementById('item' + 7).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 8).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 9).style.background='rgb(85, 255, 0)';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);
        var audio0 = new Audio('winner.mp3');
        audio0.play();
    }
    else if(squars[1] == squars[4] && squars[4] == squars[7] && squars[1] != '')
    {
        title.innerHTML=squars[1] + ' is the winner';
        document.getElementById('item' + 1).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 4).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 7).style.background='rgb(85, 255, 0)';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);
        var audio0 = new Audio('winner.mp3');
        audio0.play();
    }
    else if(squars[2] == squars[5] && squars[5] == squars[8] && squars[2] != '')
    {
        title.innerHTML=squars[2] + ' is the winner';
        document.getElementById('item' + 2).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 5).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 8).style.background='rgb(85, 255, 0)';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);
        var audio0 = new Audio('winner.mp3');
        audio0.play();
    }
    else if(squars[3] == squars[6] && squars[6] == squars[9] && squars[3] != '')
    {
        title.innerHTML=squars[3] + ' is the winner';
        document.getElementById('item' + 3).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 6).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 9).style.background='rgb(85, 255, 0)';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);
        var audio0 = new Audio('winner.mp3');
        audio0.play();
    }
    else if(squars[1] == squars[5] && squars[5] == squars[9] && squars[1] != '')
    {
        title.innerHTML=squars[1] + ' is the winner';
        document.getElementById('item' + 1).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 5).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 9).style.background='rgb(85, 255, 0)';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);
        var audio0 = new Audio('winner.mp3');
        audio0.play();
    }
    else if(squars[3] == squars[5] && squars[5] == squars[7] && squars[3] != '')
    {
        title.innerHTML=squars[3] + ' is the winner';
        document.getElementById('item' + 3).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 5).style.background='rgb(85, 255, 0)';
        document.getElementById('item' + 7).style.background='rgb(85, 255, 0)';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);
        var audio0 = new Audio('winner.mp3');
        audio0.play();
    }
    else if(squars[1] !='' && squars[2] !='' &&squars[3] !='' && squars[4] !='' && squars[5] !='' && squars[6] !='' && squars[7] !='' && squars[8] !='' &&squars[9] !='')
    {
        title.innerHTML='no one is winner';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);

    }
}

function game(id)
{
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML='X';
        turn ="o";
        title.innerHTML = 'O';
        var audio= new Audio('click.mp3');
        audio.play();
    }
    else if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML='O';
        turn ='x';
        title.innerHTML ='X';
        var audio= new Audio('click.mp3');
        audio.play();
    }
    winner();

}
