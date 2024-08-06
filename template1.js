document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const firstName = params.get('firstName');
    const lastName = params.get('lastName');
    const birthName = params.get('birthName');
    const imageUrl = params.get('imageUrl');
    const religion = params.get('religion');
    const language = params.get('language');
    const facebookConsent = params.get('facebookConsent') === 'true';

    document.getElementById('firstName').textContent = `${language === 'sk' ? 'Krstné meno' : 'First Name'}: ${firstName}`;
    document.getElementById('lastName').textContent = `${language === 'sk' ? 'Priezvisko' : 'Last Name'}: ${lastName}`;
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
        const element = document.getElementById('template1Content');
        const opt = {
            margin:       0.5,
            filename:     'template1.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save().then(() => {
            if (facebookConsent) {
                alert(`${language === 'sk' ? 'PDF bude nahrané na Facebook' : 'PDF will be uploaded to Facebook'}`);
            }
        });
    });
});
