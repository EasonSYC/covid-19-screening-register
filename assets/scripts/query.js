function getResidentList(unit, checked, ability) {
	let datas = { "unit": unit, "checked": checked, "ability": ability };
	let buildingInfo = new Array(), roomInfo = new Array(), nameInfo = new Array(), genderInfo = new Array(), idInfo = new Array(),
	phoneInfo = new Array(), loginInfo = new Array(), liveInfo = new Array(), workInfo = new Array(), moveInfo = new Array();
	$.ajax({
		url: './assets/db/query.php',
		type: 'post',
		dataType: 'json',
		data: datas,
		async: false,
		success: function (result) {
			for (let i = 0; i < result.split(";").length - 1; i++) {
				resi[i] = result.split(";")[i].split(",");
			} // unit room name id phone checked live work move
			[buildingInfo, roomInfo, nameInfo, genderInfo, idInfo, phoneInfo, loginInfo, liveInfo, workInfo, moveInfo] = resi;
		},
		error: function () {
			alert("FATAL_ERR: ERR_QUERY_PHP");
		}
	})
}