const selectLanguage = document.getElementById("select-language");

function changeLang() {
    const lang = selectLanguage.value;
    fetch(`/change-lang/${lang}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                window.location.reload();
            }
        });
}

selectLanguage.addEventListener("change", changeLang);

document.addEventListener("DOMContentLoaded", () => {
    let lang = document.cookie.split(";").find((row) => row.startsWith("i18next="));
    if (lang) {
        lang = lang.split("=")[1];
        selectLanguage.value = lang;
    }
});