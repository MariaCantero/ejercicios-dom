const d =  document,
    w   =  window;

export default function scrollTop(btn) {
    const $scrollStep = d.querySelector(btn);

    w.addEventListener('scroll', (e) =>{
        let scrollBtn = w.pageXOffset || d.documentElement.scrollTop;

        if (scrollBtn > 600) {
            $scrollStep.classList.remove('hidden');
        } else{
            $scrollStep.classList.add('hidden');
        }
    })

    d.addEventListener('click', (e) =>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:'smooth',
                top:0,
                
            });
        }
    });
}
