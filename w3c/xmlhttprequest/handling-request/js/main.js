const xhr = new XMLHttpRequest();

function makeRequest(method, url) {

  if (!xhr) {
    console.log('Cannot create an XMLHTTP instance');
    return false;
  }
  xhr.onreadystatechange = showContents;
  xhr.open(method, url);
  xhr.send();
}

function showContents() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log('There was a problem with the request.');
    }
  }
}

makeRequest('GET', 'https://viacep.com.br/ws/58015430/json/')