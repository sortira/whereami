window.onload = function () {
    // Create the floating box element
    const floatingBox = document.createElement("div");
    floatingBox.id = "floatingBox";

    // Box content (text and buttons)
    floatingBox.innerHTML = `
        <div class="box-content flex-wrap">
            <p class="lead">If you are the judge, which one are you?</p>
            <button class="btn btn-custom me-3" id="btnJudge1">UI/UX Lead</button>
            <button class="btn btn-custom me-3" id="btnJudge2">Dev Lead</button>
            <button class="btn btn-custom me-3" id="btnJudge3">None</button>
        </div>
    `;

    // Append the floating box to the body
    document.body.appendChild(floatingBox);

    // Add event listeners to the buttons to hide the box on click
    document.getElementById("btnJudge1").onclick = function () {
        window.location.href = 'uiux.html';
    };
    document.getElementById("btnJudge2").onclick = function () {
        window.location.href = 'devlead.html';
    };
    document.getElementById("btnJudge3").onclick = function () {
        floatingBox.style.display = "none";
    };
};
