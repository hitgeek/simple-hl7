


module.exports.getTimestamp = function(date) {
    return date.getFullYear() + 
        ("0" + (date.getMonth() + 1)).slice(-2) + 
        ("0" + date.getDate()).slice(-2) + 
        ("0" + date.getHours() + 1 ).slice(-2) + 
        ("0" + date.getMinutes()).slice(-2) + 
        ("0" + date.getSeconds()).slice(-2) 
}

module.exports.getControlId = function(date) {
    return date.getFullYear() + 
        ("0" + (date.getMonth() + 1)).slice(-2) + 
        ("0" + date.getDate()).slice(-2) + 
        ("0" + date.getHours() + 1 ).slice(-2) + 
        ("0" + date.getMinutes()).slice(-2) + 
        ("0" + date.getSeconds()).slice(-2) + 
        ("0" + date.getMilliseconds()).slice(-2)
}