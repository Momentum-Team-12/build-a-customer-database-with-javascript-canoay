
    // <h1>Customer Directory</h1>
    // <div class="container">
    //     <div class="customer">
    //         <img src="https://randomuser.me/api/portraits/med/women/62.jpg" alt="Sophia Burns">
    //         <h2>Sophia Burns</h2>
    //         <div>info
    //         <div>Email</div>
    //         <div>Address</div>
    //         <div>DOB</div>
    //         <div>Customer Since</div>
    //     </div>
    // </div>
    // </div>

let customerDiv = document.querySelector('.customer')
console.log(customerDiv)

for (let customer of customers) {
    let name = customer.name.first + " " + customer.name.last;
    console.log(name)

    let email =customer.email;
    console.log (email)

    let address =  customer.location.street.number + " " + customer.location.street.name + ", " + customer.location.state + " " + customer.location.postcode
    console.log(address)

    let DOB = customer.dob.date
    console.log(DOB)
}