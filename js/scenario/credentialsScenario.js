const credentials = JSON.parse(sessionStorage.getItem('credentials'));

function createFragment(credentials) {
    const fragment = document.createDocumentFragment();
    for (let key in credentials){
        const element = document.createElement('div');
        element.textContent = `${key}: ${credentials[key]}`;
        fragment.appendChild(element);
    }
    return fragment;
}

if(credentials) {
    document.body.appendChild(createFragment(credentials));
}
