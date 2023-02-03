import React, { Component } from "react";
import "./signin.css";


class SignIn extends Component {
    render() {
      return (
        <React.Fragment>
        <div id="container">
    
          <form >
          <h3>Sign In</h3>
        <label> USERNAME</label>
        <input name="userName" type="text" placeholder="enter your name" className="box"  id="userName"></input>
        <label> PASSWORD</label>
        <input name="passWord" type="password" className="box" id="passWord" placeholder=" *******"></input>
  
        <input  id="submit" onClick={this.AddEvent} type="submit"></input>
        <button onclick="this.parentElement.style.display='none'">x</button>

      
      </form>
      </div>
        </React.Fragment>
      );
    }
    Close(){
      
    }
  
    
    AddEvent() 
    // {
    //     if(a==1)
    //     {document.getElementById("container").style.display="inline"}

        
    // }
    
  
      {
        const userName1=document.getElementById("userName");
        const passWord1 = document.getElementById("passWord"); 
        var users = [
          { username: 'user1', password: 'pass1' },
          { username: 'user2', password: 'pass2' },
          { username: 'user3', password: 'pass3' }
      ];
   
      for(var i = 0; i < users.length; i++)
        {
          if (userName1.value=== users[i].username &&  passWord1.value===users[i].password) {

            document.getElementById("container").style.display="remove";
            alert("success")
           
            console.log(users[i].username, users[i].password);
        }
        // else{
        //   alert("invalid");
        // }
        }   
      }
    //   AddEvent();
      }
  
  export default SignIn;