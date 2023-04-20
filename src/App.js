import Info from "./components/Info";
import './App.css';

let infoArray = [
            
        {name:'Mohan', role:'Software Developer', age:'23'},
        {name:'Ravi', role:'Fitter', age:'26'},
        {name:'Loki', role:'Vehicle Handler', age:'23'},
        {name:'Anil', role:'Software Developer', age:'24'},
        {name:'Lokesh', role:'Teacher', age:'25'}
]
function App() {
  return (
    <div>
      {
      // infoArray.map(({name, role, age}) =>

      //     <Info 
      //        name={name}
      //        role={role}
      //        age={age} />
      //     )

          infoArray.map((person) =>

          <Info 
             name={person.name}
             role={person.role}
             age={person.age} />
          )
        }
      </div>  
  );
}

export default App;
