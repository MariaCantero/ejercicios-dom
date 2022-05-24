const d = document;


export default function countdown(id, limitDate, finalMessage) {
    const $countdown =  d.getElementById(id),
        countdownDate = new Date(limitDate).getTime();
    
    let countdownTempo =  setInterval(() => {
        let now =  new Date().getTime(),
            limitTime =  countdownDate - now,
            seconds = 1000,
            minutes = seconds * 60,
            hours   = minutes * 60,
            days    = hours * 24; 
    
            d.getElementById("days").innerText = Math.floor(limitTime / (days)),
            d.getElementById("hours").innerText = Math.floor((limitTime % (days)) / (hours)),
            d.getElementById("minutes").innerText = Math.floor((limitTime % (hours)) / (minutes)),
            d.getElementById("seconds").innerText = Math.floor((limitTime % (minutes)) / seconds);

        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
    }, 1000);
}