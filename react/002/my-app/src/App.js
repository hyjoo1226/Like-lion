import './App.css';

function Licat(props) {
  return(
    <div>
      <h1>안녕, {props.name} 1호! {props.age}</h1>
      <h1>안녕, 라이캣 2호!</h1>
    </div>
  )
}

function Time(props) {
  return(
    <div>
      <h1>시간</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Licat name="gary" age="10" />
      <Time />
    </div>
  );
}

export default App;