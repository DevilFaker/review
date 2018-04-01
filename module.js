function Module(id,parent){
	this.id=id;
	this.parent=parent;
	this.exports={};
	this.child=[];
	this.filename=null;
	this.loaded=false;
}

module.exports=Module;

var module=new Module(filename,parent);

////////////////////////////////////////

