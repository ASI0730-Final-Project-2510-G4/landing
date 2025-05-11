document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a.nav-link');
  const sections = document.querySelectorAll('section');
  const subNav = document.getElementById('subNav');

  // Smooth scroll para enlaces
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Scroll listener para mostrar sub-nav y activar links
  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSectionId) {
        link.classList.add('active');
      }
    });

    // Mostrar el subnav cuando se baja cierto scroll
    if (window.scrollY > 300) {
      subNav.classList.add('show');
    } else {
      subNav.classList.remove('show');
    }

    // Añadir/quitar clase para fondo dinámico
    if (window.scrollY > 50) {
      subNav.classList.add('scrolled');
    } else {
      subNav.classList.remove('scrolled');
    }
  });
});

// Sidebar toggle
function showSidebar() {
  document.querySelector('.sidebar').style.display = 'flex';
}

function hideSidebar() {
  document.querySelector('.sidebar').style.display = 'none';
}

// Toggle FAQ respuestas
function toggleAnswer(faq) {
  const answer = faq.querySelector('.faq-answer');
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Efecto 3D de movimiento según el mouse en las cards
const cards = document.querySelectorAll('.card-descripcion');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;
    

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease';
  });
});

function changeLanguage() {
  const lang = document.getElementById("language-selector").value;
  document.getElementById("footer-text").innerHTML = "&copy; 2025 CreatiLink";

  if (lang === "es") {
    // Footer
    document.getElementById("follow-us-text").textContent = "Síguenos";
    document.getElementById("login-text").textContent = "Iniciar sesión";
    document.getElementById("start-text").textContent = "Empezar";

    // Nav
    document.getElementById("nav-description").textContent = "Descripción";
    document.getElementById("nav-benefits").textContent = "Beneficios";
    document.getElementById("nav-about").textContent = "Nosotros";
    document.getElementById("nav-faq").textContent = "Preguntas frecuentes";
    document.getElementById("nav-contact").textContent = "Contacto";

    // Descripción General
    document.getElementById("card1-title").textContent = "Búsqueda inteligente por especialidad y experiencia";
    document.getElementById("card1-text").textContent = "Encuentra al diseñador perfecto filtrando por categoría—gráfico, moda o interiores—años de experiencia, ubicación y valoraciones de clientes.";

    document.getElementById("card2-title").textContent = "Portafolios profesionales autogestionados";
    document.getElementById("card2-text").textContent = "Los diseñadores controlan sus propios perfiles: suben imágenes, describen proyectos pasados, establecen precios y disponibilidad.";

    document.getElementById("card3-title").textContent = "Mensajería directa, privada y coordinación";
    document.getElementById("card3-text").textContent = "Coordina detalles como el alcance, el calendario y el presupuesto en tiempo real mediante nuestro chat seguro.";

     // Beneficios
  document.getElementById("benefit1-title").textContent = "Acceso a Talento Especializado";
  document.getElementById("benefit1-text").textContent = "Permite encontrar profesionales en áreas específicas como diseño gráfico, diseño de interiores o moda, incluso si no trabajan en establecimientos físicos o empresas tradicionales.";

  document.getElementById("benefit2-title").textContent = "Promoción Profesional Eficaz";
  document.getElementById("benefit2-text").textContent = "Facilita a los diseñadores mostrar su experiencia, portfolio y cualificaciones, ayudándoles a destacarse y atraer nuevos clientes sin necesidad de intermediarios.";

  document.getElementById("benefit3-title").textContent = "Coordinación Rápida y Personalizada";
  document.getElementById("benefit3-text").textContent = "Ofrece un canal directo entre cliente y diseñador para acordar precio, lugar y tiempo, asegurando acuerdos claros y eficaces.";


   // Nosotros
   document.getElementById("about-title").textContent = "Nosotros";
   document.getElementById("about-text").innerHTML =
     "TechNova es la creadora de CreatiLink, una plataforma web diseñada para conectar diseñadores independientes de distintas áreas con personas y empresas que necesitan sus servicios, de forma sencilla, directa y segura."
     + "<br><br>"
     + "Nuestra misión es empoderar a los diseñadores freelance y brindarles herramientas para hacer visible su trabajo, construir una reputación profesional sólida y acceder a oportunidades reales en su campo."
     + "<br><br>"
     + "Nuestra visión es convertirnos en la red profesional de diseñadores más confiable y dinámica del mundo freelance, siendo el puente entre el talento y la necesidad en cualquier industria.";
 
   document.getElementById("team-title").textContent = "Miembros del equipo";
   document.getElementById("role-1").textContent = "Líder del equipo de desarrollo";
   document.getElementById("role-2").textContent = "Desarrollador";
   document.getElementById("role-3").textContent = "Desarrollador";
   document.getElementById("role-4").textContent = "Desarrollador";
   document.getElementById("role-5").textContent = "Desarrollador";


    // FAQ
  document.getElementById("faq-title").textContent = "Preguntas Frecuentes";

  document.getElementById("faq1-question").textContent = "¿Qué es CreatiLink?";
  document.getElementById("faq1-answer").textContent = "CreatiLink es una plataforma web creada por estudiantes de la UPC que conecta diseñadores independientes con clientes que necesitan servicios de diseño. Su objetivo es proporcionar visibilidad y oportunidades laborales a diseñadores con formación técnica o académica que, de otro modo, tendrían dificultades para ingresar al mercado formal. La plataforma permite mostrar portafolios, chatear, coordinar servicios y calificar experiencias. También es un proyecto autosustentable y escalable, con el potencial de integrar tecnologías como pagos en línea e inteligencia artificial.";

  document.getElementById("faq2-question").textContent = "¿Cómo puedo registrarme?";
  document.getElementById("faq2-answer").textContent = "Para registrarte en CreatiLink, debes ingresar a la plataforma, hacer clic en 'Registrarse', seleccionar si eres diseñador o cliente, completar tus datos, aceptar los términos y verificar tu correo electrónico. Luego, podrás iniciar sesión y usar la aplicación.";

  document.getElementById("faq3-question").textContent = "¿Qué beneficios ofrece CreatiLink?";
  document.getElementById("faq3-answer").textContent = "CreatiLink ofrece visibilidad y oportunidades laborales a los diseñadores, permitiéndoles mostrar sus portafolios y recibir calificaciones. Para los clientes, facilita la búsqueda y contacto con diseñadores de calidad. También es una plataforma escalable con el potencial de integrar tecnologías modernas.";

  document.getElementById("faq4-question").textContent = "¿Es fácil de usar?";
  document.getElementById("faq4-answer").textContent = "Sí, CreatiLink es fácil de usar, con una interfaz sencilla que permite a los diseñadores crear rápidamente sus perfiles y a los clientes encontrar y contactar a los diseñadores de manera directa y eficiente.";

  document.getElementById("faq5-question").textContent = "¿Cómo puedo contactar a un freelancer directamente?";
  document.getElementById("faq5-answer").textContent = "Para contactar a un freelancer en CreatiLink, busca su perfil, revisa su portafolio y calificaciones, y utiliza el botón 'Contactar' o el chat para enviar un mensaje y coordinar los detalles del proyecto.";

  document.getElementById("faq6-question").textContent = "¿CreatiLink cobra alguna comisión por transacción?";
  document.getElementById("faq6-answer").textContent = "Actualmente, CreatiLink no cobra comisiones por transacciones. La plataforma se financia principalmente a través de publicidad y promoción de diseñadores destacados, lo que permite el acceso gratuito para todos los usuarios. Sin embargo, en el futuro, estamos considerando integrar pasarelas de pago para facilitar las transacciones directas entre diseñadores y clientes. En ese caso, evaluaremos la implementación de tarifas para cubrir los costos operativos y garantizar la sostenibilidad de la plataforma. Por ahora, puedes disfrutar de CreatiLink sin preocuparte por tarifas adicionales.";

  document.getElementById("faq7-question").textContent = "¿Cómo puedo asegurarme de que un freelancer es confiable?";
  document.getElementById("faq7-answer").textContent = "Para asegurarte de que un freelancer es confiable en CreatiLink, revisa su perfil, portafolio y las calificaciones de otros clientes. Verifica su experiencia, establece comunicación directa para aclarar dudas y asegúrate de tener un acuerdo claro sobre el proyecto.";

  document.getElementById("faq8-question").textContent = "¿Puedo contratar freelancers para trabajos a largo plazo?";
  document.getElementById("faq8-answer").textContent = "Sí, en CreatiLink puedes contratar freelancers para proyectos a largo plazo, acordando los términos del contrato, tarifas y plazos, y evaluando su trabajo para asegurar la calidad continua.";

  document.getElementById("faq9-question").textContent = "¿Existen oportunidades para freelancers en diferentes industrias?";
  document.getElementById("faq9-answer").textContent = "Sí, CreatiLink ofrece oportunidades freelance en una variedad de industrias, especialmente en diseño gráfico, diseño web y otros campos creativos, permitiendo que los freelancers ofrezcan sus servicios en múltiples sectores.";


    // Contacto
    document.getElementById("contact-email").textContent = "KSI@gmail.com";
    document.getElementById("contact-phone").textContent = "+01 7745452";
    document.getElementById("contact-mobile").textContent = "+51 949 313 121";
  
    document.getElementById("contact-form-title").textContent = "Contacto";
    document.getElementById("contact-submit").textContent = "Enviar";

     // Lanzar
  document.getElementById("launch-title").textContent = "Impulsa tu carrera creativa hoy";
  document.getElementById("launch-subtitle").textContent = "Únete a nuestra comunidad de diseñadores y comienza a mostrar tu talento al mundo.";
  document.getElementById("get-started-btn").textContent = "EMPEZAR";

  document.getElementById("hero-title").innerHTML = "<b>Impulsa tu carrera creativa y conéctate con oportunidades en <span class='highlight'>CreatiLink</span></b>";
  document.getElementById("hero-subtitle").textContent = "Una plataforma especializada para diseñadores gráficos, de moda y de interiores para mostrar portfolios, ofrecer servicios y colaborar con clientes que aprecian tu talento.";
  document.getElementById("hero-btn").textContent = "Regístrate";
  
  } else if (lang === "en") {
    // Footer
    document.getElementById("follow-us-text").textContent = "Follow us";
    document.getElementById("login-text").textContent = "Log in";
    document.getElementById("start-text").textContent = "Get Started";

    // Nav
    document.getElementById("nav-description").textContent = "Description";
    document.getElementById("nav-benefits").textContent = "Benefits";
    document.getElementById("nav-about").textContent = "About Us";
    document.getElementById("nav-faq").textContent = "FAQ";
    document.getElementById("nav-contact").textContent = "Contact";

    // General Description
    document.getElementById("card1-title").textContent = "Smart Search by Design Specialty & Experience";
    document.getElementById("card1-text").textContent = "Find the perfect designer by filtering on category—graphic, fashion or interiors—years of experience, location and client ratings.";

    document.getElementById("card2-title").textContent = "Self-Managed Professional Portfolios";
    document.getElementById("card2-text").textContent = "Designers control their own profiles: upload images, describe past projects, set pricing and availability.";

    document.getElementById("card3-title").textContent = "Direct, Private Messaging & Coordination";
    document.getElementById("card3-text").textContent = "Coordinate details like scope, schedule and budget in real time via our secure chat.";


    document.getElementById("benefit1-title").textContent = "Access to Specialized Talent";
  document.getElementById("benefit1-text").textContent = "Enables finding professionals in specific fields such as graphic, interior, or fashion design—even if they don't work in traditional offices or companies.";

  document.getElementById("benefit2-title").textContent = "Effective Professional Promotion";
  document.getElementById("benefit2-text").textContent = "Helps designers showcase their experience, portfolios, and qualifications, allowing them to stand out and attract new clients without intermediaries.";

  document.getElementById("benefit3-title").textContent = "Fast and Personalized Coordination";
  document.getElementById("benefit3-text").textContent = "Provides a direct channel between client and designer to agree on price, location, and timing, ensuring clear and effective arrangements.";




  document.getElementById("about-title").textContent = "About Us";
  document.getElementById("about-text").innerHTML =
    "TechNova is the creator of CreatiLink, a web platform designed to connect independent designers from different areas with people and companies that need their services, in a simple, direct, and secure way."
    + "<br><br>"
    + "Our mission is to empower freelance designers and provide them with tools to make their work visible, build a solid professional reputation, and access real opportunities in their field."
    + "<br><br>"
    + "Our vision is to become the most reliable and dynamic professional network of designers in the freelance world, being the bridge between talent and need in any industry.";

  document.getElementById("team-title").textContent = "Team Members";
  document.getElementById("role-1").textContent = "Developer Team Leader";
  document.getElementById("role-2").textContent = "Developer";
  document.getElementById("role-3").textContent = "Developer";
  document.getElementById("role-4").textContent = "Developer";
  document.getElementById("role-5").textContent = "Developer";
  

    // FAQ
    document.getElementById("faq-title").textContent = "Frequently Asked Questions";

    document.getElementById("faq1-question").textContent = "What is CreatiLink?";
    document.getElementById("faq1-answer").textContent = "CreatiLink is a web platform created by UPC students that connects independent designers with clients in need of design services. Its goal is to provide visibility and job opportunities to designers with technical or academic training who would otherwise struggle to enter the formal market. The platform allows for displaying portfolios, chatting, coordinating services, and rating experiences. It is also a self-sustaining and scalable project, with the potential to integrate technologies such as online payments and artificial intelligence.";
  
    document.getElementById("faq2-question").textContent = "How can I register?";
    document.getElementById("faq2-answer").textContent = "To register with CreatiLink, you must log in to the platform, click 'Sign up', select whether you are a designer or client, fill in your details, accept the terms, and verify your email address. You can then log in and use the app.";
  
    document.getElementById("faq3-question").textContent = "What benefits does CreatiLink offer?";
    document.getElementById("faq3-answer").textContent = "CreatiLink offers visibility and job opportunities to designers, allowing them to showcase their portfolios and receive ratings. For clients, it makes it easier to find and contact quality designers. It's also a scalable platform with the potential to integrate modern technologies.";
  
    document.getElementById("faq4-question").textContent = "Is it easy to use?";
    document.getElementById("faq4-answer").textContent = "Yes, CreatiLink is easy to use, with a simple interface that allows designers to quickly create profiles and clients to find and contact designers directly and efficiently.";
  
    document.getElementById("faq5-question").textContent = "How can I contact a freelancer directly?";
    document.getElementById("faq5-answer").textContent = "To contact a freelancer on CreatiLink, find their profile, review their portfolio and qualifications, and use the 'Contact' button or chat to send a message and coordinate project details.";
  
    document.getElementById("faq6-question").textContent = "Does CreatiLink charge any commission per transaction?";
    document.getElementById("faq6-answer").textContent = "Currently, CreatiLink does not charge transaction fees. The platform is primarily funded through advertising and promotion of featured designers, which allows for free access for all users. However, in the future, we are considering integrating payment gateways to facilitate direct transactions between designers and clients. In that case, we will evaluate the implementation of fees to cover operating costs and ensure the platform's sustainability. For now, you can enjoy CreatiLink without worrying about additional fees.";
  
    document.getElementById("faq7-question").textContent = "How can I make sure a freelancer is reliable?";
    document.getElementById("faq7-answer").textContent = "To ensure a freelancer is trustworthy on CreatiLink, review their profile, portfolio, and other client ratings. Verify their experience, establish direct communication to clarify any concerns, and make sure you have a clear agreement on the project.";
  
    document.getElementById("faq8-question").textContent = "Can I hire freelancers for long-term work?";
    document.getElementById("faq8-answer").textContent = "Yes, at CreatiLink you can hire freelancers for long-term projects, agreeing on contract terms, rates, and deadlines, and rating their work to ensure ongoing quality.";
  
    document.getElementById("faq9-question").textContent = "Are there opportunities for freelancers in different industries?";
    document.getElementById("faq9-answer").textContent = "Yes, CreatiLink offers freelance opportunities in a variety of industries, especially graphic design, web design, and other creative fields, allowing freelancers to offer their services in multiple fields.";
  
     // Contact
  document.getElementById("contact-email").textContent = "KSI@gmail.com";
  document.getElementById("contact-phone").textContent = "+01 7745452";
  document.getElementById("contact-mobile").textContent = "+51 949 313 121";

  document.getElementById("contact-form-title").textContent = "Contact";
  document.getElementById("contact-submit").textContent = "Submit";

  // Lanzar
  document.getElementById("launch-title").textContent = "Boost Your Creative Career Today";
  document.getElementById("launch-subtitle").textContent = "Join our community of designers and start showcasing your talent to the world.";
  document.getElementById("get-started-btn").textContent = "GET STARTED";

   // Hero
   document.getElementById("hero-title").innerHTML = "<b>Boost your creative career and connect with opportunities at <span class='highlight'>CreatiLink</span></b>";
   document.getElementById("hero-subtitle").textContent = "A specialized platform for graphic, fashion and interior designers to showcase portfolios, offer services and collaborate with clients who appreciate your talent.";
   document.getElementById("hero-btn").textContent = "Sign up";
}}


