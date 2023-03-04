let a=prompt("enter your time");
let date=new Date();
let time=date.setTime(a);
if (time<=10){
	document.write("morning");
}
else if (time<=15){
	document.write("afternoon");
}
else if (time<=20){
	document.write("evening");
}
else if (time<=23){
	document.write("night");
}