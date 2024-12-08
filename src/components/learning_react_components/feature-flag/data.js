let boolVal = [false, false, false, false]


const dummyAPIResponse = {
    showAccordion: boolVal[0],
    showRandomColor: boolVal[1],
    showLightDarkMode: boolVal[2],
    showStarRating: boolVal[3]
}

function featureFlagDataServiceCall() {



    return new Promise((resolve, reject) => {
        if (dummyAPIResponse) {
            setTimeout(resolve({dummyAPIResponse,boolVal}), 500)
        }
        else {
            reject("Some error occured, please try again!")
        }
    })
}

export default featureFlagDataServiceCall;