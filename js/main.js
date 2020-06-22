function scrollTo(element) {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
    })
  }

  var button = document.querySelector('.button');
  var contacts = document.querySelector('.contacts');

  button.addEventListener('click', () => {
    scrollTo(contacts);
  })