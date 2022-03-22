import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterArrow from './components/CounterArrow';
import CounterHook from './components/CounterHook';
import ParentName from './parentChild/ParentName';
import ParentComponent from './parentChild/ParentComponent';
import EmployeeList from './List/EmployeeList';
import ChartItem from './List/ChartItem';
function App() {
  return (
    <>
      {/* <Counter/> 
      <CounterArrow/>
      <CounterHook/> 
      <ParentName/> 
      <ParentComponent/> 
      <ChartItem/> */}
      <EmployeeList/> 
      
    </>
  );
}

export default App;
