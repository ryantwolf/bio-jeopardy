function tile(question, answer, points, place) {
	this.question = question;
	this.answer = answer;
	this.points = points;
	this.place = place;
}

var currentTile = {};
var score1 = 0;
var score2 = 0;
var turn = 1;

var t21 = new tile("The term for the number of organisms of one species that an environment can support.", "carrying capacity", 200, "21");
var t22 = new tile("The building blocks of matter. (Plural)", "atoms", 200, "22");
var t23 = new tile("The sites where the cell produces proteins. (Plural)", "ribosomes", 200, "23");
var t24 = new tile("The diffusion of water across a selectively permeable membrane.", "osmosis", 200, "24");
var t25 = new tile("Term for the folded inner membrane of the mitochondria and the location of the electron transport chain.", "cristae", 200, "25");
var t26 = new tile("These nitrogen bases are in a double ring structure. (Plural)", "purines", 200, "26");

var t41 = new tile("The 1st species to take hold in an area in primary succession. (Plural)", "pioneer species", 400, "41");
var t42 = new tile("This process uses water to break bonds between subunits that make up polymers.", "hydrolysis", 400, "42");
var t43 = new tile("This controls the activites of organelles.", "nucleus", 400, "43");
var t44 = new tile("The term for cell divison (specifically, divison of the nucleus).", "mitosis", 400, "44");
var t45 = new tile("This is the energy molecule used to power cell activites, also called 'energy quarters.'", "atp", 400, "45");
var t46 = new tile("The process in which DNA instructions are passed to an RNA molecule.", "transcription", 400, "46");

var t61 = new tile("The proportions of the population that are in different age levels.", "age structure", 600, "61");
var t62 = new tile("These are present in living things in very small amounts.", "trace elements", 600, "62");
var t63 = new tile("This type of cell does not have a nucleus.", "prokaryotic", 600, "63");
var t64 = new tile("Passive transport across a membrane using a transport protein.", "facilitated diffusion", 600, "64");
var t65 = new tile("In this step of cellular respiration, glucose is split in half, 2 ATP are made, no oxygen required.", "glycolysis", 600, "65");
var t66 = new tile("A group of 3 nucleotides.", "codon", 600, "66");

var t81 = new tile("The study of human population size, density, and similar topics.", "demography", 800, "81");
var t82 = new tile("The net movement of particles from an area of higher concentration to lower concentration.", "diffusion", 800, "82");
var t83 = new tile("These are used for the temporary storage of materials in the cell. (Plural)", "vacuoles", 800, "83");
var t84 = new tile("The expulsion of materials from a cell.", "exocytosis", 800, "84");
var t85 = new tile("The process by which mitochondria break down food molecules to produce ATP.", "cellular respiration", 800, "85");
var t86 = new tile("A change in a single base pair of DNA.", "point mutation", 800, "86");

var t101 = new tile("The colonization of barren land by communities of organisms.", "primary succession", 1000, "101");
var t102 = new tile("The process by which monomers bind together to form polymers, and water is formed.", "dehydration synthesis", 1000, "102");
var t103 = new tile("He coined the name 'cell.' (Last Name)", "hooke", 1000, "103");
var t104 = new tile("A solution where water is moving in equal amounts in and out of a cell. (Do NOT include the word solution in answer)", "isotonic", 1000, "104");
var t105 = new tile("The term for processes that require oxygen.", "aerobic", 1000, "105");
var t106 = new tile("The process where mRNA instructions are used to make proteins.", "translation", 1000, "106");

function load(tile) {
	currentTile = tile;

	document.getElementById("qSlot").innerHTML = currentTile.question;
	document.getElementById("value").innerHTML = currentTile.points;
	$("body,html").animate({
		height: '2000px',
	}, 1, function () {
		window.scrollTo(0,document.body.scrollHeight);
	});
};
function checkAnswer() {
	var answer = document.getElementById("answer").value;

	if (answer.toUpperCase() === currentTile.answer.toUpperCase()) {

		document.getElementById("out").innerHTML = "Correct!";
		if (turn % 2 === 0) {
			score2 += currentTile.points;
			turn += 1;
		} else {
			score1 += currentTile.points;
			turn += 1;
		}
		document.getElementById("sSlot").innerHTML = "Scores: Team One: " + score1 + " Team Two: " + score2;
		$("#out").append("<div class='back' onClick='scrollUp()'>Back</div>");
		document.getElementById(currentTile.place).innerHTML = " ";

	} else {

		document.getElementById("out").innerHTML = "Incorrect!<br> The correct answer was " + currentTile.answer;
		$("#out").append("<div class='back' onClick='scrollUp()'>Continue</div>");
		document.getElementById(currentTile.place).innerHTML = " ";

	};
};
function scrollUp() {
	$("body,html").animate({
		height: '1000px',
	}, 2000);
	$(".back").remove();
	document.getElementById("out").innerHTML = " ";	
}
$("form").bind('keyup', function(event){ 
  if(event.keyCode == 13){ 
    event.preventDefault();
    $("#submit").click(); 
    return false;
  }
});
$(document).ready(function () {
    $('body').animate({scrollTop:0}, 1);
});