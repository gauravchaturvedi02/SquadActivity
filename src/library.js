var api_token='e96bc99afcbc4efc1375810c731d33aad2910932';
var company_domain='indiamart-2c1db8';
var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);
let url = '';

function addPerson(name,svstop)
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
            
            //document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            
        },
        error: function (){
           console.log( "Could not add.Some error Occured");
          
        }

    })
}
function searchPersonByName(name) {

    url = 'https://' + company_domain + '.pipedrive.com/v1/persons/find/?term=' + name + '&start=0&api_token=' + api_token;

    $.ajax({
        url: url,
        type: "GET",
        datatype: "json",
        success:  function(res){
            
            //document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            
        },
        error: function (){
           console.log( "Could not find person.Some error Occured");
          
        }

    })


}
function searchPersonByid(id) {

    url = 'https://' + company_domain + '.pipedrive.com/v1/persons/' + id + '/?api_token=' + api_token;

    $.ajax({
        url: url,
        type: "GET",
        datatype: "json",
        success:  function(res){
            
            //document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            
        },
        error: function (){
           console.log( "Could not find the person.Some error Occured");
          
        }
    })


}
function updatePersonByid(id,name,email,svstop) {

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
        success:  function(res){
            
            //document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            
        },
        error: function (){
           console.log( "Could not update.Some error Occured");
          
        }

    })


}
function addNote(id,note) {

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
        success:  function(res){
            
            //document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            
        },
        error: function (){
           console.log( "Could not add note.Some error Occured");
          
        }

    })


}
function createWebhook(urlpath,event) {

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
        success:  function(res){
            
            //document.getElementById("success").innerHTML = "Operation Successfully Completed !! Please check console for service response"
            console.log(res);
            
        },
        error: function (){
           console.log( "Could not add new url.Some error Occured");
          
        }

    })


}
function showsvstatus(res){
    
    let svstatus=JSON.parse(res)["current"]["1ffb21bbfae79edc2dc8ba28efbf4d8738cd39da"];
     
    if(svstatus == "Y"){
        console.log("Stop following this lead");
    }
    else{
        console.log("Pursue this lead");
    }
    


}