var api_token='e96bc99afcbc4efc1375810c731d33aad2910932';
var company_domain='indiamart-2c1db8';
import $ from 'jquery';
let url = '';
let gblFunc = {
addPerson(name)
{

    var data = {

        'name': name,

    }

    url = 'https://' + company_domain + '.pipedrive.com/v1/persons/?api_token=' + api_token;

    $.ajax({
        url: url,
        data: data,
        type: "POST",
        datatype: "json",
        success:  function(res){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = JSON.stringify(res);
            document.getElementById("name").value = "";
        },
        error: function (){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Could not add.Some error Occured";
            document.getElementById("name").value = "";
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
            document.getElementById("success").innerHTML = JSON.stringify(res);
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
            document.getElementById("success").innerHTML = JSON.stringify(res);
            document.getElementById("id").value = "";
        },
        error:  function (){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Could not find the person.Some error Occured";
            document.getElementById("id").value = "";
        }

    })


},updatePersonByid(id,name,email) {

    url = 'https://' + company_domain + '.pipedrive.com/v1/persons/' + id + '/?api_token=' + api_token;
    
    var data = {

        'name': name,
        'email':email

    }
    $.ajax({
        url: url,
        type: "PUT",
        data: data,
        datatype: "json",
        success: function(res){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = JSON.stringify(res);
            document.getElementById("uid").value = "";
            document.getElementById("uname").value = "";
            document.getElementById("uemail").value = "";
        },
        error:  function (){
            document.getElementById("result_header").display="block";
            document.getElementById("success").innerHTML = "Could not update the person.Some error Occured";
            document.getElementById("uid").value = "";
            document.getElementById("uname").value = "";
            document.getElementById("uemail").value = "";
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
            document.getElementById("success").innerHTML = JSON.stringify(res);
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
            document.getElementById("success").innerHTML = JSON.stringify(res);
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


}

}
export default gblFunc;