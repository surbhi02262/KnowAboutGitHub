//number 42,44,47,49,51 remaining to complete
var cont= document.getElementById('container')
function getTime(){
    dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var date= new Date();
    var day = date.getDay();
    var currentDay = dayList[day]
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec= date.getSeconds();
    cont.innerHTML = `<div> <h1> Today is ${currentDay} </h1></div>
     <div><h3>Time is -  ${hour < 12 ? `${hour}AM` : `${hour - 12} PM` } : ${min}min : ${sec}sec</h3></div>` ;
}

const getDateFormat = () => {
    var date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy= date.getFullYear();
    if(dd < 10){
        dd = `0${dd}`
    }
    if(mm <10){
        mm=`0${mm}`
    }
    // if(dateFormat === "mdy"){
    //     cont.innerHTML=`<div><h1> mm-dd-yyyy ${mm}${del}${dd}${del}${yyyy}</h1></div>`
    // }else{
    //     cont.innerHTML= `<div><h1>dd-mm-yyyy ${dd}${del}${mm}${del}${yyyy}</h1></div>`
   
    // }

    return {
        mm,dd,yyyy, date
    }
}
let dD = getDateFormat()
const getmmddyyyy = (del) => {
    console.log(dD.date.toLocaleTimeString())
    cont.innerHTML= `<div><h1>dd-mm-yyyy ${dD.yyyy}${del}${dD.mm}${del}${dD.dd}</h1></div>`
}
// //program to get mm-dd-yyyy
// getDateFormat("-","mdy")

// //program to get dd-mm-yyyy
// getDateFormat("-","dmy")

// // program to get dd/mm/yyyy
// getDateFormat("/","dmy")

// //program to get mm/dd/yyyy
// getDateFormat("/","mdy")

const getArea = (s1,s2,s3) => {
    let perimeter= (s1+s2+s3)/2;
    let area = Math.sqrt(perimeter * (perimeter - s1)* (perimeter - s2)*(perimeter - s3))
    cont.innerHTML=`<div>area of 5,6,7 is ${area}</div>`
}
const rotateString = (str) => {
    setInterval(function(){
        str =  str.substr(1,6) + str[0] 
        cont.innerHTML= `<div>string is : ${str}</div>`
    }, 1000)
}
const checkForLeapYear = (num) => {
    if(num%4 === 0 && num%100 !== 0){
      return true;
    } else if(num%400 === 0){
        return true;
    } else {
        return false;
    }

}

const checkforLeap=(num)=>{
    if(checkForLeapYear(num)){
        cont.innerHTML=`<div>${num}Is leap year</div>`
    }else{
        cont.innerHTML=`<div>${num}Is NOT a leap year</div>` 
    }
}
const checkforSunday = () => {
    var arr =[];
    for(var year=2014 ; year<=2050;year++){
        var date = new Date(01,00,year)
        if(date.getDay() === 0) {
          arr.push(year);
        }
    } 
    let yesrs = ``
    for(i=0;i<arr.length;i++){
        yesrs+= `<div>1 jan is sunday for Year ${arr[i]}` 
    }
    cont.innerHTML=yesrs;
}
const guessRandomNumber = () => {
    let random = Math.floor(Math.random()* 10) + 1;
    var inp= prompt('enter guessing number');
    if(inp != null){
        if(random == inp){
            alert('good work')
        }else{
            alert(`better luck next time, number was ${random}`)
        }
    }

}

const calculateDays = (mm, dd) => {
    let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    let days = 0
    for(let i=0;i < mm; i++) {
        days += daysInMonth[i]
    }
    return days +  dd; 
}

const getDaysLeftChristmas = (mm, dd) => {
    let date = new Date()
    let currentDays = calculateDays(date.getMonth(), date.getDate())
    console.log(currentDays)
    let christmasDay = calculateDays(mm - 1, dd)
    console.log(christmasDay)
    console.log("Days Left for christmax - ", christmasDay - currentDays)
    cont.innerHTML=`<h1>Days Left for christmax - ${christmasDay - currentDays} </h1>`
}


const difference = () => {
    let random = Math.floor(Math.random() * 100)+ 1 
    let result;
if(random <= 13 ){
    result = 13 - random
}
if(random > 13){
    result = 2*(random - 13)
}
cont.innerHTML= `<div> random number ${random} result is ${result}</div>`;
}

const MultiplyDivison = () => {
   cont.innerHTML= `<div>
   <div id="result-cont"></div>
   <form id="myForm"><input type="number" name="num1" placeholder="enter number"/><br>
    <input type="number" name="num2" placeholder="enter number"/><br>
    </form><button onclick="Multiply()">Multiply</button></div>`
} 
const Multiply=  () => {
let formId= document.getElementById('myForm').elements;
let formEle = {}
 for(i=0;i<formId.length;i++) {
    formEle[formId[i].name] = formId[i].value
 }

let multiply = formEle.num1 * formEle.num2;
let resultCont = document.getElementById('result-cont')
resultCont.innerHTML = `<div> multiplication is ${multiply}</div>`

}
let count = 1
const userDefinedObject = () => {
    cont.innerHTML= `<div id="main-cont">
    <div id="form-cont">
        <form name="dObject" id="form">
            <span id="cont-1">
                <div>
                    <input type="text" name="field-1" />
                    <input type="text" name="value-1" />
                </div>
                
            </span>
            <span id="cont-2"></span>
            
        </form>
        <button onclick="addField()">Add Field</button>
    </div>
    <button onclick="createDObject()">Create dynamic Object</button>
</div>`
}
const addField = () => {
    count++
    let addField = document.getElementById('cont-'+count)
    addField.innerHTML += `<div>
        <input type="text" name="field-${count}" />
        <input type="text" name="value-${count}" />
    </div>
    <span id="cont-${count+1}"></span>`
}

const createDObject = () => {
    let formEle = document.getElementById('form').elements
    console.log(formEle)
    let obj = {}
    let currentField = ""
    for(i=0;i<formEle.length;i++) {
        let fieldN = formEle[i].name.split("-")
         // ["field", "1"]
        if(fieldN[0] === 'field') {

           console.log("key - ", formEle[i].name)
           obj[formEle[i].value] = ""
           currentField = formEle[i].value
        } else {
           // value
           console.log("value - ",formEle[i].name)
           obj[currentField] = formEle[i].value
        }
     }
     console.log("Dynamic Obj - ",obj)

}

{/* <div id="main-cont">
        <div id="form-cont">
            <form name="dObject" id="form">
                <div>
                    <input type="text" name="field1" />
                    <input type="text" name="value1" />
                </div>
            </form>
            <button onclick="addField()">Add Field</button>
        </div>
        <button onclick="createDObject()">Create dynamic Object</button>
    </div> */}

const getFileExtension = (fileName) => {
    let ext = fileName.substr(fileName.lastIndexOf(".") + 1)
    cont.innerHTML= `<div> Extension of ${fileName} is ${ext}</div>`
}
const SumNumber = () => {
   
 cont.innerHTML = `<div><div id="res"></div>
                        <form id="myForm">
                            <input type ="text" name="num1"/>
                            <input type ="text" name="num2"/>
                       </form> 
                       <button onclick="add()">ADD</button>
                   </div>`   
}

const add =() => {
    let obj ={};
    let result;
    let ele = document.getElementById('myForm').elements;
    for(i=0;i<ele.length;i++){
        obj[ele[i].name] = ele[i].value;
    }
    let showResult = document.getElementById('res');
    if(parseInt(obj.num1) === parseInt(obj.num2)){
      result =   3 * (parseInt(obj.num1) + parseInt(obj.num2))
    }else{
        result= parseInt(obj.num1) + parseInt(obj.num2)
    }
    showResult.innerHTML= result;

}
const checkForFifty = (x,y) => {
    let result = parseInt(x)+parseInt(y);
    if((x === 50 || y === 50) || result === 50){
        cont.innerHTML=  true;
    }else{
        cont.innerHTML=  false;
    }
}
const createString = (s1) => {
    if(s1.substr(0,2) !== "Py"){
        s1= "Py".concat(s1)
    }
    cont.innerHTML=s1;
}
const removeChar = (str,pos) => {
    cont.innerHTML = str.substr(0,pos-1)+ str.substr(pos);
}
const changeFirstLastCharacters = (str) => {
    cont.innerHTML= str.substr(str.length-1,str.length) + str.substr(1,str.length-2) + str.substr(0,1)
}
const Multiple = () => {
    let num= 8;
    if((num %3 === 0) || (num%7 === 0)){
        cont.innerHTML= `<div> ${num} is a multiple of 3 or 7</div>`
    }else{
        cont.innerHTML= `<div> ${num} is not a multiple of 3 or 7</div>`
    }
}
const last3characters= (str) => {
    if(str.length >= 3){
let ses= str.substr(str.length-3)
cont.innerHTML= ses+ str+ ses;
}else{
    cont.innerHTML=`<div>string must be 3 characters or more</div>`
}}
const startWithJava = (str) => {   
 if(str.substr(0,4).toUpperCase() === "JAVA"){
     cont.innerHTML=`<div>string starts with java</div>`
 }else{
    cont.innerHTML=`<div>string does not starts with java</div>`
 }
}
const checkRange = () => {
    let num  = Math.floor(Math.random() * 100) + 1
    if(num >= 50 && num <= 99){
        cont.innerHTML=`<div> ${num} is in range between 50 to 99 </div>`
    }else{
        cont.innerHTML=`<div> ${num} is not in range between 50 to 99 </div>`
    }
}
const checkScriptPresent = () => {
    let str ="dkklSCRIPTkkkkkk"
    if(str.length > 9){
        if(str.substr(4,6).toUpperCase() === "SCRIPT"){
            cont.innerHTML= `<div>${str.substr(0,4)+str.substr(10,str.length)}</div>`
        }else{
            cont.innerHTML= `<div>${str}</div>`
        }
    }
}
const checkgreator = () => {
    let num1=9;
    let num2=98;
    let num3=300;
    cont.innerHTML=Math.max(num1,num2,num3,500,200,600)
    //cont.innerHTML=  a > b ? (a > c ? a : c) : (b > c ? b : c);
}
const nearestHundred = () => {
let num1=9;
let num2=76;
let n1= 100 -num1;
let n2=100 - num2;
let res = 0;
res=num1
if(n1 > n2){
    res=num2
}
cont.innerHTML=`<div>${res} is nearest to 100</div>`
}
const largerOfTwo = () => {
    let num1=7;let num2=45;
    if((num1 >=40 && num1<=60) && (num2>=40 && num2<=60)){
       let s1= (num1 > num2 ? num1 : num2)
       cont.innerHTML=`<div>${s1} is greator</div>`
    }else{
        cont.innerHTML=`<div>Enter numbers in range between 40 to 60</div>`
    }
}
const checkChar = () => {
    let str= "surbhi";
    let charToFind ="i";
    let count=0;
    for(i=0;i<str.length;i++){
        if(str.charAt(i) === charToFind){
            count++;
        }
    }
    if(count >=2 && count <= 4){
        cont.innerHTML=`<div>Found character ${charToFind} ${count} times in string ${str}<div>`
    } else{
        cont.innerHTML=`<div> character not found<div>`

    }
}
const checkLastDigit = () => {
    let num1=2;
    let num2=129;
    let num3=222;
    if(num1 %10 === num2%10 && num1%10 === num3%10 && num2%10 === num3%10){
        cont.innerHTML= `<div> last digit is same for 3 numbers</div>`
    }else{
        cont.innerHTML= `<div> last digit is NOT same for 3 numbers</div>`
    }

}
const checkLowercase = () => {
    let str = "JAVASCRIPT";
    if(str.length >= 3){
        cont.innerHTML=  str.substr(0,3).toLowerCase() + str.substr(3,str.length);
    }else{
        cont.innerHTML= str.toUpperCase();
    }
} 
const exam = () => {
   let totalMarks= 89;
   let isExam="k";
   if(isExam === "final") {
    cont.innerHTML=  totalMarks >= 90
   }else{
       cont.innerHTML= totalMarks >=89 && totalMarks <=100
   }
}
const sumOfNumbers = () => {
    let num1=25;
    let num2=26;
    let sum =parseInt(num1) + parseInt(num2);
    if(sum >= 50 && sum <= 80){
        cont.innerHTML= 65;
    }else{
        cont.innerHTML=80;
    }

}
const checkMultiple = () => {
  let x=14;
  let y=29;
  if(!((x%7=== 0 || x%11 === 0) && (y%7=== 0 || y%11 === 0))){
    cont.innerHTML=(x%7=== 0 || x%11 === 0) || (y%7=== 0 || y%11 === 0)
  }  else {
    cont.innerHTML= false
  }
}
const reverseString = () => {
    let str ="Surbhi";
    let finalStr="";
    for(i=str.length-1;i>=0;i--){
        finalStr+=str.charAt(i);
    }
    console.log(finalStr)
//cont.innerHTML= `<div>Reverse string of ${str} is ${finalStr}</div>`
cont.innerHTML=str.split("").reverse().join("");
}

const firstLetterCapital = () => {
    let str =h
    let str1= str.split(" ");
    for(i=0;i<str1.length;i++){
        str1[i]= str1[i][0].toUpperCase() + str1[i].substr(1,str1[i].length)
       
    }
    let a= str1.join(" ");
    cont.innerHTML=a
}

const arrangeLettersAlphabeticalOrder = () => {
    let str ="python";
    cont.innerHTML= str.split("").sort().join("")
}
const checkSeperation = () => {
    let str = "chainsbreak";
    let result=`<div>Character b is NOT seperated exactly 3 characters</div>`
    // for(i=0;i<str.length;i++){
    //     console.log("hii")
    //     if(str.charAt(i) === "a"){
    //        if(str.charAt(i+4)  === "b"){
    //            result=`<div>Character b is seperated exactly 3 characters</div>`
    //        }
    //     }
    // }
    // console.log(str.match(/a...b/g))
    cont.innerHTML= str.match(/a...b/g) !== null;
}
const countVowels = () => {
    let count =0;
    let str ="kioaeokiu";
    for(i=0;i<str.length;i++){
        let isChar = str.charAt(i)
        switch(isChar) {
            case 'a': count++; break;
            case 'e': count++; break;
            case 'i': count++; break;
            case 'o': count++; break;
            case 'u': count++; break;
            default: count 
        }
    }
    console.log(count)
    cont.innerHTML=`There are ${count} Vowels in ${str} `;
}

const countCharactersInString = () => {
    let charCount = {}
    let str ="Wwrite a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string";
    for(i=0;i<str.length;i++){
        let isChar = str.charAt(i)
        if(charCount.hasOwnProperty(isChar)) {
            charCount[isChar.toLocaleLowerCase()] = charCount[isChar.toLocaleLowerCase()] + 1 
        } else {
            charCount[isChar.toLocaleLowerCase()] = 1
        }
    }
    let temp = `<table>`
    Object.keys(charCount).map(alphabetKey => {temp += `<tr><td>${alphabetKey}:</td><td>${charCount[alphabetKey]}</td></tr>`})
    temp+=`</table>`
    console.log(charCount)
    cont.innerHTML=temp
}

const countPandT = () => {
    let str = 'paatpsst'
    cont.innerHTML=str.match(/p/g).length === str.match(/t/g).length ;
}
const divideTwoNumbers = () => {
    let num1=8;
    let num2=4;
    let divide = parseInt(num1) / parseInt(num2);
    cont.innerHTML= `<div>division of ${num1},${num2} is ${divide}</div>`
}

const createCopies =(str,copy) => {
    let result="";
    for(i=0;i< copy ; i++){
        result += str+ ' | ';
    }
    cont.innerHTML=`<div>Copy of ${str} is ${result}</div>`
}
const createCopiesOfLastThreeCharacters = (str,copy) => {
    let stringLen= str.length;
    let result="";
   if(stringLen > 3){
       for(i=1;i<= copy;i++){
        result+= str.substr(stringLen - 3) + "|"
       }
   }
   cont.innerHTML= `<div>${result} </div>`
}
const extractString = (str) => {
    let strLen = str.length;
    let half= Math.floor(strLen/2);
    let result="";
if(str.length > 4 ){
    result = str.substr(0,half)
}
cont.innerHTML=result;
}
const WithoutFrstAndLastChar = (str) => {
    cont.innerHTML=str.substr(1,str.length-2);

}

const concatnateString = (str1,str2) => {
cont.innerHTML = str1.substr(1,str1.length)+ str2.substr(1,str2.length);
}
const moveLastThreeChar = (str) => {
    let strLen = str.length;
    if(strLen >= 3){
        debugger;
       cont.innerHTML= str.substr(strLen -3) + str.substr(0,strLen-3);
    }
}
const addThreeNumbersArray = () => {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
    let result=[];
   for(i=0;i<=arr.length-3;i=i+3){
    console.log(arr[i]+ arr[i+1]+arr[i+2])
   }
}

const shiftArray = () => {
    let arr =[1,2,3,4,5];
    let shiftedElem= arr.shift();
     arr.push(shiftedElem);
     cont.innerHTML=arr;
}
const findPosition = () => {
    let arr =[9,2,3];
   if(arr.length >=1){
       if(arr[0] === 1 || arr[arr.length-1] === 1){
        cont.innerHTML=`<div>Either first or last element has 1 in array ${arr}</div>`
       }else{
        cont.innerHTML=`<div>Either first or last element does NOT have 1 in array ${arr}</div>`
       }
   }else{
    cont.innerHTML=`<div>Array length is less than 1 ${arr}</div>`
   }
}

const checkFirstLastElementEqual   = () => {
    let arr=[10,20,90];
    if(arr[0] === arr[arr.length-1]){
        cont.innerHTML=`<div>first and last elements are equal in ${arr} </div>`
    }else{
        cont.innerHTML=`<div>first and last elements are NOT equal in ${arr} </div>`
    }
}
const reverseArray = () => {
    let arr =[1,2,3,4,5];//5,4,3,2,1
    let result =[];
    debugger;
    for(i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    cont.innerHTML=result;

}

const findLargerValue = () => {
    let arr =[10,20,30,40];
    let result=[];
   let finalArr= arr[0] > arr[arr.length-1] ? arr[0] : arr[arr.length-1];
   for(i=0;i<arr.length;i++){
       result[i]= finalArr;
   }
   cont.innerHTML=result;
}

const middleArray = () => {
    let arr1 =[1,2,3,4,5,6];
    let arr2 =[4,6,7,8,9,7];
    let result =[];
    let m1= Math.floor(arr1.length/2);
    let m2= Math.floor(arr2.length/2);
    result.push(arr1[m1],arr2[m2])
    cont.innerHTML=result;
} 
const firstLastElementArray =() => {
    let arr= [1,2,3,4,5,6];
    let result =[];
    result.push(arr[0],arr[arr.length-1])
    cont.innerHTML=result;
}





 