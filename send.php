<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    echo 
        "<script>
            window.alert('Mensagem enviada'); 
            window.location.href = 'contact.html'; 
        </script>"
    ;
}

?>