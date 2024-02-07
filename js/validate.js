const validateEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};
const validateDate = date => {
    const re = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    return re.test(date)
};