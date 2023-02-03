import React, { Component } from "react";


class MyHistory extends Component {
    render() {
      return (
        <React.Fragment>
        <nav id="campus2">
                            
        <div class="campus">
        
           <h1>University Campus</h1><br/>
        
        </div>
        
         <div class="campus1">
        
        
                 <span>
                 <button onClick={this.StudentList}> StateBoard</button> 
                   <p id="state"></p>
                 </span>
                  
                  
                  <h5>Matriculation</h5>
                 
                  <h5>CBSC</h5>
        
                  <h5>Primary</h5>
                
         </div>
        
        </nav>	</React.Fragment>
      );
    }
  
   
    StudentList() 
      {
     var stateBoard= document.getElementById("state");

        var studentData=[
{id:1,name:"Kavin",mark: 450
},
{id:2,name:"Ashwin",mark:400
},
{id:3,name:"Hari",mark:390
},
{id:4,name:"Kavi",mark:360
},
{id:5,name:"Adithya",mark:350
},
{id:6,name:"Kumar",mark:305
},
{id:7,name:"Aadhav",mark:258
},
{id:8,name:"Sarvesh",mark:249
},
{id:9,name:"Kannan",mark:246
},
{id:10,name:"Viyan",mark:243
},
{id:11,name:"Manoj",mark:224
},
{id:12,name:"Nilan",mark:214
},
{id:13,name:"Kalai",mark:202
},
{id:14,name:"Mithran",mark:183
},
{id:15,name:"Ashvin",mark:180
},
{id:16,name:"Saathvik",mark:176
},
{id:17,name:"Suresh",mark:140
},
{id:18,name:"Aadan",mark:130
},
{id:19,name:"Sanjith",mark:129
},
{id:20,name:"Guhan",mark:126
}        ];
let text ="";
    for( let i=0; i<studentData.length; i++ )
{  
  text += studentData[i].id +" " + studentData[i].name +" " + studentData[i].mark +"</h3>  <br><hr>";
}
stateBoard.innerHTML=text;
      }
      
      }
  
  export default MyHistory;


  