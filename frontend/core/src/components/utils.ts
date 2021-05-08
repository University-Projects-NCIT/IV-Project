export const filterLaunched = (data) => {
		/**
		 * This function filters the data according to the 
		 * Date it is launched . Only already lauhced data is filtered
		 */
		const date1 = new Date();
		return data.filter(obj => date1 >= new Date(obj.launch_at))
	}

export const filterUpcomming = (data) => {
		const date1 = new Date()
		return data.filter(obj => date1 < new Date(obj.launch_at))
	}


export const groupByDate = (data) => {
		/**
		 * Groups the object data in array 
		 * as by same date in day 
		 */

		let groupedData = []
		let temp = []
		data.map((product, index) => {
			//Checking the date of previous produdct and current product 
			// substring first 10 string because it contains the date 
			// we subtract the time 
			if (temp.length != 0 && String(temp[temp.length - 1].created_at).substring(0,10) == String(product.created_at).substring(0,10)){
				temp.push(product)
			} else if(temp.length != 0 && String(temp[temp.length - 1].created_at).substring(0,10) != String(product.created_at).substring(0,10)){
				groupedData.push(temp)
				temp = [];
			}

			if (temp.length == 0)
			{
				temp.push(product)
			}

			if (data.length - 1 == index && temp.length != 0)
			{
				// The data is last we should manually push in group data
				groupedData.push(temp)
			}

			
		})
		return groupedData;
}
  
export function msToDayTime(duration : number) {
  let milliseconds = Math.floor((duration % 1000) / 100)
  let seconds = Math.floor((duration / 1000) % 60)
  let minutes = Math.floor((duration / (1000 * 60)) % 60)
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  let day = Math.floor((duration)/(1000*60*60*24)%365)

  
	let hoursStr = (hours < 10) ? "0" + hours : hours;
	let minutesStr = (minutes < 10) ? "0" + minutes : minutes;
  let secondsStr = (seconds < 10) ? "0" + seconds : seconds;
	let dayStr
	if (day > 1)
	{
		 dayStr = day + " Days "
	} else {
		dayStr= day+ " Day "
	}
  


  return dayStr + hoursStr + ":" + minutesStr + ":" + secondsStr;
}