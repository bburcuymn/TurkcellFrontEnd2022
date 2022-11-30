class UI {
  constructor() {
    this.post = document.querySelector('#blogposts');
    this.imageUrlInput = document.querySelector('#imgUrl');
    this.categoryInput = document.querySelector('#category');
    this.titleInput = document.querySelector('#title');
    this.authorInput = document.querySelector('#author');
    this.textContentArea = document.querySelector('#textContent');
    this.idInput = document.querySelector('#id');
    this.state = 'add';
  }

  showPosts(blogposts) {
    let blogs = document.querySelector('#blogposts');
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    blogposts.forEach((post) => {
      blogs.innerHTML += `

          <div class="col-12 col-sm-8 col-md-6 col-lg-4 d-flex">
      <div class="card">
      <div class=" position-relative">
        <img class="card-img post-img" src="${post.imageUrl}" alt="Music">
        <a href="#" class="btn btn-light btn-sm mx-auto d-block p-1">${post.category}</a>
        </div>
        <div class="card-body">
          <h4 class="card-title post-title">${post.title}</h4>
          <h2 class= "card-text post-author">${post.author}</h2>
          <p class="card-text post-content">${post.textContent}</p>
      <div class="d-flex space-between  justify-content-between mt-2">
    <button type="button" class="btn btn-sm btn-outline-primary fs-6 py-1 px-4" data-id="${post.id}" id="edit-post">Edit</button>
    <button type="button" class="btn btn-sm btn-outline-danger fs-6 py-1 px-4" id="delete-post" data-id="${post.id}">Delete</button>
        </div>
        </div>
        <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div class="views">
              ${day}/${month}/${year}, ${hour}:${min}
          </div>
          <div class="stats">
           	<i class="far fa-eye"></i> 1347
            <i class="far fa-comment"></i> 12
          </div>
          </div>
  </div>
</div>
      `;
    });
  }

  showAlert(msg, type) {
    const section = document.getElementById('section');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = msg;

    section.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 2000);
  }

  clearFields(field1, field2, field3, field4, field5) {
    field1.value = '';
    field2.value = '';
    field3.value = '';
    field4.value = '';
    field5.value = '';
  }

  fillForm(data) {
    /* this.post = document.querySelector('#blogposts');
    this.imageUrlInput = document.querySelector('#imgUrl');
    this.categoryInput = document.querySelector('#category');
    this.titleInput = document.querySelector('#title');
    this.authorInput = document.querySelector('#author');
    this.textContentArea = document.querySelector('#textContent'); */

    /* 
          id,
      imageUrl,
      category,
      title,
      author,
      textContent,
    */
    this.imageUrlInput.value = data.imageUrl;
    this.categoryInput.value = data.category;
    this.titleInput.value = data.title;
    this.authorInput.value = data.author;
    this.textContentArea.value = data.textContent;
    this.idInput.value = data.id;
  }
}

export const ui = new UI();
