function getResidentList(unit, checked, ability) {
	let datas = { "unit": unit, "checked": checked, "ability": ability };
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
			function changearr(oldarr) {
				var maxLength = getMaxLength(oldarr);
				var rowarr = [], rowoldarr = [];
				for (var k = 0; k < oldarr.length; k++) {
					for (var m = 0; m < maxLength; m++) {
						if (!rowarr[m]) rowarr[m] = [];
						rowarr[m].push(oldarr[k][m]);
						if (!rowoldarr[m]) rowoldarr[m] = [];
						rowoldarr[m].push(oldarr[k][m]);
					}
				}
				return rowarr;
			}
			function getMaxLength(arr) {
				var max = 0;
				for (var i = 0; i < arr.length; i++) {
					if (arr[i].length > max) {
						max = arr[i].length;
					}
				}
				return max;
			}
			resi = changearr(resi);
			[buildingInfo, roomInfo, nameInfo, genderInfo, idInfo, phoneInfo, loginInfo, liveInfo, workInfo, moveInfo] = resi;
		},
		error: function () {
			alert("FATAL_ERR: ERR_QUERY_PHP");
		}
	})
}