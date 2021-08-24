var mouseevent="empty";
var last_x;
var last_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";
width=1;
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e) {
mouseevent="mouse_up";
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e) {
mouseevent="mouse_leave";
}
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e) {
mouseevent="mouse_down";
color=document.getElementById("color").value;
width=document.getElementById("width_of_line").value;
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e) {
current_x=e.clientX-canvas.offsetLeft;
current_y=e.clientY-canvas.offsetTop;
if(mouseevent=="mouse_down") {
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.moveTo(last_x,last_y);
ctx.lineTo(current_x,current_y);
ctx.stroke();
}
last_x=current_x;
last_y=current_y;
}

function clearArea()
 { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }