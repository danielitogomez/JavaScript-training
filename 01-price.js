let guests = prompt('How many people are coming to your wedding?');

console.log(guests);


function getPrice(guests){
        if (guests < 50) {
            return price = 4000;
        }
        else if (guests < 100) {
            return price = 10000;
        }
        else if (guests < 200) {
            return price = 15000;
        }
        else (guests > 200)
            return price = 200000;
}

var price = getPrice(guests);

console.log('Your weding will cost ' + price + ' dollars.');

