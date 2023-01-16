 
	      function validaForm(){
            var nome = document.forms["formCadastro"]["name"].value;
            var email = document.forms["formCadastro"]["email"].value;
            var tel = document.forms["formCadastro"]["tel"].value;
            var cpf = document.forms["formCadastro"]["cpf"].value;
            var senha = document.forms["formCadastro"]["senha"].value;
            var button = document.forms["formCadastro"]["button"].value;
            var erros = "";
    
        if (nome == ""){
         // erros += "O campo Nome é obrigatório.\n";
          document.getElementById("name").style.borderColor = "red";
          document.getElementById("name1").innerHTML = "*Campo obrigatório*";
        }
        if (email == ""){
          //erros += "O campo E-mail é obrigatório.\n";
          document.getElementById("email").style.borderColor = "red";
          document.getElementById("email1").innerHTML = "*Campo obrigatório*";
        }
        if (tel == ""){
           // erros += "O campo telefone é obrigatório.\n";
            document.getElementById("tel").style.borderColor = "red";
            document.getElementById("tel1").innerHTML = "*Campo obrigatório*";
          }
        if (cpf == ""){
           // erros += "O campo CPF é obrigatório.\n";
            document.getElementById("cpf").style.borderColor = "red";
            document.getElementById("cpf1").innerHTML = "*Campo obrigatório*";
          }

        if (senha == ""){
         // erros += "O campo Senha é obrigatório.\n";
          document.getElementById("senha").style.borderColor = "red" ;
          document.getElementById("senha1").innerHTML = "*Campo obrigatório*";
          return false;
        }

        if (button == ""){
            // erros += "O campo Senha é obrigatório.\n";
             document.getElementById("button1").innerHTML = "Campos obrigatórios não registrados.";
             return false;
           }
           
    
        //if (erros != ""){
         // alert(erros);
          //return false;}
         else {
          alert("Cadastro realizado com sucesso!");
          document.getElementById("button1").innerHTML = "*Sucesso!*";
          return true;
        }
      }

      // Ficou faltanto a segunda parte de "Sucesso", não conseguir manter os dados quando clica em enviar e não conseguir colocar a frase "Campos obrigatórios não registrados.".