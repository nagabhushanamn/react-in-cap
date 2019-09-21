console.log("-index-js-");


//------------------------------------------
// using DOM API + react.js
//------------------------------------------

let asiaKolkataEle2 = document.getElementById('asia-kolkata-v2');
let asiaDubaiEle12 = document.getElementById('asia-dubai-v2');
let americaNewyorkEle2 = document.getElementById('america-newyork-v2');

//--------------------------------------------------------------
// component class
//--------------------------------------------------------------

/*
    <div class="card">
        <div class="card-header">timeZone</div>
        <div class="card-body">
            <span class="badge badge-dark">time</span>
        </div>
    </div>
*/



function NewClock(props) {
    // let timeZone = props.timeZone;
    // or
    let { timeZone } = props; // de-structuing
    // let div1 = React.createElement('div', { className: 'card-header' }, timeZone);
    // let span = React.createElement('span', { className: 'badge badge-dark' }, new Date().toLocaleTimeString('en-US', { timeZone: timeZone }));
    // let div2 = React.createElement('div', { className: 'card-body' }, span);
    // let div = React.createElement('div', { className: 'card' }, div1, div2);
    // return div;
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge badge-dark">{new Date().toLocaleTimeString('en-US', { timeZone: timeZone })}</span>
            </div>
        </div>
    )
}


setInterval(() => {
    // ReactDOM.render(NewClock({ timeZone: 'Asia/Kolkata' }), asiaKolkataEle2)
    // ReactDOM.render(NewClock({ timeZone: 'Asia/Dubai' }), asiaDubaiEle12)
    // ReactDOM.render(NewClock({ timeZone: 'America/New_york' }), americaNewyorkEle2)
    // or
    ReactDOM.render(<NewClock timeZone="Asia/Kolkata" />, asiaKolkataEle2)
    ReactDOM.render(<NewClock timeZone="Asia/Dubai" />, asiaDubaiEle12)
    ReactDOM.render(<NewClock timeZone="America/New_york" />, americaNewyorkEle2)
}, 1000)