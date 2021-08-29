import {useState, useRef} from "react"

export default function TipInput(){ 

 const [percentage, setPercentage] = useState(0);
const [bill, setBill] = useState(0);
const [numberOfPeople, setNumberOfPeople] = useState(1);

const billRef=useRef();
const numberOfPeopleRef=useRef();
const fivePercentageRef=useRef();
const tenPercentageRef=useRef();
const fifTeenPercentageRef=useRef();
const twentyFivePercentageRef=useRef();
const fiftyPercentageRef=useRef();
const customPercentageRef=useRef();


const HandleCheck = (e) => {
    setPercentage(e.target.value);
}

const HandleBill = (e) => {
   setBill(parseInt(e.target.value));
}

const HandlePeople  =(e) => {
    setNumberOfPeople(parseInt(e.target.value));
}

const HandleReset = () => {
    billRef.current.value = "";
    numberOfPeopleRef.current.value = "";
    fivePercentageRef.current.checked = false;
    tenPercentageRef.current.checked = false;
    fifTeenPercentageRef.current.checked= false;
    twentyFivePercentageRef.current.checked= false;
    fiftyPercentageRef.current.checked = false;
    customPercentageRef.current.value = null;
    setPercentage(0);
    setBill(0);
    setNumberOfPeople(1);
}

const totalTip = (bill * percentage)/ 100;
const tip = totalTip/numberOfPeople;


return <>


<div id="principal" className="row">
<div id="tip-input" className="col-12 col-md-6 card">
<div className="card-body my-3">


<h2 className="fs-5">Bill</h2>

<form>
<input 
placeholder="0" 
className="form-control" 
ref={billRef} 
name="bill" 
onChange={HandleBill} 
type="number" />
</form>

<div className="row my-3">
<h2 className="fs-5">Select Tip %</h2>
<div className="col-6 col-md-4">
<input className="btn-check" ref={fivePercentageRef} onChange={HandleCheck} type="radio" id="5%" name="porcentaje" value="5"/>
    <label className="btn-lg w-100 px-4 btn btn-secondary m-2" htmlFor="5%">5%</label>
</div>
<div className="col-6 col-md-4">
<input className="btn-check" ref={tenPercentageRef} onChange={HandleCheck} type="radio" id="10%" name="porcentaje" value="10"/>
    <label className="btn-lg w-100 px-4 btn btn-secondary m-2" htmlFor="10%">10%</label>
</div>
<div className="col-6 col-md-4">
<input className="btn-check" ref={fifTeenPercentageRef} onChange={HandleCheck} type="radio" id="15%" name="porcentaje" value="15"/>
    <label className="btn-lg w-100 px-4 btn btn-secondary m-2" htmlFor="15%">15%</label>
</div>
<div className="col-6 col-md-4">
<input className="btn-check" ref={twentyFivePercentageRef} onChange={HandleCheck} type="radio" id="25%" name="porcentaje" value="25"/>
    <label className="btn-lg w-100 px-4 btn btn-secondary m-2" htmlFor="25%">25%</label>
</div>
<div className="col-6 col-md-4">
<input className="btn-check" ref={fiftyPercentageRef} onChange={HandleCheck} type="radio" id="50%" name="porcentaje" value="50"/>
    <label className="btn-lg w-100 px-4 btn btn-secondary m-2" htmlFor="50%">50%</label>
</div>
<div className="col-6 col-md-4">
<input className="form-control-lg p-2 fs-4 fw-bold form-control m-2" ref={customPercentageRef}  onChange={HandleCheck} type="number" placeholder="Custom"/>
</div>
</div>

<h2 className="fs-5">Number of People</h2>
<input placeholder="1" className="form-control" ref={numberOfPeopleRef} type="number" name="numberOfPeople" onChange={HandlePeople}/>
</div>
</div>


<div id="show-tip" className="col-12 col-md-6 d-flex align-items-stretch">
<div id="show-body" className="card bg-secondary mx-3 my-4 w-100">
<div className="card-body p-4">
<div className="d-flex mt-3">
<div className="me-auto">
<h3 className="text-success fs-5">Tip Amount</h3>
<span className="text-info">/ person</span>
</div>
<div className="text-primary fw-bold fs-1">
 ${tip}
</div>
</div>

<div className="my-5 d-flex">
<div className="me-auto">
<h3 className="text-success fs-5">Total</h3>
<span className="text-info">/ person</span>
</div>
<div className="fs-1 fw-bold text-primary">
${totalTip}
</div>
</div>


<div className="mt-5 d-grid gap-2 px-2">
<button className=" btn btn-primary" onClick={HandleReset}>Reset</button>
</div>


</div>
</div>
</div>
</div>

</> }