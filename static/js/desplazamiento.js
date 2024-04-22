document.addEventListener("DOMContentLoaded", function () {
    const forms = ['first_form', 'second_form', 'three_form'];
    let currentForm = 0;

    document.querySelectorAll('.second_link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showForm(currentForm + 1);
        });
    });

    document.querySelectorAll('.first_link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showForm(currentForm - 1);
        });
    });

    document.querySelectorAll('.three_link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showForm(currentForm + 1);
        });
    });

    document.querySelectorAll('.four_link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showForm(currentForm - 1);
        });
    });

    function showForm(index) {
        // Oculta el formulario actual
        document.getElementById(forms[currentForm]).style.display = 'none';

        // Calcula el nuevo índice del formulario
        currentForm = (index + forms.length) % forms.length;

        // Muestra el nuevo formulario
        document.getElementById(forms[currentForm]).style.display = 'block';
    }
});