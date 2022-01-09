const credentials = JSON.parse(sessionStorage.getItem('credentials'));

if(credentials) {
    document.body.appendChild(createFragment(credentials));
} else alert("Could not fins \"credentials\" in sessionStorage");


function createFragment(credentials) {
    const fragment = document.createDocumentFragment();
    for (let key in credentials){
        const element = document.createElement('div');
        element.textContent = `${key}: ${credentials[key]}`;
        fragment.appendChild(element);
    }
    return fragment;
}


