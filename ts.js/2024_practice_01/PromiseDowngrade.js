//Promises down(downgrade)

//downgraded!!!
/* const promise = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'Error occurred');
});

promise
    .then((value) => {
        console.log(value);
        return 'Step 1 complete';
    })
    .then((value) => {
        console.log(value);
        return 'Step 2 complete';
    })
    .catch((error) => {
        console.error('Caught an error:', error);
        return 'Handled the error';
    })
    .then((value) => {
        console.log('Continuing after error handling:', value);
    }); */


//Success downgrading
/* const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Success');
});

promise
    .then((value) => {
        console.log(value);
        return 'Step 1 complete';
    })
    .then((value) => {
        console.log(value);
        return 'Step 2 complete';
    })
    .catch((error) => {
        console.error('Caught an error:', error);
        return 'Handled the error';
    })
    .then((value) => {
        console.log('Continuing after error handling:', value);
    }); */