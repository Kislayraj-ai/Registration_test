<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <!--stylesheet-->
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <section id="main">
        <div id="container">
            <article id="main-form" class="reg-form show">
                <h2>registration form</h2>

                <!-- input fileds -->
                <!-- name -->
                <div class="form-group">
                    <!-- <label for="name">Name</label> -->
                    <input type="text" id="name" placeholder="Name">
                </div>
                <!-- age -->
                <div class="form-group">
                    <!-- <label for="email">Age</label> -->
                    <input type="number" id="age" placeholder="Age">
                </div>
                <!-- mobile number -->
                <div class="form-group">
                    <!-- <label for="name">Mobile Number</label> -->
                    <input type="number" id="mob" placeholder="Mobile number">
                </div>
                <!-- email -->
                <div class="form-group">
                    <!-- <label for="name">Email</label> -->
                    <input type="email" id="email" placeholder="E-Mail">
                </div>
                <!--password-->
                <div class="form-group">
                    <!-- <label for="name">Email</label> -->
                    <input type="password" id="passwrd" placeholder="password">
                </div>
                <!-- submit -->
                <div class="form-group actions">
                    <button id="submit">Sign up</button>
                    <a id="user_login" href="#">or, Login</a>
                </div>
            </article>

            <article id="login-form" class="login-form hide">
                <h2>login form</h2>

                <!-- input fileds -->
                <!-- name -->
                <div class="form-group">
                    <!-- <label for="name">Name</label> -->
                    <input type="text" class="login-name" id="login_name"
                        placeholder="Name">
                </div>

                <!-- email -->
                <div class="form-group">
                    <!-- <label for="name">Email</label> -->
                    <input type="password" class="login-passwrd" id="pass"
                        placeholder="password">
                </div>
                <!-- submit -->
                <div class="form-group actions">
                    <button id="login">Login</button>
                    <a href="#" id="signin">or, Signin</a>
                </div>
            </article>
        </div>
    </section>

    <!-- javascript file -->
    <script src="js/app.js" type="module"></script>

</body>



</html>