function noDuplicate(arr) {
    console.log('arr: ', arr);
    let uniqueSelectedVisas = [];
    let onlyTouristVisas = [];
    let onlyOfficeVisas = [];
    let onlyStudentVisas = [];

    for (const singleVisaObject of arr) {
        console.log('singleVisaObject: ', singleVisaObject);

        // const keys = Object.keys(singleVisaObject);
        // const keys = singleArr.keys();
        // const values = Object.values(singleVisaObject);
        // const values = singleArr.values();

        // console.log('keys: ', keys, 'values: ', values);
        for (const key in singleVisaObject) {
            if (key === 'selectedVisa') {
                console.log( key, 'selectedVisaValue: ', singleVisaObject[key]);
                if(uniqueSelectedVisas.includes(singleVisaObject[key]) === false) {
                    uniqueSelectedVisas.push(singleVisaObject[key]);
                    // console.log('uniqueSelectedVisa: ', uniqueSelectedVisas);
                }
            }
            // for(const values in keys[values] ) {
            // }
            if (singleVisaObject[key] === 'tourist visa') {
                onlyTouristVisas.push(singleVisaObject)
                // console.log('onlyTouristVisas: ', onlyTouristVisas);
            }
            if (singleVisaObject[key] === 'office visa') {
                onlyOfficeVisas.push(singleVisaObject);
                // console.log('onlyOfficeVisas: ', onlyOfficeVisas);
            }
            if (singleVisaObject[key] === 'student visa') {
                onlyStudentVisas.push(singleVisaObject);
                // console.log('onlyStudentVisas: ', onlyStudentVisas);
            }

        }
    }
    console.log('uniqueSelectedVisas: ', uniqueSelectedVisas, 'onlyTouristVisas: ', onlyTouristVisas, 'onlyOfficeVisas: ', onlyOfficeVisas, 'onlyStudentVisas: ', onlyStudentVisas);
    return {uniqueSelectedVisas, onlyTouristVisas, onlyOfficeVisas, onlyStudentVisas};
}

export default noDuplicate;