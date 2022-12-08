const html = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    * {
        box-sizing: border-box;
    }
    body {
        font-family: Arial, sans-serif;
        font-size: 14px;
        margin: 0 auto;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .header {
        padding: 10px 20px;
        background: #eee;
    }
    .menu {
        display: flex;
        list-style: none;
        gap: 10px;
        padding: 0;
    }
    .menu a {
        text-decoration:none;
        color: blue;
    }
    .menu li:last-child {
        margin-left: auto;
    }
    .content {
        padding: 10px;
        max-width: 500px;
    }
    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: auto;
        min-height: 250px;
        background: #222222;
        color: #fff;
    }
    </style>
</head>
<body>
    <div class="wrapper">
        <header class="header">
            <nav>
                <ul class="menu">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О компании</a></li>
                    <li><a href="#">Товары</a></li>
                    <li><a href="#">Вход</a></li>
                </ul>
            </nav>
        </header>
        <section class="content">
            <article>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio. Mauris ultrices eros in cursus turpis. Sed cras ornare arcu dui vivamus arcu felis. Suspendisse faucibus interdum posuere lorem ipsum dolor. Laoreet suspendisse interdum consectetur libero id faucibus. Lacus sed viverra tellus in hac habitasse platea. Eget lorem dolor sed viverra ipsum. In fermentum posuere urna nec tincidunt. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.
                </p><p>
                    Nisl purus in mollis nunc. Velit sed ullamcorper morbi tincidunt ornare. In fermentum et sollicitudin ac orci phasellus. Proin libero nunc consequat interdum varius sit amet mattis. Dolor sit amet consectetur adipiscing elit. Cursus sit amet dictum sit amet justo donec enim. Nunc mi ipsum faucibus vitae. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Non sodales neque sodales ut etiam sit amet. Mi proin sed libero enim sed faucibus. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Dui ut ornare lectus sit amet est placerat in egestas. Donec ultrices tincidunt arcu non sodales neque sodales.
                </p>
            </article>
        </section>
        <footer class="footer">
            FOOTER
        </footer>
    </div>
</body>
</html>
`

export default html
