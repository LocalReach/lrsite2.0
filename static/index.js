function showDropdown(){
    var content = document.getElementById('dropdown-content');
    console.log('sui')
    if (content.style.display === 'block') {
        content.style.display = 'none';
        console.log('sui');
    } else {
        content.style.display = 'block';
        console.log('sui2');
    }

}