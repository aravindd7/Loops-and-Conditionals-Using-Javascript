// You have to make a country code checker which checks from which country does the dialled number belongs to
// The options are
// 91 - India
// 55 - Brazil
// 81 - Japan
// 30 - Greece
// 47 - Norway
// If a number does not belong from any country, then you have to print "Other World"
// The number needs to be input as CC-XXXX-XXXX (CC being country code)
var phoneNumber = '35-2353-1234';
switch(phoneNumber){
    case 91:
        console.log("India");
        break;
    case 55:
        console.log("Brazil");
        break;
    case 81:
        console.log("Japan");
        break;
    case 30:
        console.log("Germany");
        break;
    case 47:
        console.log("Norway");
        break;
    default:
        console.log("Other World");
}