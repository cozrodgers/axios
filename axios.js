
//handle submit 

 function search(){
  var username = git_user.value;
   // Make a request for a user with a given ID
  axios.get('https://api.github.com/users/' + username)
  .then(function (response) {


    var a = response.data.name;
    var b = response.data.bio;
    var c = response.data.url;

  console.log(a, b, c);

    var para = document.createElement("p");
    var node = document.createTextNode(a);
    para.appendChild(node);
    var element = document.getElementById("name");
    element.appendChild(para);

    var para = document.createElement("p");
    var node = document.createTextNode(b);
    para.appendChild(node);
    var element = document.getElementById("bio");
    element.appendChild(para);

    var para = document.createElement("p");
    var node = document.createTextNode(c);
    para.appendChild(node);
    var element = document.getElementById("url");
    element.appendChild(para);

  })
  .catch(function (error) {
    console.log(error);
  });
 }




//handle search function here ....








