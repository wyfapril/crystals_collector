$(document).ready(function(){
	var startButton = "button";
	var goalNum;
	var mySum = 0;
	var winCount = 0;
	var loseCount = 0;
	var garnetValue = 0;
	var emeraldValue = 0;
	var diamondValue = 0;
	var citrineValue = 0;
	var start = false;

	$("button").click(function(){
		start=true;
		goalNum = Math.floor(Math.random()*100+1); // 1~100
		$("#randomNum").text(goalNum);
		mySum=0;
		$("#scoreNum").text(mySum);
		console.log("you need: " + goalNum);
	});

	var winOrLose = function(mySum, goalNum){
		if (mySum < goalNum){
			return 0;
		} else if (mySum == goalNum){
			winCount++;
			$("#wins").text("Wins: " + winCount);
			console.log("win: " + winCount);
			$("#scoreNum").text(mySum);
			alert("What a collection!");
			return 1;
		} else {
			loseCount++;
			$("#losses").text("Losses: " + loseCount);
			console.log("lose: " + loseCount);
			$("#scoreNum").text(mySum);
			alert("No crystal for you!");
			return 2;
		}
	}

	$("#garnet").click(function(){
		if (start == false) return;
		if (garnetValue == 0){
			garnetValue = Math.floor(Math.random()*30+1); // 1~30
		}
		mySum = mySum + garnetValue;
		$("#scoreNum").text(mySum);
		console.log("red: " + garnetValue);
		console.log("current sum: " + mySum);
		if (winOrLose(mySum, goalNum)!=0) start=false;
	});

	$("#emerald").click(function(){
		if (start == false) return;
		if (emeraldValue == 0) {
			emeraldValue = Math.floor(Math.random()*30+1);
		}		
		mySum = mySum + emeraldValue;
		$("#scoreNum").text(mySum);
		console.log("green: " + emeraldValue);
		console.log("current sum: " + mySum);
		if (winOrLose(mySum, goalNum)!=0) start=false;
	});

	$("#diamond").click(function(){
		if (start == false) return;
		if (diamondValue == 0) {
			diamondValue = Math.floor(Math.random()*30+1);
		}		
		mySum = mySum + diamondValue;
		$("#scoreNum").text(mySum);
		console.log("diamond: " + diamondValue);
		console.log("current sum: " + mySum);
		if (winOrLose(mySum, goalNum)!=0) start=false;
	});

	$("#citrine").click(function(){
		if (start == false) return;
		if (citrineValue == 0) {
			citrineValue = Math.floor(Math.random()*30+1);
		}
		citrineValue = Math.floor(Math.random()*30+1);
		mySum = mySum + citrineValue;
		$("#scoreNum").text(mySum);
		console.log("yellow: " + citrineValue);
		console.log("current sum: " + mySum);
		if (winOrLose(mySum, goalNum)!=0) start=false;
	});


	
});