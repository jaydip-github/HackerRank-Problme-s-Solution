function miniMaxSum(arr) {
    // Write your code here
    let totalsum=0;
    let sumarr=[];
    // here we write logic of find sum of arr.length-1 element and then push into array
        for (let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length;j++){
                if(i!==j){
                    totalsum+=arr[j];
                }
            }
            sumarr.push(totalsum);
            totalsum=0;
        }
        
        // then we simply fetch minimum and maximum value from array
        // way-1
        // console.log(Math.min(...sumarr),Math.max(...sumarr));
        // way-2
        let maxsum=0;
        let minsum=sumarr[0]
        for(let k=0;k<sumarr.length;k++){
            if(sumarr[k]>maxsum){
                maxsum=sumarr[k];
            }
            if(sumarr[k]<minsum){
                minsum=sumarr[k]
            }
        }
        console.log(minsum,maxsum)
        
}