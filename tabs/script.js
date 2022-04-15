const tabs = document.querySelectorAll("[data-tab-target]");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        for (let t of tabs) {
            const tab_content = document.getElementById(t.getAttribute("data-tab-target"));
            tab_content.classList.remove("active-content");
            t.classList.remove("active-tab");
            t.classList.add("deactive-tab");
            tab_content.classList.add("deactive-content");
        }
        tab_content = document.getElementById(tab.getAttribute("data-tab-target"));
        tab_content.classList.remove("deactive-content");
        tab_content.classList.add("active-content");
        tab.classList.remove("deactive-tab");
        tab.classList.add("active-tab");
    })
});
