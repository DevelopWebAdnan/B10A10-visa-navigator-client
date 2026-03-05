function noDuplicate(arr) {
    // console.log('arr: ', arr);
    let uniqueSelectedVisas = [];
    let onlyTouristVisas = [];
    let onlyOfficeVisas = [];
    let onlyStudentVisas = [];

    for (const singleVisaObject of arr) {
        for (const key in singleVisaObject) {
            if (key === 'selectedVisa') {
                if (uniqueSelectedVisas.includes(singleVisaObject[key]) === false) {
                    uniqueSelectedVisas.push(singleVisaObject[key]);
                }
            }
            if (singleVisaObject[key] === 'tourist visa') {
                onlyTouristVisas.push(singleVisaObject)
            }
            if (singleVisaObject[key] === 'office visa') {
                onlyOfficeVisas.push(singleVisaObject);
            }
            if (singleVisaObject[key] === 'student visa') {
                onlyStudentVisas.push(singleVisaObject);
            }

        }
    }
    // console.log('uniqueSelectedVisas: ', uniqueSelectedVisas, 'onlyTouristVisas: ', onlyTouristVisas, 'onlyOfficeVisas: ', onlyOfficeVisas, 'onlyStudentVisas: ', onlyStudentVisas);
    return { uniqueSelectedVisas, onlyTouristVisas, onlyOfficeVisas, onlyStudentVisas };
}

export default noDuplicate;