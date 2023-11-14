// empty.classList.remove('hidden');

const empty = document.querySelector('.shopping-list-empty');
const list = document.querySelector('.js-shop-list');
// list.addEventListener('click', clearH);
function clearH() {
  list.innerHTML = '';
}
const LS_KEY = 'shopping-list';
const elements = [
  {
    _id: '1',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    contributor: 'by Prince Harry',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    publisher: 'Random House Audio',
    title: 'SPARE',
  },
  {
    _id: '2',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    publisher: 'Simon & Schuster Audio',
    title: "I'M GLAD MY MOM DIED",
  },
  // {
  //   _id: '3',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
  //   author: 'Prince Harry',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
  //   book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
  //   contributor: 'by Prince Harry',
  //   description:
  //     'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
  //   publisher: 'Random House Audio',
  //   title: 'SPARE',
  // },
  // {
  //   _id: '4',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
  //   author: 'Jennette McCurdy',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
  //   book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
  //   contributor: 'by Jennette McCurdy',
  //   description:
  //     'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
  //   publisher: 'Simon & Schuster Audio',
  //   title: "I'M GLAD MY MOM DIED",
  // },
  // {
  //   _id: '5',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
  //   author: 'Prince Harry',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
  //   book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
  //   contributor: 'by Prince Harry',
  //   description:
  //     'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
  //   publisher: 'Random House Audio',
  //   title: 'SPARE',
  // },
  // {
  //   _id: '6',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
  //   author: 'Jennette McCurdy',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
  //   book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
  //   contributor: 'by Jennette McCurdy',
  //   description:
  //     'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
  //   publisher: 'Simon & Schuster Audio',
  //   title: "I'M GLAD MY MOM DIED",
  // },
  // {
  //   _id: '7',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
  //   author: 'Prince Harry',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
  //   book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
  //   contributor: 'by Prince Harry',
  //   description:
  //     'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
  //   publisher: 'Random House Audio',
  //   title: 'SPARE',
  // },
  // {
  //   _id: '8',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
  //   author: 'Jennette McCurdy',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
  //   book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
  //   contributor: 'by Jennette McCurdy',
  //   description:
  //     'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
  //   publisher: 'Simon & Schuster Audio',
  //   title: "I'M GLAD MY MOM DIED",
  // },
  // {
  //   _id: '9',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
  //   author: 'Prince Harry',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
  //   book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
  //   contributor: 'by Prince Harry',
  //   description:
  //     'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
  //   publisher: 'Random House Audio',
  //   title: 'SPARE',
  // },
  // {
  //   _id: '10',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
  //   author: 'Jennette McCurdy',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
  //   book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
  //   contributor: 'by Jennette McCurdy',
  //   description:
  //     'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
  //   publisher: 'Simon & Schuster Audio',
  //   title: "I'M GLAD MY MOM DIED",
  // },
  // {
  //   _id: '11',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
  //   author: 'Prince Harry',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
  //   book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
  //   contributor: 'by Prince Harry',
  //   description:
  //     'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
  //   publisher: 'Random House Audio',
  //   title: 'SPARE',
  // },
  // {
  //   _id: '12',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
  //   author: 'Jennette McCurdy',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
  //   book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
  //   contributor: 'by Jennette McCurdy',
  //   description:
  //     'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
  //   publisher: 'Simon & Schuster Audio',
  //   title: "I'M GLAD MY MOM DIED",
  // },
  // {
  //   _id: '13',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
  //   author: 'Prince Harry',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
  //   book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
  //   contributor: 'by Prince Harry',
  //   description:
  //     'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
  //   publisher: 'Random House Audio',
  //   title: 'SPARE',
  // },
  // {
  //   _id: '14',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
  //   author: 'Jennette McCurdy',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
  //   book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
  //   contributor: 'by Jennette McCurdy',
  //   description:
  //     'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
  //   publisher: 'Simon & Schuster Audio',
  //   title: "I'M GLAD MY MOM DIED",
  // },
  // {
  //   _id: '15',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
  //   author: 'Prince Harry',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
  //   book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
  //   contributor: 'by Prince Harry',
  //   description:
  //     'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
  //   publisher: 'Random House Audio',
  //   title: 'SPARE',
  // },
  // {
  //   _id: '16',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
  //   author: 'Jennette McCurdy',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
  //   book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
  //   contributor: 'by Jennette McCurdy',
  //   description:
  //     'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
  //   publisher: 'Simon & Schuster Audio',
  //   title: "I'M GLAD MY MOM DIED",
  // },
  // {
  //   _id: '17',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
  //   author: 'Prince Harry',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
  //   book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
  //   contributor: 'by Prince Harry',
  //   description:
  //     'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
  //   publisher: 'Random House Audio',
  //   title: 'SPARE',
  // },
  // {
  //   _id: '18',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
  //   author: 'Jennette McCurdy',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
  //   book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
  //   contributor: 'by Jennette McCurdy',
  //   description:
  //     'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
  //   publisher: 'Simon & Schuster Audio',
  //   title: "I'M GLAD MY MOM DIED",
  // },
  // {
  //   _id: '19',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
  //   author: 'Prince Harry',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
  //   book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
  //   contributor: 'by Prince Harry',
  //   description:
  //     'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
  //   publisher: 'Random House Audio',
  //   title: 'SPARE',
  // },
  // {
  //   _id: '20',
  //   list_name: 'Audio Nonfiction',
  //   amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
  //   author: 'Jennette McCurdy',
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
  //   book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
  //   contributor: 'by Jennette McCurdy',
  //   description:
  //     'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
  //   publisher: 'Simon & Schuster Audio',
  //   title: "I'M GLAD MY MOM DIED",
  // },
];

localStorage.setItem(LS_KEY, JSON.stringify(elements));
const shopArr = JSON.parse(localStorage.getItem(LS_KEY));
list.insertAdjacentHTML('afterbegin', createMarkup(shopArr));

function createMarkup(arr) {
  return arr
    .map(
      ({
        _id,
        list_name,
        amazon_product_url,
        author,
        book_image,
        book_uri,
        contributor,
        description,
        publisher,
        title,
      }) => `<li data-id="${_id}" class="shopping-list-card js-trash">
              <div class="shopping-list-card-flex"><img class="list-card-img" src="${book_image}" alt="${author}">
                <div>
                  <div class="shop-trash-flex">
                    <div>
                      <h3 class="list-card-title">${title}</h3>
                      <p class="list-card-subtitle">${list_name}</p>
                    </div>
                    <div class="shop-trash-bg js-test">
                      <svg class="shop-trash">
                        <use href="./img/global/icons.svg#trash"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="shop-text-flex">
                    <p class="list-card-text">${description}</p>
                    <div class="list-card-flex">
                      <p class="list-card-contributor">${contributor}</p>
                      <div class="list-card-icon-flex">
                        <a class="list-card-amazon-url" href="${amazon_product_url}"></a>
                        <a class="list-card-book-url" href="${book_uri}"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>`
    )
    .join('');
}

const test = document.querySelectorAll('.js-test');

for (let i = 0; i < test.length; i += 1) {
  test[i].addEventListener('click', handlerClick);
}

function handlerClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  const currentProduct = e.currentTarget.closest('.js-trash');
  const idBook = currentProduct.dataset.id;
  console.log(idBook);

  const confirmProduct = confirm(`Remove book?`);
  if (confirmProduct) {
    const product = elements.findIndex(({ _id: id }) => id === idBook);
    elements.splice(product, 1);
    console.log(elements);
    clearH();
    list.insertAdjacentHTML('afterbegin', createMarkup(shopArr));
  }
}

// const isDarkMode = localStorage.getItem('darkMode') === 'true';
// console.log(isDarkMode);
// const shElements = {
//   back: document.querySelector('.shopping-list-card'),
//   title: document.querySelector('.list-card-title'),
//   subtitle: document.querySelector('.list-card-subtitle'),
//   text: document.querySelector('.list-card-text'),
//   contributor: document.querySelector('.list-card-contributor'),
// };
// if (isDarkMode) {
//   shElements.back.classList.add('shop-dark-one');
//   shElements.title.classList.add('shop-dark-one');
//   shElements.subtitle.classList.add('shop-dark-two');
//   shElements.text.classList.add('shop-dark-one');
//   shElements.contributor.classList.add('shop-dark-three');
// } else {
//   shElements.back.classList.remove('shop-dark-one');
//   shElements.title.classList.remove('shop-dark-one');
//   shElements.subtitle.classList.remove('shop-dark-two');
//   shElements.text.classList.remove('shop-dark-one');
//   shElements.contributor.classList.remove('shop-dark-three');
// }
