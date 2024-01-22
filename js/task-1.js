// Отримуємо доступ до списку категорій (ul#categories)
const categoriesList = document.getElementById('categories');

// Отримуємо всі елементи li.item в списку
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій в консоль
console.log('Кількість категорій:', categoryItems.length);

// Ітеруємося по кожному елементу li.item
categoryItems.forEach(categoryItem => {
    // Отримуємо текст заголовка (тег <h2>) для кожної категорії
    const categoryTitle = categoryItem.querySelector('h2').textContent;

    // Отримуємо всі елементи <li> внутрішні для поточної категорії
    const categoryElements = categoryItem.querySelectorAll('ul > li');

    // Виводимо текст заголовка та кількість елементів у категорії в консоль
    console.log(`Категорія: ${categoryTitle}`);
    console.log(`Кількість елементів у категорії: ${categoryElements.length}`);
});