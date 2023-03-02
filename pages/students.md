<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <title>Сайт группы</title>
    <script async src="../js/popup.js">
    </script>
</head>

<body class="page">
    <header class="header">
        <img class="site-logo" src="../img/logo.svg" alt="логотип">
        <ul class="site-menu">
            <li><a class="menu-link" href="../index16.html">Главная</a></li>
            <li><a class="menu-link active-link" href="#">Студенты</a></li>
            <li><a class="menu-link" href="../pages/about.html">О курсе</a></li>
            <li><a class="menu-link" href="../pages/contacts.html">Контакты</a></li>
        </ul>
        <a class="login-button" href="login.html">Войти</a>
        <div class="login-popup">
            <img class="popup-close" src="../img/closer.svg" alt="крестик">
            <h2 class="login-heading">Войти на сайт</h2>
            <form class="login-form">
                <input class="login-input" name="login" type="text" placeholder="Логин" required>
                <input class="login-password" name="password" type="text" placeholder="Пароль" required>
                <button class="popup-button" type="submit">Войти</button>
            </form>
        </div>
    </header>
    <main class="main">
        <h1 class="main-heading">Студенты потока 08.02.2020 👧👦</h1>
        <div class="students">
            <section class="student">
                <img class="student-photo" src="../img/photo.png" width="200" height="270" alt="фото студента">
                <p class="student-name">Василий Иванов</p>
            </section>
            <section class="student">
                <img class="student-photo" src="../img/myphoto.png" width="190" height="270" alt="моё фото">
                <a class="student-my-name" href="../mysite/indexMy.html" target="_blank">Марина Александровна</a>
                <span class="new-student">Новичок</span>
            </section>
            <section class="student">
                <img class="student-photo" src="../img/photo.png" width="200" height="270" alt="фото студента">
                <p class="student-name">Мария Александрова</p>
            </section>
            <section class="student">
                <img class="student-photo" src="../img/photo.png" width="200" height="270" alt="фото студента">
                <p class="student-name">Василий Иванов</p>
            </section>
            <section class="student">
                <img class="student-photo" src="../img/photo.png" width="200" height="270" alt="фото студента">
                <p class="student-name">Василий Иванов</p>
            </section>
        </div>
    </main>
    <footer class="footer">
        <p class="copyright">
            2022 &copy;  <a href="..." class="innop-link">учебный центр</a>
        </p>
    </footer>
</body>

</html>