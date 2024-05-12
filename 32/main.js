//Array of current_users
var currentUsers = ['Maham', 'Ayesha', 'Ali', 'irfan', 'Fatima'];
//Array of new_users
var newUsers = ['Zaid', 'Haseeb', 'Maham', 'Rida', 'Irfan'];
newUsers.forEach(function (new_one_user) {
    var our_condition = currentUsers.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
