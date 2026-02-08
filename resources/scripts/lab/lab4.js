$(document).ready(function() {
    $('#load').click(function () {
        $.ajax({
            type: 'GET',
            url: '/routes/api.php',
            dataType: 'json',
            success: function (response) {
                fillTable(response);
            },
            error: function () {
                alert("Ошибка при запросе данных.");
            }
        });
    });

    function fillTable(users) {
        let $tbody = $('#user tbody');
        $tbody.empty();

        users.forEach(user => {
            let row = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.mail}</td>
                </tr>
            `;
            $tbody.append(row);
        });
    }
});
