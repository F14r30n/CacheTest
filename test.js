// register service worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceworker.js', { scope: './' }).then(function(reg) {

        if(reg.installing) {
            console.log('Service worker installing');
            document.getElementById("p1").innerHTML = "Status: installing";
        } else if(reg.waiting) {
            document.getElementById("p1").innerHTML = "Status: installed";
        } else if(reg.active) {
            document.getElementById("p1").innerHTML = "Status: active";
        }

    }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
}


function f() {
    console.log("Hi")
}
