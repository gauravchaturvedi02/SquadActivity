import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gblFunc from './person';

class App extends Component {

   constructor(props){
       super(props);
       this.state = {
           id : '',
           name : '',
       }
       this.addname = this.addname.bind(this);
       this.searchname = this.searchname.bind(this);
       this.searchid = this.searchid.bind(this);
       this.updateid = this.updateid.bind(this);
       this.updatename = this.updatename.bind(this);
       this.updatemail = this.updatemail.bind(this);
       this.updateData= this.updateData.bind(this);
       this.updatenid = this.updatenid.bind(this);
       this.addnote = this.addnote.bind(this);
       this.updateurl =this.updateurl.bind(this);
   }
   addname(e){
       this.setState({
           name : e.target.value
       })
   }
   addnote(e){
    this.setState({
        note : e.target.value
    })
}
   searchname(e){
    this.setState({
        sname : e.target.value
    })
    }
    searchid(e){
    this.setState({
        id : e.target.value
    })
    }
    updateid(e){
        this.setState({
            uid : e.target.value
        })
    }
    updatenid(e){
        this.setState({
            nid : e.target.value
        })
    }
    updatename(e){
        this.setState({
    uname : e.target.value
        })
    }
    updatemail(e){
        this.setState({
            uemail : e.target.value
        })
    }

    updateurl(e){
        this.setState({
            url:e.target.value
        })
    }
   
    updateData(name){
       if(name=="Name"){
           gblFunc.addPerson(this.state.name);
       }
       else if (name== "Searchname"){
        gblFunc.searchPersonByName(this.state.sname)
       }
       else if (name== "UpdatePerson"){
        gblFunc.updatePersonByid(this.state.uid,this.state.uname,this.state.uemail)
       }
       else if (name== "addNote"){
        gblFunc.addNote(this.state.nid,this.state.note)
       }
       else if (name== "addwebhook"){
        gblFunc.createWebhook(this.state.url)
       }
       else{
           gblFunc.searchPersonByid(this.state.id)
       }
    }
    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Suqad PipeDrive Integration</h2>
        </div>
        <p className="App-intro">
          Add a person
        </p>
        <div id="container" className="mainContainer">
          <input className="custonInput" placeholder="Enter Name" value={this.state.name} id="name" onChange={(e)=>{this.addname(e)}}/>
          <button className="custonButton" onClick={()=>{this.updateData("Name")}}>Add Name</button>
        <br/>
        <p className="App-intro">
          Search a person
        </p>
          <input className="custonInput" placeholder="Enter Name" value={this.state.sname} id="sname" onChange={(e)=>{this.searchname(e)}}/>
          <button className="custonButton" onClick={()=>{this.updateData("Searchname")}}>Search By Name</button>
         <br/>
          <input className="custonInput" placeholder="Enter Id" value={this.state.id} id="id" onChange={(e)=>{this.searchid(e)}}/>
          <button className="custonButton" onClick={()=>{this.updateData("id")}}>Search By ID</button>
          <br/>
          <p className="App-into">Update Person</p>
          <input className="custonInput" placeholder="Enter userId" value={this.state.uid} id="uid" onChange={(e)=>{this.updateid(e)}}/>
          <br/><input className="custonInput" placeholder="Enter New Name" value={this.state.uname} id="uname" onChange={(e)=>{this.updatename(e)}}/>
          <br/><input className="custonInput" placeholder="Enter New Email" value={this.state.uemail} id="uemail" onChange={(e)=>{this.updatemail(e)}}/>
          <br/><button className="custonUpdateButton" onClick={()=>{this.updateData("UpdatePerson")}}>Update Name or Email</button>
          <p className="App-intro">
          Add Note to a person
        </p>
        <input className="custonInput" placeholder="Enter userId" value={this.state.uid} id="nid" onChange={(e)=>{this.updatenid(e)}}/>
        <br/>
          <input className="custonInput" placeholder="Enter note" value={this.state.note} id="note" onChange={(e)=>{this.addnote(e)}}/>
          <br/><button className="custonUpdateButton" onClick={()=>{this.updateData("addNote")}}>Add Note</button>
        <br/>
        <p className="App-into">Create Webhooks</p>
          <input className="custonInput" placeholder="Enter url" value={this.state.url} id="url" onChange={(e)=>{this.updateurl(e)}}/>
          <br/>
          <button className="custonUpdateButton" onClick={()=>{this.updateData("addwebhook")}}>Create Webhook</button>
        <br/>
          </div>
          <p className="App-into dn" id="result_header">Result from service</p>
          <div id="success" className ="resultdiv"></div>
      </div>


    );
  }
}

export default App;
