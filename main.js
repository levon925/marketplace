const showCategory = document.querySelector('#show-category');
const closeCategory = document.querySelector('#close-category');
const categoryContainer = document.querySelector('#category-container');
const categoryMenu = document.querySelector('#category-menu');

const closeCategoryArr = [closeCategory, categoryContainer];

showCategory.addEventListener('click', () => {
    closeCategory.classList.remove('hidden');
    showCategory.classList.add('hidden');
    categoryContainer.classList.remove('hidden')
});
closeCategoryArr.forEach(e => {
    e.addEventListener('click', () => {
        closeCategory.classList.add('hidden');
        showCategory.classList.remove('hidden');
        categoryContainer.classList.add('hidden')
    });
})
categoryMenu.addEventListener('click',e => {
    e.stopPropagation();
})
// closeCategory.addEventListener('click', () => {
//     closeCategory.classList.add('hidden');
//     showCategory.classList.remove('hidden');
//     categoryContainer.classList.add('hidden')
// });

