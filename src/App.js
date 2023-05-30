import  {useState,useEffect} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.components';


import './App.css';

   

const App = () => {
 
  const [searchField ,setSearchField] =useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters]= useState(monsters);


   
  useEffect(()=>{
   const newfilteredMonsters =monsters.filter((monster)=>{              // filtering monsters from the search field
      return monster.name.toLocaleLowerCase().includes(searchField);   //utilises Searchfield  that 
           });  

     setFilteredMonsters(newfilteredMonsters);      
  },[monsters,searchField]);




  useEffect(()=>{
    console.log('event fired');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>setMonsters(users));
    
  },[]);

  
  const onSearchChange = (event) => {
  const searchFieldString =event.target.value.toLocaleLowerCase();
          setSearchField(searchFieldString);
        };

       

      return(
          <div className='App'>
             <h1 className="app-title"> Monsters Rolodex</h1>
      
            <SearchBox
                className='monsters-search-box'
                onChangeHandler = {onSearchChange}
                placeholder='search monsters'     
             />
          <CardList monsters={filteredMonsters}  /> 
        </div>
        )
}


// class App extends Component {
//   constructor(){
//     super();
    
//     this.state ={
//       monsters:[],
//       searchField:''
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>response.json())
//     .then((users)=>
//     this.setState( () => {
//         return { monsters:users};
//       }
//     )
//     );
//   }
  
//   onSearchChange  =  (event)=>{
//     const searchField =event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//        return { searchField };
//     })
//   }
   
  
// render(){
//    console.log('render from AppJS')
//   const { monsters , searchField } = this.state;
//   const {onSearchChange} =this;

//   const filteredMonsters =this.state.monsters.filter((monster)=>{              // filtering monsters from the search field
//     return monster.name.toLocaleLowerCase().includes(this.state.searchField);   //utilises Searchfield  that 
//  }); 

//   return(
//     <div className='App'>
//       <h1 className="app-title"> Monsters Rolodex</h1>

//      <SearchBox
//      className='monsters-search-box'
//       onChangeHandler = {onSearchChange}
//       placeholder='search monsters'     
//      />
//       <CardList monsters={filteredMonsters}  />
//     </div>
//   )
// }
// }

export default App;
