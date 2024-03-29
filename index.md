<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lobster:wght@400&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Сайт группы</title>
    <script async src="./js/popup.js">
    </script>
</head>

<body class="page">
    <header class="header">
        <img class="site-logo" src="img/logo.svg" alt="логотип">
        <ul class="site-menu">
            <li><a class="menu-link active-link" href="#">Главная</a></li>
            <li><a class="menu-link" href="../pages/students.html">Студенты</a></li>
            <li><a class="menu-link" href="../pages/about.html">О курсе</a></li>
            <li><a class="menu-link" href="../pages/contacts.html">Контакты</a></li>
        </ul>
        <a class="login-button" href="login.html">Войти</a>
        <div class="login-popup">
            <img class="popup-close" src="img/closer.svg" alt="крестик">
            <h2 class="login-heading">Войти на сайт</h2>
            <form class="login-form">
                <input class="login-input" name="login" type="text" placeholder="Логин" required>
                <input class="login-password" name="password" type="text" placeholder="Пароль" required>
                <button class="popup-button" type="submit">Войти</button>
            </form>
        </div>
    </header>
    <main class="main">
        <h1 class="main-heading">Добро пожаловать на курс “Создание веб-сайтов (HTML, CSS)”!</h1>
        <img class="class-photo" src="img/class2.png" width="523" height="316" alt="изображение">
        <h2>Для кого этот курс</h2>
        <div class="intro-wrapper">
        <p class="intro-text">Этот курс рассчитан на новичков, которые только начинают знакомство
            с веб-разработкой. В начале курса вы узнаете о том, как устроен
            Интернет и веб-сайты.
            Для обучения необходимо только владеть компьютерной грамотностью
            (пользоваться браузером, создавать папки и файлы, устанавливать
            программы).</p>
            <aside class="intro-aside">
                <blockquote class="blockquote"> &#8220; Учимся <br/> 
                    вместе! &#8221; </blockquote>
            </aside>
        </div>

        <h2>Чему вы научитесь</h2>
        <p class="intro-text">На этом курсе вы узнаете, как устроены веб-сайты и как создавать их с
            нуля. Изучите основы языков <strong>HTML</strong>, <strong>CSS</strong> и немного
            <strong>JavaScript</strong>. Мы вместе
            сверстаем сайт нашей группы по этому макету. А затем вы <em>сами</em>
            сверстаете свои личные странички в качестве домашнего задания и мы
            выложим все это на сервер.
        </p>
    </main>
    <footer class="footer">
        <p class="copyright">
            2022 &copy; <a href="..." class="innop-link">учебный центр</a>
        </p>
    </footer>
</body>

</html>