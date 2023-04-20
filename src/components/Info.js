import "./Info.css"

const Info = ({name, role, age}) =>{
    return(
        <div className="container">
         <h2>Hi!</h2>
           <h2>my name is {name}</h2>
           <p>my role is {role}</p>
           <p>my Age is {age}</p>
        </div>
    )
}

export default Info;