app.service('taskModal', function() {
    this.showModal = function(id) {
    	//sharedProperties.setProperty(id);
    	$(".mymodal").addClass("mymodal-on");
        $(".mymodal-shadow").addClass("mymodal-shadow-on");
        $("body").css("overflow", "hidden");
        return id;
	};
});