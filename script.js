const people=[]

const grab_data=()=>{
    fetch('https://randomuser.me/api')
    .then(data=>data.json())
    .then(data=>{
        people.push({
            name: data.results[0].name.first +' '+ data.results[0].name.last,
            wealth: Math.floor(Math.random()*10000000)
        })
        document.querySelector('.screen').innerHTML = ''
        people.forEach(a=>{
            add_user(a.name, a.wealth)
        })
    })
    .catch(error=>console.log(error))
}

const double =()=>{
    let x = people.map(a=>{
        return {name: a.name, wealth: a.wealth*2}
    })
    console.log(x)
    document.querySelector('.screen').innerHTML = ''
    x.forEach(a=>{
        add_user(a.name, a.wealth)
    })
}

const sort_by_riches = ()=>{
    people.sort((a,b)=>{
        return (b.wealth-a.wealth)
    })
    console.log(people)
    document.querySelector('.screen').innerHTML = ''
    people.forEach(a=>{
        add_user(a.name, a.wealth)
    })
}

const add_user=(name, wealth)=>{
    const person = document.createElement('p');
    person.textContent = name+': ' + ' ' + '$'+wealth
    document.querySelector('.screen').appendChild(person)
}

document.querySelector('.add_user').addEventListener('click',()=>{
    grab_data()
})

document.querySelector('.double').addEventListener('click',()=>{
    if(people.length===0){
        alert('No users')
        return
    }
    double();
})

document.querySelector('.sort_by_riches').addEventListener('click',()=>{
    if(people.length===0){
        alert('No users')
        return
    }
    sort_by_riches();
})