const myForm = document.getElementById('myForm');

myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const passw = document.getElementById("password").value;
    const passw2 = document.getElementById("password-2").value;

    if (name && email && age && location && passw && passw2) {
        if (passw == passw2) {

            const data = {
                nombre: name,
                email: email,
                edad: age,
                ubicacion: location,
                pass: passw
            };

            // Obtener el último ID utilizado del localStorage
            let lastId = parseInt(localStorage.getItem('lastId')) || 0;

            // Obtener datos del localStorage
            let dataArray = JSON.parse(localStorage.getItem('myData')) || [];

            // Comprobar si el email ya existe en algún conjunto de datos
            let emailExists = false;
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i].data.email === email) {
                    emailExists = true;
                    break;
                }
            }

            if (emailExists) {
                alert('El email ya existe en el almacenamiento');
            } else {
                // Generar el siguiente ID incrementando el último ID en 1
                const id = lastId + 1;

                // Agregar los nuevos datos al array
                dataArray.push({
                    id: id,
                    data: data
                });

                // Guardar el array de datos en el localStorage
                localStorage.setItem('myData', JSON.stringify(dataArray));

                // Guardar el último ID utilizado en el localStorage
                localStorage.setItem('lastId', id);

                // Limpiar el formulario
                myForm.reset();

                alert('Registro exitoso. Bienvenid@ ' + name + '!!');

                var logedUser = name;
                var logedUserAge = age;
                var logedUserLocation = location;

                localStorage.setItem("nombre", logedUser),
                    localStorage.setItem("edad", logedUserAge),
                    localStorage.setItem("ubicacion", logedUserLocation),
                    localStorage.setItem("sesion_iniciada", 1)

                window.location = "perfil.html"
            }
        } else {
            alert("Las contraseñas no coinciden")
        }
    } else {
        alert("Rellenar todos los campos")

    }
});