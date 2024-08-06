document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const firstName = params.get('firstName');
    const lastName = params.get('lastName');
    const birthName = params.get('birthName');
    const imageUrl = params.get('imageUrl');
    const religion = params.get('religion');
    const language = params.get('language');
    const facebookConsent = params.get('facebookConsent') === 'true';

    document.getElementById('name').textContent = `${language === 'sk' ? 'Meno' : 'Name'}: ${firstName} ${lastName}`;
    document.getElementById('birthName').textContent = `${language === 'sk' ? 'Rodné meno' : 'Birth Name'}: ${birthName}`;
    if (imageUrl) {
        const userImage = document.getElementById('userImage');
        userImage.src = imageUrl;
        userImage.style.display = 'block';
    }
    if (religion === 'christian') {
        document.getElementById('religionSymbol').style.display = 'block';
    }

    document.getElementById('generatePdf').addEventListener('click', function () {
        const element = document.getElementById('template2Content');
        html2pdf(element).then(() => {
            if (facebookConsent) {
                alert(`${language === 'sk' ? 'PDF bude nahrané na Facebook' : 'PDF will be uploaded to Facebook'}`);
            }
        });
    });
});
