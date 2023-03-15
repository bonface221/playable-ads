let myObj = [
	{
		tex: "skin_6",
		name: "skin_6C",
		visible: false,
		bgQuestion: "skin_6_bgQC",
		bgOpen: "skin_6_bgOC",
		bgOpenFailed: "skin_6_bgOFC",
	},
	{
		tex: "skin_6",
		name: "skin_6",
		visible: false,
		bgQuestion: "skin_6_bgQ",
		bgOpen: "skin_6_bgO",
		bgOpenFailed: "skin_6_bgOF",
	},
	{
		tex: "skin_8",
		name: "skin_8",
		visible: false,
		bgQuestion: "skin_8_bgQ",
		bgOpen: "skin_8_bgO",
		bgOpenFailed: "skin_8_bgOF",
	},
	{
		tex: "skin_8",
		name: "skin_8C",
		visible: false,
		bgQuestion: "skin_8_bgQC",
		bgOpen: "skin_8_bgOC",
		bgOpenFailed: "skin_8_bgOFC",
	},
];

let skins = myObj.map((o) => {
	return o.tex;
});
console.log(skins);

function removeDuplicates(arr) {
	return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(skins));
