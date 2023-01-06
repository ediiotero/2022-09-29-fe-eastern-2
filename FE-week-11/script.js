$(document).ready(() => {
    const emailInfo = [
        {email: 'test@email.com', name: 'Eddie'},
        {email: 'email@email.com', name: 'Tobi'},
    ]

    const buildInfoList = () => {
        $('#content').empty();
        emailInfo.forEach(person => {
            $('#content').append(
                `<div class="info-box">
                ${person.email} ${person.name}
                </div>`
            )
        });
    };

    buildInfoList();

    $('#myForm').submit(event => {
        event.preventDefault();
        const data = {
            email: $('#email').val(),
            name: $('#name').val()
        }
        emailInfo.push(data)
        buildInfoList()
        $('#myForm').trigger('reset')
    })


    $('#get-button').click(() => {
        $.get('https://jsonplaceholder.typicode.com/users/2', (data) => { console.log(data) })
    })

    $('#post-button').click(() => {
        $.post(
            'https://jsonplaceholder.typicode.com/todos', 
            {title: 'Testing', completed: true},
            (data) => { 
                // console.log(data) 
                $('#content').append(
                    `<div class="info-box">
                    ${data.title} ${data.completed}
                    </div>`
                )
            }
        )
    })

})


// Build a form with a title and a body input 
    // when pressing submit the form should make a post request to 
    // https://jsonplaceholder.typicode.com/posts
    // console.log the response
    // the API should respond with your title and body and an id: 101