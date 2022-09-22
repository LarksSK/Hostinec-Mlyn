import React from 'react';

class Home extends React.Component{
    render(){
        return(
        <div>

{/* <!-- header start --> */}
<header class="header">
    <div class="container">
        <div class="row justify-content-between align-items-center" >
            <div class="logo">
                <a href=" "><img src="./data/pics/others/logo.png" alt="logo"/></a>
                <span class="logo-text">Hostinec Mlyn</span>
            </div>
            <button type="button" class="nav-toggler">
                <span></span>
            </button>
            <nav class="nav">
<ul>
<li class="nav-item"><a href="#home">Domov</a></li>
<li class="nav-item"><a href="#about">O Nás</a></li>
<li class="nav-item"><a href="#our-menu">Menu</a></li>
<li class="nav-item"><a href="#testimonials">Hodnotenie</a></li>
<li class="nav-item"><a href="#team">Team</a></li>
<li class="nav-item"><a href="#contact">Kontakt</a></li>
</ul>
            </nav>
        </div>
    </div>
</header>



{/* <!-- header end -->
<!-- ------------------------------------- -->
<!-- home section start --> */}

<section class="home-section" id="home">
    <div class="home-bg"></div>
    <div class="container">
        <div class="row min-vh-100 align-items-center">
            <div class="home-text">
                <h1>Hostinec Mlyn</h1>
                <p>Sme rodinná reštaurácia kde sa môžete dobre najesť z kvalitnej
                    slovenskej, ale aj zahraničnej kuchyňe.

                    Plánujete rodinnú oslavu,
                    alebo firemnú akciu? Neváhajte nás kontaktovať. </p>
                <a href="#our-menu" class="btn btn-default">Menu</a>
            </div>
        </div>
    </div>
</section>


{/* <!-- home section end -->
<!-- ------------------------------------------------------ -->
<!-- Ahout section --> */}



{/* <!-- About section end --> */}



        </div>
        );
    }
}

export default Home;
