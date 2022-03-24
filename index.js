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
                    "<td><button id=\"moveID\">MOVE</button></td>" + 
                    "</tr>";
let lookModel =     "<tr bgcolor=\"COLOR\">" + 
                    "<td>BUILDING</td>" +
                    "<td>ROOM</td>" +
                    "<td>NAME</td>" + 
                    "<td>GENDER</td>" + 
                    "<td>ID</td>" + 
                    "<td>PHONE</td>" + 
                    "<td><button =\"loginNUM\">LOGIN</button></td>" + 
                    "<td><button id=\"liveNUM\">LIVE</button></td>" + 
                    "<td><button id=\"workNUM\">WORK</button></td>" + 
                    "<td><button id=\"moveNUM\">MOVE</button></td>" + 
                    "</tr>";
let updateModel =   "document.getElementByID(\"loginNUM\").onclick = function() {loginInfo[NUM] = !loginInfo[NUM]}; updateLook(); pushData();" +
                    "document.getElementByID(\"liveNUM\").onclick = function() {loginInfo[NUM] = !liveInfo[NUM]}; updateLook(); pushData();" +
                    "document.getElementByID(\"workNUM\").onclick = function() {loginInfo[NUM] = !loginInfo[NUM]}; updateLook(); pushData();" +
                    "document.getElementByID(\"moveNUM\").onclick = function() {loginInfo[NUM] = !loginInfo[NUM]}; updateLook(); pushData();";
let bgColor = ["", "green", "yellow", "orange", "red"];
let genderText = ["男", "女"];
let loginText = ["未签到", "已签到"];
let liveText = ["在家生活", "在外生活"];
let workText = ["在家工作", "在外工作"];
let moveText = ["行动方便", "行动不便"];
function updateLook() {
    let infoHTML = titleModel;
    let jsScript = "";
    for (let i = 0; i < buildingInfo.length(); ++i) {
        let personModel = lookModel;
        let buttonModel = updateModel;
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
        let i = 0
        if (loginInfo[i]) {
            i = 1;
        } else if (liveInfo[i]) {
            i = 2;
        } else if (workInfo[i]) {
            i = 3;
        } else if (moveInfo[i]) {
            i = 4;
        }
        personModel = personModel.replace(/COLOR/g, bgColor[i]);

        buttonModel = buttonModel.replace(/NUM/g, i);

        infoHTML += personModel;
        jsScript += buttonModel;
    }
    document.getElementsById("info").innerHTML = infoHTML;
    document.getElementsById("update").innerHTML = jsScript;
};
let refresh = document.getElementById("refresh");
refresh.onclick = function() {getResidentList($("unit").val(), $("checked").val(), $("ability").val()); updateLook();}