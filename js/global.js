
function btnRegister_click() {
    if (RegisterUser()) {
        submitBtn.addEventListener("click", function (evt) {
            //evt.preventDefault();
            var URL = "..//page-user-login.html";
            window.location.replace(URL);
            return false;
        });
    };
}

/* function TKbtnSaveDef_click() {
     SaveDefaultEmail();
}
 */
/* function TKAddFeedbackPage_show() {
     TKshowAddFeedback();
}
 */

function init() {
    console.info("DOM is ready");

    $('#customCheck1').click(function () {
        if ($('#submitBtn').is(':disabled')) {
            $('#submitBtn').removeAttr('disabled');
        } else {
            $('#submitBtn').attr('disabled', 'disabled');
        }
    });

    $("#submitBtn").on("click", btnRegister_click);

    //$("#TKbtnSaveDef").on("click", TKbtnSaveDef_click);

    //$("#TKAddFeedbackPage").on("pageshow",TKAddFeedbackPage_show);

}

function initDB() {
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating tables...");
            DB.createTables();
        }
        else {
            console.error("Error: Cannot create tables: database does not exist");
        }
    }
    catch (e) {
        console.error("Error: (Fatal) error in initDB(). Can not proceed.");
    }
}
$(document).ready(function () {
    init();
    initDB();
});