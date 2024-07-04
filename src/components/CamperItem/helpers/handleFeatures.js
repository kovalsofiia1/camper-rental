
export const handleDetails = (details) => {
    const resDetails = {
        adults: details["adults"],
        children: details["children"],
        engine: details['engine'],
        transmission: details['transmission'],
        form: details['form'],
        ...details['details']
    }

    const result = {}
    
    Object.keys(resDetails).forEach((key) => {
        if (['engine', 'form', 'transmission'].includes(key)) {
            result[resDetails[key]] = 1
        }
        else {
            result[key] = resDetails[key]
        }
    })

    return result

}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
    
export const getKey = (key) => {
    const exceptions = {
        'airConditioner': 'Air conditioner',
        'panelTruck': 'Panel truck',
        'fullyIntegrated': 'Fully integrated'
    }

    return key in exceptions ? exceptions[key] : capitalizeFirstLetter(key) 
}