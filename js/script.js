//Constants
const citrixBrandColor = "#452170";

$(document).ready(function () {
    //Navigation tween
    const navTabShiftController = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: "#about",
    })
        .setClassToggle("#nav-tabs-section", "shiftRight")
        .addTo(navTabShiftController);

    let navigationUnderlineController = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: $(".section").height(),
            triggerHook: 0,
            reverse: true,
        },
    });

    new ScrollMagic.Scene({ triggerElement: "#about" })
        .setClassToggle(".nav-tab-about", "show-tab-underline")
        .addTo(navigationUnderlineController);
    new ScrollMagic.Scene({ triggerElement: "#work" })
        .setClassToggle(".nav-tab-work", "show-tab-underline")
        .addTo(navigationUnderlineController);
    new ScrollMagic.Scene({ triggerElement: "#education" })
        .setClassToggle(".nav-tab-education", "show-tab-underline")
        .addTo(navigationUnderlineController);
    new ScrollMagic.Scene({ triggerElement: "#essentials" })
        .setClassToggle(".nav-tab-essentials", "show-tab-underline")
        .addTo(navigationUnderlineController);
    new ScrollMagic.Scene({ triggerElement: "#contact" })
        .setClassToggle(".nav-tab-contact", "show-tab-underline")
        .addTo(navigationUnderlineController);

    //Profile Image Tween
    const aboutController = new ScrollMagic.Controller();

    const profileImageTween = new TimelineMax();
    const myBioTween = new TimelineMax();

    profileImageTween
        .from("#my-image", {
            scale: 0.2,
            opacity: 0.25,
            x: "170%",
        })
        .to("#my-image", {
            scale: 1,
            opacity: 1,
            x: "0%",
        })
        .to("#my-image", {
            scale: 0.2,
            opacity: 0.2,
            x: "200%",
        });

    myBioTween.from("#my-bio", {
        opacity: 0.25,
        x: "-200%",
    });

    new ScrollMagic.Scene({
        triggerElement: "#about",
        duration: "140%",
    })
        .setTween(profileImageTween)
        // .addIndicators({ name: "About" })
        .addTo(aboutController);

    new ScrollMagic.Scene({
        triggerElement: "#about",
    })
        .setTween(myBioTween)
        .addTo(aboutController);

    //Work color background change tween
    const workController = new ScrollMagic.Controller();

    const workColorChangetween = TweenMax.to("#work-section", {
        backgroundColor: citrixBrandColor,
        duration: 1,
        ease: "expo.out",
    });

    new ScrollMagic.Scene({
        triggerElement: "#work-section",
        duration: 200,
        triggerHook: 0.1,
    })
        .setTween(workColorChangetween)
        .addTo(workController);

    const yearTween = new TimelineMax();

    const yearFrom = {
        opacity: 0,
        x: "-2%",
    };

    const yearTo1 = {
        x: "150%",
        opacity: 0.5,
    };

    const yearTo2 = {
        x: "200%",
        opacity: 0,
    };

    const fromWorkSectionJobDesc = {
        opacity: 0,
        x: "100%",
    };

    const toWorkSectionJobDesc = {
        opacity: 0,
        x: "-100%",
    };

    yearTween
        .from("#year-2021", { ...yearFrom })
        .from("#work-section-job-desc", { ...fromWorkSectionJobDesc })
        .to("#year-2021", { ...yearTo1 })
        .to("#work-section-job-desc", { ...toWorkSectionJobDesc })
        .to("#year-2021", { ...yearTo2 })
        .to("#work-section", { backgroundColor: "#009750" })
        // .from("#year-2019", {
        //     display: "block",
        //     ...yearFrom,
        // })
        // .from("#work-section-job-desc", { ...fromWorkSectionJobDesc })
        // .to("#year-2019", { ...yearTo1 })
        // .to("#work-section-job-desc", { ...toWorkSectionJobDesc })
        // .to("#year-2019", { ...yearTo2 })
        .to("#work-section", { backgroundColor: "#0085AD" });

    new ScrollMagic.Scene({
        triggerElement: "#work-section",
        triggerHook: 0,
        duration: "100%",
    })
        .setTween(yearTween)
        .setPin("#work-section")
        .addIndicators({ name: "work" })
        .addTo(workController);

    //TODO: Fix this not working
    function getDesiredLeftShiftX(classToShift) {
        return (
            $(".nav-tab-contact").position().left -
            $(classToShift).position().left
        );
    }

    const vh = (coef) => window.innerHeight * (coef / 100);
    // const navTabsSectionTween = TweenMax.to("#nav-tabs-section", {
    //     y: vh(10),
    //     duration: 0.5,
    //     ease: "back.out(1.7)",
    // });

    // const contactTween = TweenMax.to(".nav-tab-contact", {
    //     y: vh(30),
    //     duration: 0.5,
    //     ease: "back.out(1.7)",
    // });

    // const essentialsTween = TweenMax.to(".nav-tab-essentials", {
    //     y: vh(25),
    //     x: getDesiredLeftShiftX(".nav-tab-essentials"),
    //     duration: 0.5,
    //     delay: 0.1,
    //     ease: "back.out(1.7)",
    // });

    // const educationTween = TweenMax.to(".nav-tab-education", {
    //     y: vh(20),
    //     x: getDesiredLeftShiftX(".nav-tab-education"),
    //     duration: 0.5,
    //     delay: 0.2,
    //     ease: "back.out(1.7)",
    // });

    // const workTween = TweenMax.to(".nav-tab-work", {
    //     y: vh(15),
    //     x: getDesiredLeftShiftX(".nav-tab-work"),
    //     duration: 0.5,
    //     delay: 0.3,
    //     ease: "back.out(1.7)",
    // });

    // const aboutTween = TweenMax.to(".nav-tab-about", {
    //     y: vh(10),
    //     x: getDesiredLeftShiftX(".nav-tab-about"),
    //     duration: 0.5,
    //     delay: 0.4,
    //     ease: "back.out(1.7)",
    // });

    // new ScrollMagic.Scene({
    //     triggerElement: "#about",
    // })
    //     .setTween(navTabsSectionTween)
    //     .addIndicators({ name: "ABOUT" })
    //     .addTo(controller);

    // new ScrollMagic.Scene({
    //     triggerElement: "#about",
    // })
    //     .setTween(contactTween)
    //     .addIndicators({ name: "ABOUT" })
    //     .addTo(controller);

    // new ScrollMagic.Scene({
    //     triggerElement: "#about",
    // })
    //     .setTween(essentialsTween)
    //     .addTo(controller);

    // new ScrollMagic.Scene({
    //     triggerElement: "#about",
    // })
    //     .setTween(educationTween)
    //     .addTo(controller);

    // new ScrollMagic.Scene({
    //     triggerElement: "#about",
    // })
    //     .setTween(workTween)
    //     .addTo(controller);

    // new ScrollMagic.Scene({
    //     triggerElement: "#about",
    // })
    //     .setTween(aboutTween)
    //     .addTo(controller);
});
