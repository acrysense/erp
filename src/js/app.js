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
        modalMaterialBtn = document.querySelectorAll('.modal-material-btn'),
        modal = document.querySelectorAll('.modal'),
        modalMaterial = document.querySelector('.modal-material'),
        modalOverlay = document.querySelector('.modal-overlay'),
        modalMaterialClose = document.querySelector('.modal-material__close')
    
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

    if (modalMaterialBtn) {
        modalMaterialBtn.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();

                if (!modalOverlay.classList.contains('modal-overlay--active')) {
                    modalOverlay.classList.add('modal-overlay--active')
                }
                document.body.classList.add('scroll-disabled');
                modalMaterial.classList.add('modal-material--active');
            })
        })
    }

    document.body.addEventListener('keyup', (event) => {
        let key = event.keyCode;

        if (modal || modalMaterial && modalOverlay.classList.contains('modal-overlay--active')) {
            if (key == 27) {
                document.body.classList.remove('scroll-disabled');
                document.querySelectorAll('.modal.modal--active').forEach((child) => child.classList.remove('modal--active'));
                if (modalMaterial && modalMaterial.classList.contains('modal-material--active')) {
                    modalMaterial.classList.remove('modal-material--active');
                }
                modalOverlay.classList.remove('modal-overlay--active');
            };
        }
    }, false);


    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            if (modal || modalMaterial && modalOverlay.classList.contains('modal-overlay--active')) {
                document.body.classList.remove('scroll-disabled');
                document.querySelectorAll('.modal.modal--active').forEach((child) => child.classList.remove('modal--active'));
                if (modalMaterial && modalMaterial.classList.contains('modal-material--active')) {
                    modalMaterial.classList.remove('modal-material--active');
                }
                modalOverlay.classList.remove('modal-overlay--active');
            }
        });
    }

    if (modalMaterialClose) {
        modalMaterialClose.addEventListener('click', () => {
            if (modalMaterial && modalOverlay.classList.contains('modal-overlay--active')) {
                document.body.classList.remove('scroll-disabled');
                modalMaterial.classList.remove('modal-material--active');
                modalOverlay.classList.remove('modal-overlay--active');
            }
        })
    }

    // HEIGHT 100VH FIX FOR IOS
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    // MODAL MATERIAL MOBILE
    const modalMaterialTrigger = document.querySelectorAll('.modal-material__title')

    if (modalMaterialTrigger) {
        modalMaterialTrigger.forEach((item) => {
            item.addEventListener('click', () => {
                item.parentNode.classList.toggle('modal-material__column--hidden')
            })
        })
    }
});