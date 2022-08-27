const body = document.querySelector('body');

function addHeader(){
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
    logo.append(logoName)
    const basket = document.createElement('div');
    const basketCount = document.createElement('p');
    basketCount.classList.add('baslet-count');
    basketCount.textContent = "0";
    basket.classList.add('basket');
    basket.classList.add('basket__closed');
    basket.append(basketCount);
    headerWrapper.append(basket);
}
addHeader()
function addMenu(){
    const main = document.createElement('main');
    body.appendChild(main);
    const wallPaper = document.createElement('section');
    wallPaper.classList.add('wallpaper')
    main.appendChild(wallPaper);
    const booksSection = document.createElement('section');
    booksSection.classList.add('books-section');
    main.appendChild(booksSection);
    const booksWrapper = document.createElement('div');
    booksWrapper.classList.add('books-section__wrapper');
    booksSection.appendChild(booksWrapper);

    const booksContainer = document.createElement('div');
    booksContainer.classList.add('books__container');
    booksWrapper.appendChild(booksContainer);

}
addMenu()
fetch('./book.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            createElements(data);
        });

const booksContainer = document.querySelector('.books__container');
function createElements(data) {
            for (let i = 0; i < data.length; i++) {
               const book = document.createElement('div');
               book.classList.add('book');
               booksContainer.appendChild(book);
               
               const bookDescription = document.createElement('div');
               bookDescription.classList.add('book__description');
               book.append(bookDescription);

               const bookPhoto = document.createElement('div');
               bookPhoto.classList.add('book__photo');
               bookDescription.append(bookPhoto);

               const bookInfo = document.createElement('div');
               bookInfo.classList.add('book__info');
               bookDescription.append(bookInfo);

               const image = document.createElement('img');
               image.classList.add('image');
               image.src = data[i].imageLink;
               bookPhoto.append(image);

               const bookPrice = document.createElement('h4');
               bookPrice.classList.add('price');
               bookPrice.textContent = `Price: ${data[i].price} $`;
               book.append(bookPrice); 

               const inputNum = document.createElement("input");
               inputNum.classList.add('number')
               inputNum.setAttribute("type", "number");
               inputNum.setAttribute("min", 1);
               inputNum.setAttribute("max", 20);
               inputNum.value = 1;
               inputNum.onkeydown = function (e) {
                return false;}
               book.append(inputNum);

               const addBtn = document.createElement('button');
               addBtn.classList.add('add-button');
               addBtn.textContent = "Add to cart";
               book.append(addBtn);

               const addPopUpBtn = document.createElement('button');
               addPopUpBtn.classList.add('add-button-popup');
               addPopUpBtn.textContent = "Show more";
               book.append(addPopUpBtn);

               const bookAuthor = document.createElement('h3');
               bookAuthor.classList.add('author');
               bookAuthor.textContent = data[i].author
               bookInfo.append(bookAuthor); 
              
               const bookName = document.createElement('h2');
               bookName.textContent = `${data[i].title}`;
               bookName.classList.add('name');
               bookInfo.append(bookName);

               const bookPopUp = document.createElement('div');
               bookPopUp.classList.add('book__popUp');
               bookPopUp.classList.add('popup__closed');
               book.append(bookPopUp);

               const popUpClose = document.createElement('div');
               popUpClose.classList.add('popUp__close');
               bookPopUp.appendChild(popUpClose);

               popUpClose.addEventListener('click', () => {
                bookPopUp.classList.add('popup__closed');
                bookPopUp.classList.remove('popup_opened');
                book.classList.remove('tinted')

               })

               const popUpText = document.createElement('p');
               popUpText.classList.add('popup__text');
               popUpText.textContent = `${data[i].description}`;
               bookPopUp.appendChild(popUpText);
    
            }
        }   
const basket = document.querySelector('.basket');
const headerWrapper = document.querySelector('.header__wrapper');
const cartContent = document.createElement('div');
cartContent.classList.add('cart__content');
cartContent.classList.add('hidden');
headerWrapper.append(cartContent);

basket.addEventListener('click', (event) => {
    if(event.target.classList.contains('basket')) {
        if(event.target.classList.contains('basket__closed')){
            event.target.classList.remove('basket__closed');
            event.target.classList.add('basket__opened');
            cartContent.classList.remove('hidden');
            cartContent.classList.add('shown')
        }
        else {
            event.target.classList.remove('basket__opened');
            event.target.classList.add('basket__closed');
            cartContent.classList.add('hidden');
            cartContent.classList.remove('shown')
        }
}
})
const basketCount = document.querySelector('.baslet-count');

const cartName = document.createElement('p');
cartName.classList.add('cart-name');
cartName.textContent = "Your basket";
cartContent.appendChild(cartName);

const cartDescription = document.createElement('p');
cartDescription.classList.add('cart-descr');
cartDescription.textContent = "Dear customer, according to the rules of our store, we cannot sell more than 20 books by one author to one person. Remember that books should go to everyone! Thank you very much and happy shopping."
cartContent.appendChild(cartDescription);

const selectedItemContainer = document.createElement('div');
selectedItemContainer.classList.add('selected-item__container');
cartContent.appendChild(selectedItemContainer);

const cartSummary = document.createElement('div');
cartSummary.classList.add('cart__summary');
cartContent.appendChild(cartSummary);

const totalQuantity = document.createElement('p');
totalQuantity.classList.add('total-quantity');
totalQuantity.textContent = "Total quantity: ";
cartSummary.appendChild(totalQuantity);

const totalAmount = document.createElement('p');
totalAmount.classList.add('total-amount');
totalAmount.textContent = "Total amount: ";
cartSummary.appendChild(totalAmount);

const confirmOrder = document.createElement('button');
confirmOrder.classList.add('confirm-order-button');
confirmOrder.textContent = "Confirm order";
confirmOrder.setAttribute('disabled', 'disabled');
cartSummary.appendChild(confirmOrder);
confirmOrder.addEventListener('click', () => {
   
    window.location = './confirm_order.html';
})

booksContainer.addEventListener('click', (event) => {
    addBasketElements(event);
})
function addBasketElements(event) {
    if(event.target.classList.contains('add-button')){
        let amount = 0;
        cartContent.querySelectorAll('.selected-item__author').forEach(el => {
            if (event.target.closest('div').querySelector('.author').textContent ==  el.textContent) {
                let bla = + el.closest('div').nextSibling.value;
                bla +=  + event.target.closest('div').querySelector('.number').value;
                if (bla > 20) {
                    bla = 20
                }
                el.closest('div').nextSibling.value = bla;
                let killMePlease = + event.target.closest('div').querySelector('.price').textContent.slice(7,-2);
                killMePlease = killMePlease * bla;
                el.closest('div').nextSibling.nextSibling.querySelector('.price-amount').textContent = killMePlease;
               amount++;
            }
        })
    if(amount > 0) {
    }
    else {
        const selectedItem = document.createElement('div');
        selectedItem.classList.add('selected__item');
        selectedItemContainer.appendChild(selectedItem);
    
        const selectedItemImage = document.createElement('img');
        selectedItemImage.classList.add('selected-image');
        selectedItemImage.src = event.target.closest('div').querySelector('.image').src;
        selectedItem.appendChild(selectedItemImage);
    
        const selectedItemDescr = document.createElement('div');
        selectedItemDescr.classList.add('selected-item_descr');
        selectedItem.appendChild(selectedItemDescr);
    
        const itemSelectedAuthor = document.createElement('p');
        itemSelectedAuthor.classList.add('selected-item__author');
        itemSelectedAuthor.textContent = event.target.closest('div').querySelector('.author').textContent;
        selectedItemDescr.appendChild(itemSelectedAuthor);
    
        const itemSelectedName = document.createElement('p');
        itemSelectedName.classList.add('selected-item__name');
        itemSelectedName.textContent = event.target.closest('div').querySelector('.name').textContent
        selectedItemDescr.appendChild(itemSelectedName);
    
        const quantity = document.createElement('input');
        quantity.classList.add('quantity');
        quantity.setAttribute("type", "number");
        quantity.setAttribute("min", 1);
        quantity.setAttribute("max", 20);
        quantity.value = event.target.closest('div').querySelector('.number').value;
        quantity.onkeydown = function (e) {
            return false;
        }
        selectedItem.appendChild(quantity);
    
        const price = document.createElement('div');
        price.classList.add('price');
        selectedItem.appendChild(price);
    
        const priceAmount = document.createElement('p');
        priceAmount.classList.add('price-amount');
        priceAmount.textContent = event.target.closest('div').querySelector('.price').textContent.slice(7,-2) * quantity.value;
        price.appendChild(priceAmount);
    
        const priceSign = document.createElement('p');
        priceSign.classList.add('price-sign');
        priceSign.textContent = event.target.closest('div').querySelector('.price').textContent.slice(-1);
        price.appendChild(priceSign);
    
        quantity.addEventListener('change', ()=> {
            priceAmount.textContent = quantity.value * event.target.closest('div').querySelector('.price').textContent.slice(7,-2);
           
        })
    
        const deleteItem = document.createElement('div');
        deleteItem.classList.add('to-delete');
        selectedItem.appendChild(deleteItem);
        
        deleteItem.addEventListener('click', (event)=> {
        event.target.closest('div').parentElement.remove();

    
    
        })
      
    }}

}


selectedItemContainer.addEventListener("DOMSubtreeModified", ()=> {
    let arr = [0];
    document.querySelectorAll('.price-amount').forEach(el => {
        arr.push(+el.textContent);
    })
    arr = arr.reduce((el,prev )=> el+prev);
     totalAmount.textContent = `Total amount: ${arr} $`;
     localStorage.setItem('total_amount', `${arr}`)

})

selectedItemContainer.addEventListener("DOMSubtreeModified", ()=> {
    let arr = [0];

    document.querySelectorAll('.quantity').forEach(el => {
        arr.push(+el.value);
    })
    arr = arr.reduce((el,prev )=> el+prev);
    totalQuantity.textContent = `Total quantity: ${arr} pcs`;
    basketCount.textContent =  arr;
})


cartContent.addEventListener('DOMSubtreeModified', ()=> {
    let itemsInBasket = document.querySelectorAll('.selected__item'); 
    if(itemsInBasket.length <= 0) {
        confirmOrder.setAttribute('disabled', 'disabled');

    }
    else {    confirmOrder.removeAttribute('disabled', 'disabled');
}
})
booksContainer.addEventListener('click', (event) => {
    const divReq = event.target.closest('div').querySelector('.book__popUp');
    if(event.target.classList.contains('add-button-popup')){ 
      if(divReq.classList.contains('popup__closed')) {
        divReq.classList.remove('popup__closed');
        divReq.classList.add('popup_opened');
        event.target.closest('div').classList.add('tinted')
      }
    }})

    cartContent.addEventListener('DOMSubtreeModified', ()=> {
        let arr = [];
       let itemsInBasket = document.querySelectorAll('.selected__item'); 
     
       itemsInBasket.forEach(el => {
        arr.push({
            'author': el.querySelector('.selected-item__author').textContent,
            'q-ty': el.querySelector('.quantity').value,
            'image': el.querySelector('.selected-image').src,
            'name' : el.querySelector('.selected-item__name').textContent,
            'price-item': el.querySelector('.price-amount').textContent,
            'sign' : el.querySelector('.price-sign').textContent,
        }) 
       })
        localStorage.setItem('book_names', JSON.stringify(arr));
    })
    
function takeBasket() {

    let selectedBooks  = JSON.parse(localStorage.getItem("book_names"));   
    if(!selectedBooks) return;

    for(let i = 0; i<selectedBooks.length;i++){
        const selectedItem = document.createElement('div');
        selectedItem.classList.add('selected__item');
        selectedItemContainer.appendChild(selectedItem);
    
        const selectedItemImage = document.createElement('img');
        selectedItemImage.classList.add('selected-image');
        selectedItemImage.src = selectedBooks[i].image;
        selectedItem.appendChild(selectedItemImage);
    
        const selectedItemDescr = document.createElement('div');
        selectedItemDescr.classList.add('selected-item_descr');
        selectedItem.appendChild(selectedItemDescr);
    
        const itemSelectedAuthor = document.createElement('p');
        itemSelectedAuthor.classList.add('selected-item__author');
        itemSelectedAuthor.textContent = selectedBooks[i].author;
        selectedItemDescr.appendChild(itemSelectedAuthor);
    
        const itemSelectedName = document.createElement('p');
        itemSelectedName.classList.add('selected-item__name');
        itemSelectedName.textContent = selectedBooks[i].name;
        selectedItemDescr.appendChild(itemSelectedName);
    
        const quantity = document.createElement('input');
        quantity.classList.add('quantity');
        quantity.setAttribute("type", "number");
        quantity.setAttribute("min", 1);
        quantity.setAttribute("max", 20);
        quantity.value = selectedBooks[i]['q-ty'];
        quantity.onkeydown = function (e) {
            return false;
        }
        selectedItem.appendChild(quantity);
    
        const price = document.createElement('div');
        price.classList.add('price');
        selectedItem.appendChild(price);
    
        const priceAmount = document.createElement('p');
        priceAmount.classList.add('price-amount');
        priceAmount.textContent = selectedBooks[i]['price-item'];
        price.appendChild(priceAmount);
    
        const priceSign = document.createElement('p');
        priceSign.classList.add('price-sign');
        priceSign.textContent = selectedBooks[i].sign;
        price.appendChild(priceSign);

        let pricePerItem = +priceAmount.textContent/quantity.value;

       quantity.addEventListener('change', ()=> {
            priceAmount.textContent = quantity.value * pricePerItem;
           
        })
    
        const deleteItem = document.createElement('div');
        deleteItem.classList.add('to-delete');
        selectedItem.appendChild(deleteItem);
        
        deleteItem.addEventListener('click', (event)=> {
        event.target.closest('div').parentElement.remove();}) 

        }
    }
    takeBasket() 
 
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


