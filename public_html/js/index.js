/*------------------------------------------------------------------------
                        File        : BaseIntegrity(Index)
                            Author(s)   : Alex G.M. - Rodrigo
                        Created     : Tue Ago 20 10:27:47 COT 2015
                        Notes       : Derechos Reservados Quantum Data System 
                      ----------------------------------------------------------------------*/
sbm.util.hide("table50");
sbm.util.hide("div1");
sbm.util.hide("table5");
var alto=availHeight-126;
var funicon="./css/images/leaf.gif"; 
var celda0, celdamf;
window.addEventListener("resize", myFunction);
myFunction();
var x =   document.URL.split("BizSolo/");
var url = x[0] + "BizSolo/";
sessionStorage.setItem("url", url);
var y =   document.URL.split(":");
var puerto =   y[2].split("/");
puerto = x[0];
var urlCompleta =   document.URL.split(":");
var urlSesion =   urlCompleta[2].split("=");
var sesion  = urlSesion[1];
sessionStorage.setItem("sesion",sesion);
var time;
var bandera ;
sessionStorage.setItem("puerto", puerto);
var arreglo_funCod = new Array();
var arreglo_funDes = new Array();
var arreglo_funIco = new Array();
var arreglo_funUrl = new Array();
var arreglo_funProg = new Array();
var arreglo_funVideo = new Array();
var arreglo_funRepor = new Array();
var funTerm ="";
var label = ["Nueva Contrase\u00f1a","Repita la Contrase\u00f1a"];
var inputs = ["Contrasena","ContrasenaR"];
var inputsType = ["string","string","string","string","string"];
esconderVariosElementosHTML(["div5","div7","div8","div9","div10","div11","div12","div13","div14","button01","div22"]);

function myFunction() {//renderiza todos los elementos de la pagina para que se ajusten al tamao de la ventana 
	
    autoformat("div3");
    altoT=document.getElementById('div3').offsetHeight;
    altoCabece = document.getElementById('div3').offsetWidth;
    document.getElementById("table1").rows[1].cells[0].style.height=(altoT-56)+"px";
    document.getElementById("table52").rows[1].cells[1].style.height=(altoT-104)+"px";
    document.getElementById("include1").style.height=(altoT-70)+"px";
    document.getElementById("include5").style.height=((altoT-70))+"px";
    document.getElementById("div20").style.height=(altoT-57)+"px";
    document.getElementById("div1").style.height=(altoT-57)+"px";
    sbm.util.hide("include4");
    //	document.getElementById("include5").style.height=((altoT-57)/2)+"px";
    //	document.getElementById("include4").style.height=((altoT-57)/2)+"px";
    document.getElementById("includeTerm").style.height=(altoT-106)+"px";
    //	document.getElementById("includeTerm").style.width=(altoCabece-100)+"px";
    document.getElementById("include2").style.height=(altoT-104)+"px";
    document.getElementById("div1").style.height=(altoT-104)+"px";
    document.getElementById("div6").style.height=(altoT-104)+"px";
    document.getElementById("div4").style.height=(altoT-104)+"px";
    document.getElementById("image02_V1_V3").style.height=(altoT-104)+"px";
}

function autoformat(div) {//coje un div y lo extiende en ancho y altura del body para tener un div de referencia
    try{
        var body = document.body, html = document.documentElement;
        var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);//alto
        var sH = Math.floor(height - 2 );
        document.getElementById(div).style.overflow = "hidden";
        document.getElementById(div).style.height = sH+"px";
        document.getElementById(div).style.overflow = "hidden";
    }catch(e){alert(e);}
}

function esconderVariosElementosHTML(arreglo){//esconde los elementos de html
    for(var i=0;i<arreglo.length;i++){
        document.getElementById(arreglo[i]).style.display ="none";
    }
}

function mostrarVariosElementosHTML(arreglo){//muestra todos los elemetos html
    for(var i=0;i<arreglo.length;i++){
        document.getElementById(arreglo[i]).style.display ="";
    }
}

function misFunciones(){
    try{
        muestramenu();
        sbm.util.hide("include1");
        esconderVariosElementosHTML(["div8","div9","div10","div11","div2","include1","image022","image06","div23","div21","div22"]);
        mostrarVariosElementosHTML(["div7","div12","div13","div14","div2_V1","div5","div24","table50",,"div20"]);
        loginValido();
        sessionStorage.setItem("VideoAyuda","http://comunicacion349.wix.com/integrity#!reportes-tutoriales/w865s");//cambiar urlVideo con url link apenas este listo el video de ayuda
        var element = document.getElementById('table1');
        element.style.background = '#80BD28';
    }catch(e){alert(e.message + " misFunciones()");}
}

function pagInicio(){//Index lo que muestra al usuario apenas inicia session
    try{
        correLinuxBack();//por debajo corre una instancia de linux que esta en include includeterm esto lo hace para mejorar el rendimiento
        sbm.util.hide("include1");
        document.getElementById("div4").style.zIndex = "-1";
        sessionStorage.setItem("cabeceraTitu","");
		
        if(sbm.util.getValue("textField7")){
            msnError(sbm.util.getValue("textField7"));
        }
		
        sbm.util.setValue("textField7","");
        ocultarmenu();
        sbm.util.hide("include1");
        esconderVariosElementosHTML(["div6","div8","div9","div10","div7","div2_V1","include1","image022","div23","div22"]);
        mostrarVariosElementosHTML(["div21","div11","div12","div13","div2","div14","div5","div24","table50","table6","image06","div20"]);
        loginValido();
        document.getElementById("image016").src="images/equipo/"+sessionStorage.getItem("usuario").toLowerCase()+".png";
        var obj = new Image();
        obj.src = "images/equipo/"+sessionStorage.getItem("usuario").toLowerCase()+".png";
        var im = document.getElementById('image016'); // or select based on classes
        im.onerror = function(){
            document.getElementById("image016").src="images/equipo/use default.png";
        };
        limpiar("div19");
        limpiar("div18");
        crearEspacio_salto ("jumpLine",2,"div19");
        crearLabel ("NombreCompletoLabel",sessionStorage.getItem("nombrecompleto"),"div19","15px Verdana");
        crearEspacio_salto ("jumpLine",2,"div19");
        crearLabel ("correoLabel",sessionStorage.getItem("correo"),"div19","15px Verdana");
        sessionStorage.setItem("cabeceraNew","");//como entro otra vez al index limpia las variables de secion pa los casos en que entra a las aplicaciones cabecera y detalle
        sessionStorage.setItem("cabeceraLast","");
        sessionStorage.setItem("cabeceraLlaves","");
		
        for(var i=0;i<inputs.length;i++){//ciclo para crear un formulario en el cual el usuario cambia la contrasena
            document.getElementById("div18").style.display ="";
            crearEspacio_salto ("jumpLine",2,"div18");
            crearLabel ("label"+label[i],label[i]+": ","div18","15px Verdana");
            crearEspacio_salto ("jumpLine",2,"div18");
            crearInput (inputs[i],"div18");
            modTextboxPopupFl(inputs[i],inputsType[i]);
            sbm.util.setValue(inputs[i],sessionStorage.getItem(inputs[i]));
        }
		
        sbm.util.hide("div23");
        document.getElementById("Contrasena").type = "password";
        document.getElementById("ContrasenaR").type = "password";
        sessionStorage.setItem("VideoAyuda","http://comunicacion349.wix.com/integrity#!reportes-tutoriales/w865s");//cambiar urlVideo con url link apenas este listo el video de ayuda
		
        if(sbm.util.getValue("textArea5")){//en caso de que el usuario tenga informacion en Bpm muestra Task
            document.getElementById("include5").src = url + "Task" + "/Start.jsp?"+"clave="+sesion+"&usuario="+sbm.util.getValue("textField2");
        }
        else{//si no muestraactatareas que consume datos de un servicio  
            document.getElementById("include5").src = url + "actatareas" + "/Start.jsp";
        }

        var element = document.getElementById('table1');
        element.style.background = '#47484a';

    }catch(e){alert(e.message + " pagInicio()");}
}
function cargar(){//la primera pagina la cual coloca la imagen de la empresa y adiciona ciertas variables de sesion 
	 
    estableceValoresBD();
    menufunciones();
    sessionStorage.setItem("usrol",sbm.util.getValue("textField3"));
    esconderVariosElementosHTML(["div8","div9","div10","div11","div2","table50"]);
    mostrarVariosElementosHTML(["div7","div12","div13","div14","div2_V1"]);
	
    loginValido();
    var yacp1=sessionStorage.getItem("yacp1");
    var img="";
    //	sessionStorage.setItem("VideoAyuda",urlVideo);//cambiar urlVideo con url link apenas este listo el video de ayuda
    if(yacp1!="si"){
        sbm.util.hide("include1");
        sbm.util.hide("div5");
        sessionStorage.setItem("yacp1", "si");
        asignarDatosPerfil();
        //asignar imagen
        var JsonImg = sbm.util.getValue('textArea1').replaceAll('-', '_');
        var empresa = eval("(" + JsonImg + ")");
        img = empresa.eesic_cia[0].cia_log;

        sessionStorage.setItem("hibrido",empresa.eesic_cia[0].cia_serv);
        sessionStorage.setItem("portLinux",empresa.eesic_cia[0].cia_puerto);
        sessionStorage.setItem("img", img);
        sessionStorage.setItem("datEmpr",JsonImg);
        sessionStorage.setItem("companyNIT",empresa.eesic_cia[0].cia_nit);
        document.getElementById("image013").setAttribute("src", "data:image/png;base64," + img);
        //asignar todas las funciones
        menufunciones();
    }
    else{
        img=sessionStorage.getItem("img");
        document.getElementById("image013").setAttribute("src", "data:image/png;base64," + img);
        document.getElementById("include2").src = url+"Base_Integrity/tree2.html";
        //procesaMisFunciones();
    }
    var element = document.getElementById('table1');
    element.style.background = '#80BD28';
    var pariente = sessionStorage.getItem("parent");
    if(pariente){
        if(pariente=="MenuAdministra"){
            img=sessionStorage.getItem("img");
            document.getElementById("image013").setAttribute("src", "data:image/png;base64," + img);
            sessionStorage.setItem("parent","MisFunciones");
            configuracionAdministra();
        }
    }
    document.getElementById("div16").style.display ="none";
    pagInicio();
}
function abreFuncion(urlFSelec,urlRepor){//redirecciona que include mostrar dependiendo de la funcion fijarPcf
    try{
        if(urlFSelec){
            sbm.util.hide("include1");
            if(urlFSelec.slice(0,8)=="caracter"){

                sessionStorage.setItem("contrase",contra);
                var contra = sbm.util.getValue("textField1");
                var servicio = urlFSelec.replaceAll("caracter","");

                sessionStorage.setItem("servicio",servicio);
                document.getElementById("include1").src = url + "IntegrityViejo" + "/Start.jsp";
                document.getElementById("include1").style.display ="";
                document.getElementById("div5").style.zIndex = "1";
                document.getElementById("div5").style.display ="";
            }
            else{
                document.getElementById("div4").style.zIndex = "-1";
                if(urlFSelec=="ReporteConsulta"){
                    document.getElementById("include1").src = url + urlFSelec + "/Start.jsp"+"?idRep="+urlRepor+"&codCar="+sessionStorage.getItem("carcod")+"&nomUsu="+sessionStorage.getItem("usuario");
                    document.getElementById("include1").style.display ="";
                }
                else if(urlFSelec=="PortalAsociados"){
                    document.getElementById("include1").src = "http://portal.cooptraiss.com:443/PortalCooptraiss/";
                    document.getElementById("include1").style.display ="";
                }
                else if(urlFSelec=="Gerencia"){
                    document.getElementById("include1").src = "http://172.21.24.25:8000";
                    document.getElementById("include1").style.display ="";
                }
				
                else{
                    document.getElementById("include1").src = url + urlFSelec + "/Start.jsp";
                    document.getElementById("include1").style.display ="";
                }
            }
            sbm.util.hide("div6");
            sbm.util.show("div5");

        }else{
            sbm.util.hide("div5");
            sbm.util.hide("include1");
            sbm.util.show("div6");
        }
    }catch(e){alert(e.message + " abreFuncion");}
}
function procesaMisFunciones(){
}
function asignarDatosPerfil(){
    var usuario=sbm.util.getValue("textField2");
    sessionStorage.setItem("usuario", usuario);
    var jsonperfil=sbm.util.getValue("textArea10").replaceAll('-', '_');
    var perfil= eval("(" + jsonperfil + ")");
    sessionStorage.setItem("nombrecompleto", perfil.ttsicusuarios[0].usr_nom);
    sessionStorage.setItem("correo", perfil.ttsicusuarios[0].usr_mail);
    sessionStorage.setItem("cedula", perfil.ttsicusuarios[0].usr_carp);
    sessionStorage.setItem("succod", perfil.ttsicusuarios[0].suc_cod);
    sessionStorage.setItem("carcod", perfil.ttsicusuarios[0].car_cod);
    sessionStorage.setItem("vencod", perfil.ttsicusuarios[0].ven_cod);
    sessionStorage.setItem("usrest", perfil.ttsicusuarios[0].usr_est);
}
function ayuda(){
    var video = sessionStorage.getItem("VideoAyuda");
    //	video = "https://www.youtube.com/embed/72Ru7YVk8DM?list=RD72Ru7YVk8DM"; 
    //	windowPopUp (video,"Ayuda");
    if(video){
        windowPopUp (video,"Ayuda");
    }else{
        var htmlText= '<html><head><title>Soporte</title></head><body><p align="center">'+
                '<img src="images/ayuda-52.png" alt="Soporte" width="200" height="45"><br></br></p>'+
                '<p align="center" style="font-family:Tahoma;font-size:10pt;">Visite nuestro '+
                'canal de tutoriales <b>Integrity</b> y conozca todas las posibilidades de nuestro sistema.'+
                '<br></br></p><p align="center"><img src="images/video.png" alt="Soporte" width="500" height="307"></p></body></html>';
        alert(htmlText);
    }
}
function menufunciones() {//reestructura el json que esta en textArea11 y lo trasnforma de tal forma que sea util para enviarlo a la pag tree2.html la cual muestra una arbol
    var dataarbol = sbm.util.getValue("textArea11");
    var dataarbolxRol = sbm.util.getValue("textArea3"); 
    var txtJson;
    var txtJsonxRol;
    if (dataarbol) {
        sessionStorage.setItem("txtJson3", dataarbol);
        dataarbol = modificarJSON2(dataarbol);
        dataarbol = dataarbol.replaceAll("columna1", "id");
        dataarbol = dataarbol.replaceAll("columna3", "parent");
        dataarbol = dataarbol.replaceAll("columna2", "text");
        dataarbol = dataarbol.replaceAll("columna4", "icon");
        dataarbol = dataarbol.replaceAll("CON IMAGEN", "./css/images/leaf.gif");
        dataarbol = dataarbol.replaceAll("SIN IMAGEN", "");
        dataarbol = dataarbol.replaceAll("<br>", "");
        txtJson = "{ \"plugins\" : [],\"core\" :" + dataarbol + "}";
        sessionStorage.setItem("txtJson2", txtJson);
        document.getElementById("include2").src = url + "Base_Integrity/tree2.html";
    }
    if (dataarbolxRol) {
        sessionStorage.setItem("MenuxRol", dataarbolxRol);
        dataarbolxRol = modificarJSON2(dataarbolxRol);
        dataarbolxRol = dataarbolxRol.replaceAll("columna1", "id");
        dataarbolxRol = dataarbolxRol.replaceAll("columna3", "parent");
        dataarbolxRol = dataarbolxRol.replaceAll("columna2", "text");
        dataarbolxRol = dataarbolxRol.replaceAll("columna4", "icon");
        dataarbolxRol = dataarbolxRol.replaceAll("CON IMAGEN","./css/images/leaf.gif");
        dataarbolxRol = dataarbolxRol.replaceAll("SIN IMAGEN", "");
        dataarbolxRol = dataarbolxRol.replaceAll("<br>", "");
        txtJsonxRol = "{ \"plugins\" : [],\"core\" :" + dataarbolxRol + "}";
        sessionStorage.setItem("jsMenuxRol", txtJsonxRol);
    }
}
String.prototype.replaceAll = function(token, newToken, ignoreCase) {//funcion para reemplazar valores
    var _token;
    var str = this + "";
    var i = -1;
    if (typeof token === "string") {
        if (ignoreCase) {
            _token = token.toLowerCase();
            while ((i = str.toLowerCase().indexOf(token,
            i >= 0 ? i + newToken.length : 0)) !== -1) {
                str = str.substring(0, i) + newToken
                        + str.substring(i + token.length);
            }
        } else {
            return this.split(token).join(newToken);
        }
    }
    return str;
};
function soporte(){
    w=450;
    h=300;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    window.open("soporte.html", "Soporte", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}
function loginValido(){
    var login=sessionStorage.getItem("loginintegrity");
    if(login=="cerrado"){
        cerrarSesion();
    }
    else{
        sessionStorage.setItem("loginintegrity","valido");
    }
}
function cerrarSesion(){
    sessionStorage.setItem("loginintegrity", "cerrado");
    sessionStorage.setItem("parent","");
    sessionStorage.setItem("yacp1", "no");
    window.location.assign("Start.jsp");
}
function muestramenu(){
    sbm.util.show("div1");
}
function ocultarmenu(){
    sbm.util.hide("div1");
}
function fijarPcf(){//apenas el usuario da click en alguna funcion del arbol tree2.html regresa a esta funcion con el nombre de la funcion y el id 
    try{

        var dataarbol=sbm.util.getValue("textArea11");
        dataarbol =  modificarJSON2(dataarbol);
        var datas = JSON.parse(dataarbol);
        for(var i=0;i<datas.data.length;i++){//for para montar los datos en unas variables que van a ser utilizadas para identificar la fun seleccionada
            var funCod = datas.data[i].columna1;
            var funDes = datas.data[i].columna2;
            var funIco = datas.data[i].columna4;
            var funUrl = datas.data[i].columna5;
            var funProg = datas.data[i].columna6;
            var funVideo = datas.data[i].columna7;
            var funRepor = datas.data[i].columna8;
            //var funUrl = "TiposContabilizacion/Start.jsp";
            arreglo_funCod[i] = funCod;
            arreglo_funDes[i] = funDes;
            arreglo_funIco[i] = funIco;
            arreglo_funUrl[i] = funUrl;
            arreglo_funProg[i] = funProg;
            arreglo_funVideo[i] = funVideo;
            arreglo_funRepor[i] = funRepor;
        }
        var idFSelect = sessionStorage.getItem("pcf");
        var textFSelec =  arreglo_funDes[arreglo_funCod.indexOf(idFSelect)];
        var urlFSelec =  arreglo_funUrl[arreglo_funCod.indexOf(idFSelect)];
        var urlVideo =  arreglo_funVideo[arreglo_funCod.indexOf(idFSelect)];
        var urlRepor =  arreglo_funRepor[arreglo_funCod.indexOf(idFSelect)];
        sessionStorage.setItem("pcf","");
        if((!urlFSelec)&&(arreglo_funProg[arreglo_funCod.indexOf(idFSelect)])){
            urlFSelec = "caracter"+arreglo_funProg[arreglo_funCod.indexOf(idFSelect)];
        }
        //		if(arreglo_funProg[arreglo_funCod.indexOf(idFSelect)]){
        //		urlFSelec = "caracter"+arreglo_funProg[arreglo_funCod.indexOf(idFSelect)];
        //		}
        else if(urlRepor!=""){
            sessionStorage.setItem("idrepcon",urlRepor);
        }
        else if(idFSelect.slice(0,8)=="005P001C"){//YA QUE PARAMETROS GENERALES ES UN APP DEJO ESTO PARA DIFERENCIAR QUE TIPO DE PARAMETRO GENERAL ES
            sessionStorage.setItem("parGentcl","2");//PARA OCULTAR TODOS LOS PARAMETROS LOS PARAMETROS GENERALES
            sessionStorage.setItem("parGentpl","2");
            sessionStorage.setItem("parGenmpa","2");
            sessionStorage.setItem("parGenfpa","2");
            sessionStorage.setItem("parGenpar","2");
            sessionStorage.setItem("parGentzo","2");
            sessionStorage.setItem("parGenzon","2");
            sessionStorage.setItem("parGenrlg","2");
            sessionStorage.setItem("parGenned","2");
            sessionStorage.setItem("parGenprm","2");
            sessionStorage.setItem("parGentco","2");
            sessionStorage.setItem("parGentev","2");
            sessionStorage.setItem("parGenpce","2");
            sessionStorage.setItem("parGenser","2");
            var cadena="";
            if(textFSelec == "TIPOS DE CLIENTES"){	
                cadena=cadena+"tcl=1;tpl=0;tzo=0;fpa=0;mpa=0;rlg=0;ned=0;tco=0;zon=0;tev=0;pce=0;par=0;prm=0;ser=0";
            }	
            else if(textFSelec == "TIPOS DE PLANES"){	
                cadena=cadena+"tcl=0;tpl=1;tzo=0;fpa=0;mpa=0;rlg=0;ned=0;tco=0;zon=0;tev=0;pce=0;par=0;prm=0;ser=0";
            }	
            else if(textFSelec == "FORMAS DE PAGO"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=0;fpa=1;mpa=0;rlg=0;ned=0;tco=0;zon=0;tev=0;pce=0;par=0;prm=0;ser=0";
            }	
            else if(textFSelec == "MEDIOS DE PAGO"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=0;fpa=0;mpa=1;rlg=0;ned=0;tco=0;zon=0;tev=0;pce=0;par=0;prm=0;ser=0";
            }	
            else if(textFSelec=="PARENTESCO"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=0;fpa=0;mpa=0;rlg=0;ned=0;tco=0;zon=0;tev=0;pce=0;par=1;prm=0;ser=0";
            }	
            else if(textFSelec == "TIPOS DE ZONAS"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=1;fpa=0;mpa=0;rlg=0;ned=0;tco=0;zon=0;tev=0;pce=0;par=0;prm=0;ser=0";
            }	
            else if(textFSelec == "ZONAS"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=0;fpa=0;mpa=0;rlg=0;ned=0;tco=0;zon=1;tev=0;pce=0;par=0;prm=0;ser=0";
            }	
            else if(textFSelec == "RELIGIONES"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=0;fpa=0;mpa=0;rlg=1;ned=0;tco=0;zon=0;tev=0;pce=0;par=0;prm=0;ser=0";
            }	
            else if(textFSelec == "NIVEL EDUCATIVO"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=0;fpa=0;mpa=0;rlg=0;ned=1;tco=0;zon=0;tev=0;pce=0;par=0;prm=0;ser=0";
            }	
            else if(textFSelec=="PARAMETROS"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=0;fpa=0;mpa=0;rlg=0;ned=0;tco=0;zon=0;tev=0;pce=0;par=0;prm=1;ser=0";
            }	
            else if(textFSelec == "TIPOS DE AGENTES"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=0;fpa=0;mpa=0;rlg=0;ned=0;tco=1;zon=0;tev=0;pce=0;par=0;prm=0;ser=0";
            }	
            else if(textFSelec == "TIPOS DE EVENTOS"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=0;fpa=0;mpa=0;rlg=0;ned=0;tco=0;zon=0;tev=1;pce=0;par=0;prm=0;ser=0";
            }	
            else if(textFSelec == "PERIODOS CENS"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=0;fpa=0;mpa=0;rlg=0;ned=0;tco=0;zon=0;tev=0;pce=1;par=0;prm=0;ser=0";
            }	
            else if(textFSelec == "SERVICIOS"){	
                cadena=cadena+"tcl=0;tpl=0;tzo=0;fpa=0;mpa=0;rlg=0;ned=0;tco=0;zon=0;tev=0;pce=0;par=0;prm=0;ser=1";
            }
            sessionStorage.setItem("parametros", cadena);
        }
        sessionStorage.setItem("VideoAyuda",urlVideo);
        esconderVariosElementosHTML(["div8","div9","div10","div11","div2","table50","image022","image06","div23","div21","div20"]);
        mostrarVariosElementosHTML(["div7","div12","div13","div14","div2_V1","div24"]);
        abreFuncion(urlFSelec,urlRepor);
        ocultarmenu();
        var element = document.getElementById('table1');
        element.style.background = '#80BD28';
    }catch(e){alert(e.message + " fijarPcf()");}
}
function estableceValoresBD(){
    try{
        var urlSCone = "";
        var usrSCone = "";
        var passSCone = "";
        var datosUrlC = sbm.util.getValue("textArea2");
        if(datosUrlC){
            var modificarjSON2 = modificarJSON2(datosUrlC);
            if(modificarjSON2){
                var txt = modificarjSON2;
                var datas = JSON.parse(txt);
                for(var i=0;i<datas.data.length;i++){
                    urlSCone = datas.data[i].columna2;
                    usrSCone = datas.data[i].columna3;
                    passSCone = datas.data[i].columna4;
                }
            }
            bandera = bandera ++;
        }else if(bandera  > 1 ){//si ya paso por esta funcion antes es decir ya se ejecuto siconct sql	
            cerrarSesion();
        }else{
            alert("La base de datos no contiene un String de conexi\u00F3n SQL.");
        }
        urlSCone = urlSCone.replaceAll(";port:",":");
        sessionStorage.setItem("urljdbc",urlSCone);
        sessionStorage.setItem("usuariodb", usrSCone);
        sessionStorage.setItem("contrasenadb", passSCone);
    }catch(e){
        alert("Funcion "+estableceValoresBD.name+" Error: "+e.message);
    }
}
function reportes(){//cuando le dan click a reportes
    try{
        ocultarmenu();
        document.getElementById("div4").style.zIndex = "-1";
        esconderVariosElementosHTML(["div7","div9","div10","div12","div2","table50","image022","image06","div23","div21","div22","div20"]);
        mostrarVariosElementosHTML(["div8","div11","div13","div14","div2_V1","div24"]);
        loginValido();
        sessionStorage.setItem("VideoAyuda","http://comunicacion349.wix.com/integrity#!reportes-tutoriales/w865s");//cambiar urlVideo con url link apenas este listo el video de ayuda
        abreFuncion("Reports");
        var element = document.getElementById('table1');
        element.style.background = '#EF9F27';
    }catch(e){alert(e.message + " reportes()");}
}
function configuracion(){//cuando le dan click a configuracion 
    try{
        ocultarmenu();
        esconderVariosElementosHTML(["div7","div8","div10","div13","div2","table50","div22","div24","div22","div20"]);
        mostrarVariosElementosHTML(["div9","div11","div12","div14","div2_V1","div24"]);
        abreFuncion("Gerencia");
        //	sessionStorage.setItem("VideoAyuda",urlVideo);//cambiar urlVideo con url link apenas este listo el video de ayuda
        var element = document.getElementById('table1');
        element.style.background = '#CF0021';
    }catch(e){alert(e.message + " gerencia()");}
}
function configuracionAdministra(){//cuando le dan click a configuracion administracion
    try{
        esconderVariosElementosHTML(["div7","div8","div10","div13","div11","div12","div14","div2","image022","image06","div23","div21","div22","div20"]);
        mostrarVariosElementosHTML(["div9","div2_V1","div24"]);
        abreFuncion("Gerencia");
        //	sessionStorage.setItem("VideoAyuda",urlVideo);//cambiar urlVideo con url link apenas este listo el video de ayuda
        var element = document.getElementById('table1');
        element.style.background = '#CF0021';
    }catch(e){alert(e.message + " gerencia()");}
}
function muestraMenuIzq(){
}
function indicadores(){//cuando le dan click a indicadores
    try{
        ocultarmenu();
        document.getElementById("div4").style.zIndex = "-1";
        esconderVariosElementosHTML(["div7","div8","div9","div14","div2","table50","div22","div20"]);
        mostrarVariosElementosHTML(["div10","div11","div12","div13","div2_V1","div24"]);
        abreFuncion("Indicadores");
        var element = document.getElementById('table1');
        element.style.background = '#23ADDE';
    }catch(e){alert(e.message + " gerencia()");}
}
function reportesInt() {
    try {
        ocultarmenu();
        document.getElementById("div4").style.zIndex = "-1";
        esconderVariosElementosHTML([ "div10", "div7", "div8", "div9", "div14","div2","table50" ,"image022","image06","div23","div21","div22","div20"]);
        mostrarVariosElementosHTML([ "div14", "div11", "div12", "div13","div2_V1","div24" ]);
        abreFuncion("Documentos");
        var element = document.getElementById('table1');
        element.style.background = '#23ADDE';
    } catch (e) {
        alert(e.message + " ReportesInt()");
    }
}
function procesos() {//cuando le dan click a procesos
    try {
        ocultarmenu();
        if(sbm.util.getValue("textArea6")){
            esconderVariosElementosHTML([ "div10", "div7", "div8", "div9", "div14","div2","table50" ,"image022","image06","div23","div21","div24","div20"]);
            mostrarVariosElementosHTML([ "div14", "div11", "div12", "div13","div2_V1","div22" ]);
            abreFuncion("ProcessName");
            var element = document.getElementById('table1');
            element.style.background = '#CF0021';
        }else{
            alert("El usuario no tiene pocesos asignados.");
        }
    } catch (e) {
        alert(e.message + " procesos()");
    }
}
function modificarJSON2(textAreaJSON){
    try{
        var string=textAreaJSON;
        var JSONObject2=JSON.parse(string);
        var nomTabZonaActual=Object.keys(JSONObject2).toString();
        string=string.replaceAll(nomTabZonaActual,"data");
        var obj5 = JSON.parse(string);
        for (var i = 0; i<1; i++) { //loop through the array
            cont1=0;
            var obj = obj5.data[i];
            for (var key in obj) { //loop through the keys
                cont1=cont1+1;
                string=string.replaceAll("\""+key+"\":","\""+"columna"+cont1+"\":");
            }
        }
        return string;
    }catch (e) {
        return null;
    }
}
function correLinuxBack() {//corre las funciones del shell in a box
    try {
        var ip=(((sessionStorage.getItem("url").split("/"))[2]).split(":"))[0];

        var portLinux = sessionStorage.getItem("portLinux");
        document.getElementById("includeTerm").src = "http://"+ip+":"+portLinux+"/"
                + "?u="
                + sessionStorage.getItem("usuario")
                + "&p="
                + sbm.util.getValue("textField1");


    } catch (e) {
        alert(e.message + " corre");
    }
}
function corre(){//esta funcion se ejecuta por que la app IntegrityViejo la llama y su funcion es determinar si le muestra al usuario la plataforma linux Envevida o una cosola de wind
    var hibrido = sessionStorage.getItem("hibrido");

    if (hibrido == "LinuxWeb") {
        document.getElementById("div5").style.display ="";
        document.getElementById("include1").style.display ="none";
        document.getElementById("div4").style.zIndex = "3";
        document.getElementById("div4").style.display ="";
        crearFont (sessionStorage.getItem("ncf"),"div15",4,"#ffffff");
        setTimeout("document.getElementById(\"div17\").style.display =\"none\"\;",100);
    }else{
        document.location.href = "localexplorer:W:/SrcDesarrollo/Programas/Shell/integrity3.bat";
    }
}

function ocultaImgTree(){
}
function  crearFont (titulo,div,tam,color){
    var font = document.createElement('font');
    font.setAttribute('color', color);
    font.setAttribute('size', tam);
    limpiar(div);
    font.innerHTML = titulo;
    document.getElementById(div).appendChild(font);
}
function limpiar(div) {
    var d = document.getElementById(div);
    while (d.hasChildNodes())
        d.removeChild(d.firstChild);
}
function displayLoading(target) {
    try {
        var element = $(target);
        kendo.ui.progress(element, true);
        setTimeout(function(){
            kendo.ui.progress(element, false);
        }, 6000);
    } catch (e) {
        alert(e);
    }
}
function resetTime() {

    //	clearTimeout(time);
    //	time  = setTimeout(cerrarSesion, 6000);
    //	event.preventDefault();
    //	time  = setTimeout(cerrarSesion, 600000,"First parameter", "Second parameter");
    //	1000 milisec = 1 sec
}
function  windowPopUp (detalle,titulo){
    try{
        $("#windowDiv").append("<div id='window'></div>");
        var win = $("#window").kendoWindow({
            draggable: true,
            height: "90%",
            modal: true,
            resizable: false,
            title: titulo,
            width: "1300px",
            content: detalle,
            close: function() {
                this.destroy(); 
            }
        }).data("kendoWindow").center();
        win.open();
    }catch(e){
        alert("Function: windowPopUp Error: "+e.message);
    }
}
function cambiarContra(){
    sbm.util.show("image022");
    sbm.util.hide("image06");
    sbm.util.hide("div21");
    $("#div23").fadeIn("slow");
}

function guardarContra(){
    sbm.util.setValue("textField6",4);
    var datos ={
        "euserid":sessionStorage.getItem("usuario"),//primer parametro del json
        "epassword":sbm.util.getValue("ContrasenaR"),
        "usr-mail":sessionStorage.getItem("correo"),
    };
    if(sbm.util.getValue("ContrasenaR")==sbm.util.getValue("Contrasena")){
        sbm.util.setValue("textArea4",datoXmlV2("ee_userPAS",datos,true));
        document.getElementById("button01").click();
    }else{
        limpiar("labelMensaje");
        sbm.util.setValue("Contrasena");
        sbm.util.setValue("ContrasenaR");
        msnError("Por favor repita la contrase\u00f1a.");
    }
}

function  msnError(mensaje){ //pasar a carpeta scrips
    try{
		
        limpiar("botones");
        crearEspacio_salto ("jumpLine",1,"labelMensaje");
        crearLabel ("labelmenBD",mensaje,"labelMensaje","15px Verdana");
        crearEspacio_salto ("jumpLine",4,"labelMensaje");
        popUpPeque("Aceptar","tipo");
        var elem = document.getElementById("ButtonCancel");
        elem.value = "Aceptar";
        setAccPopUp("Aceptar");
        document.getElementById("ButtonFiltr").style.display ="none";
    }catch(e){
        alert("Function: msnError Error: "+e.message);
    }
}

function popUpPeque(titulo,tipo){
    var popUp = $("#accessDiv").kendoWindow({
        draggable: true,
        maxHeight: "600px",
        modal: true,
        resizable: false,
        title: titulo,
    }).data("kendoWindow").center();
    document.getElementById("accessDiv_wnd_title").innerHTML=titulo;
    document.getElementById("accessDiv_wnd_title").textContent=titulo;
    popUp.open();
}



function iniProceso(){
    var usr=sbm.util.getValue("textField2");
    var psw=sbm.util.getValue("textField1");
    return [usr, psw];
}	
function TareasBPM(){
    var jsonTareasBPM;
    jsonTareasBPM = sbm.util.getValue("textArea5");
    return jsonTareasBPM;
}
function ProcesosBPM(){
    var jsonProcesosBPM;
    jsonProcesosBPM = sbm.util.getValue("textArea6");
    return jsonProcesosBPM;
}
function tareasC(){
    var con;
    con = sbm.util.getValue("textField1");
    return con;
}
function tareasC2(json){
    sbm.util.setValue("textArea5",json);
    return json;
}
$(function eventos() {
   
});
function image05_onMouseMove(eventContext){
    muestramenu();}
function image012_onMouseMove(eventContext){
    muestramenu();}
function table1_onMouseMove(eventContext){
    ocultarmenu();}
function image02_onMouseMove(eventContext){
    ocultarmenu();}
function image02v3_onMouseMove(eventContext){
    ocultarmenu();}
function form_onLoad(eventContext){
    cargar();}
function table52_onKeyUp(eventContext){
    ocultaImgTree();}
function arbolRoles(){
    sessionStorage.setItem("datoArb",sbm.util.getValue("textArea11"));
}

function table1_onMouseMove(eventContext){
    ocultarmenu();}


function image05_onMouseMove(eventContext){
    muestramenu();}


function table52_onKeyUp(eventContext){
    ocultaImgTree();}


function image012_onMouseMove(eventContext){
    muestramenu();}


function div3_onKeyPress(eventContext){
    resetTime();}


function image02v3_onMouseMove(eventContext){
    ocultarmenu();}


function form_onLoad(eventContext){
    cargar();
    resetTime();}


function div3_onMouseMove(eventContext){
    resetTime();}

                        

