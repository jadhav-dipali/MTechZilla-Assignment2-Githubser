import React , {useEffect, useState} from "react"
import "../App.css"

export default function GitUser(){
    const [name , setName] = useState("");
    const [text , setText] = useState(true);
    const [err , serErr] = useState(false);
    const [user , setUser] = useState(null); 
    function dataFetch(name){
        fetch(` https://api.github.com/users/${name}`)
        .then(res=>res.json())
        .then(res=>{
            if(res.message==="Not Found"){
                serErr(true)
            }else{
                setUser(res)
            }})
    }
      
    
   console.log(user) 
return<>
<div className="input-holder">
    <input type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value) ; serErr(false) ; setText(false)}} placeholder="Enter user name what you find"/>
    <button onClick={()=>dataFetch(name)}>Search</button>
</div>
{text && <h2 style={{"color":"green" , "textAlign":"center"}}>Search here the github User Easily</h2> }
{err&&<h2 style={{"color":"red", "textAlign":"center"}}>User Not Found Please Write a Correct User Name</h2>}
{!err&&user&&<div className="main-contaier">
  <div className="card-container">
    <div className="img-holder">
     <div className="img-container">
        <img src={user.avatar_url} ></img>
    </div>
    </div>
     <div className="name-container">{user.name}</div>
     <p className="name-container-1">{user.login}</p>
     <div className="git-repos">
        <div>
            <h5 className="repo-item">Repository</h5>
            <h5 className="repo-value">{user.public_repos} repos</h5>
        </div>
        <div>
            <h5 className="repo-item">public-gists</h5>
            <h5 className="repo-value">{user.public_gists} gists</h5>
        </div>
     </div>
     <div>
     <h5 className="repo-item1">created at</h5>
     <p className="repo-value1">{user.created_at}</p>
     </div>
  </div>
</div>}
</>
}