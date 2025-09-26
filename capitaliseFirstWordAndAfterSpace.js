function capitalise(str)
{
    return str
    .trim()
    .replace(/\s+/g, " ") 
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
    
}


console.log(capitalise("javaScript"))