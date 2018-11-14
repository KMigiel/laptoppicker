export function perfectModel(arr, fields) {
    var bestValues = {}
    arr.map(laptop => {
        Object.keys(fields).map(field => {
            var temp = laptop[field]
            if (bestValues[field] === 0 || bestValues[field] === undefined || bestValues[field] === null) {
                bestValues[field] = temp
            }
            else if (fields[field].direction) {
                if (temp > bestValues[field]) {
                    bestValues[field] = temp
                }
            }
            else {
                if (temp < bestValues[field]) {
                    bestValues[field] = temp
                }
            } 
        })
    })
    return bestValues
}

export function constrain(items, constraints){
    var PassedItems = []
    for(let i = 0; i < items.length; i++) {
        var valid = true;
        Object.keys(constraints).map(constraint => {
            if (items[i][constraint]) {

                var c1 = constraints[constraint].min === null && constraints[constraint].max >= items[i][constraint]
                var c2 = constraints[constraint].max === null && constraints[constraint].min <= items[i][constraint]
                var c3 = constraints[constraint].max >= items[i][constraint] && constraints[constraint].min <= items[i][constraint]
                var c4 =  constraints[constraint].min === null &&  constraints[constraint].max === null
                if (c1 || c2 || c3 || c4) {
                } else {
                    valid = false
                }
            } else {
                valid = false
            }

        })
        if(valid) {
            PassedItems.push(items[i])
        }
    }
    return PassedItems
}

export function score(items, perfectItem, fields) {
    return items.map(item => {
        let score = 0
        Object.keys(fields).map(field => {
            if (fields[field].preference > 0){
                var difference = item[field] - perfectItem[field]
                difference = Math.round(difference * 100) / 100
                if(difference === 0) {
                    difference = 100
                }
                var temp = Math.pow(((difference) / fields[field].preference / perfectItem[field]), 2)
                score += temp
            } 
        })
        item.score = Math.sqrt(score)
        return item
    })
}

export function scoreSort(items) {
    return items.sort(function(a,b){
        if(a.score < b.score) {
            return -1
        } else if(a.score > b.score) {
            return 1
        }
        return 0
    })
}

export function selector(items, fields) {
    items = constrain(items, fields)
    var perfect = perfectModel(items, fields)
    var scoredItems = score(items, perfect, fields)
    var sortedScoredItems = scoreSort(scoredItems)
    return sortedScoredItems
}