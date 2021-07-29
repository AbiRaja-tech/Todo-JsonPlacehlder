fetch("https://jsonplaceholder.typicode.com/todos/?_limit=5")
    .then(function(data){
        console.log(data)
        return data.json()
    }) 
    .then(data =>{
        let output=`<h1>Sports</h1>`
        data.forEach(function(data){
        var result = document.getElementById('result')
        output +=`<p>Title -->${data.title}</p>`
         })
         output+=`<div class="input">
            <a class="show-btn" href="#submitform">Add Element</a>
            <a class="show-btn" href="#" onclick="Sportfetch()"> Read More</a>
         </div>`
         sports.innerHTML= output
         console.log(data)
    })
    .catch(function(error){
           console.log(error)
})
        
fetch("https://jsonplaceholder.typicode.com/todos/?_limit=9")
    .then(function(data){
            console.log(data)
            return data.json()
    }) 
    .then(data =>{
            let output=`<h1>Movies</h1>`
            data.forEach(function(data){
            var result = document.getElementById('result')
            output +=`<p>Title --> ${data.title}</p>`
            })
            output+=`<div class="input">
            <a class="show-btn" href="#submitform">Add Element</a>
            <a class="show-btn" href="#moviessec" onclick="Moviesfetch()"> Read More</a>
         </div>`
            movies.innerHTML= output
            console.log(data)
    })
    .catch(function(error){
           console.log(error)
})

fetch("https://jsonplaceholder.typicode.com/todos/?_limit=7")
    .then(function(data){
            console.log(data)
            return data.json()
    }) 
    .then(data =>{
            let output=`<h1>Entertainment</h1>`
            data.forEach(function(data){
            var result = document.getElementById('result')
            output +=`<p>Title --> ${data.title}</p>`
            })
            output+=`<div class="input">
            <a class="show-btn" href="#submitform">Add Element</a>
            <a class="show-btn" href="#Entertainmentsec" onclick="Entertainmentfetch()"> Read More</a>
         </div>`
            Entertainment.innerHTML= output
            console.log(data)
    })
    .catch(function(error){
           console.log(error)
})

fetch("https://jsonplaceholder.typicode.com/todos/?_limit=5")
    .then(function(data){
            console.log(data)
            return data.json()
    }) 
    .then(data =>{
            let output=`<h1>Studies</h1>`
            data.forEach(function(data){
            var result = document.getElementById('result')
            output +=`<p>Title --> ${data.title}</p>`
            })
            output+=`<div class="input">
            <a class="show-btn" href="#submitform">Add Element</a>
            <a class="show-btn" href="#Studiessec" onclick="Studiesfetch()"> Read More</a>
         </div>`
            studies.innerHTML= output
            console.log(data)
    })
    .catch(function(error){
           console.log(error)
})

function addPost(event) {
    event.preventDefault();
    const form = document.querySelector("form");
    eField = form.querySelector('userId');

    let userId =document.getElementById('userId').value;
    let title = document.getElementById('title').value;
    let completed = document.getElementById('completed').value;
    
    if(userId == ""){
            eField.classList.add("shake");       
    }

    const myPost = {
        userId: userId,
        title: title,
        completed: completed
    };
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myPost)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}

function Sportfetch(){
        fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
        .then(function(data){
            console.log(data)
            return data.json()
        }) 
        .then(data =>{
            let output=`<h1>Sports</h1>`
            data.forEach(function(data){
            var result = document.getElementById('result')
            output +=`<p>Title --> ${data.title}</p>`
             })
             output+=`<div class="input">
                <a class="show-btn" href="#in-form">Add Element</a>
                <a class="show-btn" href="#" onclick="Sportfetchless()"> Read Less</a>
             </div>`
             sports.innerHTML= output
             console.log(data)
        })
        .catch(function(error){
               console.log(error)
    })
}

function Moviesfetch(){
        fetch("https://jsonplaceholder.typicode.com/todos?userId=2")
        .then(function(data){
                console.log(data)
                return data.json()
        }) 
        .then(data =>{
                let output=`<h1>Movies</h1>`
                data.forEach(function(data){
                var result = document.getElementById('result')
                output +=`<p>Title --> ${data.title}</p>`
                })
                output+=`<div class="input">
                <a class="show-btn" href="#submitform">Add Element</a>
                <a class="show-btn" href="#moviessec" onclick="Moviesfetchless()"> Read Less</a>
             </div>`
                movies.innerHTML= output
                console.log(data)
        })
        .catch(function(error){
               console.log(error)
    })
}

function Entertainmentfetch(){
        fetch("https://jsonplaceholder.typicode.com/todos?userId=3")
        .then(function(data){
                console.log(data)
                return data.json()
        }) 
        .then(data =>{
                let output=`<h1>Entertainment</h1>`
                data.forEach(function(data){
                var result = document.getElementById('result')
                output +=`<p>Title --> ${data.title}</p>`
                })
                output+=`<div class="input">
                <a class="show-btn" href="#submitform">Add Element</a>
                <a class="show-btn" href="#Entertainmentsec" onclick="Entertainmentfetchless()"> Read Less</a>
             </div>`
                Entertainment.innerHTML= output
                console.log(data)
        })
        .catch(function(error){
               console.log(error)
    })
}

function Studiesfetch(){
       fetch("https://jsonplaceholder.typicode.com/todos?userId=4")
       .then(function(data){
          console.log(data)
          return data.json()
        }) 
        .then(data =>{
              let output=`<h1>Studies</h1>`
              data.forEach(function(data){
              var result = document.getElementById('result')
              output +=`<p>Title --> ${data.title}</p>`
        })
        output+=`<div class="input">
            <a class="show-btn" href="#submitform">Add Element</a>
            <a class="show-btn" href="#Studiessec" onclick="Studiesfetchless()"> Read Less</a>
            </div>`
        studies.innerHTML= output
        console.log(data)
})
.catch(function(error){
       console.log(error)
})
}

function Sportfetchless(){
        fetch("https://jsonplaceholder.typicode.com/todos/?_limit=5")
        .then(function(data){
                console.log(data)
                return data.json()
            }) 
            .then(data =>{
                let output=`<h1>Sports</h1>`
                data.forEach(function(data){
                var result = document.getElementById('result')
                output +=`<p>Title --> ${data.title}</p>`
                 })
                 output+=`<div class="input">
                    <a class="show-btn" href="#submit-form">Add Element</a>
                    <a class="show-btn" href="#" onclick="Sportfetch()"> Read More</a>
                 </div>`
                 sports.innerHTML= output
                 console.log(data)
            })
            .catch(function(error){
                   console.log(error)
        })
}


function Moviesfetchless(){
        fetch("https://jsonplaceholder.typicode.com/todos/?_limit=9")
    .then(function(data){
            console.log(data)
            return data.json()
    }) 
    .then(data =>{
            let output=`<h1>Movies</h1>`
            data.forEach(function(data){
            var result = document.getElementById('result')
            output +=`<p>Title --> ${data.title}</p>`
            })
            output+=`<div class="input">
            <a class="show-btn" href="#submitform">Add Element</a>
            <a class="show-btn" href="#moviessec" onclick="Moviesfetch()"> Read More</a>
         </div>`
            movies.innerHTML= output
            console.log(data)
    })
    .catch(function(error){
           console.log(error)
})
}


function Entertainmentfetchless(){
    fetch("https://jsonplaceholder.typicode.com/todos/?_limit=7")
    .then(function(data){
            console.log(data)
            return data.json()
    }) 
    .then(data =>{
            let output=`<h1>Entertainment</h1>`
            data.forEach(function(data){
            var result = document.getElementById('result')
            output +=`<p>Title --> ${data.title}</p>`
            })
            output+=`<div class="input">
            <a class="show-btn" href="#submitform">Add Element</a>
            <a class="show-btn" href="#Entertainmentsec" onclick="Entertainmentfetch()"> Read More</a>
         </div>`
            Entertainment.innerHTML= output
            console.log(data)
    })
    .catch(function(error){
           console.log(error)
})

}


function Studiesfetchless(){
        fetch("https://jsonplaceholder.typicode.com/todos/?_limit=5")
    .then(function(data){
            console.log(data)
            return data.json()
    }) 
    .then(data =>{
            let output=`<h1>Studies</h1>`
            data.forEach(function(data){
            var result = document.getElementById('result')
            output +=`<p>Title --> ${data.title}</p>`
            })
            output+=`<div class="input">
            <a class="show-btn" href="#submitform">Add Element</a>
            <a class="show-btn" href="#Studiessec" onclick="Studiesfetch()"> Read More</a>
         </div>`
            studies.innerHTML= output
            console.log(data)
    })
    .catch(function(error){
           console.log(error)
})
}






