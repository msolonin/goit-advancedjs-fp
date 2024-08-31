export function drawCategories(data) {
  console.log(data);
  const caterogies_container = document.querySelector('.category-items');
  caterogies_container.innerHTML = '';

  data.results.forEach(category => {
    let li = document.createElement('li');
    let div_item = document.createElement('div');
    div_item.classList.add('categories-item');
    // Set background image
    div_item.style.backgroundImage = `url(${category.imgURL})`;
    // Set size to 100px by 100px
    div_item.style.width = '100px';
    div_item.style.height = '100px';

    let filter_text = document.createElement('p');
    filter_text.innerHTML = category.filter;
    div_item.appendChild(filter_text);

    li.appendChild(div_item);
    caterogies_container.appendChild(li);
  });
}
