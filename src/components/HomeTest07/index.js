import { useState } from "react";
const [user,setUser]=useState(['i','k','u','o','i'])
const unique = (arr)=>{
    const result =[]
    array.forEach(item => {
        const existitem = arr.find(existitem=>{
            return item===existitem
        })
        if(!existitem){
            result.push(item)
        }

    });
    return result
} 
const unique1 = (arr)=>{
    const result1=[]
    arr.forEach(item=>{
        if(!arr.includes(item)){
            result1.push(item)
        }
    })

    return result1
}
const unique2 =(arr)=>{
    const result2={}
    arr.forEach((item)=>{
        if(!result2[item.id]){
            result2[item.id]=item
        }
        console.log(result2)
    })
    return Object.values(result2)
}