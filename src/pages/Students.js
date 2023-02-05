import React, { Component } from "react";


class Students extends Component {
    render() {
      return (
        <React.Fragment>
        
         <div id="campus">

                 <span id="section1">
                  <button id="rankbtn" onClick={this.MatricList}>Matriculation</button>
                  <br></br> <p id="state2"></p>
                  </span>

                  <span id="section2">
                  <button id="rankbtn"  onClick={this.CbscList}>CBSC</button>
                  <br></br><p id="state3"></p>
                  </span>

                  <span id="section3" >
                  <button id="rankbtn" onClick={this.PrimaryList}>Primary</button>
                  <br></br><p id="state4"></p>
                  </span>
                  <span id="section">
                 <button id="rankbtn" onClick={this.StateBoardList}> StateBoard</button> 
                 <br></br><p id="state"></p>
                   </span>
                
         </div>
        
       </React.Fragment>
      );
    }
  
   
    StateBoardList() 
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
  text += studentData[i].id +"-" + studentData[i].name +"-" + studentData[i].mark +"</h3>  <br><hr>";
}
stateBoard.innerHTML=text;
      }
MatricList() 
      {
     var stateBoard2= document.getElementById("state2");

        var studentData2=[
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
let text2 ="";
    for( let i=0; i<studentData2.length; i++ )
{  
  text2 += studentData2[i].id +"-" + studentData2[i].name +"-" + studentData2[i].mark +"</h3>  <br><hr>";
}
stateBoard2.innerHTML=text2;
      }
CbscList() 
      {
     var stateBoard3= document.getElementById("state3");

        var studentData3=[
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
let text3 ="";
    for( let i=0; i<studentData3.length; i++ )
{  
  text3 += studentData3[i].id +"-" + studentData3[i].name +"-" + studentData3[i].mark +"</h3>  <br><hr>";
}
stateBoard3.innerHTML=text3;
      }
      PrimaryList() 
      {
     var stateBoard4= document.getElementById("state4");

        var studentData4=[
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
let text4 ="";
    for( let i=0; i<studentData4.length; i++ )
{  
  text4 += studentData4[i].id +"-" + studentData4[i].name +"-" + studentData4[i].mark +"</h3>  <br><hr>";
}
stateBoard4.innerHTML=text4;
      }
      
      }
  
  export default Students;


  