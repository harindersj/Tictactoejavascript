var player='X';
var comparevalue=[1,2,3,4,5,6,7,8,9];

function playagain(){
	window.location.reload();
}

function compare(e){
		if(e == 1){
			if(player == 'X'){
				document.getElementById('1').innerHTML=player;
				comparevalue[0]=player;
				player ='O';
			}
			else{
				document.getElementById('1').innerHTML=player;
				comparevalue[0]=player;
				player ='X';	
			}
			document.getElementById('1').disabled=true;
		}

		else if(e == 2){
			if(player == 'X'){
				document.getElementById('2').innerHTML=player;
				comparevalue[1]=player;
				player ='O';
			}
			else{
				document.getElementById('2').innerHTML=player;
				comparevalue[1]=player;
				player ='X';
			}
			document.getElementById('2').disabled=true;
		}

		else if(e == 3){
			if(player == 'X'){
				document.getElementById('3').innerHTML=player;
				comparevalue[2]=player;
				player ='O';
			}
			else{
				document.getElementById('3').innerHTML=player;
				comparevalue[2]=player;
				player ='X';
			}
			document.getElementById('3').disabled=true;
		}
		
		else if(e == 4){
			if(player == 'X'){
				document.getElementById('4').innerHTML=player;
				comparevalue[3]=player;
				player ='O';
			}
			else{
				document.getElementById('4').innerHTML=player;
				comparevalue[3]=player;
				player ='X';
			}
			document.getElementById('4').disabled=true;
		}

		else if(e == 5){
			if(player == 'X'){
				document.getElementById('5').innerHTML=player;
				comparevalue[4]=player;
				player ='O';
			}
			else{
				document.getElementById('5').innerHTML=player;
				comparevalue[4]=player;
				player ='X';
			}
			document.getElementById('5').disabled=true;
		}

		else if(e == 6){
			if(player == 'X'){
				document.getElementById('6').innerHTML=player;
				comparevalue[5]=player;
				player ='O';
			}
			else{
				document.getElementById('6').innerHTML=player;
				comparevalue[5]=player;
				player ='X';
			}
			document.getElementById('6').disabled=true;
		}

		else if(e == 7){
			if(player == 'X'){
				document.getElementById('7').innerHTML=player;
				comparevalue[6]=player;
				player ='O';
			}
			else{
				document.getElementById('7').innerHTML=player;
				comparevalue[6]=player;
				player ='X';
			}
			document.getElementById('7').disabled=true;
		}

		else if(e == 8){
			if(player == 'X'){
				document.getElementById('8').innerHTML=player;
				comparevalue[7]=player;
				player ='O';
			}
			else{
				document.getElementById('8').innerHTML=player;
				comparevalue[7]=player;
				player ='X';
			}
			document.getElementById('8').disabled=true;
		}

		else if(e == 9){
			if(player == 'X'){
				document.getElementById('9').innerHTML=player;
				comparevalue[8]=player;
				player ='O';
			}
		else{
				document.getElementById('9').innerHTML=player;
				comparevalue[8]=player;
				player ='X';
			}
			document.getElementById('9').disabled=true;
		}

document.getElementById('playerturn').innerHTML='Player '+player +' turn' ;

			if(comparevalue[0] == comparevalue[1] && comparevalue[1] == comparevalue[2]){
				//alert('Player '+comparevalue[0]+" win");
				document.getElementById('winner').innerHTML='Player '+comparevalue[0]+' win';
				document.getElementById('box').style.display='none';
			}

			else if(comparevalue[3] == comparevalue[4] && comparevalue[4] == comparevalue[5]){
				document.getElementById('winner').innerHTML='Player '+comparevalue[4]+' win';
				document.getElementById('box').style.display='none';
			}

			else if(comparevalue[6] == comparevalue[7] && comparevalue[7] == comparevalue[8]){
				document.getElementById('winner').innerHTML='Player '+comparevalue[7]+' win';
				document.getElementById('box').style.display='none';
			}

			else if(comparevalue[0] == comparevalue[3] && comparevalue[3] == comparevalue[6]){
				document.getElementById('winner').innerHTML='Player '+comparevalue[3]+' win';
				document.getElementById('box').style.display='none';
			}

			else if(comparevalue[1] == comparevalue[4] && comparevalue[4] == comparevalue[7]){
				document.getElementById('winner').innerHTML='Player '+comparevalue[4]+' win';
				document.getElementById('box').style.display='none';
			}

			else if(comparevalue[2] == comparevalue[5] && comparevalue[5] == comparevalue[8]){
				document.getElementById('winner').innerHTML='Player '+comparevalue[5]+' win';
				document.getElementById('box').style.display='none';
			}

			else if(comparevalue[0] == comparevalue[4] && comparevalue[4] == comparevalue[8]){
				document.getElementById('winner').innerHTML='Player '+comparevalue[4]+' win';
				document.getElementById('box').style.display='none';
				
			}

			else if(comparevalue[2] == comparevalue[4] && comparevalue[4] == comparevalue[6]){
				document.getElementById('winner').innerHTML='Player '+comparevalue[4]+' win';
				document.getElementById('box').style.display='none';
			}
			else if(comparevalue[0] != 1 && comparevalue[1] != 2 && comparevalue[2] != 3 &&
					comparevalue[3] != 4 && comparevalue[4] != 5 && comparevalue[5] != 6 &&
					comparevalue[6] != 7 && comparevalue[7] != 8 && comparevalue[8] != 9){
				document.getElementById('winner').innerHTML='   Game Draw';
				document.getElementById('box').style.display='none';
			}
		}

