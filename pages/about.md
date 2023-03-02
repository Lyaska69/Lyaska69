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
            <li><a class="menu-link" href="../pages/students.html">Студенты</a></li>
            <li><a class="menu-link active-link" href="#">О курсе</a></li>
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
        <h1 class="main-heading">О курсе 📱</h1>
        <p class="text-main">Посмотрите видео о нас</p>
        <div class="infraim">
            <iframe class="video" width="820" height="550" src="https://www.youtube.com/embed/0v7pdd4za6s" allowfullscreen></iframe>
            </div>
    </main>
    <footer class="footer">
        <p class="copyright">
            2022 &copy;  <a href="..." class="innop-link">учебный центр</a>
        </p>
    </footer>
</body>

</html>