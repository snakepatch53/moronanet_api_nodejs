function handleResize() {
    if (window.innerWidth <= "768") {
        document.body.classList.add("sidebar-minimize");
    } else {
        document.body.classList.remove("sidebar-minimize");
    }
}
const handleBurgerSidebar = () => document.body.classList.toggle("sidebar-minimize");
handleResize();
window.onresize = () => {
    handleResize();
    if (typeof handleHeightTableGift != "undefined") {
        handleHeightTableGift();
    }
};

function logout() {
    query_fetch("api/panelLogout", "POST", null).then((res) => {
        console.log(res);
        if (res) {
            if (res.code == 200) {
                return (location.href = `/panel/login`);
            }
        }
    });
}
