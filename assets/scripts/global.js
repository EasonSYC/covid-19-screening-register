function check(n, requ) {
	$.ajax({
		url: './assets/db/check.php',
		type: 'post',
		dataType: 'json',
		data: { "sid": n, "req": requ },
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
		async: false,
		success: function (result) {
			if (result != "success") alert("ERR: ERR_RESET_REP");
		},
		error: function () {
			alert("FATAL_ERR: ERR_QUERY_PHP");
		}
	})
}