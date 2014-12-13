
// margin left ---------
		var winwid = $(window).width();
		var leftMargin = (winwid - 960) / 2;

		// $(".block").css("margin-left", leftMargin + "px");
// ---------------------


// panelSetup ----------
		var config = {
			olap:100,    //overlap
			dur: 200,     // scene duration
			bw:960       // panel width
		};


		function panelSetup() {
		var panels = ['description', 'beginning', 'Scene2', 'Scene3','Scene4','Scene5','Scene6','Scene8', 'Scene9', 'Scene10', 'Scene11','Scene13','Scene14','Scene16', 'Scene17', 'Scene18', 'Scene19','Scene20','Scene21'];

			for (var i=0; i< panels.length; i++) {
				var elem = "#" + panels[i];
				$(elem).css({'left': leftMargin+(i*(config.bw + config.olap)) + 'px', 'width':config.bw});
			};
		};



// ---------------------

	   var controller = new ScrollMagic({
			container: "#container",
	        triggerHook: 'onCenter',
	   		vertical: false

	   });


	   var scene = new ScrollScene({
	   	duration: 380,
	   	//reverse:true,
	   	offset: 100
	   })
		.addTo(controller)
	   	.triggerHook('onCenter')
		.triggerElement("#trigger1")
		.setTween(TweenMax.to("#line1", 0.4, {opacity: 1}))
		.setPin("#trigger1");


		var scene2 = new ScrollScene({
			duration: 450,
	   		//reverse:true,
	   		offset: 300
		})
		.addTo(controller)
	   	.triggerHook('onCenter')
		.triggerElement("#trigger1")
		.setTween(TweenMax.to("#line2", 0.4, {opacity: 1}));


		var scene3 = new ScrollScene({
			duration: 100,
		})
		.addTo(controller)
	   	.triggerHook(0.4)
		.triggerElement("#trigger2")
		.setTween(TweenMax.to("#square", 0.4, {rotation:"+=90"}));

		var scene4 = new ScrollScene({
			duration: winwid
		})
		.addTo(controller)
	   	.triggerHook(1)
		.triggerElement("#trigger3")
		.setTween(TweenMax.to("#notFit", 0.4, {rotation:"-240deg", repeat:10 , yoyo:true}));



		var scene5 = new ScrollScene({
			duration: winwid / 2 
		})
		.addTo(controller)
	   	.triggerHook(0.9)
		.triggerElement("#trigger4")
		.setTween(TweenMax.from("#line4-1", 1, {opacity: 0}));

		var scene5 = new ScrollScene({
			duration: winwid * 1.5 
		})
		.addTo(controller)
	   	.triggerHook(0.8)
		.triggerElement("#trigger4")
		.setTween(TweenMax.from("#dontAboutFit", 0.3, {left: 100}));

		var scene6 = new ScrollScene({
			duration: 100 
		})
	   	.triggerHook(0.58)
	   	.triggerElement("#trigger4")
	   	.setTween(TweenMax.fromTo("#missy", 1, {top: 0} , {top: -80, ease:Bounce.easeInOut, delay: 1}))
		.addTo(controller);

		var scene7 = new ScrollScene({
			duration: 200 
		})
	   	.triggerHook(0.65)
	   	.triggerElement("#trigger4")
	   	.setTween(TweenLite.fromTo("#dontAnything", 1, {top: 500} , {top: -320}))
		.addTo(controller);

		var scene8 = new ScrollScene({
			duration: 200 
		})
	   	.triggerHook(0.6)
	   	.triggerElement("#trigger4")
	   	.setTween(TweenMax.from("#line4-2", 1, {opacity: 0}).delay(2))
		.addTo(controller);

		var scene9 = new ScrollScene({
			duration: 200
		})
		.addTo(controller)
	   	.triggerHook(0.6)
		.triggerElement("#trigger5")
		.setTween(TweenMax.fromTo("#missySharp", 0.4, {rotation:"60deg"}, {rotation:"0deg"}));

		var scene10 = new ScrollScene({
			duration: 200 
		})
	   	.triggerHook(0.5)
	   	.triggerElement("#trigger5")
	   	.setTween(TweenMax.from("#delicate", 1, {top: -100, left: 700}))
		.addTo(controller);


		var scene11 = new ScrollScene({
			duration: 10 
		})
	   	.triggerHook(0.3)
	   	.triggerElement("#trigger5")
	   	.setTween(TweenMax.to("#delicate", 1, {opacity:0}))
		.addTo(controller);

		var scene11 = new ScrollScene({
			duration: winwid / 3 
		})
	   	.triggerHook(0.8)
	   	.triggerElement("#trigger6")
	   	.setTween(TweenMax.to("#pedestal", 1, {opacity:1}))
		.addTo(controller);

		var scene12 = new ScrollScene({
			duration: winwid  
		})
	   	.triggerHook(0.8)
	   	.triggerElement("#trigger6")
	   	.setTween(TweenMax.to("#hasLotMiss", 1, {rotation:"360deg", repeat:10}))
		.addTo(controller);

		var scene13 = new ScrollScene({
			duration: winwid 
		})
	   	.triggerHook(0.5)
	   	.triggerElement("#trigger6")
	   	.setTween(TweenMax.to("#hasLotPiece", 1, {rotation:"360deg", repeat:10}))
		.addTo(controller);	

		var scene14 = new ScrollScene({
			duration: winwid + 200
		})
	   	.triggerHook(1)
	   	.triggerElement("#trigger8")
	   	.setTween(TweenMax.to(["#hungers1","#hungers3"], 1, {rotation:"360deg", repeat:10}))
		.addTo(controller);	

		var scene15 = new ScrollScene({
			duration: winwid + 200
		})
	   	.triggerHook(1)
	   	.triggerElement("#trigger8")
	   	.setTween(TweenMax.to(["#hungers2","#hungers4"], 1, {rotation:"-250deg", repeat:20}))
		.addTo(controller);	

		var scene16 = new ScrollScene({
			duration: winwid,
			offset: 100
		})
	   	.triggerHook(0.7)
	   	.triggerElement("#trigger8")
	   	.setTween(TweenMax.fromTo(["#hungers"], 1, {left: -1 * winwid / 2, opacity:0},{left: winwid / 2, opacity:1}))
		.addTo(controller);

		var scene17 = new ScrollScene({
			duration: 700,
		})
	   	.triggerHook(0)
	   	.triggerElement("#trigger8")
	   	.setTween(TweenMax.fromTo(["#hungers"], 1, {opacity:1},{opacity:0}))
		.addTo(controller);

		var scene18 = new ScrollScene({
			duration: 100,
		})
	   	.triggerHook(0.7)
	   	.triggerElement("#trigger9")
	   	.setTween(TweenMax.fromTo(["#line9-1"], 1, {opacity:0},{opacity:1}))
		.addTo(controller);

		var scene19 = new ScrollScene({
			duration: winwid,
			offset: -100
		})
	   	.triggerHook(0.7)
	   	.triggerElement("#trigger9")
	   	.setTween(TweenMax.fromTo(["#closeOne"], 1, {left:200},{left:-1 * winwid}))
		.addTo(controller);

		var scene20 = new ScrollScene({
			duration: 100,
		})
	   	.triggerHook(0.4)
	   	.triggerElement("#trigger9")
	   	.setTween(TweenMax.fromTo(["#line9-2"], 1, {opacity:0},{opacity:1}))
		.addTo(controller);	

		var scene21 = new ScrollScene({
			duration: winwid,
			offset: -100
		})
	   	.triggerHook(0.4)
	   	.triggerElement("#trigger9")
	   	.setTween(TweenMax.fromTo(["#notNotice"], 1, {left:700},{left:-1 * winwid}))
		.addTo(controller);	

		var scene22 = new ScrollScene({
			duration: winwid
		})
	   	.triggerHook(0.5)
	   	.triggerElement("#trigger9")
	   	.setTween(TweenMax.to(["#notNotice"], 1, {rotation:"-250deg", repeat:20}))
		.addTo(controller);	

		var scene23 = new ScrollScene({
			duration: 200,
		})
	   	.triggerHook(0.9)
	   	.triggerElement("#trigger10")
	   	.setTween(TweenMax.fromTo(["#line10"], 1, {opacity:0},{opacity:1}))
		.addTo(controller);

		var scene24 = new ScrollScene({
			duration: 200,
		})
	   	.triggerHook(0.5)
	   	.triggerElement("#trigger10")
	   	.setTween(TweenMax.fromTo(["#flower","#line10"], 1, {opacity:1},{opacity:0}))
		.addTo(controller);	

		var scene25 = new ScrollScene({
			duration: 200,
		})
	   	.triggerHook(0.5)
	   	.triggerElement("#trigger10")
	   	.setTween(TweenMax.fromTo(["#line10-1"], 1, {opacity:0},{opacity:1}))
		.addTo(controller);

		var scene26 = new ScrollScene({
			duration: 100,
		})
	   	.triggerHook(0.4)
	   	.triggerElement("#trigger10")
	   	.setTween(TweenMax.fromTo(["#flashy"], 1, {opacity:0}, {opacity:1}))
		.addTo(controller);

		var scene27 = new ScrollScene({
			duration: 700
		})
	   	.triggerHook(0.4)
	   	.triggerElement("#trigger10")
	   	.setTween(TweenMax.to(["#flashy"], 1, {rotation:"-250deg", repeat:10}))
		.addTo(controller);	

		var scene28 = new ScrollScene({
			duration: 500
		})
	   	.triggerHook(1)
	   	.triggerElement("#trigger11")
	   	.setTween(TweenMax.to(["#withFit"], 1, {rotation:"360deg", repeat:10}))
		.addTo(controller);

		var scene29 = new ScrollScene({
			duration: 300
		})
	   	.triggerHook(0.5)
	   	.triggerElement("#trigger11")
	   	.setTween(TweenMax.to(["#fitMissy"], 1, {scale: 1.5}))
		.addTo(controller);

		var scene30 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.8)
	   	.triggerElement("#trigger13")
	   	.setTween(TweenMax.fromTo(["#line13"], 1, {opacity: 0},{opacity:1}))
		.addTo(controller);		

		var scene31 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.4)
	   	.triggerElement("#trigger13")
	   	.setTween(TweenMax.fromTo(["#line13-1"], 1, {opacity: 0},{opacity:1}))
		.addTo(controller);

		var scene32 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.3)
	   	.triggerElement("#trigger13")
	   	.setTween(TweenMax.fromTo(["#line13-2"], 1, {opacity: 0},{opacity:1}))
		.addTo(controller);	

		var scene33 = new ScrollScene({
			duration: 300
		})
	   	.triggerHook(0.2)
	   	.triggerElement("#trigger13")
	   	.setTween(TweenMax.to(["#fitOneTalk"], 1, {left:-100, opacity: 0}))
		.addTo(controller);			

		var scene34 = new ScrollScene({
			duration: 300
		})
	   	.triggerHook(0.2)
	   	.triggerElement("#trigger13")
	   	.setTween(TweenMax.to(["#GrownMissy"], 1, {scaleX:-1}))
		.addTo(controller);

		var scene35 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.7)
	   	.triggerElement("#trigger14")
	   	.setTween(TweenMax.fromTo(["#line14"], 1, {opacity: 0},{opacity:1}))
		.addTo(controller);

		var scene36 = new ScrollScene({
			duration: 500
		})
	   	.triggerHook(0.6)
	   	.triggerElement("#trigger14")
	   	.setTween(TweenMax.fromTo(["#TheO"], 1, {left: 1000, rotation:"360deg"},{left:600, rotation:"0deg"}))
		.addTo(controller);

		var scene37 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.25)
	   	.triggerElement("#trigger14")
	   	.setTween(TweenMax.to(["#firstDialog"], 1, {opacity:1}))
		.addTo(controller);

		var scene38 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.8)
	   	.triggerElement("#trigger16")
	   	.setTween(TweenMax.to(["#T"], 1, {left:430,top:380, rotation:"-36deg"}))
		.addTo(controller);

		var scene39 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.8)
	   	.triggerElement("#trigger16")
	   	.setTween(TweenMax.to(["#line16"], 1, {opacity:1}))
		.addTo(controller);

		var scene40 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.4)
	   	.triggerElement("#trigger16")
	   	.setTween(TweenMax.to(["#secDialog"], 1, {opacity:1}))
		.addTo(controller);

		var scene41 = new ScrollScene({
			duration: 700
		})
	   	.triggerHook(0.2)
	   	.triggerElement("#trigger16")
	   	.setTween(TweenMax.to(["#theOGo"], 1, {left: 1000, rotation:"-360deg", opacity:0}))
		.addTo(controller);

		var scene42 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.6)
	   	.triggerElement("#trigger17")
	   	.setTween(TweenMax.to(["#line17"], 1, {opacity:1}))
		.addTo(controller);


		var scene43 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.2)
	   	.triggerElement("#trigger17")
	   	.setTween(TweenMax.to(["#line17-2"], 1, {opacity:1}))
		.addTo(controller);

		var scene44 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.8)
	   	.triggerElement("#trigger18")
	   	.setTween(TweenMax.to(["#missyAloneLonge"], 1, {rotation:"150deg"}))
		.addTo(controller);

		var scene45 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.7)
	   	.triggerElement("#trigger19")
	   	.setTween(TweenMax.to(["#miss1"], 1, {opacity:1, delay:0.2, rotation:"150deg"}))
		.addTo(controller);

		var scene46 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.5)
	   	.triggerElement("#trigger19")
	   	.setTween(TweenMax.to(["#miss2"], 1, {opacity:1, delay:0.2, rotation:"150deg"}))
		.addTo(controller);

		var scene47 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.3)
	   	.triggerElement("#trigger19")
	   	.setTween(TweenMax.to(["#miss3"], 1, {opacity:1, delay:0.2, rotation:"150deg"}))
		.addTo(controller);


		var scene48 = new ScrollScene({
			duration: 200
		})
	   	.triggerHook(0.8)
	   	.triggerElement("#trigger20")
	   	.setTween(TweenMax.to(["#roundMissy"], 1, {opacity:1, delay:0.2, rotation:"150deg"}))
		.addTo(controller);

		var scene49 = new ScrollScene({
			duration: winwid 
		})
	   	.triggerHook(0.5)
	   	.triggerElement("#trigger20")
	   	.setTween(TweenMax.to(["#roundMissy"], 1, {left:1610, top:100,scale:0.8, rotation:"360deg"}))
		.addTo(controller);

$(document).ready(function() {

		panelSetup();
});