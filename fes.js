/* const people = [ {
name: 'bob',
age:20,
position: 'dev',
salary:200
},
{
    name: 'bobby',
    age:22,
    position: 'dev',
    salary:100
}, 
{
    name: 'bobs',
    age:21,
    position: 'devisos',
    salary:300
}, 
];

const ages = people.filter((person)=> 
    person.age 
);
console.log(ages);

const newpeople = people.map((person)=>{
    return {
        firstname: person.name,
        age: person.age,
        position: person.position
    }
})
console.log(newpeople);
const names = people.map((per)=>`<h2>${per.name}</h2>`)
//const result = document.querySelector('#result')
//result.innerHTML = names.join('')

const posi =  [...new Set( people.map((pos)=>pos.position))]
console.log(posi)

//const result = document.querySelector('#result')
// result.innerHTML = posi.map((pos)=>{
//     return `<button>${pos}</button>`
// }).join('')


const items={
    'featured-items':['item1','item2']
}
console.log(items['featured-items'])

let appstate ='loading'
const key ='edrab'
const app ={
    [appstate]:true
}
app[key] = 'egled'
console.log(app)

const menu ={
    category:'breakfast',
    cuisine: 'english',
    color:'red'
}

function updatemenu(key,value){
    menu[key] = value
}

updatemenu('category','lunch')
updatemenu('page',[])

console.log(menu)


const totalsalary=people.reduce((total,person)=>{
//console.log(total);
total.totalmul+=person.salary*person.age;
total.totalage+=person.age;
return total;    
},{
    totalage:0,
    totalmul:0
}

)
console.log(totalsalary);
const fesyat= (name,...scores)=>{
    console.log(name);
    console.log(scores.length);
    const average = scores.reduce((total,score)=>{ return total+=score},0)/scores.length;
    console.log(average);
    return average;
}

const av = fesyat(people[0].name,60,70,80);
console.log(av);

const newpeopl = people.map(x=>{return{...x}});
newpeopl.find(x=>x.age===22).name="bas";
console.log(people);
console.log(newpeopl);

 */

//  Javascript Nuggets - Promises Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!

/* const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
   addColor(1000, '.first', 'red')
  .then(()=>addColor(3000,'.second','blue'))
  .then(()=>addColor(2000,'.third','green'))
  .catch((err)=>console.log(err))
})

function addColor(time, selector, color) {
  const element = document.querySelector(selector)
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
        resolve()
      }, time)
    } else {
      reject(`There is no such element : "${selector}"`)
    }
  })
} */


//  Javascript Nuggets
// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

// const example = async () => {
//   return 'hello there'
// }

// async function someFunc() {
//   const result = await example()
//   console.log(result)
//   console.log('hello world')
// }

const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' },
  ]
  
  const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
  ]
  
  const getData = async () => {
    try {
      const user = await getUser('john')
      const articles = await getArticles(user.id)
      console.log(articles)
    } catch (error) {
      console.log(error)
    }
  }
  getData()
  // getUser('susan')
  //   .then((user) => getArticles(user.id))
  //   .then((articles) => console.log(articles))
  //   .catch((err) => console.log(err))
  
  function getUser(name) {
    return new Promise((resolve, reject) => {
      const user = users.find((user) => user.name === name)
  
      if (user) {
        return resolve(user)
      } else {
        reject(`No such user with name : ${name}`)
      }
    })
  }
  
  function getArticles(userId) {
    return new Promise((resolve, reject) => {
      const userArticles = articles.find((user) => user.userId === userId)
  
      if (userArticles) {
        return resolve(userArticles.articles)
      } else {
        reject(`Wrong ID`)
      }
    })
  }

  const url = 'https://www.course-api.com/react-tours-project'


// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

/* const getTours = async () => {
  try {
    const resp = await fetch(url)
    const tours = await resp.json()
    return tours
    // console.log(data)
  } catch (error) {
    console.log(error) 
  }
}
console.log(getTours()) */

const http = require('http')

const server = http.createServer((req, res) => {
res.write('sup nigga');
res.end()
})

server.listen(5000)


