function capitalizeLetter (word) {
    return word.slice(0,1).toUpperCase() + word.slice(1)
}


const allCustomersDiv = document.querySelector('#allCustomers')


for (let customer of customers) {
    let custDiv = document.createElement('div')
    custDiv.classList.add("person")
    let imageEl = document.createElement('img')
    imageEl.src = customer.picture.large
    let nameEl = document.createElement('h4')
    nameEl.innerText = `${capitalizeLetter(customer.name.first)} ${capitalizeLetter(customer.name.last)}`
    let custEmail = document.createElement('p')
    custEmail.classList.add("email")
    custEmail.innerText = `${customer.email}`
    let custAddress = document.createElement('p')
    custAddress.innerText = `${customer.location.street.number} ${customer.location.street.name}
     ${customer.location.city},  ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`
    let custDOB = document.createElement('p')
    custDOB.innerText = `DOB: ${moment(customer.dob.date).format("MMM Do, YYYY")}`
     let regDate = document.createElement('p')
    regDate.innerText = `Customer since: ${moment(customer.registered.date).format("MMM Do, YYYY")}`

    allCustomersDiv.appendChild(custDiv)
    custDiv.appendChild(imageEl)
    custDiv.appendChild(nameEl)
    custDiv.appendChild(custEmail)
    custDiv.appendChild(custAddress)
    custDiv.appendChild(custDOB)
    custDiv.appendChild(regDate)
    
}


    // let email =customer.email;
    // console.log (email)

    // let address =  customer.location.street.number + " " + customer.location.street.name + ", " + customer.location.state + " " + customer.location.postcode
    // console.log(address)

    // let DOB = customer.dob.date
    // console.log(DOB)
