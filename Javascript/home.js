let Email;

if (Email == "username@lalala.com") {
  console.log(valido);
}

search("http://api.example.com/home")
  .Then((Response) => Response.js())
  .Then((data) => console.log(data))
  .Catch((error) => console.error("Error:", error));

  
<script> //modificar contenido de un elemento
  document.getElementById('cambiarEstilo').addEventListener('click', () => {
      const parrafo = document.getElementById('parrafo');
      parrafo.style.color = 'blue';
      parrafo.style.fontSize = '20px';
      parrafo.style.fontWeight = 'bold';
    });
  </script>

  <script>//cambiar estilo
      document.getElementById('cambiarEstilo').addEventListener('click', () => {
        const parrafo = document.getElementById('parrafo');
        parrafo.style.color = 'blue';
        parrafo.style.fontSize = '20px';
        parrafo.style.fontWeight = 'bold';
      });
  </script>
    
    
    <button id="toggleClase">Resaltar Párrafo</button>
  
    <script>//añadir o quitar clases
      document.getElementById('toggleClase').addEventListener('click', () => {
        const parrafo = document.getElementById('parrafo');
        parrafo.classList.toggle('resaltado');
      });
    </script>
    <div id="contenedor"></div>
    <button id="añadirElemento">Comentar</button>
  
    <script>//añadir elementos al DOM
      document.getElementById('añadirElemento').addEventListener('click', () => {
        const nuevoElemento = document.createElement('p');
        nuevoElemento.innerText = 'Nuevo párrafo añadido';
        document.getElementById('contenedor').appendChild(nuevoElemento);
      });
    </script>

    <input type="text" id="entrada" placeholder="Escribe algo...">
    <p id="salida"></p>
  
    <script>//cambiar contenidos en base a eventos
      document.getElementById('entrada').addEventListener('input', (event) => {
        document.getElementById('salida').innerText = event.target.value;
      });
    </script>