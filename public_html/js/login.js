var usuario;
var password;
var mensajeP;

function login() {

    var validator = $("#formLogin").kendoValidator().data("kendoValidator"),
    status = $(".status");

    if (validator.validate()) {

        status.text("Hooray! Your tickets has been booked!")
            .removeClass("invalid")
            .addClass("valid");


        usuario = $("#usuario").val();
        password = $("#password").val();

        var loginUrl = 'http://190.144.16.114:8810/rest/Base/BaseIntegrity/Login/'+ usuario + '/' + password + '/582372082679954432';

       // alert(loginUrl);

        var dataSource = new kendo.data.DataSource({
            transport: {
                read:  {
                    url: loginUrl,
                    dataType: "json"
                },
                parameterMap: function(options, operation) {
                    if (operation !== "read" && options.models) {
                        return {models: kendo.stringify(options.models)};
                    }
                },
				success: function (data) {
				debugger
                alert(data);
            },
            },
            batch: true,
            pageSize: 20,
            schema: {
                data:"response.dslogin.dslogin.ttestado",
                model: {
                    fields: {
                        pocestado: { type: "string" }}
                }
            }
        });
	
        var hola = dataSource.fetch(function(){
            var data = this.data();
            console.log(data.length);
            alert(data[0].pocestado);
            debugger;
            return data;

        });



    } else {
        status.text("Oops! There is invalid data in the form.")
            .removeClass("valid")
            .addClass("invalid");
    }


}
function setMensaje(msj){
    mensajeP = msj;
}

function getMensaje() {
    return mensajeP
}

function onLoad(){
    $("#btnLogin").kendoButton({
    });
	
    presionaEnter();
}

function presionaEnter() {
    document.addEventListener('keyup', function(e) {
        e = e || window.event;
        var target = e.keyCode;
        if(target==13){
            login();
            document.getElementById("btnLogin").click();
        }
    }, false);
}

