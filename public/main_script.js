
    function saveUsername(uname) {
        fetch('/saveuname', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'uname': uname })
        });
    }

    /*---modal----*/
    function validateForm() {
        let taskName = document.querySelector('#task-name').value;
        let taskTime = document.querySelector('#task-time').value;
        let modalError = document.querySelector('#modal-error');

        let modalErrMsg = '';

        if (taskName) {
            if (taskTime && Number(taskTime) > 0 && Number(taskTime) < 24) {
                return true;
            } else {
                modalErrMsg = "Please enter a valid working hour";
            }
        } else {
            modalErrMsg = "Please add a task name";
        }

        if (modalErrMsg) {
            displayModalError(modalErrMsg);
        }
        console.log(modalErrMsg);
        return false;
    }

    function displayModalError(msg) {
        let modalError = document.querySelector('#modal-error');
        modalError.innerHTML = msg;

        setTimeout(() => {
            modalError.innerHTML = '';
        }, 2 * 1000);
    }

    