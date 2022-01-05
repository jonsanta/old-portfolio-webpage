export abstract class Lang {         

    public static getNavbarButtons(): string[] {
        let navbarButtons : string[] = [];

        if(document.documentElement.lang == "es")
        {
            navbarButtons[0] = "Inicio";
            navbarButtons[1] = "Sobre mí";
            navbarButtons[2] = "Proyectos";
            navbarButtons[3] = "Contacto";
        }
        else
        {
            navbarButtons[0] = "Home";
            navbarButtons[1] = "About";
            navbarButtons[2] = "Projects";
            navbarButtons[3] = "Contact";
        }
        return navbarButtons;
    }

    public static getAboutMe(): string[] {
        let aboutme : string[] = [];

        if(document.documentElement.lang == "es")
        {
            aboutme[0] = "SOBRE MÍ";
            aboutme[1] = "Soy Jon."
            aboutme[2] = "Web Developer / Game Developer"
            aboutme[3] = "Tengo experiencia en Front End con Angular. Responsive Web Design. Manejo JS y TS. 5 años de experiencia con Unity3D y lenguajes como C# y Java."
            aboutme[4] = "Me defino como resolutivo y autodidacta. Siempre busco aprender nuevas tecnologías y mejorar las ya conocidas. Muchas ganas de trabajar en equipo y demostrar mi valia."
            aboutme[5] = "Actualmente estoy terminando el grado superior de DAM para obtener el titulo."
            aboutme[6] = "Habilidades"
        }
        else
        {
            aboutme[0] = "ABOUT ME";
            aboutme[1] = "I'm Jon,"
            aboutme[2] = "Web Developer / Game Developer"
            aboutme[3] = "I'm experienced in Front End with Angular. Responsive Web Design. I work with TS but also JS. I've got 5 years experience working with Unity3D, C# and Java."
            aboutme[4] = "I define myself as resolute and autodidact person. I'm interested in learning new techs and improving the already known. Looking to prove myself as a member of a team."
            aboutme[5] = "I'm actually studying Multiplatform App Development degree to oficially prove my knowledge."
            aboutme[6] = "Skills"
        }
        return aboutme;
    }

    public static getprojectText(): string[] {
        let projectText : string[] = [];

        if(document.documentElement.lang == "es")
        {
            projectText[0] = "PROYECTOS";
            projectText[1] = "Aqui puedes ver los proyectos en los que he trabajado."
        }
        else
        {
            projectText[0] = "PROJECTS";
            projectText[1] = "Here you can see the projects I have worked on."
        }
        return projectText;
    }

    public static getProjectButtons() : string[]{
        let buttons : string[] = [];

        if(document.documentElement.lang == "es")
        {
            buttons[0] = "Visualizar";
            buttons[1] = "Repositorio"
        }
        else
        {
            buttons[0] = "Preview";
            buttons[1] = "Repository"
        }
        return buttons;
    }

    public static getContact(): string{
        let contact : string;

        if(document.documentElement.lang == "es")
        {
            contact = "CONTACTO";
        }
        else
        {
            contact = "CONTACT";
        }
        return contact;
    }

    public static getFooter(): string{
        let footer : string;

        if(document.documentElement.lang == "es")
        {
            footer = "Desarrollado y diseñado por Jon Santamaria Zamora.";
        }
        else
        {
            footer = "Developed and designed by Jon Santamaria Zamora.";
        }
        return footer;
    }
}
