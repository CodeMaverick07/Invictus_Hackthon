const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_tkotkuw",
            "template_h04c8ug",
            form.current,
            "WeCJ8K_joV32w94mF"
        )
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
};

const sendFeedBack = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_tkotkuw",
            "template_yb4v0tn",
            form.current,
            "WeCJ8K_joV32w94mF"
        )
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
};

export default sendEmail;
