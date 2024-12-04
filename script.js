const followBtn = document.getElementById('follow-btn');
followBtn.addEventListener('click', function(){
    if (followBtn.innerText === 'seguir'){
    followBtn.innerText = 'Siguiendo';
} else{
    followBtn.innerText = 'seguir';
}
});