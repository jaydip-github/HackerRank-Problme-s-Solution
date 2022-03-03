function plusMinus(arr) {
    // Write your code here
    let plus=0;
    let minus=0;
    let zeros=0;
        
   for(let element of arr){
       if(element===0){
           zeros++;
       }else if(element>0){
           plus++
       }else{
           minus++;
       }
   }
   function ratio(val){
       return (val/arr.length).toFixed(6)
       
   }
    // let plusRatio=(plus/arr.length).toFixed(6)
    // let minusRatio=(minus/arr.length).toFixed(6)
    // let zeroRatio=(zeros/arr.length).toFixed(6)
    console.log(ratio(plus))
    console.log(ratio(minus))
    console.log(ratio(zeros))
    
    
}