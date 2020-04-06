const people=[]

const grab_data=()=>{
    fetch('https://randomuser.me/api')
    .then(data=>data.json())
    .then(data=>{
        people.push({
            name: data.results[0].name.first +' '+ data.results[0].name.last,
            wealth: Math.floor(Math.random()*2000000)
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
    person.textContent = `${name}: $${wealth}`
    document.querySelector('.screen').appendChild(person)
}

const sort_millionaires=()=>{
    const x = people.filter(a=>{
        if(a.wealth >= 1000000){
            return true
        }
    })
    console.log(x)
    document.querySelector('.screen').innerHTML = ''
    x.forEach(a=>{
        add_user(a.name, a.wealth)
    })
}

const reduce_function=()=>{
    const x = [];
    people.forEach(a=>{
        x.push(a.wealth)
    })
    console.log(x)
    const y = x.reduce((acc,curr)=>{
        return acc+curr
    })
    return y
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

document.querySelector('.sort_millionaires').addEventListener('click',()=>{
    if(people.length===0){
        alert('No users')
        return
    }
    sort_millionaires();
})

document.querySelector('.reduce_function').addEventListener('click',()=>{
    if(people.length===0){
        alert('No users')
        return
    }
    const person = document.createElement('h4');
    person.textContent = `Total Wealth: $${reduce_function()}`
    document.querySelector('.screen').appendChild(person)
})