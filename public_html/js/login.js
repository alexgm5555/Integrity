//sessionStorage.clear();

var usuario;
var password;


function onLoad(){
    $("#btnLogin").kendoButton({
    });
	
    presionaEnter();
}

/*
 * Metodo que consume el servicio de para el Login
 * 
 */
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
        debugger
        jQuery.get(loginUrl,{
        },function(resultado){            
            var objJson = JSON.stringify(resultado.response.dslogin.dslogin.ttestado[0].pocestado);
            console.log(loginUrl+"\n"+objJson);
            
            if(objJson=='"OK"'){                
                console.log("Usuario con permiso de ingresar \n" + objJson);
                sessionStorage.setItem("usuario",usuario);
                afterLogin();
            }else{
                console.log("Usuario no puede ingresar \n" + objJson);
                alert("No se puede ingresar \n "+objJson);
            }
        });
    } else {
        status.text("Oops! There is invalid data in the form.")
            .removeClass("valid")
            .addClass("invalid");
    }
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

function afterLogin(){    
    alert("Usuario logeado correctamente en el sistema \n Bienvenido "+sessionStorage.getItem("usuario"));    
}

