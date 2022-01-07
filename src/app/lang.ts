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
            aboutme[1] = "Lorem ipsum dolor sit amet."
            aboutme[2] = "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            aboutme[3] = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            aboutme[4] = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            aboutme[5] = ""
            aboutme[6] = "Habilidades"
        }
        else
        {
            aboutme[0] = "ABOUT ME";
            aboutme[1] = "Lorem ipsum dolor sit amet."
            aboutme[2] = "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            aboutme[3] = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            aboutme[4] = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            aboutme[5] = ""
            aboutme[6] = "Skills"
        }
        return aboutme;
    }

    public static getprojectText(): string[] {
        let projectText : string[] = [];

        if(document.documentElement.lang == "es")
        {
            projectText[0] = "PROYECTOS";
            projectText[1] = "Proyecto texto 1."
        }
        else
        {
            projectText[0] = "PROJECTS";
            projectText[1] = "Project text 1."
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
