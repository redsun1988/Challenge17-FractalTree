var angel = 1;
var length = 100;
onAngelChanged = (value) => {
    angel = value;
    draw();
}
onLenInput = (value) => {
    length = value;
    draw();
}

drawBranch = (ctx, len) => {
    ctx.beginPath()
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    if (len > 5){
        ctx.translate(0, -len);

        ctx.save();
        ctx.rotate(angel);
        drawBranch(ctx, len * 0.68);
        ctx.restore();

        ctx.save();
        ctx.rotate(-angel);
        drawBranch(ctx, len * 0.68);
        ctx.restore();

    }
}

draw = () => {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle="red";
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.translate(250, 500);
        drawBranch(ctx, length);
        ctx.restore();
}

draw();
