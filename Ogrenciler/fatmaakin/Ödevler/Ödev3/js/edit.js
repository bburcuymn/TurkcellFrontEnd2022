const form = document.querySelector('form');
const editButon = document.querySelector(".edit");
const editPut = async(e) => {
    e.preventDefault();
    const doc = {
        title: form.title.value,
        date: form.date.value,
        url: form.url.value,
        category: form.category.value,
        writer: form.writer.value,
        body: form.body.value,
    }
    await fetch('http://localhost:3000/posts', {
        method: 'GET',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.replace('index.html');
}
form.addEventListener('submit', editPut);