document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dataForm');
    const templates = document.getElementById('templates');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const religion = document.getElementById('religion').value;
        const language = document.getElementById('language').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const birthName = document.getElementById('birthName').value;
        const imageFile = document.getElementById('image').files[0];
        const facebookConsent = document.getElementById('facebookConsent').checked;

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result;
                const urlParams = new URLSearchParams({
                    religion, language, firstName, lastName, birthName, imageUrl, facebookConsent
                }).toString();
                setTemplateLinks(urlParams);
            };
            reader.readAsDataURL(imageFile);
        } else {
            const urlParams = new URLSearchParams({
                religion, language, firstName, lastName, birthName, facebookConsent
            }).toString();
            setTemplateLinks(urlParams);
        }
    });

    function setTemplateLinks(urlParams) {
        templates.style.display = 'block';
        document.getElementById('template1').href = `template1.html?${urlParams}`;
        document.getElementById('template2').href = `template2.html?${urlParams}`;
    }
});
