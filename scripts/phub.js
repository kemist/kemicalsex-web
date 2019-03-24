function toggleClickEvent() {
    return isIpad() ? "touchstart" : "click"
}
function appendedTasteProfile(e) {
    var t = document.getElementById(e);
    if (t && storageAvailable("localStorage") && localStorage.tasteCategories)
        return t.value = localStorage.getItem("tasteCategories")
}
function isLandscape() {
    return 90 === window.orientation || -90 === window.orientation
}
var blockReportModal;
function backToPH() {
    var e = $(this).data();
    $.ajax({
        url: e.logout,
        type: "POST"
    }).done(function() {
        $.ajax({
            url: premiumRedirectCookieURL + "&do=delete",
            cache: !1,
            xhrFields: {
                withCredentials: !0
            },
            crossDomain: !0
        }).done(function() {
            window.location.href = e.redirect
        })
    })
}
$(function() {
    $(document).on("click", "button.suggestion", function() {
        var e = new Date;
        e.setTime(e.getTime() + 3e4);
        var t = $(this).find($(".soughtValue"))
          , a = t.length ? t.text() : $("#search_text").val();
        if ($(this).hasClass("trendingBS"))
            document.cookie = "trending_search=" + escape($(this).text()) + ";expires=" + e.toUTCString() + ";path=/";
        else {
            var n = {
                to: escape($(this).text()),
                from: escape(a)
            };
            document.cookie = "autocomplete_search=" + JSON.stringify(n) + ";expires=" + e.toUTCString() + ";path=/"
        }
    }),
    $(".js-relatedItem").on("click", function() {
        var e = new Date;
        e.setTime(e.getTime() + 3e4);
        var t = {
            from: escape($("#search_text").val())
        };
        document.cookie = "related_search=" + JSON.stringify(t) + ";expires=" + e.toUTCString() + ";path=/"
    });
    var t, n, i, o, r, s, a = $("#androidAppBar"), l = $("body"), d = $("#mobileHeader"), c = $("#leftMenu"), e = $("#mobileNavigation"), u = ($("body, html"),
    $(".topNav"),
    $(".uiOverlay"));
    function m(a) {
        var e = document.getElementById("confirmEmailModal");
        e && (t = new MG_Modal({
            content: e,
            className: "infoModalContainer"
        })),
        void 0 !== t && t.openModal(function(e, t) {
            txtMessage = t.querySelectorAll(".text"),
            txtMessage[0].innerHTML = a
        })
    }
    ("WebkitTransition"in document.body.style || "MozTransition"in document.body.style || "OTransition"in document.body.style || "transition"in document.body.style) && l.addClass("cssTranstions"),
    MG_Utils.browser.isAppleChrome && d.addClass("iosChrome"),
    l.hasClass("androidOld") ? d.css("position", "absolute") : l.on("focus", "textarea, input", function() {
        d.css("position", "absolute")
    }).on("blur", "textarea, input", function() {
        d.removeAttr("style")
    }),
    e.on("click", function() {
        var e = $(this);
        l.toggleClass("active"),
        e.toggleClass("active"),
        d.toggleClass("active"),
        e.hasClass("active") && setTimeout(function() {
            window.scrollTo(0, 0)
        }, 100),
        c.toggleClass("active"),
        u.toggleClass("active closeLeftMenu"),
        c.hasClass("active") ? ($("#pornportal-wrapper").addClass("displayNone"),
        $("#headerWrapPP").length && $("#mobileHeader").removeClass("premium")) : ($("#pornportal-wrapper").removeClass("displayNone"),
        $("#headerWrapPP").length && $("#mobileHeader").addClass("premium")),
        u.hasClass("active") ? l.addClass("positionRelative") : l.removeClass("positionRelative")
    }),
    u.on("click", function() {
        c.hasClass("active") && ($(this).removeClass("active"),
        l.removeClass("positionRelative").removeAttr("style"),
        d.removeClass("active"),
        $("html").removeAttr("style"),
        c.removeClass("active"),
        e.removeClass("active"),
        $("#headerWrapPP").length && ($("#pornportal-wrapper").removeClass("displayNone"),
        $("#mobileHeader").addClass("premium")))
    }),
    $("#userNavigation").on("click", function() {
        var e = $(".userMenu");
        $(this).toggleClass("active"),
        e.toggleClass("active")
    }),
    $(".lngNavigation").on("click", function() {
        $(".lngMennu, .lngNavigation span.spriteUi").toggleClass("active")
    }),
    $(".videosNavigation span.spriteUi").on("click", function() {
        $(".videosMennu, .videosNavigation span.spriteUi").toggleClass("active")
    }),
    $(".categoriesNavigation span.spriteUi").on("click", function() {
        $(".categoriesMenu, .categoriesNavigation span.spriteUi").toggleClass("active")
    }),
    $(".lngMennu a").on("click", function() {
        $.cookie("lang", $(this).data("lang"), {
            domain: "." + $(this).data("root"),
            expires: 30,
            path: "/"
        })
    }),
    $(".mainFilterTrigger").on("click", function() {
        var e = $(this);
        if (0 < $(this).closest(".pageHeader").find(".mainFilterWrapper").length)
            var t = $(this).closest(".pageHeader").find(".mainFilterWrapper");
        else
            t = $(this).closest(".pageHeader").next().find(".mainFilterWrapper");
        $(".mainFilterTrigger").hasClass("active") ? ($(".mainFilterTrigger, .subFilterTrigger").removeClass("active"),
        $(".mainFilterWrapper, .subFilterList").hide()) : ($(".subFilterTrigger").hasClass("active") && ($(".subFilterTrigger").removeClass("active"),
        $(".subFilterList").hide()),
        e.toggleClass("active"),
        t.toggle())
    }),
    $(document).on("click", ".subFilterTrigger", function() {
        var e = $(this)
          , t = e.next(".subFilterList");
        $(".mainFilterTrigger").hasClass("active") ? ($(".mainFilterTrigger, .subFilterTrigger").removeClass("active"),
        $(".mainFilterWrapper, .subFilterList").hide()) : ($(".subFilterTrigger").hasClass("active") && (e.hasClass("active") || ($(".subFilterTrigger").removeClass("active"),
        $(".subFilterList").hide())),
        e.toggleClass("active"),
        t.toggle())
    }),
    $(document).on("click", ".subFilterList li", function(e) {
        var t = $(this)
          , a = t.find("span").text();
        t.parent().prev(".subFilterTrigger").removeClass("active").find("span").text(a),
        t.toggleClass("active").siblings().removeClass("active"),
        t.parent().hide()
    }),
    $("#openSearch").on("click", function() {
        $(this).toggleClass("active"),
        $("#search_text").focus().val($("#search_text").val()),
        setTimeout(function() {
            window.scrollTo(0, 1)
        }, 100)
    }),
    $(".androidBtn").on("click", function() {
        var e = new Date((new Date).valueOf() + 12096e5);
        a.slideUp(100),
        $.cookie("anroid-app", "true", {
            expires: e
        })
    }),
    $("#downloadApp, #downloadApp2").on("click", function() {
        var e = new Date((new Date).valueOf() + 5184e6);
        a.slideUp(100),
        $.cookie("anroid-app", "true", {
            expires: e
        })
    }),
    0 <= document.cookie.indexOf("anroid-app") && a.css("display", "none"),
    $(".premiumAdvertWrapper:eq(2) a").click(function() {
        ga("send", "event", "Mobile Join Links", "click", "Premium Bottom")
    }),
    $("#requestBtn").on("click", function() {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: $(this).data("ajax-url"),
            complete: function() {
                $(".notificationCount").fadeOut(),
                suggestionsMsg.friend_request && document.location.assign(suggestionsMsg.friend_request)
            }
        })
    }),
    $("#notificationBtn").on("click", function() {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: $(this).data("ajax-url"),
            complete: function() {
                $(".noiticationCount").fadeOut(),
                document.location.assign("/notifications")
            }
        })
    }),
    idMaxLengthMap = Array(),
    $.each($(":text, textarea"), function() {
        var e = $(this).attr("id")
          , t = $(this).attr("maxlength");
        void 0 !== e && void 0 !== t && (idMaxLengthMap[e] = t,
        $(this).removeAttr("maxlength")),
        $(this).bind("change keyup", function() {
            t = "",
            void 0 !== e && idMaxLengthMap.hasOwnProperty(e) && (t = idMaxLengthMap[e],
            $(this).val().length > t && $(this).val($(this).val().slice(0, t)))
        })
    }),
    $("body").on("click", ".subscribeButton button", function e(t, a, n) {
        $currentElement = $(void 0 !== a ? a : this),
        $parentElement = $currentElement.closest(".subscribeButton"),
        $allElement = $parentElement.attr("data-button-id"),
        $toggleUrl = 0 == $currentElement.attr("data-subscribed") ? $currentElement.attr("data-subscribe-url") : $currentElement.attr("data-unsubscribe-url"),
        $loggedIn = $currentElement.attr("data-login"),
        $refresh = $currentElement.attr("data-refresh"),
        $partnerConfirmationText = 0 == $currentElement.attr("data-subscribed") ? "By subscribing to this content partner you are also subscribing to all of their channels, would you like to continue?" : "By unsubscribing from this content partner you are also unsubscribing from all of their channels, would you like to continue?",
        $contentPartner = $currentElement.attr("data-content-partner");
        $isPornhubUser = $currentElement.attr("data-is-pornhub");
        $showHiddenModal = $parentElement.hasClass("privateMember");
        if (1 == $loggedIn)
            document.location.href = "/login";
        else {
            if ($showHiddenModal)
                return void m(modalTranslationText.cannotSubscribe);
            if (0 == $isPornhubUser && 1 == $contentPartner && !0 !== n)
                confirm($partnerConfirmationText) && e(t, $currentElement, !0);
            else if ($.ajax({
                type: "POST",
                url: $toggleUrl,
                dataType: "JSON",
                success: function(e) {
                    var t = e;
                    "PASS" == t.success ? (0 == $currentElement.attr("data-subscribed") ? ($currentElement.attr("data-subscribed", 1),
                    $("." + $allElement).removeClass("subscribe").addClass("unsubscribe")) : ($currentElement.attr("data-subscribed", 0),
                    $("." + $allElement).removeClass("unsubscribe").addClass("subscribe")),
                    1 == $refresh && location.reload()) : $currentElement.attr("disabled", 1),
                    $currentElement.find(".buttonLabel").text(t.text_initial)
                },
                error: function() {
                    location.reload()
                }
            }),
            varObj_footer.premiumDomain) {
                var i = $toggleUrl.split("/");
                "pornstar" == i[1] && $(".js_mixpanel").length && checkMixpanel && mixpanel.track("Subscribe to Pornstar", pornstarEvent),
                "channel" == i[1] && checkMixpanel && mixpanel.track("Subscribe to Channel", channelEvent)
            }
        }
    }),
    $("body").on("click", ".addFriendButton button", function() {
        $currentElement = $(this),
        $parentElement = $currentElement.closest(".addFriendButton"),
        $allElement = $parentElement.attr("data-button-id"),
        $friendStatus = $currentElement.attr("data-friends"),
        $refresh = $currentElement.attr("data-refresh"),
        $toggleUrl = 2 == $friendStatus ? $currentElement.attr("data-unfriend-url") : $currentElement.attr("data-friend-url"),
        $loggedIn = $currentElement.attr("data-login"),
        $showConfirmEmailModal = $currentElement.attr("data-show-confirm-email-modal"),
        $confirmMessage = $currentElement.attr("data-message"),
        1 == $loggedIn ? document.location.href = "/login" : 0 == $showConfirmEmailModal ? 1 == $friendStatus ? $.ajax({
            type: "POST",
            url: $currentElement.attr("data-unfriend-url"),
            dataType: "JSON",
            success: function(e) {
                "PASS" == e.success && ($currentElement.attr("data-friends", 0),
                $("." + $allElement).removeClass("sent").addClass("add"),
                $currentElement.find(".buttonLabel").text(e.text_initial))
            }
        }) : $.ajax({
            type: "POST",
            url: $toggleUrl,
            dataType: "JSON",
            beforeSend: function() {
                $currentElement.children().addClass("visuallyHidden"),
                $currentElement.append('<span class="spinner" />')
            },
            success: function(e) {
                var t = e;
                $currentElement.children().removeClass("visuallyHidden"),
                $currentElement.find(".spinner").remove(),
                "PASS" == t.success ? 0 == $friendStatus ? (e.auto_accepted && $currentElement.attr("data-friends", 2),
                $currentElement.attr("data-friends", 1),
                $("." + $allElement).removeClass("add").addClass("removeFriend")) : 2 == $friendStatus && ($currentElement.attr("data-friends", 0),
                $("." + $allElement).removeClass("removeFriend").addClass("add")) : "SENT" == t.success ? ($("." + $allElement).find("button").attr("data-friends", 1),
                $("." + $allElement).removeClass("removeFriend add").addClass("sent")) : $currentElement.attr("disabled", 1),
                1 == $refresh && location.reload(),
                $currentElement.find(".buttonLabel").text(t.text_initial)
            },
            error: function() {
                location.reload()
            }
        }) : (uiAddClass(),
        $("#confirmEmail").removeClass("displayNone"))
    }),
    $(document).on("click", ".modal-body .okBtn", function(e) {
        e.preventDefault(),
        t && t.closeModal()
    }),
    $(".closeModal").on("click", function() {
        uiRemoveClass(),
        $("#confirmEmail").addClass("displayNone")
    }),
    $("body").on("click", ".suggestedBox button.dismiss", function(e) {
        e.preventDefault(),
        $.ajax({
            type: "GET",
            url: $(this).attr("data-url"),
            dataType: "json",
            success: function(e) {
                "OK" === e && $(".suggestedBox").addClass("hidden")
            }
        })
    }),
    $(".js_premiumLogOut").on("click", function(e) {
        e.preventDefault();
        var t = $(this);
        $.ajax({
            url: premiumRedirectCookieURL + "&do=delete",
            cache: !1,
            crossDomain: !0,
            xhrFields: {
                withCredentials: !0
            }
        }).done(function() {
            document.location.href = t.attr("href")
        })
    }),
    $("body").on("click", ".loadGifFirst", loadGif),
    $("body").on("click", ".feedButton", function() {
        $currentButton = $(this),
        $currentButton.next().toggle(),
        $currentButton.closest(".filtersBox").siblings().find("ul").hide()
    }),
    positionBadges(),
    $("#loginInBtn").click(function(e) {
        if (window.location.href.indexOf(!1)) {
            var t = window.location.href.split("#").slice(-1)[0];
            sessionStorage.setItem("infoTabActive", t)
        }
    }),
    n = $(window).scrollTop(),
    i = 0,
    o = {
        down: 20,
        up: 5,
        top: 300
    },
    r = $("#mobileHeader"),
    s = $("#leftMenu"),
    $(window).on("scroll", MG_Utils.debounce(function() {
        var e = $(this).scrollTop()
          , t = n < e ? "down" : "up";
        if (Math.abs(e - n) > o[t] && !s.hasClass("active")) {
            var a = r.hasClass("js-headerHidden");
            !a && "down" == t && o.top < e ? (r.addClass("js-headerHidden"),
            "absolute" != $("#mobileHeader").css("position") && $("#saveFilters").addClass("headerHidden"),
            $(".filterButtons").addClass("headerHidden")) : a && "up" == t && (r.removeClass("js-headerHidden"),
            $(".filterButtons").removeClass("headerHidden"),
            $("#saveFilters").removeClass("headerHidden"))
        }
        n = e
    }, 200, function() {
        var e = $(this).scrollTop();
        e < o.top && (r.removeClass("js-headerHidden"),
        $("#saveFilters").removeClass("headerHidden")),
        0 != $("#saveFilters").length && 0 != $(".pornstarMoreFilter").length && (0 == $("#searchSection.active").length && i < e ? e >= $("#saveFilters").offset().top - $("#mobileHeader").outerHeight() && $("#saveFilters").addClass("scroll") : 0 != $("#searchSection.active").length && i < e ? e >= $("#saveFilters").offset().top && ("absolute" == $("#mobileHeader").css("position") ? $("#saveFilters").addClass("scrollSearch") : $("#saveFilters").addClass("scroll")) : e <= Math.floor($(".moreFiltersTriggerCol").offset().top) - $("#mobileHeader").outerHeight() && ("absolute" == $("#mobileHeader").css("position") ? $("#saveFilters").removeClass("scrollSearch") : $("#saveFilters").removeClass("scroll")),
        i = $(this).scrollTop());
        var t = $("#headerWrapPP")
          , a = t.length ? 45 : 5
          , n = t.length ? 45 : 35;
        a <= e ? (0 == $(".pornstarMoreFilter").length && $(".filterButtons").addClass("scroll"),
        $("#mobileHeader, #searchSection, #avoidJump, #loginMenu, #leftMenu").addClass("scroll"),
        $("#headerWrapPP").length && $("#mobileHeader").hasClass("premium") && $("#mobileHeader").removeClass("premium")) : e < n && (0 == $(".pornstarMoreFilter").length && $(".filterButtons").removeClass("scroll"),
        $("#mobileHeader, #searchSection, #avoidJump, #loginMenu, #loginOverlay, #leftMenu").removeClass("scroll js-headerHidden"),
        $(".filterButtons").removeClass("headerHidden"),
        $("#headerWrapPP").length && !$("#mobileHeader").hasClass("premium") && $("#mobileHeader").addClass("premium")),
        $("#headerWrapPP").length && $("#leftMenu").hasClass("active") && $("#mobileHeader").removeClass("premium")
    })),
    $("#countryRedirectMessage").length && (MG_Utils.storage.getItem("hideLangRedirect") || $("#countryRedirectMessage").css("display", "block").find("i").on("click", function(e) {
        $("#countryRedirectMessage").hide(),
        MG_Utils.storage.saveWithExpiry("hideLangRedirect", !0),
        e.stopPropagation()
    })),
    $("#goToPH").on("click", backToPH);
    var p = $(".js_pornstarListTrigger")
      , g = $("#pornstarVideoList");
    $pStarSpriteUi = $(".userSexVideosList"),
    p.on("click", function() {
        g.toggleClass("active"),
        $pStarSpriteUi.toggleClass("active")
    });
    var h = $("html").attr("lang")
      , f = $("#sexWellness");
    "ru" === h ? f.addClass("userLangIsRus") : f.removeClass("userLangIsRus");
    var v, y = document.querySelectorAll(".js-moreAction");
    [].forEach.call(y, function(e) {
        MG_Utils.addEventHandler(e, "click", function() {
            v = MG_Utils.nextElementSibling(e),
            (blockReportModal = new MG_Modal({
                content: v,
                className: "blockReport",
                closeButton: !1
            })).openModal()
        })
    });
    var M = document.querySelectorAll(".js-openSubCats");
    if (M)
        for (var b = 0; b < M.length; b++)
            MG_Utils.addEventHandler(M[b], "click", function(e) {
                e.stopPropagation(),
                e.preventDefault();
                var t = MG_Utils.hasClass(this, "categories_arrow") ? MG_Utils.lastChild(this.parentNode.parentNode) : MG_Utils.lastChild(this.parentNode)
                  , a = MG_Utils.previousElementSibling(t).querySelector(".js-categories_arrow");
                t && (MG_Utils.toggleClass(t, "show"),
                MG_Utils.hasClass(t, "show") ? a && MG_Utils.addClass(a, "opened") : a && MG_Utils.removeClass(a, "opened"))
            });
    var C = document.querySelectorAll(".videoList")
      , k = document.querySelectorAll(".playList");
    function E(e, t) {
        isLandscape() ? (MG_Utils.addClassMultiple(e, "landscape"),
        [].forEach.call(e, function(e) {
            e.style.maxWidth = t + "px"
        })) : (MG_Utils.removeClassMultiple(e, "landscape"),
        [].forEach.call(e, function(e) {
            e.style.maxWidth = "100%"
        }))
    }
    E(C, window.innerHeight),
    MG_Utils.addEventHandler(window, "orientationchange", function() {
        E(C, window.innerWidth)
    }),
    E(k, window.innerHeight),
    MG_Utils.addEventHandler(window, "orientationchange", function() {
        E(k, window.innerWidth)
    })
});
var $$ = new function() {
    return this.globals = {
        bannedWords: [],
        isGay: !1,
        tagModal: []
    },
    bannedWords = ["murder", "child", "incest", "beastiality", "bleed", "raping", "scat", "rape", "raped", "asphyxiation", "beastialism", "beastliness", "bleeding", "bled", "bleeds", "children", "childhood", "childlike", "chloroform", "chloroforming", "chloroformed", "chloroformism", "chloroformic", "chloroforms", "coprophilia", "coprophiliac", "coprophilic", "drugged", "incapacitate", "incapacitated", "incapacitating", "incapacitation", "incapacitates", "incestus", "infant", "infancy", "infants", "infanthood", "infantlike", "murdered", "murdering", "murderer", "murders", "necrophilia", "necrophile", "necrophiliac", "necrophilic", "necrophilism", "necromania", "pedophilia", "paedophilia", "pedophiliac", "pedophile", "paedophiliac", "rapeable", "rapable", "rapist", "raper", "rapes", "sedate", "sedated", "sedates", "sedating", "sedation", "sedately", "sedateness", "unconscious", "unconsciousness", "underage", "underaged", "bestiality", "coprophilism", "drugging", "asphyxiating", "asphyxiated", "asphyxiate", "asphyxiates", "forced", "pedo", "paedo", "paedophile", "preteen", "preteens", "kids", "kid sex", "kid porn", "chinacoolgadgets.com", "ezwatchwholesale.com", "pedofilia", "kiddie", "kiddy", "little kid", "little kids", "christy ripplemeier", "young kid", "kid fucking", "kid fucks", "school kid", "small kid", "xvideos", "xnxx", "under age", "under aged", "year kid"],
    this.elements = {},
    this.cache = {
        local: localStorage,
        session: sessionStorage,
        volatile: {}
    },
    this.timeouts = {
        autocomplete: {
            timer: null,
            value: null,
            matches: 0
        }
    },
    this.methods = {
        validateBannedWords: function(e) {
            return !(1 < bannedWords.length) || !new RegExp("\\b" + bannedWords.join("\\b|\\b") + "\\b","i").test(e)
        },
        safeJSON: function(e) {
            var t;
            e = e.replace(/(\t|\n|\r|\s)/gi, " ");
            try {
                t = e
            } catch (e) {
                t = null
            }
            return t
        }
    },
    this.callbacks = {
        doAddToPlaylist: function(e) {
            e.preventDefault(),
            e.stopImmediatePropagation();
            var t = $("select#addToList").val()
              , a = $(".addToBox")
              , n = a.show().closest(".frameTop")
              , i = $('li[data-videoid="' + $(this).attr("data-videoid") + '"]').find(a)
              , o = $(".closeMTubes")
              , r = ($("#createPlaylistWrapper").addClass("displayNone"),
            $(".playlistSelect"))
              , s = "undefined" != typeof VIDEO_MANAGE ? VIDEO_MANAGE : VIDEO_SHOW;
            if (r && VIDEO_SHOW) {
                var l = $(r).find("input:checked")[$(r).find("input:checked").length - 1];
                if (l) {
                    var d = $(l).val();
                    $(l).data("text");
                    "watchLater" === $(l).data("type") ? ($.ajax({
                        url: "/playlist/add?type=watchlater&vkey=" + VIDEO_SHOW.vkey + "&token=" + VIDEO_SHOW.token,
                        cache: !1
                    }),
                    o.trigger("click"),
                    uiRemoveClass(),
                    a.find("p").text(VIDEO_SHOW.addToPlaylist.watchLaterText),
                    n.show().fadeOut(2500)) : ($.ajax({
                        url: "/playlist/add?type=playlist&playlist_id=" + d + "&vkey=" + VIDEO_SHOW.vkey + "&token=" + VIDEO_SHOW.token,
                        cache: !1
                    }),
                    o.trigger("click"),
                    uiRemoveClass(),
                    a.find("p").text(VIDEO_SHOW.addToPlaylist.playlistText),
                    i.show().closest(".frameTop").show().fadeOut(2500))
                }
            } else if ("watchLater" == t)
                s.vkey ? ($.ajax({
                    url: "/playlist/add?type=watchlater&vkey=" + s.vkey + "&token=" + s.token,
                    cache: !1
                }),
                o.trigger("click"),
                uiRemoveClass(),
                a.find("p").text("This video has been added to your Watch Later list."),
                n.show().fadeOut(2500)) : ($.ajax({
                    url: "/playlist/add?type=watchlater&vkey=" + $(this).attr("data-videoid") + "&token=" + s.token,
                    cache: !1
                }),
                o.trigger("click"),
                uiRemoveClass(),
                a.find("p").text("This video has been added to your Watch Later list."),
                i.show().closest(".frameTop").show().fadeOut(2500));
            else
                for (var c = s.playlists, u = 0; u < c.length; u++)
                    if (t == c[u].id) {
                        1 == c[u].isFull ? (alert("You have reached the maximum limit of videos inside a playlist."),
                        o.trigger("click"),
                        uiRemoveClass(),
                        n.show().hide()) : s.vkey ? ($.ajax({
                            url: "/playlist/add?type=playlist&playlist_id=" + t + "&vkey=" + s.vkey + "&token=" + s.token,
                            cache: !1
                        }),
                        o.trigger("click"),
                        uiRemoveClass(),
                        a.find("p").text("This video has been added to your playlist."),
                        n.show().fadeOut(2500)) : ($.ajax({
                            url: "/playlist/add?type=playlist&playlist_id=" + t + "&vkey=" + $(this).attr("data-videoid") + "&token=" + s.token,
                            cache: !1
                        }),
                        o.trigger("click"),
                        uiRemoveClass(),
                        a.find("p").text("This video has been added to your playlist."),
                        i.show().closest(".frameTop").show().fadeOut(2500));
                        break
                    }
        },
        doCreatePlaylist: function(e) {
            e.preventDefault(),
            e.stopImmediatePropagation();
            var t = document.getElementById("js-tagsListModal")
              , a = $(this)
              , n = a.parent().prev("p.error")
              , i = $("input#listTitle").val().replace(/('|")/g, "")
              , o = $("textarea#listDesc").val().replace(/('|")/g, "")
              , r = $$.methods.validateBannedWords(i)
              , s = $$.methods.validateBannedWords(o)
              , l = $(".addToBox")
              , d = $(".addToBox").show().closest(".frameTop")
              , c = $("#new-playlist-privacy ul.subFilterList li.active").attr("name");
            $createPlaylistForm = $(document).find("#createPlaylistForm")[0],
            playlistCreateObj = "undefined" != typeof PLAYLIST_WATCHLATER ? PLAYLIST_WATCHLATER : "undefined" != typeof VIDEO_MANAGE ? VIDEO_MANAGE : VIDEO_SHOW,
            n.hide(),
            $(".frameTop").hide(),
            i && t.value.length ? r && s ? (a.find(".js-savePlaylist").attr("disabled", "disabled"),
            $.ajax({
                type: "POST",
                url: "/playlist_json/create",
                data: {
                    title: i,
                    tags: t.value,
                    description: o,
                    vkey: playlistCreateObj.vkey ? playlistCreateObj.vkey : $(this).attr("data-videoid"),
                    status: c,
                    token: playlistCreateObj.token
                },
                cache: !1,
                success: function(e) {
                    "forbidden" == e ? ($(".tagErrorPlaylist") && $(".tagErrorPlaylist").remove(),
                    $($createPlaylistForm).find("label").first().append('<span class="tagErrorPlaylist">Couldn\'t create playlist! Your playlist contains forbidden words</span>'),
                    a.find(".js-savePlaylist").prop("disabled", !1)) : "error_vkey" == e ? ($(".tagErrorPlaylist") && $(".tagErrorPlaylist").remove(),
                    $($createPlaylistForm).find("label").first().append("<span class=\"tagErrorPlaylist\">Video doesn't exist! Couldn't create playlist!</span>"),
                    a.find(".js-savePlaylist").prop("disabled", !1)) : ($(".closeMTubes").trigger("click"),
                    "spam" == e ? l.find("p").text("Your playlist description has too many links!") : l.find("p").text("This video has been added to your new  playlist."),
                    $createPlaylistForm.reset(),
                    window.scrollTo(0, 0),
                    playlistCreateObj.vkey ? d.show().fadeOut(2500) : $('li[data-videoid="' + $($createPlaylistForm).attr("data-videoid") + '"]').find(l).show().closest(".frameTop").show().fadeOut(2500))
                },
                error: function(e) {
                    window.scrollTo(0, 0),
                    n.text("Error creating playlist. Please try again.").show().fadeOut(2500),
                    a.find('button[type="submit"]').attr("disabled", !1)
                }
            })) : n.text("Your playlist contains forbidden words").show().fadeOut(2500) : n.text("Please enter the required information").show().fadeOut(2500)
        }
    },
    this.init = function() {
        "object" != typeof console && (console = {
            log: function(e) {
                $$.debug.self.append("<p>" + e + "</p>")
            },
            warn: function(e) {},
            error: function(e) {},
            info: function(e) {}
        });
        try {
            for (key in this.workers)
                this.workers[key].onmessage = this.callbacks.workerHandler
        } catch (e) {}
        return window.onorientationchange = function() {
            document.activeElement.blur()
        }
        ,
        this.globals.bannedWords = "",
        this
    }
    ,
    this.init()
}
;
$$.init();
var search = new autocompleteSearch({
    placeholderData: page_extra_params.placeholderData
});
function loadGif(e) {
    e.preventDefault();
    var t = $(this)
      , a = t.find("img");
    t.removeClass("loadGifFirst").addClass("linkFirst"),
    a.attr("src", a.data("gif")),
    t.html(t.html())
}
function ajaxPostNew(e, a) {
    return $.post(e, function(e) {
        if (a) {
            var t = $(a);
            t.after($(e)),
            t.remove()
        }
    }),
    !1
}
function uiAddClass(e, t, a) {
    void 0 === a && setTimeout(function() {
        window.scrollTo(0, 1)
    }, 100),
    $("body").addClass("positionRelative");
    var n = $(".uiOverlay").addClass("active");
    t = t || null;
    if (e && t) {
        var i = n.find("p");
        i.html(i.html().replace("video", "").replace("playlist", "recently watched videos"))
    }
    $(".hideWhenOpened").addClass("visuallyHidden")
}
function uiRemoveClass() {
    $("body").removeClass("positionRelative"),
    $(".uiOverlay").removeClass("active"),
    $(".hideWhenOpened").removeClass("visuallyHidden")
}
function isWinphone() {
    return -1 != navigator.userAgent.toLowerCase().indexOf("windows phone")
}
function isFirefox() {
    return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
}
function isFxIos() {
    return -1 < navigator.userAgent.toLowerCase().indexOf("fxios")
}
function isEdgIos() {
    return -1 < navigator.userAgent.toLowerCase().indexOf("edgios")
}
function iosVersion() {
    var e = window.navigator.userAgent
      , t = e.indexOf("OS ");
    if (-1 < e.indexOf("iPhone"))
        return window.Number(e.substr(t + 3, 3).replace("_", "."))
}
function isGearVr() {
    var e = window.navigator.userAgent;
    return /SamsungBrowser/.test(e) && /VR/.test(e) || /N910/.test(e) || /G920/.test(e) || /G925/.test(e) || /G928/.test(e) || /N920/.test(e) || /G930/.test(e) || /G935/.test(e) || /G950/.test(e) || /G955/.test(e)
}
function androidNative() {
    var e = navigator.userAgent;
    return -1 < e.indexOf("Mozilla/5.0") && -1 < e.indexOf("Android ") && -1 < e.indexOf("AppleWebKit") && !(-1 < e.indexOf("Chrome"))
}
function supportsVideo() {
    var e = document.createElement("video")
      , t = !1;
    try {
        if (t = !!e.canPlayType) {
            (t = new Boolean(t)).ogg = e.canPlayType('video/ogg; codecs="theora"');
            var a = 'video/mp4; codecs="avc1.42E01E';
            t.h264 = e.canPlayType(a + '"') || e.canPlayType(a + ', mp4a.40.2"'),
            t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"')
        }
    } catch (e) {}
    return t
}
var ua = navigator.userAgent.toLowerCase()
  , isAndroid = -1 < ua.indexOf("android")
  , isLumia = -1 < ua.indexOf("lumia")
  , isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  , androidAppBar = $("#androidAppBar")
  , androidAppLink = $("#androidAppLink")
  , body = $("body");
if (isAndroid) {
    var androidVersion = parseFloat(ua.slice(ua.indexOf("android") + 8));
    androidVersion < 2.3 || isWinphone() ? (androidAppBar.remove(),
    androidAppLink.remove()) : androidAppBar.removeAttr("style")
} else
    androidAppBar.remove(),
    androidAppLink.remove();
isAndroid && androidVersion < 3 && body.addClass("androidOld"),
isWinphone() && $("html").addClass("windowsPhone");
var yesNoModal = {
    show: function(e, t, a) {
        var n = new MG_Modal({
            content: document.getElementById("yesNoModal"),
            className: "yesNoModalContainer"
        });
        $("body").off(toggleClickEvent(), ".mobileFriedly.yesBtn").on(toggleClickEvent(), ".mobileFriedly.yesBtn", function(e) {
            e.preventDefault(),
            n.closeModal(),
            "function" == typeof t && t()
        }),
        $("body").off(toggleClickEvent(), ".mobileFriedly.noBtn, .mobileFriedly.modal-close").on(toggleClickEvent(), ".mobileFriedly.noBtn, .mobileFriedly.modal-close", function(e) {
            e.preventDefault(),
            n.closeModal(),
            "function" == typeof a && a()
        }),
        n.openModal(),
        $(".yesNoModalContainer").find(".text").html(e)
    }
};
function scrollModal(e) {
    var t = isAndroid && androidVersion < 3
      , a = t ? "androidOldModal" : "modalOpen";
    return t && window.scrollTo(0, 0),
    $(e).addClass(a)
}
function removeScrollable(e) {
    var t = isAndroid && androidVersion < 3 ? "androidOldModal" : "modalOpen";
    return $(e).removeClass(t)
}
$(window).on("orientationchange", function(e) {
    $("body").hasClass("modalOpen") && void 0 !== iosVersion() && $(".modalContainer:visible").html($(".modalContainer:visible").html())
});
var modal = {
    templates: new Object,
    hideTimeout: -1,
    show: function(e, t, a, n) {
        var i = $("#" + e)
          , o = $("<div/>").attr("class", "modalContainer").hide()
          , r = $("body");
        void 0 === modal.templates[e] ? modal.templates[e] = i.html() : i.html(modal.templates[e]),
        i.prependTo(o).addClass("modalElement").show(),
        0 < $(".modalContainer").length && o.css("z-index", Math.max.apply(null, $(".modalContainer").map(function() {
            return parseInt($(this).css("z-index"))
        }).get()) + 1),
        scrollModal("body"),
        r.append(o),
        o.fadeIn({
            duration: 400,
            queue: !1,
            complete: a
        }),
        0 < t && (modal.hideTimeout = setTimeout(function() {
            modal.hide()
        }, t)),
        "create-playlist-modal" == e && $("#new-playlist-description").limit({
            limit: 1e3
        })
    },
    hide: function(e) {
        var t;
        if (0 < modal.hideTimeout && (clearTimeout(modal.hideTimeout),
        modal.hideTimeout = -1),
        1 == $(".modalContainer").length)
            t = $(".modalContainer");
        else if (1 < $(".modalContainer").length) {
            var a = $(e);
            t = 1 == a.length ? a.parents(".modalContainer") : $(".modalContainer").first()
        }
        t && 0 < t.length && t.fadeOut({
            duration: 400,
            queue: !1,
            complete: function() {
                $(this).find(".modalElement").removeClass("modalElement").hide().prependTo("body"),
                $(this).remove(),
                removeScrollable("body")
            }
        }),
        $("#leftMenu").hasClass("active") || $("body").removeClass("positionRelative"),
        $(".error").css("display", "none")
    }
};
$(document).on("keyup", function(e) {
    27 == e.keyCode && 0 < $(".modalContainer").length && !$(this).find(".disableHide").length && modal.hide()
}),
$("html").on("click touchend", ".modalBackground", function(e) {
    $(this).hasClass("disableHide") || modal.hide(this)
}),
$("html").on("click", ".modal-close", function(e) {
    e.preventDefault(),
    modal.hide(e.target)
}),
$("html").on("click", ".noBtn", function(e) {
    e.preventDefault(),
    modal.hide(e.target)
});
var dvdImageModalContent = document.getElementById("dvdImagePreview");
if (dvdImageModalContent)
    var dvdImageModal = new MG_Modal({
        content: dvdImageModalContent,
        className: "dvdImageContainer"
    });
function renderCommentLinks() {
    $(".commentUsernameLink:not(.processed)").each(function(e, t) {
        $(this).data("href") ? $(this).addClass("processed").html('<a href="' + $(this).data("href") + '" target="_blank" rel="noopener noreferrer">@' + $(this).data("username") + "</a>") : $(this).addClass("processed").html("<span>@" + $(this).data("username") + "</span>")
    })
}
function positionBadges() {
    $(".user-flag:not(.large-avatar) span.flag").each(function() {
        $(this).position({
            my: "left-7 top-17",
            at: "left bottom",
            collision: "none none",
            of: $(this).parents(".user-flag").find(".avatar")
        })
    }),
    $(".usr-box-cont a span.flag").css({
        top: "106px",
        left: "-5px"
    }),
    $(".feedItems").find(".feedLeft .userLink i").each(function() {
        $(this).closest(".feedLeft").next(".feedRight").find("a").first().append($(this))
    }),
    $(".commentBoxAvatar").find(".userLink i").each(function() {
        $(this).closest(".commentBoxAvatar").next(".commentBoxContent").find(".commentMsg > div:first-child > a, .commentMsg > span.commentUsernameLink > a").append($(this))
    })
}
$(".showDvdModal").on("click", function(e) {
    e.preventDefault(),
    void 0 !== dvdImageModal && dvdImageModal.openModal()
}),
renderCommentLinks(),
$(".commentBlock").find(".userLink i").each(function() {
    $(this).closest(".userLink").next(".usernameLink").after($(this))
}),
$(".moreFiltersWrapper").on("click", ".moreFiltersTrigger", function(e) {
    e.preventDefault();
    var t = $(this);
    t.toggleClass("active").closest(".moreFiltersWrapper").find(".moreFilters").slideToggle(),
    t.hasClass("active") ? (0 != $(".pornstarMoreFilter").length ? t.hide() : (t.show(),
    t.html(t.attr("data-name-fewer") + ' <i class="spriteUi"></i>')),
    $(".saveFilter").data("shown") && $(".saveFilter").addClass("show")) : (t.show(),
    t.html(t.attr("data-name-more") + ' <i class="spriteUi"></i>'),
    $(".filterButtons").removeClass("sticky"),
    $(".saveFilter").removeClass("show")),
    $(window).scroll(function(e) {
        $(".moreFiltersTrigger").text().trim() == $(".moreFiltersTrigger").attr("data-name-fewer").trim() && ($(document).scrollTop() > $(".moreFiltersWrapper").offset().top - 10 && $(document).scrollTop() + 100 < $(".moreFiltersWrapper").position().top + $(".moreFiltersWrapper").offset().top + $(".moreFiltersWrapper").outerHeight(!0) ? ($("#mobileHeader").hasClass("active") && $(".filterButtons").addClass("headerActive"),
        $(".filterButtons").addClass("sticky")) : ($("#mobileHeader").hasClass("active") && $(".filterButtons").removeClass("headerActive"),
        $(".filterButtons").removeClass("sticky")))
    });
    var a = document.querySelector(".js-openCats");
    a && (MG_Utils.addClass(a.parentNode.parentNode, "show"),
    MG_Utils.addClass(MG_Utils.previousElementSibling(a.parentNode.parentNode), "opened"))
}),
MG_Utils.domReady(function() {
    if (function() {
        "use strict";
        var o = {
            debug: !1,
            link: ".js-mxp",
            parent: ".js-mxpParent",
            meta: 'head [name="mxp-page"]'
        }
          , a = function(e) {
            var t = MG_Utils.closest(this, o.parent);
            if (!this.hasAttribute("data-mxptext") || !t || !t.hasAttribute("data-mxp"))
                return !1;
            JSON.parse(this.getAttribute("data-mxp"));
            var a = "None"
              , n = t.getAttribute("data-mxp")
              , i = {};
            this.hasAttribute("data-mxptype") && (a = this.getAttribute("data-mxptype")),
            o.debug && MG_Utils.preventDefault(e),
            i[a + "Name"] = this.getAttribute("data-mxptext"),
            i.PageFrom = n,
            mixpanel.track("View " + a, i)
        }
          , t = function() {
            var e = document.querySelector(o.meta);
            e && mixpanel.track("Viewed Page", {
                "Page Name": e.getAttribute("content")
            })
        }
          , n = function() {
            for (var e = document.querySelectorAll(o.link), t = 0; t < e.length; t++)
                MG_Utils.addEventHandler(e[t], "click", a)
        };
        return {
            init: function(e) {
                if (!premiumFlag)
                    return !1;
                e = e || {},
                (o = MG_Utils.extendSimple(o, e)).debug && console.log("MixPanel debug mode"),
                t(),
                n()
            },
            trackClick: n
        }
    }().init(),
    void 0 !== typeof USER_ORDERS) {
        var e = document.getElementById("confirmTipModal");
        if (e)
            var a = new MG_Modal({
                content: e,
                className: "confirmTipModal",
                closeDocument: !1
            });
        $("body").on("click", ".js-tipAgain", function(e) {
            e.preventDefault();
            var t = $(this);
            a && a.openModal(function() {
                $(".confirmTipModal").find("a.tip").attr("href", t.data("url"))
            })
        }),
        $("body").on("click", ".confirmTipModal .tip", function() {
            a.closeModal()
        }),
        $("body").on("click", ".confirmTipModal .cancel", function(e) {
            e.preventDefault(),
            a.closeModal()
        })
    }
}),
function() {
    var e = document.querySelector("#js-noticeWarningModal")
      , t = document.querySelector("#js-blackListModal");
    if (e && t) {
        var n = new MG_Modal({
            content: e,
            closeButton: !1,
            className: "noticeModal",
            closeDocument: !1
        })
          , i = new MG_Modal({
            content: t,
            closeButton: !1,
            className: "blackListModal",
            closeDocument: !1
        });
        document.addEventListener("click", function(e) {
            var t = e.target;
            (MG_Utils.hasClass(t, "js-closeBlackList") || MG_Utils.hasClass(t, "js-closeNotice")) && (MG_Utils.hasClass(t, "js-closeBlackList") && i.closeModal(),
            MG_Utils.hasClass(t, "js-closeNotice") && n.closeModal())
        }),
        document.addEventListener("click", function(e) {
            var t = e.target;
            if (MG_Utils.hasClass(t, "js-ckeckExternalSource") || MG_Utils.hasClass(t.parentNode, "js-ckeckExternalSource")) {
                e.preventDefault();
                var a = t.getAttribute("href") || t.parentNode.getAttribute("href");
                MG_Utils.ajaxCall({
                    type: "POST",
                    url: varObj_footer.blackWhiteListUrl,
                    data: {
                        url: a
                    },
                    dataType: "json",
                    success: function(e) {
                        try {
                            switch (e.status) {
                            case "blacklist":
                                return i.openModal(function(e, t) {
                                    t.querySelector(".js-blackListInput").value = a
                                });
                            case "whitelist":
                                return window.location.href = a;
                            default:
                                return n.openModal(function(e, t) {
                                    t.querySelector(".js-noticeDivInput").value = a,
                                    t.querySelector(".js-extrnalLink").href = a
                                })
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    }
                })
            }
        }),
        document.querySelector(".js-extrnalLink") && document.addEventListener("click", function(e) {
            MG_Utils.hasClass(e.target, "js-extrnalLink") && n.closeModal()
        })
    }
}();
var displayErrorModal = function(e) {
    var t = document.getElementById("tagErrorDisplayModal");
    t.innerHTML = "";
    var a = document.createElement("span");
    a.className = VIDEO_SHOW.updatedTags ? "tagError" : "tagListError",
    a.textContent = e,
    t.appendChild(a)
}
  , handleTagDisplayModal = function(e) {
    if (VIDEO_SHOW.updatedTags) {
        var t = '<li class="tagButton"><span>' + e + '</span><button class="deleteTag removeTagButtonModal"></button></li>';
        document.getElementById("tagListModal").innerHTML += t
    } else {
        t = '<li class="tagButton"><div class="topTagTri"></div><div class="botTagTri"></div><span>' + e + '</span><button class="deleteTag removeTagButtonModal"></button></li>';
        document.getElementById("tagListModal").innerHTML += t
    }
}
  , handleRemoveTagModal = function(e) {
    var t = e.target;
    if (MG_Utils.hasClass(t, "removeTagButtonModal")) {
        var a = t.parentNode.textContent
          , n = $$.globals.tagModal.indexOf(a);
        0 <= n && $$.globals.tagModal.splice(n, 1),
        $$.globals.tagModal.toString().replace(/(,|\s)/g, "").length < 150 && (document.getElementById("tagErrorDisplayModal").innerHTML = ""),
        document.getElementById("tagListModal").innerHTML = "",
        $$.globals.tagModal.forEach(handleTagDisplayModal);
        var i = document.getElementById("js-tagsListModal")
          , o = $$.globals.tagModal.join("|");
        i.value = o.replace(/\s/gi, "+")
    }
}
  , handleAddTagModal = function(e) {
    var t = e.target;
    if (MG_Utils.hasClass(t, "js-addTagModal")) {
        var a = document.getElementById("addTagInputModal");
        if (a.value = a.value.replace(/[^a-zA-Z0-9 ]/g, "").trim(),
        a.value.length < 3)
            return displayErrorModal('Tag "' + a.value + '" not valid. Must contain a minimum of 3 characters!');
        if (20 < a.value.length)
            return displayErrorModal('Tag "' + a.value + '" not valid. Tags are maximum 20 characters!');
        if (-1 < $$.globals.tagModal.map(function(e) {
            return e.toLowerCase()
        }).indexOf(a.value.toLowerCase()))
            return displayErrorModal("No duplicate tags allowed!");
        if (!validateBannedWords(a.value.toLowerCase(), bannedWordsListUi))
            return displayErrorModal('Tag "' + a.value + '" is considered to be a banned word.');
        document.getElementById("tagListModal").innerHTML = "",
        $$.globals.tagModal.push(a.value);
        var n = $$.globals.tagModal.toString().replace(/(,|\s)/g, "");
        if (150 < n.length) {
            var i = $$.globals.tagModal.indexOf(a.value);
            0 <= i && $$.globals.tagModal.splice(i, 1)
        }
        $$.globals.tagModal.forEach(handleTagDisplayModal),
        document.getElementById("tagErrorDisplayModal").innerHTML = "",
        150 < n.length && displayErrorModal("You have reached the maximum tag limit.");
        var o = document.getElementById("js-tagsListModal")
          , r = $$.globals.tagModal.join("|");
        o.value = r.replace(/\s/gi, "+"),
        a.value = ""
    }
}
  , handleKeyDownModal = function(e) {
    var t = e.target
      , a = e.keyCode ? e.keyCode : e.which;
    if (MG_Utils.hasClass(t, "js-addTagInputModal") && 13 == a) {
        e.preventDefault(),
        e.stopImmediatePropagation();
        var n = document.getElementById("addTagInputModal");
        n.value = n.value.replace(/,/g, ""),
        document.getElementById("addTagModal").click()
    }
}
  , handleKeyUpModal = function(e) {
    var t = e.target
      , a = e.keyCode ? e.keyCode : e.which;
    if (MG_Utils.hasClass(t, "js-addTagInputModal") && 188 == a) {
        var n = document.getElementById("addTagInputModal");
        n.value = n.value.replace(/,/g, ""),
        document.getElementById("addTagModal").click()
    }
}
  , clearTagsModal = function(e) {
    var t = e.target;
    (MG_Utils.hasClass(t, "buttonMTubes") || MG_Utils.hasClass(t, "playlistItemContainer")) && void 0 !== $$.globals.tagModal && ($$.globals.tagModal = [])
};
!function() {
    var e = document.querySelector(".relatedCategoryList");
    e && 0 == e.querySelector(".js-mxpParent").querySelectorAll(".show").length && MG_Utils.addClass(e, "hidden")
}(),
document.addEventListener("click", handleRemoveTagModal),
document.addEventListener("touchend", handleAddTagModal),
document.addEventListener("keydown", handleKeyDownModal),
document.addEventListener("keyup", handleKeyUpModal),
document.addEventListener("click", clearTagsModal),
function() {
    if ("undefined" != typeof MPP_EXCLUSIVE_TERMS)
        try {
            var e = document.getElementById("modelMPPExclusive")
              , d = new MG_Modal({
                content: e,
                className: "modelMPPExclusiveModal",
                closeButton: !1,
                closeDocument: !1,
                maxWidth: "500px",
                minWidth: "300px"
            });
            d.openModal(function() {
                var t = document.getElementById("modalWrapMTubes");
                if (t) {
                    var e = t.querySelector(".modelMPPForm")
                      , a = t.querySelector(".modelMPPSubmit")
                      , n = (t.querySelectorAll(".js-modelMPPInput"),
                    t.querySelector(".js-modelMPPInputIntial"))
                      , i = t.querySelector(".js-modelMPPError")
                      , o = t.querySelector(".js-modelMPPErrorMessage")
                      , r = {
                        errors: [],
                        checked: !1
                    }
                      , s = function(e) {
                        if (r.errors.push(e),
                        i && o)
                            return MG_Utils.removeClass(i, "isHidden"),
                            r.errors.forEach(function(e) {
                                o.innerHTML = e
                            })
                    }
                      , l = function() {
                        i && o && (MG_Utils.addClass(i, "isHidden"),
                        o.innerHTML = "")
                    };
                    document.addEventListener("change", function(e) {
                        MG_Utils.hasClass(e.target, "js-modelMPPInput") && (l(),
                        r.checked = !0)
                    }),
                    document.addEventListener("click", function(e) {
                        if (MG_Utils.hasClass(e.target, "modelMPPSubmit"))
                            return e.preventDefault(),
                            r.checked ? "" === n.value ? s(MPP_EXCLUSIVE_TERMS.errorIntials) : /^[a-zA-Z]+$/.test(n.value) ? 3 <= n.value.length ? s(MPP_EXCLUSIVE_TERMS.errorLimit) : void MG_Utils.ajaxCall({
                                url: MPP_EXCLUSIVE_TERMS.endPoint,
                                data: {
                                    exclusive: t.querySelector(".js-modelMPPInput:checked").value,
                                    initials: t.querySelector(".js-modelMPPInputIntial").value
                                },
                                type: "POST",
                                success: function(e) {
                                    e.success ? d.closeModal() : s(e.message)
                                }
                            }) : s(MPP_EXCLUSIVE_TERMS.errorAlpha) : s(MPP_EXCLUSIVE_TERMS.errorChecked)
                    }),
                    document.addEventListener("focus", function(e) {
                        MG_Utils.hasClass(e.target, "js-modelMPPInputIntial") && l()
                    }, !0),
                    n.addEventListener("keyup", function(e) {
                        13 === event.keyCode && a.click()
                    }),
                    e.addEventListener("submit", function(e) {
                        e.preventDefault()
                    })
                }
            })
        } catch (e) {
            console.log("MPP Eclusive: ", e)
        }
}();
var notInterestedWrappers = ""
  , menu = ""
  , currentTarget = ""
  , menuBtn = "";
function hideShowMenu(e) {
    e.stopPropagation(),
    (currentTarget = e.currentTarget) && menu && (MG_Utils.hasClass(currentTarget, "hover") ? (MG_Utils.removeClass(currentTarget, "hover"),
    menu.style.display = "none") : (removeOtherButtons(),
    MG_Utils.addClass(currentTarget, "hover"),
    menu.style.display = "block",
    positionMenu(currentTarget)))
}
function removeOtherButtons() {
    var e = document.querySelector(".not-interested-wrapper.hover");
    e && (MG_Utils.removeClass(e, "hover"),
    menu.style.display = "none")
}
function positionMenu(e) {
    var t = menu.querySelector(".signin") ? 274 : 78;
    if (e && menu) {
        menu.style.top = MG_Utils.offset(e).top + 20 + "px",
        menu.style.left = MG_Utils.offset(e).left - t + "px";
        var a = menu.getBoundingClientRect().left;
        a < 0 && (menu.style.left = MG_Utils.offset(e).left - (t + a) + "px")
    }
}
function removeVideo(t) {
    var e = currentTarget.getAttribute("data-url")
      , a = {
        id: currentTarget.getAttribute("data-rel"),
        value: 0,
        token: currentTarget.getAttribute("data-token"),
        type: currentTarget.getAttribute("data-type")
    };
    $.ajax({
        type: "POST",
        url: e,
        data: a,
        success: function(e) {
            successCallback(e, t)
        },
        error: errorCallback
    })
}
MG_Utils.domReady(function() {
    if (notInterestedWrappers = document.querySelectorAll(".not-interested-wrapper"),
    menu = document.querySelector(".not-interested-menu"),
    menuBtn = menu.querySelector(".playlist-remove"),
    notInterestedWrappers)
        for (i = 0; i < notInterestedWrappers.length; i++)
            MG_Utils.addEventHandler(notInterestedWrappers[i], "click", hideShowMenu);
    menuBtn && MG_Utils.addEventHandler(menuBtn, "click", removeVideo)
});
var successCallback = function(e, t) {
    if ("OK" == e && t.target) {
        var a = findAncestor(currentTarget, "videoWrapper")
          , n = findAncestor(currentTarget, "wrap")
          , i = findAncestor(currentTarget, "underThumb");
        if (a) {
            var o = a.querySelector(".not-interested-overlay")
              , r = a.querySelector(".webm-previewEl");
            a.style.pointerEvents = "none"
        }
        if (n) {
            o = n.querySelector(".not-interested-overlay");
            n.style.pointerEvents = "none"
        }
        o && (o.style.display = "block",
        i && (i.style.position = "initial"),
        removeOtherButtons(),
        r && (r.style.display = "none"))
    }
};
function findAncestor(e, t) {
    for (; (e = e.parentElement) && !e.classList.contains(t); )
        ;
    return e
}
function errorCallback(e, t, a) {
    alert("something went wrong  " + e + " " + t + " " + a)
}
function setMarginForModel() {
    var t = document.querySelector("#pornstarListSection .js-mxp img")
      , e = document.querySelectorAll("#awardWinnersList .winnerModelImage")
      , a = document.querySelectorAll("#awardWinnersList .winnerModelImage img")
      , n = 0;
    t || (t = document.querySelector("#awardWinnersList .js-mxp img")),
    t && e && e.length && (n = (t.clientHeight - 150) / 2,
    e.forEach(function(e) {
        e.style.height = t.clientHeight + "px"
    }),
    a.forEach(function(e) {
        e.style.top = n + "px"
    }))
}
!function() {
    var e = !!navigator.platform && /iPhone/.test(navigator.platform) && -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("CriOS")
      , t = -1 == navigator.userAgent.indexOf("Chrome") && -1 == navigator.userAgent.indexOf("Android ");
    if (e && t) {
        var a = document.querySelectorAll(".pagination3 li a, .pagination3 .linkActive, .pagination2 li a, .pagination2 .linkActive");
        [].forEach.call(a, function(e) {
            e && MG_Utils.addClass(e, "js-popUnder")
        })
    }
}(),
$(document).ready(function() {
    setMarginForModel(),
    window.addEventListener("orientationchange", function() {
        window.setTimeout(function() {
            setMarginForModel()
        }, 100)
    })
});
