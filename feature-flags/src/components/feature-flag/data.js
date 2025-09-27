

const dummyApiResponse = {
    showLightDarkMode: true,
    showTikTakToeBoard: true,
    showRandomColorGenerator: true,
    showAccordian: true,
    showTreeView: true
}

function featureFlagsDataServiceCall(){

    return new Promise((resolve, reject) => {
        if(dummyApiResponse){
            setTimeout(() => resolve(dummyApiResponse),500)
        }else{
            reject('Some error occured please try again')
        }
        
    })
}

export default featureFlagsDataServiceCall