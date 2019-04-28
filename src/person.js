var api_token='e96bc99afcbc4efc1375810c731d33aad2910932';
var company_domain='indiamart-2c1db8';
import $ from 'jquery';
let url = '';
let gblFunc = {
addPerson(name,svstop)
{

    var data = {

        'name': name,
        '1ffb21bbfae79edc2dc8ba28efbf4d8738cd39da':svstop
        
    }

    url = 'https://' + company_domain + '.pipedrive.com/v1/persons/?api_token=' + api_token;

    $.ajax({
        url: url,
        data: data,
        type: "POST",
        datatype: "json",
        success:  function(res){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            document.getElementById("name").value = "";
            document.getElementById("addsv").value = "";
        },
        error: function (){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Could not add.Some error Occured";
            document.getElementById("name").value = "";
            document.getElementById("addsv").value = "";
        }

    })
},searchPersonByName(name) {

    url = 'https://' + company_domain + '.pipedrive.com/v1/persons/find/?term=' + name + '&start=0&api_token=' + api_token;

    $.ajax({
        url: url,
        type: "GET",
        datatype: "json",
        success:  function(res){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            document.getElementById("sname").value = "";
        },
        error: function (){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Could not find the person.Some error Occured";
            document.getElementById("sname").value = "";
        }

    })


},searchPersonByid(id) {

    url = 'https://' + company_domain + '.pipedrive.com/v1/persons/' + id + '/?api_token=' + api_token;

    $.ajax({
        url: url,
        type: "GET",
        datatype: "json",
        success: function(res){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            document.getElementById("id").value = "";
        },
        error:  function (){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Could not find the person.Some error Occured";
            document.getElementById("id").value = "";
        }

    })


},updatePersonByid(id,name,email,svstop) {

    url = 'https://' + company_domain + '.pipedrive.com/v1/persons/' + id + '/?api_token=' + api_token;
    
    var data = {

        'name': name,
        'email':email,
        '1ffb21bbfae79edc2dc8ba28efbf4d8738cd39da':svstop

    }
    $.ajax({
        url: url,
        type: "PUT",
        data: data,
        datatype: "json",
        success: function(res){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            document.getElementById("uid").value = "";
            document.getElementById("uname").value = "";
            document.getElementById("uemail").value = "";
            document.getElementById("updatesv").value = "";
        },
        error:  function (){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Could not update the person.Some error Occured";
            document.getElementById("uid").value = "";
            document.getElementById("uname").value = "";
            document.getElementById("uemail").value = "";
            document.getElementById("updatesv").value = "";
        }

    })


},addNote(id,note) {

    url = 'https://' + company_domain + '.pipedrive.com/v1/notes/?api_token=' + api_token;
    
    var data = {

        'content': note,
        'person_id':id

    }
    $.ajax({
        url: url,
        type: "POST",
        data: data,
        datatype: "json",
        success: function(res){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            document.getElementById("nid").value = "";
            document.getElementById("note").value = "";
        },
        error:  function (){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Could not add note.Some error Occured";
            document.getElementById("nid").value = "";
            document.getElementById("note").value = "";
        }

    })


},
createWebhook(urlpath,event) {

    url = 'https://' + company_domain + '.pipedrive.com/v1/webhooks/?api_token=' + api_token;
    
    var data = {
        'subscription_url': urlpath,
        'event_action':"*",
        'event_object':"person"
    }
    $.ajax({
        url: url,
        type: "POST",
        data: data,
        datatype: "json",
        success: function(res){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            document.getElementById("nid").value = "";
            document.getElementById("note").value = "";
        },
        error:  function (){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Webhook could not be created.Some error Occured";
            document.getElementById("nid").value = "";
            document.getElementById("note").value = "";
        }

    })


},showsvstatus(res){
    
    let svstatus=JSON.parse(res)["current"]["1ffb21bbfae79edc2dc8ba28efbf4d8738cd39da"];
     
    if(svstatus == "Y"){
        document.getElementById("success").innerHTML ="Stop following this lead";
    }
    else{
        document.getElementById("success").innerHTML ="Pursue this lead";
    }
    document.getElementById("wresponse").value = "";


}

}
export default gblFunc;