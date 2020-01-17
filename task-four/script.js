 const numAnswer = +prompt(`Выберите один из пунктов:
     1.Автомобиль
     2.Мотоцикл
     3.Велосипед`);

 switch (numAnswer) {
     case 1:
         alert('Автомобиль');
         break;
     case 2:
         alert('Мотоцикл');
         break;
     case 3:
         alert('Велосипед');
         break;
     default:
         alert('Неверный номер!');
 }
