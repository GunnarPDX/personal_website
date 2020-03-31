
window.onload=function(){

    document.getElementById('threshold').addEventListener('click', function(event) {
        event.preventDefault();
        modal('threshold-modal');
    });

    document.getElementById('sella').addEventListener('click', function(event) {
        event.preventDefault();
        modal('sella-modal');
    });

    document.getElementById('csm').addEventListener('click', function(event) {
        event.preventDefault();
        modal('csm-modal');
    });

    document.getElementById('covid').addEventListener('click', function(event) {
        event.preventDefault();
        modal('covid-modal');
    });

    document.getElementById('userfluent').addEventListener('click', function(event) {
        event.preventDefault();
        modal('userfluent-modal');
    });

    document.getElementById('h').addEventListener('click', function(event) {
        event.preventDefault();
        modal('h-modal');
    });

};

function modal(id){
    let modal = document.getElementById(id);  // assuming you have only 1
    let html = document.querySelector('html');
    let nav = document.querySelector('.nav');
    modal.classList.add('is-active');
    html.classList.add('is-clipped');
    nav.classList.add('clear');

    modal.querySelector('.modal-background').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
        nav.classList.remove('clear');
    });
}