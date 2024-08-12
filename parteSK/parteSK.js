document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const placeOfService = params.get('placeOfService');
    const language = params.get('language');
    const religion = params.get('religion');
    const gender = params.get('gender');
    const mass = params.get('mass');
    const firstName = params.get('firstName');
    const lastName = params.get('lastName');
    const birthName = params.get('birthName');
    const age = params.get('age');
    const deathDate = params.get('deathDate');
    const funeralDate = params.get('funeralDate');
    const funeralTime = params.get('funeralTime');
    const locationOfFuneral = params.get('locationOfFuneral');
    const imageUrl = params.get('imageUrl');

    //document.getElementById('firstNameId').textContent = `${language === 'sk' ? 'Krstné meno' : 'First Name'}: ${firstName}`;

    

    document.getElementById('deathDateId').innerHTML = deathDate;
    document.getElementById('ageId').innerHTML = age;


    // opustil vs. opustila
    if (gender === 'man') {
        document.getElementById('genderId').innerHTML = 'opustil';
        //document.getElementById('ourDearDepartedId').innerHTML = 'naším drahým zosnulým';

    } else {
        document.getElementById('genderId').innerHTML = 'opustila';
        //document.getElementById('ourDearDepartedId').innerHTML = 'našou drahou zosnulou';
    }


    var firstNameElement = document.getElementById('firstNameId');
    if (firstNameElement) {
        firstNameElement.innerHTML = firstName;
    }

    document.getElementById('lastNameId').innerHTML = lastName;

    //ez mi????
    // var birthNameVar = document.getElementById('birtNameId');
    // if (birthNameVar) {
    //     birthNameVar.innerHTML = birthName;
    // }


    if (gender === 'woman' && birthName !== '') {
        document.getElementById('birthNameId').innerHTML = 'rod. ' + birthName;
    } else {
        document.getElementById('birthNameId').innerHTML = '';
    }

    var ourDearDepartedElement = document.getElementById('ourDearDepartedId');
    if (ourDearDepartedElement) {
        if (gender === 'woman') {
            ourDearDepartedElement.innerHTML = 'našou drahou zosnulou';
        } else {
            ourDearDepartedElement.innerHTML = 'naším drahým zosnulým';
        }
    }

     

    document.getElementById('funeralDateId').innerHTML = funeralDate;
    document.getElementById('funeralTimeId').innerHTML = funeralTime;
    document.getElementById('locationOfFuneralId').innerHTML = locationOfFuneral;


   

    if (mass === 'yes') {
        document.getElementById('massId').innerHTML = ' so svätou omšou';
    } else {
        document.getElementById('massId').innerHTML = '';
    }

    if (placeOfService === 'tvrdosovce') {
        document.getElementById('placeOfServiceId').innerHTML = 'Bratislavská cesta 9, Tvrdošovce';
    } else {
        document.getElementById('placeOfServiceId').innerHTML = 'Kráľovská 11, 927 01 Šaľa';
    }

    if (imageUrl) {
        const userImage = document.getElementById('userImage');
        userImage.src = imageUrl;
        userImage.style.display = 'block';
    }

    document.getElementById('generatePdf').addEventListener('click', function () {
        const element = document.getElementById('parteSkMuzKrizom1Content');
        const opt = {
            margin: 0.5,
            filename: 'parteSK.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    });
});