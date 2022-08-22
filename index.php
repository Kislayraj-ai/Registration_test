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
        <article id="main-form">
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
                <input type="text" id="age" placeholder="Age">
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
            <!-- submit -->
            <div class="form-group actions">
                <button id="submit">Submit</button>
            </div>
        </article>
    </section>

    <!-- javascript file -->
    <script src="js/app.js" type="module"></script>

</body>



</html>