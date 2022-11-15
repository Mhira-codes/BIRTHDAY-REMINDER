
import { useState } from 'react';
import './App.css';
import {dataLists} from './component/Data'
import List from './component/List';




function App() {

  const [birthdayLists, setBirthdayLists] = useState(dataLists)
  return (
    <div className="App bg-violet-200 w-full h-screen flex items-center justify-center ">
<section className='bg-zinc-100 w-[30%] min-h-[10vh] p-5 rounded-md flex justify-start items-start gap-8 flex-col'>
  <h2 className='font-medium text-xl '>{birthdayLists.length} birthdays today</h2>
<List birthdayLists={birthdayLists} />
<button onClick={()=>setBirthdayLists([])}
className="bg-violet-300 w-full p-3 font-medium text-xl"
> 
Clear All
</button>
</section>



    </div>
  );
}

export default App;
