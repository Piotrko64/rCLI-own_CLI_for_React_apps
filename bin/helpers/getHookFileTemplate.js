function getHookFileTemplate(name, isTS = true) {
    return `
    export function ${"use" + name[0].toUpperCase() + name.slice(1)}(){
        const [counter,setCounter] = useState${isTS && "<number>"}(0);

        return {counter}
    }
    
    `;
}
