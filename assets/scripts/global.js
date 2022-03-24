function check(n) {
	$.ajax({
		url: './assets/db/check.php',
		type: 'post',
		dataType: 'json',
		data: { pid: n },
		async: false,
		success: function (result) {
			if (result != "success") alert("ERR: ERR_CHECK_REP");
		},
		error: function () {
			alert("FATAL_ERR: ERR_CHECK_PHP");
		}
	})
}
function reset() {
	$.ajax({
		url: './assets/db/reset.php',
		type: 'post',
		dataType: 'json',
		data: datas,
		async: false,
		success: function (result) {
			if (result != "success") alert("ERR: ERR_RESET_REP");
		},
		error: function () {
			alert("FATAL_ERR: ERR_QUERY_PHP");
		}
	})
}