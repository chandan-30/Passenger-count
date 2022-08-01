let inc = document.getElementById('inc'),
    dec = document.getElementById('dec'),
    ent = document.getElementById('result'),
    count = document.getElementById('count');

let cnt, 
    entries;

(function() {
    cnt  = parseInt(count.innerHTML);
 })();

inc.addEventListener('click',() => {
        cnt = cnt + 1;
    count.innerHTML = cnt.toString();
});

dec.addEventListener('click', () => {
    count.innerHTML = (0).toString();
    entries = cnt.toString();
    if(ent.innerHTML.length === 0){
        ent.innerHTML += ' '+entries; 
    }else{
        ent.innerHTML += '-'+entries; 
    }
    cnt = 0;
});
