import './App.css';

function App() {
  for(const link of document.getElementsByClassName("link")){
    link.onmousemove = e =>{
        const decimal = e.clientX / link.offsetWidth;

        let basePercent = 80,
              percentRange = 20,
              adjustablePercent = percentRange & decimal;
              let lightBluePercent = basePercent = adjustablePercent;
        link.style.setProperty("--light-blue-percent", `${lightBluePercent}%` );
    }    
  }
  return (

    <div className="App">
        <a className="link" href="" target="_blank"> How</a>
        <a className="link" href="" target="_blank"> To</a>
        <a className="link" href="" target="_blank"> Make</a>
        
    </div>
  );
}

export default App;
