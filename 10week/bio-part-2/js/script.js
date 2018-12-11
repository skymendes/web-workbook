$(function() {
    $("form[name='registration']").validate({
    rules: {
        firstname: "required",
        lastname: "required",
        email: {
        required: true,
        email: true
        },
        password: {
            required: true,
            minlength: 8
        },
        often: "required",
        gender: "required",
    },
        messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 8 characters long"
        },
        email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
        form.submit();
    }
    });
});