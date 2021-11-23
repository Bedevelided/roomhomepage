const slideImagesMobile = document.querySelectorAll('.desktop-hidden');
const slideImagesDesktop = document.querySelectorAll('.mobile-hidden');
const slideText = document.querySelectorAll('.description__hero');
const slider = document.querySelectorAll('.slide');

let links = document.querySelectorAll('.navbar__list ul li');



slider.forEach((slide)=>{
    slide.addEventListener('click' , function(e){
        let currentImages = document.querySelectorAll('img.active');
        let currentText = document.querySelector('.description__hero.active');
        if(this.classList.contains('nextslide')){
            currentImages.forEach(current =>{
                if(current.classList.contains('active') && current.nextElementSibling){
                    current.classList.remove('active') ;
                    current.nextElementSibling.classList.add('active')
                    currentText.classList.remove('active');
                    currentText.nextElementSibling.classList.add('active')

                    
                }else{
                    slideImagesDesktop[0].classList.add('active');
                    slideImagesMobile[0].classList.add('active')
                    currentText.classList.remove('active');
                    slideText[0].classList.add('active');
                    current.classList.remove('active');
                   
                }
            })
        }else if(this.classList.contains('previousslide')){
            currentImages.forEach(current =>{
                if(current.classList.contains('active') && current.previousElementSibling){
                    current.classList.remove('active');
                    current.previousElementSibling.classList.add('active');
                    currentText.classList.remove('active');
                    currentText.previousElementSibling.classList.add('active')
                }else{
                    slideImagesDesktop[slideImagesDesktop.length - 1].classList.add('active');
                    slideImagesMobile[slideImagesMobile.length - 1].classList.add('active')
                    currentText.classList.remove('active');
                    slideText[slideText.length - 1].classList.add('active');
                    current.classList.remove('active');
                }
            })
        }
        
    })
})




// mobile menu
const hamburger = document.getElementById('hamburger');


const sideNav = document.querySelector('aside.side__nav')
const closesidenav = document.getElementById('closenav');
hamburger.addEventListener('click' ,function(){
    sideNav.classList.add('slide');
    
})
closesidenav.addEventListener('click' ,function(){
    sideNav.classList.remove('slide');
})


// desktop link active{
links.forEach((link)=>{
    link.addEventListener('click' ,function(event){
        links.forEach((all)=>{
            all.classList.remove('current');
            event.currentTarget.classList.add('current');  
        })
       
    })
   
})