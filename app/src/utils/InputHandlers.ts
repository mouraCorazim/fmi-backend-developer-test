
export function isKeyLetter(event: any){
        const keyCode = event.keyCode
        return (keyCode < 65 && keyCode !== 32) || (keyCode > 90 && keyCode < 97) || keyCode > 122? "": event.target.value
    }
    
export function isKeyNumeric(event: any){
        const keyCode = event.keyCode
        return keyCode > 57 || keyCode < 48? "": event.target.value
    }
    
export function needCelTraceChar(event: any){
        const value = event.target.value
        const length = value.length
        const ddd = value.slice(1, 3)
    
        return (ddd == "11" && length === 9) || (ddd != "11" && length === 8)? value + "-": value
    }
    
export function isInvalidCelLength(event: any){
        const value = event.target.value
        const length = value.length
        const ddd = value.slice(1, 3)
    
        return (ddd === "11" && length > 13 && value.charCodeAt(4) !== 57) || (ddd !== "11" && length > 13)? "": value
    }
    
export function needTraceCharAt(compare: number){
        return function(event: any){
            const value = event.target.value
            return value.length === compare? value + "-": value
        }
    }
    
export function needDotChar(event: any){
        const value = event.target.value
        return value.length === 2 || value.length === 6? value + ".": value
    }
    
export function needParentesis(event: any){
        const value = event.target.value
        return value.length === 2? "(" + value + ")": value
    }
    
export function upperCase(event: any){
        return event.target.value.toUpperCase()
    }

export function clearInput(event: any){
    return ""
}

export function Handle(event: any){
    return{
        handler: (fn: Function) => {
            event.target.value = fn(event)

            return Handle(event)
        }
    }
}