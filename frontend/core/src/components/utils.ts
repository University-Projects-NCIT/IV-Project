

// export const groupByDate = (data) => {
// 		/**
// 		 * Groups the object data in array 
// 		 * as by same date in day 
// 		 */

// 		let groupedData = []
// 		let temp = []
	
// 	// data.reduce((accumulator, values) => {
// 	// 	console.log("accu", accumulator)
// 	// 	console.log("values", values)
// 	// 	return (
		 
// 	// })
	
// 		data.map((product, index) => {
// 			//Checking the date of previous produdct and current product 
// 			// substring first 10 string because it contains the date 
// 			// we subtract the time 
// 			if (index > 0)
// 			{
// 				if ( String(data[index-1].created_at).substring(0,10) == String(product.created_at).substring(0,10)){
// 				temp.push(product)
// 				} else if( String(data[index-1].created_at).substring(0,10) != String(product.created_at).substring(0,10)){
			
// 				// groupedData.map((values, i) => {
// 				// 	if (String(values.created_at).substring(0, 10) == String(product.created_at).substring(0, 10) &&
// 				// 		values.upvote == product.upvote) {
// 				// 		groupedData[i].push(temp)
// 				// 		temp = []
// 				// 		temp.push(product)
// 				// 		return 
// 				// 		}
// 				// })
					
// 				groupedData.push(temp)
// 				temp = [];
// 				temp.push(product)
// 				} 
// 			}

// 			if (index < 1)
// 			{
// 				temp.push(product)
// 			}

// 			if (data.length - 1 == index && temp.length != 0)
// 			{
// 				// The data is last we should manually push in group data
// 				groupedData.push(temp)
// 			}

			
// 		})
	
// 		return groupedData;
// }

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