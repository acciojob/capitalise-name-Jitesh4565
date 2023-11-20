//your JS code here. If required.
document.addEventListener('DOMContentLoaded',function(){
	let input=document.getElementById('fname');
	input.addEventListener('blur',function(){
		this.value=this.value.toUpperCase();
	});
});
