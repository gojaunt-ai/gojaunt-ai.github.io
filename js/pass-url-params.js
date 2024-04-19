    document.querySelectorAll('.button')
        .forEach(el => el.attributes.href.value += window.location.search);