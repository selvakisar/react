
import './App.css';
import React from 'react';
// const studentsData=[
//   {name:"selva",
//   batch:"123",
//   education:"Bachelor"
//   },
//   {name:"sanajy",
//   batch:"112",
//   education:"diplomo"},
//   {name:"shubham",  
//   batch:"123",
//   education:"BA"},
//   {name:"rajan",
//   batch:"123",
//   education:"BBA"}
//                     ]

function App() {
  return (
    <div className="App">
      <div className='card-block'>
        <StudentCard/>
        <Silver/>
        <Pro/>

      </div>
    </div>
  );
}

export default App;
  

function StudentCard(name,batch,education){
  return (


<div className="free-card">
        
<h3 >   FREE </h3>

<h1><h1>$0</h1> <sub>/month</sub></h1>
<h3>______________________________</h3>

<h3 >&#10003;&nbsp; <b>Single Users</b></h3>
<p ><b>&#10003;</b>&nbsp;5GB Storage</p>
<p ><b>&#10003;</b>&nbsp;Unlimited Public Projects</p>
<p ><b>&#10003;</b>&nbsp;Community Access</p>
<p class="lit"><b>&#10005;</b>&nbsp;Unlimited Private Projects</p>
<p class="lit"><b>&#10005;</b>&nbsp;Dedicated Phone Support</p>
<p class="lit"><b>&#10005;</b>&nbsp;Free Subdomain</p>
<p class="lit"><b>&#10005;</b>&nbsp;Monthly Status Reports</p>
<button className='acceptbtn-btn'id="a">BUTTON</button>
<h1> </h1>
<h1> </h1>

</div>
    



  );
};

function Silver(name,batch,education){
  return (


<div className="free-card">
        
<h3 >   PLUS </h3>

<h1><h1>$9</h1> <sub>/month</sub></h1>
<h3>______________________________</h3>

<h3 ><b>&#10003;</b>&nbsp; <b>5 Users</b></h3>
<p ><b>&#10003;</b>&nbsp;50GB Storage</p>
<p ><b>&#10003;</b>&nbsp;Unlimited Public Projects</p>
<p ><b>&#10003;</b>&nbsp;Community Access</p>
<p><b>&#10003;</b>&nbsp;Unlimited Private Projects</p>
<p ><b>&#10003;</b>&nbsp;Dedicated Phone Support</p>
<p ><b>&#10003;</b>&nbsp;Free Subdomain</p>
<p ><b>&#10005;</b>&nbsp;Monthly Status Reports</p>
<button className='acceptbtn-btn'id="a">BUTTON</button>
<h1> </h1>
<h1> </h1>

</div>
    



  );
};

function Pro(name,batch,education){
  return (


<div className="free-card">
        
         <h3 >   PRO </h3>

         <h1><h1>$49</h1> <sub>/month</sub></h1>
        <h3>______________________________</h3>
        
         <h3 >&#10003;&nbsp; <b>Unlimited Users</b></h3>
         <p >&#10003;&nbsp;150GB Storage</p>
         <p >&#10003;&nbsp;Unlimited Public Projects</p>
         <p >&#10003;&nbsp;Community Access</p>
         <p>&#10003;&nbsp;Unlimited Private Projects</p>
         <p >&#10003;&nbsp;Dedicated Phone Support</p>
         <p >&#10003;&nbsp;<b>Unlimited</b>Subdomain</p>
         <p >&#10003;&nbsp;Monthly Status Reports</p>
         <button className='acceptbtn-btn'id="a">BUTTON</button>
<h1> </h1>
<h1> </h1>

    </div>
    



  );
};






