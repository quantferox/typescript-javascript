/* let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};

meetup.place = room;
room.occupiedBy = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
},"****")); */

/* function factorial(n) {
    if (n <= 1)
        return 1;
    else
        return n * factorial(n - 1);
}

console.log(factorial(3)); */

/* function showMessage(msg, count) {
    if (count <= 1) {
        return msg;
    }
    else {
        return msg + "\n" + showMessage(msg, count - 1);
    }
}

console.log(showMessage("helloWorld", 5)); */