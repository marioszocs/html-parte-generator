document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dataForm');
    const templates = document.getElementById('templates');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const placeOfService = document.getElementById('placeOfService').value;
        const language = document.getElementById('language').value;
        const religion = document.getElementById('religion').value;
        const gender = document.getElementById('gender').value;
        const mass = document.getElementById('mass').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const birthName = document.getElementById('birthName').value;
        const age = document.getElementById('age').value;
        const deathDate = document.getElementById('deathDate').value;
        const funeralDate = document.getElementById('funeralDate').value;
        const funeralTime = document.getElementById('funeralTime').value;
        const locationOfFuneral = document.getElementById('locationOfFuneral').value;
        const imageFile = document.getElementById('image').files[0];

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result;
                const urlParams = new URLSearchParams({
                    placeOfService, language, religion, gender, mass, firstName, lastName, birthName, age, deathDate, funeralDate, funeralTime,locationOfFuneral, imageUrl
                }).toString();
                setTemplateLinks(urlParams);
            };
            reader.readAsDataURL(imageFile);
        } else {
            const urlParams = new URLSearchParams({
                placeOfService, language, religion, gender, mass, firstName, lastName, birthName, age, deathDate, funeralDate, funeralTime,locationOfFuneral
            }).toString();
            setTemplateLinks(urlParams);
        }
    });

    function setTemplateLinks(urlParams) {
        templates.style.display = 'block';
        document.getElementById('parteSkMuzKrizom1').href = `parteSK/parteSK.html?${urlParams}`;
        //document.getElementById('parteHU').href = `parteHU/parteHU01.html?${urlParams}`;
    }
});
