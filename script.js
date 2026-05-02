document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'); /* кнопка бургер-меню*/
    const mobileMenu = document.querySelector('.mobile-menu'); /*контейнер мобільного меню*/
    const mobileLinks = document.querySelectorAll('.mobile-nav a'); /* усі посилання всередині мобільного меню */

    if (!hamburger || !mobileMenu) return; /* немає кнопки або меню, код не працює далі */

    // Toggle menu /* перемикання меню */
    hamburger.addEventListener('click', () => { 
        hamburger.classList.toggle('active'); /* // додає/забирає клас для анімації бургеру */
        mobileMenu.classList.toggle('active'); /* показує або ховає меню */
        
        // Prevent scrolling when menu is open /* код блокує прокрутку сторінки, поки меню відкрите. */
        if (hamburger.classList.contains('active')) { /* Перевіряє, чи елемент бургер-меню (hamburger) має клас active.
classList.contains('active') → повертає true, якщо клас є, і false, якщо немає. */
            document.body.style.overflow = 'hidden'; /* Блокує прокручування сторінки.
Застосовується зазвичай, коли відкриваються модальні вікна, мобільні меню або поп-апи, щоб користувач не скролив фон. */
        } else {
            document.body.style.overflow = ''; /* дозволяє скролити сторінку назад. */
        }
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => { /* список елементів */
        link.addEventListener('click', () => { /* "Для цього посилання (link) при кліку (click) виконай наступні дії..." */ 
            hamburger.classList.remove('active'); /* Цей рядок видаляє клас 'active' з кнопки бургер-меню, щоб повернути її у звичайний стан і закрити мобільне меню. */
            mobileMenu.classList.remove('active'); /* Цей рядок видаляє клас 'active' з самого мобільного меню, щоб приховати його зі сторінки після кліку на посилання. */
            document.body.style.overflow = ''; /* Цей рядок скасовує попереднє блокування прокрутки сторінки, дозволяючи користувачу знову скролити весь сайт. */
        });
    });
});
