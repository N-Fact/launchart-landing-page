import moment from "moment";

export function getProjectData(projectData) {
    const returnData = projectData;

    returnData.mintDateStr = "TBA";
    if (returnData.mintDate !== 'TBA') {
        const mintDate = moment(returnData.mintDate);
        if (mintDate.isValid()) {
            if (mintDate.isAfter()) {
                //returnData.mintDate = mintDate.toNow(true) + " (" + mintDate.format('MMM Do') + ")";
                returnData.mintDateStr = mintDate.format('MMM Do');
            } else {
                returnData.mintDateStr = mintDate.format('ll')
            }
        }
    }

    return returnData;
}