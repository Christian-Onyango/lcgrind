const twoSum = (arr, target) => {
    let result = {}
    for(let i = 0; i < arr.length; i++){
        let curr = arr[i]
        let neededNo = target - curr
        if(neededNo in result){
            return [result[neededNo], i]
        } else{
            result[arr[i]] = i
        }
    }
}
console.log(twoSum([3,2,4], 6))