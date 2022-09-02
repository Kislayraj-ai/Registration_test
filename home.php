<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | Dashboard</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>

    <section id="main">
        <div id="container">
            <h1 id="home_heading">welcome <span id="user_name">
                    <?php session_start();
                echo  $_SESSION['user_name'] ; ?>
                </span></h1>

            <button type="button" id="logout">Logout</button>
        </div>
    </section>

    <!--javascript -->
    <script type="module" src="js/home.js"></script>
</body>

</html>