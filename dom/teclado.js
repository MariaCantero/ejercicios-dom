const d = document;
let x = 0, y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
        //console.log(e.keyCode);
        //console.log(e.key);
        //console.log(limitsBall, limitsStage);

        //const move = (direction) => {};

        switch (e.keyCode) {
            //izq
            case 37:
            //move('left'); 
            e.preventDefault();   
            if(limitsBall.left > limitsStage.left) x--;  
            break;
            //arriba
            case 38:  
            e.preventDefault();  
            if(limitsBall.top > limitsStage.top) y--;
            //move('up');
            break;
            //derecha
            case 39:    
            e.preventDefault();  
            if(limitsBall.right < limitsStage.right)x++;
            
            //move('right');
            break;
            //abajo
            case 40:  
            e.preventDefault(); 
            if(limitsBall.bottom < limitsStage.bottom) y++; 
            //move('down'); 
            break; 
        }
        $ball.style.transform = `translate(${x * 9 }px, ${y *  9}px)`;    
}

export function shortcuts (e) {
/* console.log(e);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);

*/
    if(e.key === 'a' && e.altKey){
        alert('Haz lanzado una alerta de teclado');
    }
    if(e.key === 'c' && e.altKey){
        confirm('Haz lanzado una confimación con el teclado');
    }
    if(e.key === 'p' && e.altKey){
        prompt('Haz lanzado un aviso con el teclado')
    }
}