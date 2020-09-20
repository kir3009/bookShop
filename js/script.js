document.addEventListener('DOMContentLoaded', function() {
    const modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('#overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close'),
        scroll=document.querySelector('#scroll');

    //Scroll
    scroll.addEventListener('click',function(e) {
        e.preventDefault();
        console.log(document.querySelector('#scrollTo').value);
        document.querySelector('#scrollTo').scrollIntoView({behavior: "smooth"});
    });

    //OpenModal
    modalButtons.forEach(function(item){

        item.addEventListener('click', function(e) {

            e.preventDefault();
            const modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click
    }); // end foreach

    //CloseModal
    closeButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    }); // end foreach
});