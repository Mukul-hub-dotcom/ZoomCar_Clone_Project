document.querySelector('.atm').addEventListener('click',()=>{
    document.querySelector('.pay').style.opacity = '0.3';
    document.querySelector('body').style.backgroundColor = 'gray';

    var caratmcontainer = document.createElement('div');
    var cimg = document.createElement('img');
    cimg.style.width = '20px'
    cimg.style.height = '20px'
    cimg.style.marginTop = '-80px'
    cimg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHy0XQ6XCL48hjJpf4Qjbp1X_Ou83U1Td4Q&usqp=CAU'

    cimg.addEventListener('click', ()=>{
        window.location.href = 'carPayment.html';
    })
    
    caratmcontainer.classList = 'caratmcontainer';
    
    var caratmbox = document.createElement('div');
    caratmbox.append(cimg)
    caratmbox.classList = 'caratmbox';

    var caratmbox1 = document.createElement('div');
    caratmbox1.classList ='caratmbox1';
    var caratmdetails = document.createElement('div');
    caratmdetails.classList = 'caratmdetails';
    var caratmh4 = document.createElement('h3');
    caratmh4.innerText = "Enter Card Details";
    var caratmh6 = document.createElement('h5');
    var obj = JSON.parse(localStorage.getItem('amount'));
    caratmh6.innerText = `Amount: ₹ ${obj.amount}`;
    caratmdetails.append(caratmh4, caratmh6);
    
    var caratmimg = document.createElement('img');
    caratmimg.src = 'https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png';
    caratmbox1.append(caratmdetails, caratmimg);
    
    var caratmbox2 = document.createElement('div');
    caratmbox2.classList = 'caratmbox2';
    var caratminput = document.createElement('input');
    caratminput.classList = 'caratminput';
    caratminput.setAttribute('placeholder', 'Card Number');
    caratminput.setAttribute('maxlength', '16');
    caratminput.setAttribute('minlength', '16');
    // caratminput.setAttribute('min', '16');
    caratminput.setAttribute('type', 'number');
    
    caratmbox2.append(caratminput);

    var caratmbox3 = document.createElement('div');
    caratmbox3.classList = 'caratmbox3';

    var caratminput1 = document.createElement('input');
    caratminput1.setAttribute('placeholder', 'Expiry (MM/YY)');
    var caratminput2 = document.createElement('input');
    caratminput2.setAttribute('placeholder', 'Card Number');
    caratmbox3.append(caratminput1, caratminput2);

    var btn = document.createElement('button');
    btn.classList = 'btnp'
    btn.innerText = `PAY INR ${obj.amount}`

    caratmbox.append(caratmbox1, caratmbox2, caratmbox3, btn);
    caratmcontainer.append(caratmbox);

    document.querySelector('body').append(caratmcontainer);
    // document.querySelector('bod').style.opacity = '1';
    btn.addEventListener('click', ()=>{
        var a = document.querySelector('.caratminput').value;

        if(a.length !== 16){
            alert("Not Valid Card Number");
            return;
        }
        window.location.href = 'carotp.html'
    })

})

document.querySelector('.upi').addEventListener('click', ()=>{
    document.querySelector('.pay').style.opacity = '0.3';
    document.querySelector('body').style.backgroundColor = 'gray';

    var caratmcontainer = document.createElement('div');
    var cimg = document.createElement('img');
    cimg.style.width = '20px'
    cimg.style.height = '20px'
    cimg.style.marginTop = '-80px'
    cimg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHy0XQ6XCL48hjJpf4Qjbp1X_Ou83U1Td4Q&usqp=CAU'

    cimg.addEventListener('click', ()=>{
        window.location.href = 'carPayment.html';
    })
    
    caratmcontainer.classList = 'caratmcontainer';
    
    var caratmbox = document.createElement('div');
    caratmbox.append(cimg)
    caratmbox.classList = 'caratmbox';

    var caratmbox1 = document.createElement('div');
    caratmbox1.classList ='caratmbox1';
    var caratmdetails = document.createElement('div');
    caratmdetails.classList = 'caratmdetails';
    var caratmh4 = document.createElement('h3');
    caratmh4.innerText = "Enter Card Details";
    var caratmh6 = document.createElement('h5');
    var obj = JSON.parse(localStorage.getItem('amount'));
    caratmh6.innerText = `Amount: ₹ ${obj.amount}`;
    caratmdetails.append(caratmh4, caratmh6);
    
    var caratmimg = document.createElement('img');
    caratmimg.src = 'https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png';
    caratmbox1.append(caratmdetails, caratmimg);
    
    var caratmbox2 = document.createElement('div');
    caratmbox2.classList = 'caratmbox2';
    var caratminput = document.createElement('input');
    caratminput.classList = 'caratminput';
    caratminput.style.width = '78%'
    caratminput.setAttribute('placeholder', 'Enter Upi Id');
    caratminput.setAttribute('type', 'number');
    var btn = document.createElement('button');
    btn.classList = 'btnp'
    btn.innerText = `PAY INR ${obj.amount}`
    btn.style.width = '80%'
    caratmbox2.append(caratminput, btn);

    

    caratmbox.append(caratmbox1, caratmbox2);
    caratmcontainer.append(caratmbox);

    document.querySelector('body').append(caratmcontainer);
    // document.querySelector('bod').style.opacity = '1';
    btn.addEventListener('click', ()=>{
        var a = document.querySelector('.caratminput').value;

        if(a.length !== 16){
            alert("Not Valid Card Number");
            return;
        }
        window.location.href = 'carotp.html';
    })

})
document.querySelector('.mw').addEventListener('click', ()=>{
    document.querySelector('.pay').style.opacity = '0.3';
    document.querySelector('body').style.backgroundColor = 'gray';

    var caratmcontainer = document.createElement('div');
    var cimg = document.createElement('img');
    cimg.style.width = '20px'
    cimg.style.height = '20px'
    cimg.style.marginTop = '-80px'
    cimg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHy0XQ6XCL48hjJpf4Qjbp1X_Ou83U1Td4Q&usqp=CAU'

    cimg.addEventListener('click', ()=>{
        window.location.href = 'carPayment.html';
    })
    
    caratmcontainer.classList = 'caratmcontainer';
    
    var caratmbox = document.createElement('div');
    caratmbox.append(cimg)
    caratmbox.classList = 'caratmbox';

    var caratmbox1 = document.createElement('div');
    caratmbox1.classList ='caratmbox1';
    var caratmdetails = document.createElement('div');
    caratmdetails.classList = 'caratmdetails';
    var caratmh4 = document.createElement('h3');
    caratmh4.innerText = "Enter Card Details";
    var caratmh6 = document.createElement('h5');
    var obj = JSON.parse(localStorage.getItem('amount'));
    caratmh6.innerText = `Amount: ₹ ${obj.amount}`;
    caratmdetails.append(caratmh4, caratmh6);
    
    var caratmimg = document.createElement('img');
    caratmimg.src = 'https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png';
    caratmbox1.append(caratmdetails, caratmimg);
    
    var caratmbox2 = document.createElement('div');
    caratmbox2.classList = 'caratmbox2';
    var caratminput = document.createElement('input');
    var caratmiimg = document.createElement('img');
    caratmiimg.style.width = '60px'
    caratmiimg.src = 'https://img1.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070';
    caratminput.classList = 'caratminput';
    caratminput.style.width = '78%'
    caratminput.setAttribute('placeholder', 'Enter Upi Id');
    caratminput.setAttribute('type', 'number');
    var btn = document.createElement('button');
    btn.classList = 'btnp'
    btn.innerText = `PAY INR ${obj.amount}`
    btn.style.width = '80%'
    caratmbox2.append(caratmiimg, caratminput, btn);

    

    caratmbox.append(caratmbox1, caratmbox2);
    caratmcontainer.append(caratmbox);

    document.querySelector('body').append(caratmcontainer);
    // document.querySelector('bod').style.opacity = '1';
    btn.addEventListener('click', ()=>{
        var a = document.querySelector('.caratminput').value;

        if(a.length !== 16){
            alert("Not Valid Card Number");
            return;
        }
        window.location.href = 'carotp.html';
    })

})
document.querySelector('.nb').addEventListener('click', ()=>{
    document.querySelector('.pay').style.opacity = '0.3';
    document.querySelector('body').style.backgroundColor = 'gray';

    var caratmcontainer = document.createElement('div');
    var cimg = document.createElement('img');
    cimg.style.width = '20px'
    cimg.style.height = '20px'
    cimg.style.marginTop = '-80px'
    cimg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHy0XQ6XCL48hjJpf4Qjbp1X_Ou83U1Td4Q&usqp=CAU'

    cimg.addEventListener('click', ()=>{
        window.location.href = 'carPayment.html';
    })
    
    caratmcontainer.classList = 'caratmcontainer';
    
    var caratmbox = document.createElement('div');
    caratmbox.append(cimg)
    caratmbox.classList = 'caratmbox';

    var imgcar = document.createElement('img');
    imgcar.src = './img.png';
    imgcar.style.width = '100%'
    caratmbox.append(imgcar);
    caratmcontainer.append(caratmbox);

    document.querySelector('body').append(caratmcontainer);
    // document.querySelector('bod').style.opacity = '1';
    btn.addEventListener('click', ()=>{
        var a = document.querySelector('.caratminput').value;

        if(a.length !== 16){
            alert("Not Valid Card Number");
            return;
        }
        window.location.href = 'carotp.html';
    })

})