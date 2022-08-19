// objects 

var carObject = {
    vehicle: 'Car',
    imageUrl:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 3,
    capacity: 4,
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nesciunt saepe ipsa, inventore animi aperiam iusto nobis enim illo quas nihil autem et, omnis perferendis quisquam, iure ratione quaerat? Voluptate totam beatae error officia ipsam velit ducimus at sint enim.'
};

var bikeObject = {
    vehicle: 'Bike',
    imageUrl:
        'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 3,
    capacity: 4,
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nesciunt saepe ipsa, inventore animi aperiam iusto nobis enim illo quas nihil autem et, omnis perferendis quisquam, iure ratione quaerat? Voluptate totam beatae error officia ipsam velit ducimus at sint enim.'
};

var busObject = {
    vehicle: 'Bus',
    imageUrl:
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 22,
    capacity: 30,
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nesciunt saepe ipsa, inventore animi aperiam iusto nobis enim illo quas nihil autem et, omnis perferendis quisquam, iure ratione quaerat? Voluptate totam beatae error officia ipsam velit ducimus at sint enim.'
};
var helicopterObject = {
    vehicle: 'Copter',
    imageUrl:
        'https://images.unsplash.com/photo-1563561686990-f0ef5b3e0b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVsaWNvcHRlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 50,
    capacity: 5,
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nesciunt saepe ipsa, inventore animi aperiam iusto nobis enim illo quas nihil autem et, omnis perferendis quisquam, iure ratione quaerat? Voluptate totam beatae error officia ipsam velit ducimus at sint enim.'
};


// array 

const serviceArray = [carObject, bikeObject, busObject, helicopterObject]


// cards 


function displayServices(service) {
    const mainSection = document.getElementById('main-section')
    const stringified = JSON.stringify(service)
    const div = document.createElement('div')

    div.innerHTML =
    `
        <div class="card mt-3 mx-auto" style="max-width: 800px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src= ${service.imageUrl} class="img-fluid rounded-start h-100 w-100" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Transport Mood: ${service.vehicle}</h5>
                  <p class="card-text">${service.description}</p>
                  <p class="card-text"><small class="text-muted me-5">Fare per kilo: ${service.farePerKilo}</small><small class="text-muted">Capacity: ${service.capacity}</small></p>

                  <!-- Button trigger modal -->
                <button onclick='handleBooking(${stringified})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Book Now
                </button>

                </div>
              </div>
            </div>
        </div>
    `
    mainSection.appendChild(div);
}


// display array on cards 


function displayAllArticles(arr){

    // for (let i = 0; i < arr.length; i++){
        // const element = arr[i];
    //     displayServices(element);
    // }


let i = 0;
while (i < arr.length){
    const element = arr[i];
    displayServices(element)
    i++;
}
}
displayAllArticles(serviceArray);

//handle booking info

function handleBooking(obj){
    const modalBody = document.getElementById('modal-body');

    const stringified = JSON.stringify(obj);

    modalBody.innerHTML = 
    `
        <div class="card mx-auto" style="width: 18rem;">
        <img src= ${obj.imageUrl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Vehicle Mood: ${obj.vehicle}</h5>
          <p class="card-text">${obj.description}</p>
          <p class="card-text"><small class="text-muted me-5">Fare per kilo: ${obj.farePerKilo}</small><small class="text-muted">Capacity: ${obj.capacity}</small></p>

            <div class="d-flex flex-column" role="search">
            <p>Fare: <small id="fare" class="text-muted"></small></p>
            <p>Tax: <small id="tax" class="text-muted"></small></p>
            <p>Total Cost: <small id="total" class="text-muted"></small></p>

            <input class="form-control mb-2" id="distance-input" type="number" placeholder="Koto Kilo jaiba" aria-label="Search">
            <input class="form-control mb-2" id="quantity-input" type="number" placeholder="Koita Bus Lagbo" aria-label="Search">
            <button class="btn btn-outline-primary" type="submit" onclick='calculateCost(${stringified})'>Submit</button>
            </div>
        </div>
        </div>
    `
}

// calculate total cost 


function calculateCost (obj){
    const quantity = document.getElementById('quantity-input').value ;
    const distance = document.getElementById('distance-input').value ;

    const fare = document.getElementById('fare');
    fare.innerText = quantity * distance * obj.farePerKilo;
    const fareTotal = parseInt(fare.innerText);

    const tax = document.getElementById('tax');
    tax.innerText = (fare.innerText * .05).toFixed(2);
    const taxTotal = parseFloat(tax.innerText);

    const total = document.getElementById('total');
    total.innerText = fareTotal + taxTotal;

}

// search command 

document.getElementById('search-btn').addEventListener('click', function(){
    var value = document.getElementById('search-input').value;
    for (i = 0 ; i < serviceArray.length; i++){
    const element = serviceArray[i];
    if (value.toLowerCase() === element.vehicle.toLowerCase()){
        document.getElementById('main-section').innerHTML = '';
        displayServices(element);
        return
    }
}
alert('nothing found with your input');
})
