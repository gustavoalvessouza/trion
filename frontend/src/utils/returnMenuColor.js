export const returnMenuColor = pathname => {
    switch (String(pathname)) {
        case "/":
            return 'rgb(74, 177, 152)'
            break;
        case "/missoes":
            return 'rgb(74, 177, 152)'
            break;
        case "/conquistas":
            return 'rgb(178, 203, 65)'
            break;
        case "/avisos":
            return 'rgb(253, 116, 0)'
            break;
        case "/regras":
            return 'rgb(0, 92, 120)'
            break;
        case "/recompensas":
            return 'rgb(201, 63, 101)'
            break;
        default:
            return ''
            break;
    }
}