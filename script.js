/*Animação da primeira tela */

document.addEventListener("DOMContentLoaded", function() {
    function addAnimation() {
        var topoSite = document.querySelector('.topo-do-site');
        topoSite.classList.add('fade-in', 'slide-up');
    }

    setTimeout(addAnimation, 500);
});


/*Ocultar o Navbar*/
/*
document.addEventListener("DOMContentLoaded", function() {
    var topoSite = document.querySelector('.topo-do-site');
    var navbar = document.querySelector('.navbar');
    var triggerHeight = 710; //Alterar o momento
    window.onscroll = function() {
        if (document.body.scrollTop > triggerHeight || document.documentElement.scrollTop > triggerHeight) {
            navbar.style.top = "0";
            topoSite.style.paddingTop = navbar.clientHeight + "px";
        } else {
            navbar.style.top = "-" + navbar.clientHeight + "px";
            topoSite.style.paddingTop = "0";
        }
    };
});*/



/*Navbar*/

document.addEventListener("DOMContentLoaded", function() {
    var topoSite = document.querySelector('.topo-do-site');
    var navbar = document.querySelector('.navbar');
    var mobileTriggerHeight = 2100; 
    var desktopTriggerHeight = 720; 

    function adjustNavbar() {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        if (window.innerWidth < 1020) {
            
            if (scrollTop > mobileTriggerHeight) {
                navbar.style.top = "0";
                topoSite.style.paddingTop = navbar.clientHeight + "px";
            } else {
                navbar.style.top = "-" + navbar.clientHeight + "px";
                topoSite.style.paddingTop = "0";
            }
        } else {
            
            if (scrollTop > desktopTriggerHeight) {
                navbar.style.top = "0";
                topoSite.style.paddingTop = navbar.clientHeight + "px";
            } else {
                navbar.style.top = "-" + navbar.clientHeight + "px";
                topoSite.style.paddingTop = "0";
            }
        }
    }

    function handleResize() {
        adjustNavbar();
    }

    window.onscroll = adjustNavbar;
    window.onresize = handleResize; // Redefine o comportamento quando a janela é redimensionada
});





/*Mostar detalhes experiencia */

document.addEventListener('DOMContentLoaded', function () {
    var jobEntries = document.querySelectorAll('.job-entry');

    jobEntries.forEach(function (entry) {
        var details = entry.querySelector('.job-details');
        var moreDetails = entry.querySelector('.job-more-details');
        var toggleButton = document.createElement('button');
        toggleButton.textContent = 'Mostrar Detalhes';
        toggleButton.className = 'toggle-details';

        toggleButton.addEventListener('click', function () {
            moreDetails.classList.toggle('show-details');
            toggleButton.textContent = moreDetails.classList.contains('show-details') ? 'Ocultar Detalhes' : 'Mostrar Detalhes';
        });

        entry.appendChild(toggleButton);
    });
});

