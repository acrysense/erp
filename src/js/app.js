document.addEventListener("DOMContentLoaded", function () {
    // INPUTMASK
    Inputmask().mask(document.querySelectorAll('input'))

    // SELECT
    document.querySelectorAll('.select').forEach(select => {
        select.addEventListener('change', function(evt) {
            select.classList.toggle('is-selected', !!evt.target.value)
        })
    })
});