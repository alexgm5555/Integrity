var usuario;
var password;


function login() {

    var validator = $("#formLogin").kendoValidator().data("kendoValidator"),
        status = $(".status");

    if (validator.validate()) {
                
        status.text("Hooray! Your tickets has been booked!")
            .removeClass("invalid")
            .addClass("valid");


        usuario = $("#usuario").val();
        password = $("#password").val();
debugger
        var loginUrl = 'http://190.144.16.114:8810/rest/Base/BaseIntegrity/Login/'+ usuario + '/' + password + '/582372082679954432';
        console.log("loginUrl "+ loginUrl);
        
        var objResponse ={};
        var objEstado ={};
        var objCargo = {};
        
        $.ajax({            
            type: "GET",
            url: loginUrl ,
            contentType: "application/json",
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function(resp){
                  
                objCargo = resp.response.poccargo;
                
                if(objCargo==0){
                    objResponse = resp.response.dslogin.dslogin.ttestado[0].pocestado;
                }         
            },
            error:function(e){                
                alert("Error \n"+JSON.stringify(e))
            }
        }).done(function() { //use this
            afterAjax(objCargo,objResponse);
        });          
    } else {
        status.text("Oops! There is invalid data in the form.")
            .removeClass("valid")
            .addClass("invalid");
    }
}

function onLoad(){
    $("#btnLogin").kendoButton({
    });
	
    presionaEnter();
}
/*
 *  Permite que los datos del fomulario sean enviando cuando el usuario oprime la tecla "Enter"
 */

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

function afterAjax(objCargo,objResponse){    
    if(objCargo == 0){
        alert("Usuario  no registrado en el sistema")
    }
    else
        alert("Aqui debo llamar al index")
   }

