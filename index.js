// === show menu ===
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
    
      
    //  === validate if constant extist ===

      if(navToggle){
    
            
    
        navToggle.addEventListener('click', function(){
            navMenu.classList.add('show-menu')
        })
        
      }

    //   === Menu Hidden ===

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

        // === Remove Menu Mobile ===
    const navLink = document.querySelectorAll('.nav_link')
    
    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')

        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))


        // === Qualification ===

        const tabs = document.querySelectorAll('[data-target]'),
           tabContents = document.querySelectorAll('[data-content]')

        tabs.forEach(tab => {
            tab.addEventListener('click', () =>{
                const target = document.querySelector(tab.dataset.target)

                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('qualification_active')
                })
                target.classList.add('qualification_active')

                tab.forEach(tab => {
                    tab.classList.remove('qualification_active')
                })
                tab.classList.add('qualification_active')
            })
        })

         // === pagination ===

         let swiperProjects= new Swiper(".projects_container", {
            loop: true,
            spaceBetween: 24,

            navigation: {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            breakpoints: {
                1200: {
                    slidesPerView: 1,
                    spaceBetween:-56,
                },
                // 640: {
                //     slidesPerView: 1,
                //     spaceBetween:20,
                // },
                // 768: {
                //     slidesPerView: 1,
                //     spaceBetween:40,
                // },
                // 1024: {
                //     slidesPerView: 1,
                //     spaceBetween:50,
                // }
            }


      
         });



