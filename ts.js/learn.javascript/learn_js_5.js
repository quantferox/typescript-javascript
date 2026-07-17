/* const id = Math.floor(Math.random() * 100) + "a" + Math.floor(Math.random() * 100);

const user = {
    [id]: "1" // dynamic name from variable
}

console.log(user) */

//Functional Dependency Injection (callback injection)
/* function logger(message){
    console.log(message);
}

function service(dependency){
    dependency("callback injection");
}

service(logger); */

//Classable dependency injection (DI)

/* class Logger {
    showMessage(message) {
        console.log(message);
    }
}

class Service {
    constructor(logger) {
        this.logger = logger;
    }

    execute() {
        this.logger.showMessage("Dependency Injection");
    }
}

const logger = new Logger();
const service = new Service(logger);

service.execute(); */