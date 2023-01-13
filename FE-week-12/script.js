$(document).ready(() => {
    let bookList;

    $.get('http://localhost:3000/posts', data => {
        bookList = data
    }).done(() => buildInfoList())

    const buildInfoList = () => {
        $('#content').empty()
        bookList.forEach(book => {
            $('#content').append(
                `<div id="book${book.id}" class="info-box">
                ID: ${book.id} ${book.title} ${book.author}
                <button id=${book.id} class="btn btn-danger btn-sm">X</button>
                </div>`
            )
            $(`#${book.id}`).click(() => removeItem(book.id))
        })
    }

    $('#myForm').submit((event) => {
        event.preventDefault();
        const formData = {
            title: $('#title').val(),
            author: $('#author').val()
        };
        
        $.post('http://localhost:3000/posts', 
            formData,
            data => { alert(`data added: Title: ${data.title}, Author: ${data.author}`)}
        );

        $('#myForm').trigger('reset');
        buildInfoList();
    })

    const removeItem = id => {
        $.ajax({
            url: `http://localhost:3000/posts/${id}`,
            type: 'DELETE',
            success: function() {
                buildInfoList()
            }
        })

        alert(`post with id: ${id} deleted`)
    }

    $('#myUpdateForm').submit((event) => {
        event.preventDefault()
        const formData = {
            id: $('#updateId').val(),
            title: $('#updateTitle').val(),
            author: $('#updateAuthor').val()
        }

        $.ajax({
            url: `http://localhost:3000/posts/${formData.id}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(formData)
        }).done(() => buildInfoList())

        $('#myUpdateForm').trigger('reset')
    })

})