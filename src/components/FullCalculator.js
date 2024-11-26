function FullCalculator() {
  return (
    <>
      {/* <!-- Calculator Body --> */}
      <div className="calc-body">
        {/* <!-- Calculator Display Screen --> */}
        <div className="calc-screen">
          <div id="calc-operation"></div>
          <div id="calc-typed">0</div>
        </div>

        {/* <!-- Calculator Buttons --> */}
        <div className="calc-button-row">
          <button onClick={() => console.log("click")} className="ac">
            AC
          </button>
          <button className="opt">&#43;&#47;&#8722;</button>
          <button className="opt">&#37;</button>
          <button className="opt">&#247;</button>
          <button onClick={() => console.log("click")}>7</button>
          <button onClick={() => console.log("click")}>8</button>
          <button onClick={() => console.log("click")}>9</button>
          <button className="opt">&#215;</button>
          <button onClick={() => console.log("click")}>4</button>
          <button onClick={() => console.log("click")}>5</button>
          <button onClick={() => console.log("click")}>6</button>
          <button className="opt">&#8722;</button>
          <button onClick={() => console.log("click")}>1</button>
          <button onClick={() => console.log("click")}>2</button>
          <button onClick={() => console.log("click")}>3</button>
          <button onClick={() => console.log("click")} className="opt">
            +
          </button>
          <button onClick={() => console.log("click")}>0</button>
          <button onClick={() => console.log("click")}>.</button>
          <button>&#9003;</button>
          <button onClick={() => console.log("click")} className="opt">
            =
          </button>
        </div>
      </div>
    </>
  )
}

export default FullCalculator
