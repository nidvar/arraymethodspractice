console.log('array methods')

const people=[]

const grab_data=()=>{
    fetch('https://randomuser.me/api')
    .then(data=>data.json())
    .then(data=>{
        console.log(data.results);
        console.log(data.results[0].name.first +' '+ data.results[0].name.last)
        people.push({
            name: data.results[0].name.first +' '+ data.results[0].name.last,
            wealth: Math.floor(Math.random()*1000000)
        })
        document.querySelector('.screen').innerHTML = ''
        people.forEach(a=>{
            add_user(a.name, a.wealth)
        })
    })
    .catch(error=>console.log(error))
}

const add_user=(name, wealth)=>{
    const person = document.createElement('p');
    person.textContent = name+': ' + ' ' + '$'+wealth
    document.querySelector('.screen').appendChild(person)
}

document.querySelector('.add_user').addEventListener('click',()=>{
    grab_data()
})