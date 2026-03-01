$(document).ready(function () {
    $(".close-ads").on("click", function () {
        $(".ads-section").hide();
    });

    // Search
    $(".search-btn").on("click", function (e) {
        e.preventDefault();
        $(".searchBarOpen").addClass("active");
        $("body").addClass("overflow-hidden");
    });

    $(".searchBarOpen--closeBtn").on("click", function () {
        $(".searchBarOpen").removeClass("active");
        $("body").removeClass("overflow-hidden");
    });

    // Notifications
    const notificationsContainer = $(".notifications-container");
    const bell = $(".bell");
    const bellIcon = $(".bell .bell-icon")
    const closed = "./assets/icons/Component 290.svg";
    const opened = "./assets/icons/pink-bell.svg";


    bellIcon.on("click", () => {
        // Close tools menu if open
        if ($('.tools-container').hasClass('open')) {
            $('.tools-container').removeClass('open');
            $(".tools-btn .pen-icon").attr('src', closedTools);
        }
        notificationsContainer.toggleClass("open");
        const current = bellIcon.attr('src');
        bellIcon.attr('src', current === closed ? opened : closed);
    });

    // Tools
    const toolsContainer = $(".tools-container");
    const toolBtn = $(".tools-btn");
    const penIcon = $(".tools-btn .pen-icon")
    const closedTools = "./assets/icons/Component 292.svg";
    const openedTools = "./assets/icons/pink-pen.svg";

    penIcon.on("click", () => {
        // Close notifications menu if open
        if ($('.notifications-container').hasClass('open')) {
            $('.notifications-container').removeClass('open');
            $(".bell .bell-icon").attr('src', closed);
        }
        toolsContainer.toggleClass("open");
        const current = penIcon.attr('src');
        penIcon.attr('src', current === closedTools ? openedTools : closedTools);
    });
});