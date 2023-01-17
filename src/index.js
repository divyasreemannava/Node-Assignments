const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 fs.writeFile(fileName,"Hello World!",(err)=>{
		console.log(err)
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data=await fs.readFile(fileName,"utf-8");
	console.log(data)
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName,fileContent);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName)
}
// myFileUpdater("Assignment.txt"," Divya")
// myFileReader("Assignment.txt")

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }