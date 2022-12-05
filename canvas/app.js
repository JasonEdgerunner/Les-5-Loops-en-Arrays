class App
{
    runApplication()
    {
        console.log("hello world!");
        //this really do be a code moment
        let canvas = document.getElementById("canvasId");

        let g = canvas.getContext("2d");
        tekenCirkel(g, x, y);
        g.fillStyle = "red";
        g.arc(400,300,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        for (let g = 0; g < 200; g++){

        console.log(tekenCirkel);
        }
    }
}

let app = new App();
app.runApplication();