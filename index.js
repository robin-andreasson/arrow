document.querySelector(".arrow-wrapper").addEventListener("click", () => {
    console.log("CLICKED")

    if (document.querySelector(".arrow-wrapper").classList.contains("open"))
        document.querySelector(".arrow-wrapper").classList.remove("open")
    else
        document.querySelector(".arrow-wrapper").classList.add("open")
})