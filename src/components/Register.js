
function Register() {
  return (
    <div className="App">


<div class="container">
<form id="signup" class="form">
    <h1>Sign Up</h1>
    <div class="form-field">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" autocomplete="off"/>
        <small></small>
    </div>

    <div class="form-field">
        <label for="email">Email:</label>
        <input type="text" name="email" id="email" autocomplete="off"/>
        <small></small>
    </div>

    <div class="form-field">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" autocomplete="off"/>
        <small></small>
    </div>


    <div class="form-field">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password" autocomplete="off"/>
        <small></small>
    </div>

    <div class="form-field">
        <input type="submit" value="Sign Up"/>
    </div>
</form>
</div>

</div>
  );
}

export default Register;