function Toggle() {
    document.getElementById("btn").addEventListener("click", function(event){
        let x = document.getElementById("lion");
        event.preventDefault();
        
        if (x.style.display === "none") {
            x.style.display = "inline";
        } else {
            x.style.display = "none";
        }
    })
}

Toggle();