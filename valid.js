const body = document.querySelector('body');
body.classList.add('body-validation')
const header = document.createElement('header');
body.appendChild(header);
const headerWrapper = document.createElement('div');
headerWrapper.classList.add('header__wrapper');
header.append(headerWrapper);
const logo = document.createElement('div');
logo.classList.add('logo');
    headerWrapper.append(logo);
    const logoImage = document.createElement('img');
    logoImage.classList.add('logo_image');
    logoImage.src =  "./logo.svg";
    document.querySelector(".logo").append(logoImage);
    const logoName = document.createElement('p');
    logoName.classList.add('logo-name');
    logoName.textContent = 'Stara Księgarnia';
    logo.append(logoName);
    logo.addEventListener('click', ()=> {
      window.location = './index.html';
  })
    const main = document.createElement('main');
    body.appendChild(main);

    const validationForm = document.createElement('section');
    validationForm.classList.add('validation-form');
    main.appendChild(validationForm);

    const validationFormWrapper = document.createElement('div');
    validationFormWrapper.classList.add('validation-form-wrapper');
    validationForm.appendChild(validationFormWrapper);
    const invalid = document.createElement('span');
    invalid.textContent = 'The field is invalid';
    invalid.classList.add('invalid-field');
    
  
    /* VALIDATION FORM */
    
    function createValidationForm(){

    const requiredFields = document.createElement('form');
    //requiredFields.onsubmit = showMessage();
    requiredFields.classList.add('required-fields');
    validationFormWrapper.append(requiredFields);

    const validationTitle = document.createElement('h1');
    validationTitle.classList.add('validation-title');
    validationTitle.textContent = 'Please enter your details to finish the order'
    requiredFields.append(validationTitle);


    const validDiv = document.createElement('div');
    validDiv.classList.add('valid-div');
    requiredFields.appendChild(validDiv);

    const invSpan = document.createElement('div');
    invSpan.classList.add('cont-input');
    validDiv.appendChild(invSpan);

    const validName = document.createElement('input');
    validName.classList.add('valid-form-item');
    validName.id = 'valid-name';
    validName.setAttribute('type', 'text');
    validName.setAttribute('required', 'required');
    validName.placeholder = 'First Name';
    validName.setAttribute("minlength","4");
    validName.setAttribute("pattern","[A-Za-zА-Яа-яЁё]+");
    invSpan.appendChild(validName);
    invSpan.appendChild(invalid)

    const invSpanS = document.createElement('div');
    invSpanS.classList.add('cont-input');
    validDiv.appendChild(invSpanS);
    

    const validSurname = document.createElement('input');
    validSurname.classList.add('valid-form-item');
    validSurname.id = 'valid-surname';
    validSurname.setAttribute('type', 'text');
    validSurname.setAttribute('required', 'required');
    validSurname.placeholder = 'Last Name';
    validSurname.setAttribute("minlength","5");
    validSurname.setAttribute("pattern","[A-Za-zА-Яа-яЁё]+");
    invSpanS.appendChild(validSurname);
    const invalids = document.createElement('span');
    invalids.textContent = 'The field is invalid';
    invalids.classList.add('invalid-field');
    invSpanS.appendChild(invalids);

   const datem = minDate();

    const validDate= document.createElement('input');
    validDate.classList.add('valid-form-item');
    validDate.id = 'valid-date';
    validDate.setAttribute('type', 'date');
    validDate.setAttribute('required', 'required');
    validDate.setAttribute('min', datem);
    validDate.setAttribute('value', datem);
    validDiv.appendChild(validDate);

    const invSpanSt = document.createElement('div');
    invSpanSt.classList.add('cont-input');
    validDiv.appendChild(invSpanSt);

    const validStreet = document.createElement('input');
    validStreet.classList.add('valid-form-item');
    validStreet.id = 'valid-street';
    validStreet.setAttribute('type', 'text');
    validStreet.setAttribute('required', 'required');
    validStreet.setAttribute("minlength","5");
    validStreet.placeholder = 'Street';
    invSpanSt.appendChild(validStreet);
    const invalidst = document.createElement('span');
    invalidst.textContent = 'The field is invalid';
    invalidst.classList.add('invalid-field');
    invSpanSt.appendChild(invalidst);

    const invSpanH = document.createElement('div');
    invSpanH.classList.add('cont-input');
    validDiv.appendChild(invSpanH);

    const validHouse= document.createElement('input');
    validHouse.classList.add('valid-form-item');
    validHouse.id = 'valid-house';
    validHouse.setAttribute('type', 'text');
    validHouse.setAttribute('required', 'required');
    validHouse.placeholder = 'House number';
    validHouse.setAttribute("pattern","[0-9]+");

    invSpanH.appendChild(validHouse);
    const invalidH = document.createElement('span');
    invalidH.textContent = 'The field is invalid';
    invalidH.classList.add('invalid-field');
    invSpanH.appendChild(invalidH);

    const invSpanF= document.createElement('div');
    invSpanF.classList.add('cont-input');
    validDiv.appendChild(invSpanF);
    const validFlat= document.createElement('input');
    validFlat.classList.add('valid-form-item');
    validFlat.id = 'valid-flat';
    validFlat.setAttribute('type', 'text');
    validFlat.setAttribute('required', 'required');
    validFlat.placeholder = 'Flat number';
    validFlat.setAttribute("pattern","^[1-9]+[0-9-]*$");

    invSpanF.appendChild(validFlat);
    const invalidf = document.createElement('span');
    invalidf.textContent = 'The field is invalid';
    invalidf.classList.add('invalid-field');
    invSpanF.appendChild(invalidf);


    const payment = document.createElement('div');
    payment.classList.add('payment');
    requiredFields.append(payment);

    const choiceOfPayment = document.createElement('p');
    choiceOfPayment.classList.add('payment-choice');
    choiceOfPayment.textContent = 'Choose a payment method: ';
    payment.appendChild(choiceOfPayment)

    const card = document.createElement('input');
    card.setAttribute('type', 'radio');
    card.setAttribute('name', 'payment');
    card.setAttribute('id', 'card');
    card.setAttribute('checked', 'checked');
    const labelPayment = document.createElement('label');
    labelPayment.setAttribute('for', "card")
    labelPayment.textContent = 'Card';
    
    payment.append(card);
    payment.append(labelPayment);


    const cash = document.createElement('input');
    cash.setAttribute('type', 'radio');
    cash.setAttribute('name', 'payment');
    cash.setAttribute('id', 'cash');
    const labelCash = document.createElement('label');
    labelCash.setAttribute('for', "cash")
    labelCash.textContent = 'Cash';

    payment.append(cash);
    payment.append(labelCash);

    const gifts = document.createElement('div');
    gifts.classList.add('gifts'); 
    requiredFields.append(gifts);

    const choiceOfGift = document.createElement('p');
    choiceOfGift.classList.add('choice-of-gift');
    choiceOfGift.textContent = 'Choose 1 or 2 gifts on your choise: ';
    gifts.appendChild(choiceOfGift);

    const packAsGift = document.createElement('input');
    packAsGift.setAttribute('type', 'checkbox');
    const labelGift = document.createElement('label');
    labelGift.textContent = 'Pack as a gift';
    labelCash.setAttribute('for', "packAsGift");

    gifts.appendChild(packAsGift); gifts.appendChild(labelGift);

    const postcard = document.createElement('input');
    postcard.setAttribute('type', 'checkbox');
    const labelPostcard = document.createElement('label');
    labelPostcard.textContent = 'Add postcard';
    labelPostcard.setAttribute('for', "postcard");

    gifts.appendChild(postcard); gifts.appendChild(labelPostcard);

    const branded = document.createElement('input');
    branded.setAttribute('type', 'checkbox');
    const labelbranded = document.createElement('label');
    labelbranded.textContent = 'Branded pen or pencil';
    labelbranded.setAttribute('for', "branded");

    gifts.appendChild(branded); gifts.appendChild(labelbranded);


    const discount = document.createElement('input');
    discount.setAttribute('type', 'checkbox');
    const labeldiscount = document.createElement('label');
    labeldiscount.textContent = '2% discount to the next time';
    labeldiscount.setAttribute('for', "discount");

    gifts.appendChild(discount); gifts.appendChild(labeldiscount);
    const corrGifts =  gifts.querySelectorAll('input'); 
   
    gifts.addEventListener('input', () => {
      if(document.querySelectorAll("input[type='checkbox']:checked").length == 2) {
        corrGifts.forEach(el => el.checked ? true : el.setAttribute('disabled', 'disabled'))
      }
      else {
        corrGifts.forEach(el => el.removeAttribute('disabled', 'disabled'));
      }
    })

const btnDiv = document.createElement('div');
btnDiv.classList.add('btn-div');
requiredFields.append(btnDiv);

    const competeBtn = document.createElement('input');
    competeBtn.classList.add('complete-btn');
    competeBtn.setAttribute('type', 'Submit');
    competeBtn.setAttribute('value', 'Finish order');
    competeBtn.setAttribute('disabled', 'disabled');
    btnDiv.append(competeBtn);

    const returnBtn = document.createElement('button');
    returnBtn.classList.add('return-btn');
    returnBtn.textContent = 'Return to Basket'
    btnDiv.append(returnBtn);

    returnBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location = './index.html';
    })
    const fiel = document.querySelectorAll('.valid-form-item');

 document.addEventListener('focusout', () => {
  let sum = 0;
    fiel.forEach(el => {
      if(el.checkValidity()){
        sum++;
        sum == 6 ? (competeBtn.removeAttribute('disabled', 'disabled')) : (competeBtn.setAttribute('disabled', 'disabled'));
      }   

    }
      )

  })

   competeBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    showMessage();
    })
    
}

function showMessage(){

const name = document.getElementById('valid-name').value;
const address = `${document.getElementById('valid-house').value} ${document.getElementById('valid-street').value} Street, Apt. ${document.getElementById('valid-flat').value}`;
const date = `${document.getElementById('valid-date').value}`;

  const ordered = document.createElement('p');
  ordered.classList.add('mess');

  validationFormWrapper.innerHTML = '';

  validationFormWrapper.classList.add('message');

  const thankMessage = document.createElement('h1');
  thankMessage.classList.add('thanks')
  thankMessage.textContent =`Thank you, ${name}! Your order is complete :)`;
  ordered.textContent = `Delivery address is ${address}. Estimated delivery date: ${date}.`;
  
  const backtoShop = document.createElement('button');
  backtoShop.classList.add('return-btn');
  backtoShop.textContent = 'Back to Shop';

  backtoShop.addEventListener('click', ()=> {
    window.location = './index.html';

})

  validationFormWrapper.appendChild(thankMessage);
  validationFormWrapper.appendChild(ordered);
  validationFormWrapper.appendChild(backtoShop);


 let arr = [];
 localStorage.setItem('book_names', JSON.stringify(arr));
 localStorage.setItem('total_amount', '0');


}
createValidationForm()




function addFooter(){
  const footer = document.createElement('footer');
  body.appendChild(footer);
  const footerWrapper = document.createElement('div');
  footerWrapper.classList.add('footer__wrapper');
  footer.append(footerWrapper);
  const contacts = document.createElement('div');
  contacts.classList.add('contact');
  footerWrapper.appendChild(contacts);
  const github = document.createElement('a'); 
  github.setAttribute('href','https://github.com/sachounette'); github.textContent = 'sachounette';
  const c = document.createElement('p'); c.textContent = '©';
  const year = document.createElement('p'); year.textContent = '2022';
  contacts.appendChild(github);
  contacts.appendChild(c);
  contacts.appendChild(year);
  const school = document.createElement('div');
  school.classList.add('school');
  school.addEventListener('click', ()=> {
      window.location = 'https://rs.school/';

  })
  footerWrapper.appendChild(school);
}
addFooter();

/*    CREATE A BILL      */

let selectedBooks  = JSON.parse(localStorage.getItem("book_names"));   
let totalAmount = localStorage.getItem('total_amount');

function createBill() {
  const bill = document.createElement('div');
  bill.classList.add('bill');
  validationFormWrapper.appendChild(bill);

  const billWrapper = document.createElement('div');
  billWrapper.classList.add('bill-wrapper');
  bill.appendChild(billWrapper);

  const billName = document.createElement('h2');
  billName.textContent =  'Stara Ksiegarnia';
  billName.classList.add('bill-name');
  billWrapper.appendChild(billName);

 const billBooks = document.createElement('ol');
  billBooks.classList.add('bill-books');
  billWrapper.appendChild(billBooks);

for (let i = 0; i < selectedBooks.length; i++) {
  const bookItem = document.createElement('li');
  bookItem.classList.add('book-item');
  billBooks.appendChild(bookItem);

  const calc = document.createElement('p');
  calc.textContent = `${i+1}. `;
  bookItem.appendChild(calc);

  const nameB = document.createElement('p');
  nameB.classList.add('book-bill');
  nameB.textContent = selectedBooks[i].name;
  bookItem.appendChild(nameB);

  const quantityB = document.createElement('p');
  quantityB.classList.add('quantity-b');
  quantityB.textContent = ` x${selectedBooks[i]['q-ty']}`;
  bookItem.appendChild(quantityB);

  const priceB = document.createElement('p');
  priceB.classList.add('price-b');
  priceB.textContent = `${selectedBooks[i]['price-item']}$`;
  bookItem.appendChild(priceB);

}
  const total = document.createElement('div');
  total.classList.add('total');
  total.textContent = `TOTAL: $${totalAmount}`;
  billWrapper.appendChild(total);

}
createBill();

function minDate() {

  let today = new Date();
  let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  let dayTomorrow = tomorrow.getDate(); 
  let monthTomorrow = tomorrow.getMonth() + 1;
  let yearTomorrow = tomorrow.getFullYear(); 
  monthTomorrow =  monthTomorrow.toString().padStart(2, "0"); 
   dayTomorrow = dayTomorrow.toString().padStart(2, "0"); 
  tomorrow = `${yearTomorrow}-${monthTomorrow}-${dayTomorrow}`;


setTimeout(minDate, 1000);
return tomorrow;
}

document.addEventListener('input', (e)=> {

  let myVal = e.target.closest('div').querySelector('.invalid-field');
  if(e.target.checkValidity()){
    myVal.classList.add('invalid-field-hidden');
  }
  else {
    myVal.classList.remove('invalid-field-hidden');
   


  }
})
