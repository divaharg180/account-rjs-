import React, { Component } from "react";
import "./laystyle.css"


class AddBtn extends Component {
    render() {
      return (
        <React.Fragment>
          <form>
        <label> USERNAME</label>
        <input name="userName" type="text" placeholder="enter your name" id="userName"></input>
        <label> PASSWORD</label>
        <input name="passWord" type="password" id="passWord" placeholder=" *******"></input>
  
        <input  id="submit" onClick={this.AddEvent} type="submit"></input>

        <button> Create Account ?</button>
      
      </form>
        </React.Fragment>
      );
    }
    AddEvent1() {
        <h1>hello</h1>
    }
   
    AddEvent() 
  
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

            alert("success")    
            console.log(users[i].username, users[i].password);
        }
        // else{
        //   alert("invalid");
        // }
        }   
      }
      
      }
  
  export default AddBtn;