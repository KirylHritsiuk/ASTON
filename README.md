# ASTON
## Homework 4

 ✅ Задание 1 – Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

 ✅ Задание 2 – Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)


<code>
  function logger() {
    console.log(`I output only external context: ${this.item}`);
  };

  const obj = { item: "some value" };
</code>


   ✳️ Бонус ✳️

✅ Задание 1 – Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()
