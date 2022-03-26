function getResidentList(unit, checked, ability) {
    let datas = { "unit": unit, "checked": checked, "ability": ability };
    $.ajax({
        url: './assets/db/query.php',
        type: 'post',
        dataType: 'json',
        data: datas,
        async: false,
        success: function (result) {
            data = []
            for (let i = 0; i < result.split(";").length - 1; i++) {
                data[i] = result.split(";")[i].split(",");
            }
        },
        error: function () {
            alert("FATAL_ERR: ERR_QUERY_PHP");
        }
    })
}

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

let titleModel =    "<tr>" +
                    "<td>楼栋</td>" +
                    "<td>房间号</td>" +
                    "<td>姓名</td>" + 
                    "<td>性别</td>" + 
                    "<td>身份证号</td>" + 
                    "<td>手机号</td>" + 
                    "<td>签到情况</td>" + 
                    "<td>居住情况</td>" + 
                    "<td>工作情况</td>" + 
                    "<td>行动情况</td>" + 
                    "</tr>";
let lookModel =     "<tr bgcolor=\"COLOR\">" + 
                    "<td>BUILDING</td>" +
                    "<td>ROOM</td>" +
                    "<td>NAME</td>" + 
                    "<td>GENDER</td>" + 
                    "<td>ID</td>" + 
                    "<td><a href=\"tel: PHONE\">PHONE</a></td>" +
                    "<td><button id=\"loginNUM\" onclick=\"trueOnClick(NUM, \'loginInfo\');\">LOGIN</button></td>" + 
                    "<td><button id=\"liveNUM\" onclick=\"trueOnClick(NUM, \'liveInfo\');\">LIVE</button></td>" + 
                    "<td><button id=\"workNUM\" onclick=\"trueOnClick(NUM, \'workInfo\');\">WORK</button></td>" + 
                    "<td><button id=\"moveNUM\" onclick=\"trueOnClick(NUM, \'moveInfo\');\">MOVE</button></td>" + 
                    "</tr>";
let bgColor = ["white", "green", "yellow", "orange", "red"];
let genderText = ["男", "女"];
let loginText = ["未签到", "已签到"];
let liveText = ["在家生活", "在外生活"];
let workText = ["在家工作", "在外工作"];
let moveText = ["行动方便", "行动不便"];

function trueOnClick(i, type) {
    if (type === "loginInfo") {
        data[i][7] = (1 - parseInt(data[i][7])).toString();
    } else if (type === "liveInfo") {
        data[i][8] = (1 - parseInt(data[i][8])).toString();
    } else if (type === "workInfo") {
        data[i][9] = (1 - parseInt(data[i][9])).toString();
    } else if (type === "moveInfo") {
        data[i][10] = (1 - parseInt(data[i][10])).toString();
    }
    updateLook();
    check(data[i][0], type);
}
function updateLook() {
    document.getElementById("info").innerHTML = titleModel;
    for (let i = 0; i < data.length; ++i) {
        let personModel = lookModel;
        personModel = personModel.replace(/NUM/g, i);
        personModel = personModel.replace(/BUILDING/g, data[i][1]);
        personModel = personModel.replace(/ROOM/g, data[i][2]);
        personModel = personModel.replace(/NAME/g, data[i][3]);
        personModel = personModel.replace(/GENDER/g, genderText[data[i][4]]);
        personModel = personModel.replace(/ID/g, data[i][5]);
        personModel = personModel.replace(/PHONE/g, data[i][6]);
        personModel = personModel.replace(/LOGIN/g, loginText[data[i][7]]);
        personModel = personModel.replace(/LIVE/g, liveText[data[i][8]]);
        personModel = personModel.replace(/WORK/g, workText[data[i][9]]);
        personModel = personModel.replace(/MOVE/g, moveText[data[i][10]]);
        let j = 0;
        if (data[i][7].toString() === "1") {
            j = 1;
        } else if (data[i][8].toString() === "1") {
            j = 2;
        } else if (data[i][9].toString() === "1") {
            j = 3;
        } else if (data[i][10].toString() === "1") {
            j = 4;
        }
        personModel = personModel.replace(/COLOR/g, bgColor[j]);

        document.getElementById("info").innerHTML += personModel;
    }
}
$("#refresh").on("click", function() {
    getResidentList($("#unit").val(), $("#checked").val(), $("#ability").val());
    updateLook();
});
$("#reset").on("click", function() {
    let conf = confirm("确认重置所有数据？不可撤销！");
    if (conf === true) {
        reset();
        window.location.reload();
    }
});
