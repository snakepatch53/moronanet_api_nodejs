const $form = document.querySelector("#form");

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        user: $form.user.value,
        pass: $form.pass.value,
    };
    query_fetch("api/panelLogin", "POST", data).then((res) => {
        console.log(res);
        if (res) {
            if (res.logged) {
                window.location.href = "/panel";
                // console.log("hola");
            }
        }
    });
});
