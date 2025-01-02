let name = ["Ali", "Aleena", "Ahmed" , "Sara", "Arham"]
let age = [20, 21, 22, 23, 24]
let gender = ["Male", "Female", "Male", "Female", "Male"]
let rollNo = [12, 34, 45, 56, 78]

alert("Roll Nos are 12, 34, 45, 56, 78")

let inpNum = prompt("Enter your Roll NO")
for (let i = 0; i < name.length; i++) {
    if (rollNo[i] == inpNum){
        console.log("Name=" + name[i] + " " + "Age="  + age[i] + " " + "Gender=" +  gender[i] + " " + "Roll No=" +  rollNo[i])
        break

    } else {
        console.log("Not Found")
    }
}