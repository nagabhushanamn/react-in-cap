console.log("-index-js-");


//------------------------------------------
// using DOM API + plain-javascript
//------------------------------------------



let asiaKolkataEle1 = document.getElementById('asia-kolkata');
let asiaDubaiEle1 = document.getElementById('asia-dubai');
let americaNewyorkEle1 = document.getElementById('america-newyork');

//--------------------------------------------------------------
// component class
//--------------------------------------------------------------
function Clock(props) {
    let timeZone = props.timeZone
    return `
        <div class="card">
            <div class="card-header">${timeZone}</div>
            <div class="card-body">
                <span class="badge badge-dark">${new Date().toLocaleTimeString('en-US', { timeZone: timeZone })}</span>
            </div>
        </div>
    `
}

setInterval(() => {
    asiaKolkataEle1.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
    asiaDubaiEle1.innerHTML = Clock({ timeZone: 'Asia/Dubai' })
    americaNewyorkEle1.innerHTML = Clock({ timeZone: 'America/New_york' })
}, 1000)