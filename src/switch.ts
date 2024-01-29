let service:number = 1;
let serviceResult:string;

switch(service){
    case 1:
        serviceResult = "Facebook";
        break;
    case 2:
        serviceResult = "Instagram";
        break;
    case 3:
        serviceResult = "Twitter";
        break;
    default:
        serviceResult = "Unknown";
        break;
}

console.log(`service ${service} is ${serviceResult}`);