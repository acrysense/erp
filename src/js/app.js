document.addEventListener("DOMContentLoaded", function () {
    // INPUTMASK
    Inputmask().mask(document.querySelectorAll('input'))

    // SELECT
    document.querySelectorAll('.select').forEach(select => {
        select.addEventListener('change', function(evt) {
            select.classList.toggle('is-selected', !!evt.target.value)
        })
    })

    // MODAL
    const modalBtn = document.querySelectorAll('.modal-btn'),
        modal = document.querySelectorAll('.modal'),
        modalOverlay = document.querySelector('.modal-overlay')
    
    if (modalBtn) {
        modalBtn.forEach((item, i) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();

                if (!modalOverlay.classList.contains('modal-overlay--active')) {
                    modalOverlay.classList.add('modal-overlay--active')
                }
                document.body.classList.add('scroll-disabled');
                modal[i].classList.add('modal--active');
            });
        });
    }

    document.body.addEventListener('keyup', (event) => {
        let key = event.keyCode;

        if (modal && modalOverlay.classList.contains('modal-overlay--active')) {
            if (key == 27) {
                document.body.classList.remove('scroll-disabled');
                document.querySelectorAll('.modal.modal--active').forEach((child) => child.classList.remove('modal--active'));
                document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
            };
        }
    }, false);


    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            if (modal && modalOverlay.classList.contains('modal-overlay--active')) {
                document.body.classList.remove('scroll-disabled');
                document.querySelectorAll('.modal.modal--active').forEach((child) => child.classList.remove('modal--active'));
                document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
            }
        });
    }
});