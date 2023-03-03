
const scaleNav = (action) => {
    const nav = document.getElementsByTagName("nav")[0];
    switch (action) {
        case 'scale': {
            nav.style.scale = '1.5'
            break;
        }
        case 'descale': {
            nav.style.scale = '1'
            break;
        }
    }
}
const popProject = (popType, projects) => {
    switch (popType) {
        case 'pop': {
            for (let i = 0; i < projects.length; i++) {
                document.getElementById(projects[i]).style.scale = '1.6';
                document.getElementById(projects[i]).style.padding = '0 30px';
                document.getElementById(projects[i]).style.color = 'orange';
            }
            break;
        }
        case 'unpop': { // I just made this word up
            for (let i = 0; i < projects.length; i++) {
                document.getElementById(projects[i]).style.scale = '1';
                document.getElementById(projects[i]).style.padding = '0';
                document.getElementById(projects[i]).style.color = 'white';
            }
            break;
        }
        default: {
            // Yeah this aint ever getting reached :D...
            break;
        }
    }
}
var urlToOpen = null;
const unpop = (project) => {
    document.getElementById(project).style.scale = '1'
    document.getElementById(project).style.margin = '0'
}
const openUrl = (url) => {
    document.getElementById("link-warning").style.display = 'flex';
    document.getElementById("link-url").textContent = 'this will open ' + url;
    urlToOpen = url;
}
const handleLink = (status) => {
    if (status === 'failure') {
        document.getElementById("link-warning").style.display = 'none';
        return;
        // I should've obviously cached this element above into a variable, but it's null for some reason, will fix later
    }
    else {
        document.getElementById("link-warning").style.display = 'none';
        window.open(urlToOpen, "_blank");
    }
}