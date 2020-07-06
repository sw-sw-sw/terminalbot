inlets =1;
outlets =1;

function getPath(path){
	//path = this.patcher.filepath;
	path2 = path.split('/');
	path3 = "";

	for (i = 1; i< path2.length ;i++){
		path3 = path3 + "/" + path2[i];
		}
	outlet(0, path3);
   }

