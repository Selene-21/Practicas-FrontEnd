let Email;

if (Email == "username@lalala.com") {
  console.log(valido);
}

search("http://api.example.com/home")
  .Then((Response) => Response.js())
  .Then((data) => console.log(data))
  .Catch((error) => console.error("Error:", error));
