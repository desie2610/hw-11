// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 

const bankAccount = {
    ownerName: 'timofii',
    accountNumber: '1111 2222 3333 4444',
    balance: 100,


    deposit(money) {
    this.balance += money
    },

    withdraw(money) {

     if (money <= this.balance) {
        this.balance -= money
     } else {
        alert('Недостатньо коштів!!!!')
     }
    },

    
}


console.log(bankAccount);






if (confirm('ви бажаєте поповнити рахунок')) {

const userInput =  parseFloat(prompt('яку сумму хочете поповнити???'))
if (!isNaN(userInput) && userInput > 0 ) {
bankAccount.deposit(userInput)
} else {
    alert('не коректно введені данні')
}


}

else if (confirm('Ви бажаєте зняти кошти')){

const userInput =  parseFloat(prompt('яку сумму хочете зняти???'))
if (!isNaN(userInput) && userInput > 0 ) {
bankAccount.withdraw(userInput)
} else {
    alert('не коректно введені данні')
}
} else {
    alert('операція скасована')
}

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
temperature: null,
humidity: 14,
windSpeed: 18,

termometer() {
    return this.temperature < 0;
},
}

const inputTemp = Number(prompt('Введіть градусну міру')) 
weather.temperature = inputTemp
if (weather.termometer() ) {
    console.log('Температура менше 0');
    
} else {
    console.log('Температура вище 0');
    
}


const user = {
  name: "Тимофій",
  email: "timofii@example.com",
  password: "qwe123",

  login: function(inputEmail, inputPassword) {
    if (this.email === inputEmail && this.password === inputPassword) {
      console.log("Вхід успішний!");
      
    } else {
      console.log("Невірний email або пароль.");
      
    }
  }
};


user.login("timofii@example.com", "qwe123"); 
user.login("ivan@example.com", "wrongpass");

const movie = {
title: "Початок",
director: "Тимофій",
year: 2010,
rating: 7,
 };




const isHighlyRated = movie.rating > 8;
 console.log("Високий рейтинг?", isHighlyRated); 
