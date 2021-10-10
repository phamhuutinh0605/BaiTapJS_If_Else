// ---------------Bài 1------------------------
/**
 * Khối 1:
 * num1, num2, num3
 * 
 * 
 * Khối 2: so sánh các số
 * TH: number3 lớn nhất
 * number1<number2<number3
 * number2<number1<number3
 * 
 * TH: number2 lớn nhất
 * number3<number1<number2
 * number1<number3<number2
 * 
 * TH:number1 lớn nhất
 * number3<number2<number1
 * number2<number3<number1
 * 
 * TH: bằng nhau: number1=number2
 *  +lớn hơnnumber3
 *  +bé hơnnumber3
 * 
 * TH: bằng nhau: number1=number3
 *  + <number2
 *  + >number2
 * 
 * TH: bằng nhau: number2=number3
 *  + <number1
 *  + >number1
 
 * Khối 3: xuất ra kết quả
 */
function compareNumber(){
    var number1=document.getElementById("num1").value;
    var number2=document.getElementById("num2").value;
    var number3=document.getElementById("num3").value;
    if(number1<Number(number2)&&number1<Number(number3)&&Number(number2)<Number(number3)){
        document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+number1+"<"+Number(number2)+"<"+Number(number3);
    }
    else if(Number(number1)>Number(number2)&&Number(number1)>Number(number3)&&Number(number2)>Number(number3)){
        document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+Number(number3)+"<"+Number(number2)+"<"+Number(number1);
    }
    else if(Number(number1)>Number(number2)&&Number(number1)>Number(number3)&&Number(number2)<Number(number3)){
        document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+Number(number2)+"<"+Number(number3)+"<"+Number(number1);
    }
    else if(Number(number1)<Number(number2)&&Number(number1)>Number(number3)&&Number(number2)>Number(number3)){
        document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+Number(number3)+"<"+Number(number1)+"<"+Number(number2);
    }
    else if(Number(number1)<Number(number2)&&Number(number1)<Number(number3)&&Number(number2)>Number(number3)){
        document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+Number(number1)+"<"+Number(number3)+"<"+Number(number2);
    }
    else if(Number(number1)>Number(number2)&&Number(number1)<Number(number3)&&Number(number2)<Number(number3)){
        document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+Number(number2)+"<"+Number(number1)+"<"+Number(number3);
    }
    else if(Number(number1)==Number(number2)||Number(number1)==Number(number3)||Number(number2)==Number(number3))
    {
        // number1=number2 
        if(Number(number1)==Number(number2)&& Number(number1)>Number(number3)){
        document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+Number(number3)+"<"+Number(number1)+"="+Number(number2);
        }
        else if(Number(number1)==Number(number2)&& Number(number1)<Number(number3)){
            document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+Number(number1)+"="+Number(number2)+"<"+Number(number3);
        }

         // number1=number3 
        if(Number(number1)==Number(number3)&& Number(number1)>Number(number2)){
            document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+Number(number2)+"<"+Number(number1)+"="+Number(number3);
        }
        else if(Number(number1)==Number(number3)&& Number(number1)<Number(number2)){
                document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+Number(number1)+"="+Number(number3)+"<"+Number(number2);
        }

        // number2=number3
        if(Number(number2)==Number(number3)&& Number(number1)<Number(number2)){
            document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+Number(number1)+"<"+Number(number2)+"="+Number(number3);
        }
        else if(Number(number2)==Number(number3)&& Number(number1)>Number(number2)){
                document.getElementById("resultNumber").innerHTML="Kết quả so sánh là: "+Number(number2)+"="+Number(number3)+"<"+Number(number1);
        }
    }
    else{
        document.getElementById("resultNumber").innerHTML="Số nhập vào không hợp lệ";
    }
}
document.getElementById("btnCompare").onclick=compareNumber;

// ---------------Bài 2------------------------
/**
 * Khối 1:
 * Ba, Mẹ Anh Trai, Em Gái
 * 
 * Khối 2:
 * Nếu Nhập Thành Viên là ai thì xuất ra lời chào người đó
 * nếu nhập Ba => "Chào Ba"
 * nếu nhập Mẹ => "Chào Mẹ"
 * nếu nhập Anh Trai => "Chào Anh Trai"
 * nếu nhập Em Gái => "Chào Em Gái"
 * nếu người dùng không chọn => "Chào Người Lạ Ơi"
 * 
 * 
 * Khối 3:xuất ra màn hình lời chào
 */
function sayHifamily(){
    var familyOption=document.getElementById("familyOp").value;
    if(familyOption=="Ba"){
        document.getElementById("resultFamilyOption").innerHTML="Chào Ba";
    }
    else if(familyOption=="Mẹ"){
        document.getElementById("resultFamilyOption").innerHTML="Chào Mẹ";
    }
    else if(familyOption=="Anh Trai"){
        document.getElementById("resultFamilyOption").innerHTML="Chào Anh Trai";
    }
    else if(familyOption=="Em Gái"){
        document.getElementById("resultFamilyOption").innerHTML="Chào Em Gái";
    }else{
        document.getElementById("resultFamilyOption").innerHTML="Chào Người Lạ Ơi";
    }
}
document.getElementById("btnSayHi").onclick=sayHifamily;

// ---------------Bài 3------------------------
/**
 * Khối 1:
 * Nhập 3 sô nguyên
 * 
 * Khối 2:
 * khai báo biến chứ số chẵn (count=0)
 * nếu chia hết cho 2 thì là số chẵn
 * đếm lên 1 đơn vị (count++)
 * 
 * số lẻ thì lấy 3- count
 * 
 * Khối 3:xuất ra màn hình tổng số chẵn lẻ đã đếm được
 */
function countNumber(){
    var countNumber1=document.getElementById("count1").value;
    var countNumber2=document.getElementById("count2").value;
    var countNumber3=document.getElementById("count3").value;
    var count=0;
    if(Number(countNumber1)%2==0){
        count++;
    }
    if(Number(countNumber2)%2==0)
    {
        count++;
    }
    if(Number(countNumber3)%2==0)
    {
        count++;
    }
    document.getElementById("resultCount").innerHTML="Có "+Number(count)+" số chẵn, "+Number(3-count)+" số lẻ";
}
document.getElementById("btnCount").onclick=countNumber;

// ---------------Bài 4------------------------
/**
 * Khối 1:
 * Nhập 3 cạnh của tam giác
 * 
 * Khối 2:
 * Nếu  3 cạnh bằng nhau (edge1=edge2=edge3) => Tam giác đều
 * Nếu  2 bằng nhau => Tam giác cân
 * Nếu  edge1^2 or edge2^2 or edge3^2 =(tổng hai canh còn lại)^2
 * 
 * Khối 3:xuất ra màn hình loại tam giác đó
 */
function triangle(){
    var edge1=document.getElementById("edge1").value;
    var edge2=document.getElementById("edge2").value;
    var edge3=document.getElementById("edge3").value;
    if(edge1==edge2 &&edge2==edge3){
        document.getElementById("resultTriangle").innerHTML="Tam giác đều";
    }
    else if(edge1==edge2 ||edge1==edge3||edge2==edge3){
        if(Number(edge1)+Number(edge2)<Number(edge3)||Number(edge1)+Number(edge3)<Number(edge2)||Number(edge2)+Number(edge3)<Number(edge1)){
            document.getElementById("resultTriangle").innerHTML="Chiều dài cạnh không hợp lệ ! Tổng 2 cạnh bằng nhau phải lớn cạnh còn lại. ";
        }
        else{
        document.getElementById("resultTriangle").innerHTML="Tam giác cân";
        }
    }
    else if(edge1*edge1==edge2*edge2+edge3*edge3 ||edge2*edge2==edge1*edge1+edge3*edge3 ||edge3*edge3==edge2*edge2+edge1*edge1 ){
        document.getElementById("resultTriangle").innerHTML="Tam giác vuông";
    }
    else{
        document.getElementById("resultTriangle").innerHTML="Tam giác thường";

    }
}
document.getElementById("btnTriangle").onclick=triangle;
