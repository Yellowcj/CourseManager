function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
};
// var seminarId = getQueryString("seminarId");
var seminarId = 32;
//var courseId = getQueryString("courseId");
var courseId = 23;
$(function () {
    $.ajax({
        url: "/course/" + courseId,
        // url: "http://rap2api.taobao.org/app/mock/933/GET/course/" + courseId,
        type: "GET",
        success: function (data) {
            console.log(data);
            $(".courseName").text(data.name);
            $(".courseIntroduction").text(data.description);
        }
    })
    //获取历次的成绩
    $.ajax({
        url: "/group/" + 28 + "/grade",
        // url: "/group/" + groupId + "/grade",
        // url: "http://rap2api.taobao.org/app/mock/933/GET/group/28/grade",
        type: "get",
        success: function (data) {
            console.log(data);
            if (data.length != undefined) {
                for (var i = 0; i < data.length; i++) {
                    var a = i + 1;
                    var grade = data.grade;
                    var leader = "小红";
                    if (i % 2 == 0) {
                        $(".studenttable").append(" <tr>\n" +
                            "                              <td>" + a + "</td>\n" +
                            "\t\t\t\t\t\t\t  <td>1-A-4</td>\n" +
                            "                              <td>" + leader + "</td>\n" +
                            "\t\t\t\t\t\t\t  <td>5</td>\n" +
                            "\t\t\t\t\t\t\t  <td>4</td>\n" +
                            "\t\t\t\t\t\t\t  <td>" + data[i].grade + "</td>\n" +
                            "                            </tr>")
                    }
                    else {
                        $(".studenttable").append(" <tr class=\"alt\">\n" +
                            "                                    <td>" + a + "</td>\n" +
                            "                                    <td>1-A-1</td>\n" +
                            "                                    <td>" + leader + "</td>\n" +
                            "                                <td>5</td>\n" +
                            "                                <td>5</td>\n" +
                            "                                <td>" + data[i].grade + "</td>\n" +
                            "                                </tr>")
                    }
                }
            }
        }
    })
    //点击返回按钮
    $(".returnButton").click(function () {
        window.location.href = "/StudentDiscussionClassPage";
    })

})