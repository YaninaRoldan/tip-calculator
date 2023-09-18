
import './App.sass'

function App() {
  return (
    <>
      <body>
        <div className='wrapper'>
          <div className='splitter'>
            <h1>SPLI<span />TTER</h1>
          </div>
          <div className='calculator-container'>
            <div className="calculator">
              <div className="bill-container">
                <h4 className='bill'>Bill</h4>
                <input type="number" placeholder='$0' />
                <h4 className='select'>Select Tip%</h4>
              </div>
              <div className='btns'>
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>25%</button>
                <button>50%</button>
                <input className='custom' type='number' placeholder='Custom' />
              </div>
              <h4 className='number'>Number of People</h4>
              <div className="input-with-icon">
                <input className='input-icon' type='number' placeholder='#0' />
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z" /></svg>
              </div>
            </div>
            <div className='total-container'>
              <div className='total'>
                <h5 className='tip'>Tip Amount</h5>
                <p>/person</p>
                <div className="tip-total-container">
                  <div className="tip-total">$0.00</div>
                </div>
                <h5 className='tot'>Total</h5>
                <p>/person</p>
                <div className="tot-container">
                  <div className="tot-2">$0.00</div>
                </div>
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
