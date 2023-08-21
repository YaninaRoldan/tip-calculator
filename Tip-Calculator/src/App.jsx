
import './App.sass'

function App() {
  return (
    <>
      <body>
        <div className='content'>
          <div className='splitter'>
            <h1>SPLI<span />TTER</h1>
          </div>
          <div className='calculator'>
            <h4 className='bill'>Bill</h4>
            <input type="number" placeholder='$0' />
            <h4>Select Tip%</h4>
            <div className='btns'>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <button className='custom'>Custom</button>
            </div>
            <h4>Number of People</h4>
            <input type='number' placeholder='#0' />
            <div className='result-container'>
              <div className='result'>
                <h5>Tip Amount</h5>
                <p>/person</p>
                <h5>Total</h5>
                <p>/person</p>
                <button>RESET</button>
              </div>
            </div>
          </div>
        </div>
      </body >
    </>
  )
}

export default App
