class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        .navbar {
          background: rgba(0, 0, 0, 0); 
          font-family: 'Antonio', sans-serif;
          position: fixed;
          width: 100%;
          height: 0vw;
          z-index: 1000;
        }
        .navbar-toggler {
          color: white !important;
          position: absolute;
          top:2vw;
          right: 3vw;
        }
        .navbar-nav {
         text-align: right;
         padding-top: 5.5vw;
        }
        .navbar-nav .nav-link {
          color: white !important;
          font-size: 1.8vw;
        }
        .navbar-nav .nav-link:hover {
          color: gray !important; 
        }
        .navbar img {
          width: 130px;
          height: auto;
        }
        </style>

        <header>
        <!--navbar-->
        <nav class="navbar navbar-dark">
         <!-- Toggler/collapsibe Button -->
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
           <span class="navbar-toggler-icon"></span>
         </button>
         <!-- Navbar links -->
         <div class="collapse navbar-collapse" id="collapsibleNavbar">
           <ul class="navbar-nav">
             <li class="nav-item">
               <a class="nav-link" href="index.html">GAIS</a>
             </li>
              <li class="nav-item">
               <a class="nav-link" href="conference.html">Conferences</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="award.html">Award Ceremony</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="">Global Investors Meet</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="contact.html">Tickets</a>
             </li>
           </ul>
         </div>
       </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);