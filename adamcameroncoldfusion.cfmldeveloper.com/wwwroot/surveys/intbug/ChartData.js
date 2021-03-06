ChartData = function(chartDesign){
	this.questions = {
		q1 : [
			{"values" : [22], text:"String", "background-color":chartDesign.seriesColours[0]},
			{"values" : [45], text:"List","background-color":chartDesign.seriesColours[1]},
			{"values" : [1], text:"Date","background-color":chartDesign.seriesColours[2]},
			{"values" : [2], text:"Integer","background-color":chartDesign.seriesColours[3]},
			{"values" : [4], text:"Other","background-color":chartDesign.seriesColours[5]}
		],
		q2 : [
			{"values" : [5], text:"Yes", "background-color":chartDesign.seriesColours[5]},
			{"values" : [65], text:"No","background-color":chartDesign.seriesColours[6]}
		],
		q3 : [
			{"values" : [2], text:"Yes", "background-color":chartDesign.seriesColours[7]},
			{"values" : [68], text:"No","background-color":chartDesign.seriesColours[8]}
		],
		q4 : [
			{"values" : [3], text:"Yes", "background-color":chartDesign.seriesColours[9]},
			{"values" : [67], text:"No","background-color":chartDesign.seriesColours[10]}
		],
		q5 : [
			{"values" : [65], text:"Yes", "background-color":chartDesign.seriesColours[11]},
			{"values" : [5], text:"No","background-color":chartDesign.seriesColours[12]}
		],
		q6 : [
			{"values" : [67], text:"Yes", "background-color":chartDesign.seriesColours[13]},
			{"values" : [3], text:"No","background-color":chartDesign.seriesColours[0]}
		],
		q7 : [
			{"values" : [4], text:"Yes", "background-color":chartDesign.seriesColours[1]},
			{"values" : [66], text:"No","background-color":chartDesign.seriesColours[2]}
		],
		q8 : [
			{"values" : [1], text:"It's not a bug", "background-color":chartDesign.seriesColours[13]},
			{"values" : [0], text:"It's a bug but I have code that relies on this bug, so the bug should not be fixed", "background-color":chartDesign.seriesColours[4]},
			{"values" : [8], text:"It's a bug and if it was fixed it's fine that I would need to also fix any code I have that relies on it", "background-color":chartDesign.seriesColours[5]},
			{"values" : [60], text:"I have no code that relies on the current behaviour, but it's a bug and it should be fixed", "background-color":chartDesign.seriesColours[6]},
			{"values" : [1], text:"It's a bug but it should not be fixed","background-color":chartDesign.seriesColours[7]}
		],
		q9 : [
			{"values" : [58], text:"Disappointed", "background-color":chartDesign.seriesColours[8]},
			{"values" : [8], text:"Ambivalent","background-color":chartDesign.seriesColours[9]},
			{"values" : [4], text:"It's the correct course if action","background-color":chartDesign.seriesColours[10]}
		]		
	};
	return this;
};