const game = {

	start: () => {
		game.generateCodePegs()
		game.addRows(difficulty)
	},

	restart: this.start(),

	generateCodePegs: () => {
		var rowsHTML = `<div class="row"`;
		for (var i = 0; i < pegs; i++){
			rowsHTML += `<span class="box codePeg" color=${game.randColor()} id="codePegBox${i}"></span>`
		}
		rowsHTML += '</div>'
		$('#codePegsContainer').append(rowsHTML)
		$('#codePegsContainer').hide()
		setColorForCodePegs()
	},

	addRows: (difficulty) => {
		var rowsHTML
		for (var i = 0; i < rows; i++){
			rowsHTML = '<div class=row>';
			for(var j = 0; j < pegs; j++){
				rowsHTML += `<span class="box enable row${i}" id="row${i}box${j}"></span>`;
			}
			rowsHTML += `<div id=row${i}btnContainer style="width: 40px;heigth: 40px"><button class=submitBtn id=row${i}>Check</button> </div></div>`
			$('#rowContainer').append(rowsHTML)
		}
	},

	randColor: () => {
		var hexCode = Math.floor(Math.random() * colorSet.length)
		if (!colorSet[hexCode]) throw new Error ('cannot generate color for code pegs')
		return colorSet[hexCode]
	},

	setColorForCodePegs: () => {
		for (var i = 0; i < pegs; i++){
			$(`#codePegBox${i}`).css("background-color", $(`#codePegBox${i}`).attr('color'))
	}
}


};

$(document).ready(() => {
	game.start();
});