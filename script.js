function togglePhoneNumber() {
    const phoneNumber = document.getElementById('phone-number');
    if (phoneNumber.style.display === 'none' || phoneNumber.style.display === '') {
        phoneNumber.style.display = 'inline'; // Exibe o número
    } else {
        phoneNumber.style.display = 'none'; // Oculta o número
    }
}
