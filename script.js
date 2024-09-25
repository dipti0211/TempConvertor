document.addEventListener('DOMContentLoaded',function () { 
    const form = document.querySelector('form');
    const result = document.getElementById('result');
    form.addEventListener("submit",function(e){
        e.preventDefault();
        const input = e.target.deg.value;
        const type = e.target.type.value;

        if(type==='fah'){
            if(input >= "-459.67")
            {const cel = Number((parseFloat(input - 32) * 5/9).toFixed(3));
            result.textContent = `${cel}°C`;
        }else{
            result.textContent = "Temperature must be above absolute zero.";
        }
        }else if(type==='cel'){
            if(input >= "-273.15"){
            const fah = Number(parseFloat((input * 9/5) + 32).toFixed(3));
            result.textContent = `${fah}°F`;
            }else{
                result.textContent = "Temperature must be above absolute zero.";
            }
        }else{
            result.textContent = 'Invalid input, Try again...';
        }
    })

 });

 