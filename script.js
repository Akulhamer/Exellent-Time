let frontSideCollection = document.querySelectorAll(".front-side");
let backSideCollection = document.querySelectorAll(".back-side");
function frontSideFlip(event){
    frontSideCollection.forEach((el, index) =>{
        el.addEventListener('click', ()=>{
            event.currentTarget.classList.add("active");
            backSideCollection[index].classList.add("active");
        })
    })
}

function backSideFlip(event){
    backSideCollection.forEach((el, index) =>{
        el.addEventListener('click', ()=>{
            event.currentTarget.classList.remove("active");
            frontSideCollection[index].classList.remove("active");
        })
    })
}

// Основная функция
function showOrderModal(button) {
  // 1. Находим родительскую карточку
  const productCard = button.closest('.product-card');
  
  // 2. Извлекаем название товара
  const productName = productCard.querySelector('.front-side h3').textContent;
  
  // 3. Находим элемент для отображения в модальном окне
  const orderDetails = document.querySelector('#order .recall-form');
  
  // 4. Формируем и вставляем текст
  orderDetails.innerHTML = `
    <strong>${productName}</strong><br>
  `;
  
  // 5. Сохраняем информацию о товаре в скрытом поле формы
  const form = document.querySelector('#order .consult-form');
  let productInput = form.querySelector('input[name="selected-product"]');
  if (!productInput) {
    productInput = document.createElement('input');
    productInput.type = 'hidden';
    productInput.name = 'selected-product';
    form.appendChild(productInput);
  }
  productInput.value = productName;
  
  // 6. Показываем модальное окно
  document.getElementById('order').showModal();
  
  // 7. Фокусируемся на первом поле формы
  setTimeout(() => {
    form.querySelector('input[type="text"]').focus();
  }, 100);
}

// Дополнительно: функция для закрытия модального окна
function closeOrderModal() {
  document.getElementById('order').close();
}
