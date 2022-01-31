function saturdayFun(target= "roller-skate"){
    return (`This Saturday, I want to ${target}!`)
}

function mondayWork(target = "go to the office"){
    return (`This Monday, I will ${target}.`);
}

function wrapAdjective(target){
    return function(singleParam="special"){
        return (`You are ${target}${singleParam}${target}!`);
    }
}