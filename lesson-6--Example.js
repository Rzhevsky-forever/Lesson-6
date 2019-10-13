var book={delivery:false,/* , ... */};
book.delivery=true;
book.deliveryPrice=5;
if(book.delivery){
    console.log('Стоимость доставки:',book.deliveryPrice);
}