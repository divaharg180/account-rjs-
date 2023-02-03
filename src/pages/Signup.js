import React, { Component } from "react";
import "./laystyle.css"

class SignUp extends Component{
    state = {
        formData :{
            name : "",
            email : " ",
            password : " "

        }
    };

    handleNameChange = (event) =>{
        //  console.log(event.target);
         const {value} = event.target;

    
         this.setState(prevState =>({
          formData : {
            ...prevState.formData,
            name : value
          }
         }
  
  )) 
  var name= document.getElementById("name");
  localStorage.setItem('username',name.value)
}
 handleEmailChange = (event) =>{
      // console.log(event.target);
      const {value} = event.target;

     this.setState(prevState =>({
      formData : {
        ...prevState.formData,
        email : value
        
      }
     })) 
     var email= document.getElementById("email");
     localStorage.setItem('EmailID',email.value)
    }
    handleGenderChange = (event) =>{
        // console.log(event.target);
        const {value} = event.target;
  
       this.setState(prevState =>({
        formData : {
          ...prevState.formData,
          gender: value
        }
       })) 
       var gender= document.getElementById("gender1");
       localStorage.setItem('Gender',gender.value)
      }
      handleSubmit=(event) =>{
        event.preventDefault()
  const {formData}= this.state;
  this.setState(prevState =>({
    ...prevState,
    finalFormData : {
      ...prevState.finalFormData,
      ...formData
    }
  }))    }


    render(){
        return(
            <React.Fragment>
        <form id="signup" onSubmit={this.handleSubmit}>
             <label> UserName </label>
          <input id="name" type="text" required onChange={this.handleNameChange} />

          <label>Email Address </label>
            <input id="email" type="email"required  onChange={this.handleEmailChange}/>

            <label>Gender </label>
        <nav >
        <input id="gender1" type="radio" name="gender" value="Male"  onChange={this.handleGenderChange}></input>
            <option  className="gender">Male</option>

           <input id="gender1" type="radio" name="gender" value="Female" onChange={this.handleGenderChange}></input>
            <option  className="gender">Female</option>
  
           <input id="gender1" type="radio" name="gender" value="Other" onChange={this.handleGenderChange}></input>
           <option  className="gender">other</option>
        </nav>
            
        
<br></br>
            <label> Set Password</label>
            <input type="password"  required  onChange={this.handlePasswordChange}/>

            <button type="submit" id="submit">submit</button>
        </form>

   


           {/* {

            this.state.finalFormData && Object.keys(this.state.finalFormData).length > 0 && (
            
             <p>

            <h3> {this.state.finalFormData.name}</h3>  
             <h3>{this.state.finalFormData.email}</h3> 
             <h3>{this.state.finalFormData.gender}</h3> 
            </p>

     )        

          } */}
          </React.Fragment>
           
        )
  }
}

  export default SignUp;

  
    
    
      
    