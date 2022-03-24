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
                    "<td>PHONE</td>" + 
                    "<td><button id=\"loginNUM\">LOGIN</button></td>" + 
                    "<td><button id=\"liveNUM\">LIVE</button></td>" + 
                    "<td><button id=\"workNUM\">WORK</button></td>" + 
                    "<td><button id=\"moveNUM\">MOVE</button></td>" + 
                    "</tr>";
let bgColor = ["white", "green", "yellow", "orange", "red"];
let genderText = ["男", "女"];
let loginText = ["未签到", "已签到"];
let liveText = ["在家生活", "在外生活"];
let workText = ["在家工作", "在外工作"];
let moveText = ["行动方便", "行动不便"];
function updateLook() {
    for (let i = 0; i < buildingInfo.length; ++i) {
        let personModel = lookModel;
        personModel = personModel.replace(/NUM/g, i);
        personModel = personModel.replace(/BUILDING/g, buildingInfo[i]);
        personModel = personModel.replace(/ROOM/g, roomInfo[i]);
        personModel = personModel.replace(/NAME/g, nameInfo[i]);
        personModel = personModel.replace(/GENDER/g, genderText[genderInfo[i]]);
        personModel = personModel.replace(/ID/g, idInfo[i]);
        personModel = personModel.replace(/PHONE/g, phoneInfo[i]);
        personModel = personModel.replace(/LOGIN/g, loginText[loginInfo[i]]);
        personModel = personModel.replace(/LIVE/g, liveText[liveInfo[i]]);
        personModel = personModel.replace(/WORK/g, workText[workInfo[i]]);
        personModel = personModel.replace(/MOVE/g, moveText[moveInfo[i]]);
        let j = 0;
        if (loginInfo[i].toString() === "1") {
            j = 1;
        } else if (liveInfo[i].toString() === "1") {
            j = 2;
        } else if (workInfo[i].toString() === "1") {
            j = 3;
        } else if (moveInfo[i].toString() === "1") {
            j = 4;
        }
        personModel = personModel.replace(/COLOR/g, bgColor[j]);

        document.getElementById("info").innerHTML += personModel;

        $("#login" + i.toString()).on("click", function() {
            loginInfo[i] = (1 - parseInt(loginInfo[i])).toString();
            updateLook();
            check(uaInfo[i], "loginInfo");
        });
        $("#live" + i.toString()).on("click", function() {
            liveInfo[i] = (1 - parseInt(liveInfo[i])).toString();
            updateLook();
            check(uaInfo[i], "liveInfo");
        });
        $("#work" + i.toString()).on("click", function() {
            workInfo[i] = (1 - parseInt(workInfo[i])).toString();
            updateLook();
            check(uaInfo[i], "workInfo");
        });
        $("#move" + i.toString()).on("click", function() {
            moveInfo[i] = (1 - parseInt(moveInfo[i])).toString();
            updateLook();
            check(uaInfo[i], "moveInfo");
        });
    }
    alert("updateLook Success!!")
};
let refresh = document.getElementById("refresh");
refresh.onclick = function() {getResidentList($("#unit").val(), $("#checked").val(), $("#ability").val()); updateLook();};
let resetButton = document.getElementById("reset");
resetButton.onclick = function() {
    let conf = confirm("确认重置所有数据？不可撤销！");
    if (conf === true) {
        reset();
        window.location.reload();
    } else {
        alert("撤销成功！")
    }
}
