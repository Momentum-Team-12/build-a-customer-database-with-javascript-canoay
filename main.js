console.log(customers)
 
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

// asking the js to build one of these for each customer

const allCustomersDiv = document.querySelector('#allCustomers')

for (let customer of customers) {
    console.log(`${customer.name.first} ${customer.name.last}`)
    let custDiv = document.createElement('div')
    custDiv.classList.add("person")
    // let pic = document.createElement('img')
    // pic.innerText = customer.picture.medium
    let nameEl = document.createElement('h3')
    nameEl.innerText = `${customer.name.first} ${customer.name.last}`
    let custEmail = document.createElement('p')
    // custEmail.classList.add("emailFromCustomer")
    custEmail.innerText = `${customer.email}`
    let custAddress = document.createElement('p')
    custAddress.innerText = `${customer.location.street.number} ${customer.location.street.name}, ${customer.location.city} ${customer.location.state} ${customer.location.postcode}`
    let custDOB = document.createElement('p')
    custDOB.innerText = `${customer.dob.date}`
    // custDiv.appendChild(pic)
    allCustomersDiv.appendChild(custDiv)
    custDiv.appendChild(nameEl)
    custDiv.appendChild(custEmail)
    custDiv.appendChild(custAddress)
     custDiv.appendChild(custDOB)
    
}


    // let email =customer.email;
    // console.log (email)

    // let address =  customer.location.street.number + " " + customer.location.street.name + ", " + customer.location.state + " " + customer.location.postcode
    // console.log(address)

    // let DOB = customer.dob.date
    // console.log(DOB)
