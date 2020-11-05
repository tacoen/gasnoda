function gn_ajaxform(qform,qresult) {
    const form = document.querySelector(qform);
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const result = document.querySelector(qresult);
        const action = form.getAttribute('action');
        const method = form.getAttribute('method');

        fetch(action, {
            method: method,
            body: new FormData(form)
        })
        .then(function(response) {
            if (response.ok) {
                return response.text();
            } else {
                return response.json();
            }
        })
        .then(function(output) {
            if (result) {
                result.innerHTML = output;
            }
        })
        .catch(function(error) {
            if (result) {
                result.innerHTML = 'Error: ' + error;
            }

            throw new Error(error);
        });
    });
	
}
