function userForm(req, resp) {
    resp.write(`
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Bootstrap Form</title>

    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">

    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-body">
                        <h4 class="mb-3 text-center">Contact Form</h4>

                        <form action="/submit" method="post">
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" name="name" class="form-control">
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" name="email" class="form-control">
                            </div>

                            <button class="btn btn-primary w-100">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap 5 JS (Optional) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
        `);
    resp.end();
}

module.exports = userForm;
