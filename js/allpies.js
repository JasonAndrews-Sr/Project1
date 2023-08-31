window.onload = function(){
    loadAllPies();
   // loadNutritionInfo();
}

function loadAllPies() {
    let pieTable = document.getElementById('pieTableBody');

    fetch('.api/pies')
    .then(response => response.json())
    .then(data => {

        console.groupCollapsed('pie data'); //group table and directory logs
        console.dir(data);
        console.table(data);
        console.groupEnd( ); //ends group

        // assertion to make sure proper number of elements are returned to table
        console.assert(data.length === 18, {pieCount: data.length, reason: 'Wrong number of pies'}); // making a clain or assertion about what information should appear

        let string_data = JSON.stringify(data);

        let pieMarkup = '';

        data.forEach(element => {
            pieMarkup += `
        <tr>
            <td><img src=${element.imageURL} width="100"></td>
            <td>${element.name}</td>
            <td>${element.description}</td>
            <td>${element.price}</td>
            <td>View Details</td>
        </tr>
        `;
        });
        pieTable.innerHTML = pieMarkup;

        console.trace();
    });
}

function loadNutritionInfo(){
    console.info('Attempting to retrieve nutritional information from the server.');
    fetch('/api/nutrition')
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error('There was a problem reatrieving the nutritional information.'));

console.warn('Eating too much pie is not good for you!');
}