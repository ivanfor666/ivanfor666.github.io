!(function f() {
    var odiv = document.createElement('div');
    odiv.setAttribute("class", "right_top");
    odiv.innerText = "to";
    odiv.style = `background: #1a59b7;color:#ffffff;overflow: hidden;z-index: 9999;position: fixed;line-height: 30px;text-align:center;width: 30px;height: 30px;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;border-top-left-radius: 4px;border-top-right-radius: 4px;right: 10px;top: 10px;border-radius: 20px;`
    document.body.append(odiv);
    odiv.addEventListener('click', function () {
        var otitle = document.getElementsByTagName("title")[0];
        var dataset = otitle.dataset;
        if (typeof (dataset) === "object") {
            if (dataset.apptype === "1") {
                window.location.href = window.location.href + "router-demo"
                alert(window.location.href + "router-demo")
            } else {
                console.log(window.location)
                window.location.href = window.location.origin;
            }
        }
    })
}())