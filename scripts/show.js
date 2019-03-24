function removeThousand(e) {
    if (1e3 < e) {
        var t = Math.round(e / 1e3);
        return t ? t + "k" : e
    }
    return e
}
function getRelatedVideos() {
    return $.ajax({
        type: "GET",
        url: "/video/relateds?ajax=1&id=" + VIDEO_SHOW.videoId + "&page=" + ++VIDEO_SHOW.pageNumber,
        dataType: "html",
        success: function(e) {
            $("#relatedVideos").append(e),
            4 == VIDEO_SHOW.pageNumber && $("#relatedVideos #viewMoreWrap").hide()
        }
    }),
    !1
}
function showVrFallback() {
    document.getElementById("vrFallback").style.display = "block"
}
function disableSubmit(a) {
    if (a)
        var o = setInterval(function() {
            var e = $("#" + a + " input");
            if (e.length) {
                var t = $("#flagVideoSubmit");
                t.prop("disabled", !0),
                t.addClass("disabledButton"),
                e.on("change", function() {
                    t.prop("disabled", !1),
                    t.removeClass("disabledButton")
                }),
                clearInterval(o)
            }
        }, 500)
}
$(function() {
    var s, e, l = LocalStorageManager.getInstance(), t = $("#createPlaylistForm"), a = ($("#createPlaylistWrapper"),
    $("#playlistModal")), i = ($("#rateWrapper"),
    window.location), o = JSON.parse(decodeURIComponent(l.get("videoRated")));
    if ($("#thumbsBtn, .js-closeThumb ").click(function() {
        $("#thumbDisplay, #thumbsBtn, .js-closeThumb").toggleClass("active")
    }),
    $(".notifClose").on("click", function() {
        $(this).closest(".notifContainer").addClass("displayNone")
    }),
    $("#imgPrivateContainer.webmVid").length && $("#imgPrivateContainer video").width() / $("#imgPrivateContainer video").height() < 1.7 && $("#imgPrivateContainer.webmVid").addClass("overUnderVid"),
    o && o[VIDEO_SHOW.videoId]) {
        var n = document.querySelector(".barWrapper");
        n && MG_Utils.hasClass(n, "no-votes") && MG_Utils.removeClass(n, "no-votes");
        var r = document.getElementById("videoShow");
        r && MG_Utils.addClass(r, "videoVoted"),
        (VIDEO_SHOW.saleVideo && VIDEO_SHOW.isPurchased && !VIDEO_SHOW.isPremium || !VIDEO_SHOW.saleVideo || VIDEO_SHOW.isPremium) && c({
            value: (e = (e = o[VIDEO_SHOW.videoId]).split("|"))[0],
            current: e[1]
        }.value)
    }
    function d(e) {
        var t = $(e);
        if (!t.hasClass("voted")) {
            var a = "thumbs-up" === t.attr("id") ? 1 : 0;
            if ($(document).trigger("customVotePercent", a),
            c(a),
            $.ajax({
                url: VIDEO_SHOW.voteUrl + "&current=" + (a ? VIDEO_SHOW.currentUp : VIDEO_SHOW.currentDown) + "&value=" + a,
                type: "POST",
                success: function(e) {
                    e && l.push("videoRated", e)
                }
            }),
            varObj_footer.premiumDomain) {
                var o = 1 == a ? "Like" : "Dislike";
                videoEvent.Vote = o,
                mixpanel.track("Video Vote", videoEvent)
            }
        }
    }
    function c(e) {
        e = parseInt(e);
        var t = [$("#thumbs-down"), $("#thumbs-up")];
        if (t[e]) {
            if (t[e ? 0 : 1].hasClass("voted"))
                t[e ? 0 : 1].removeClass("voted");
            t[e].addClass("voted").find("span")
        }
    }
    function u() {
        $("#downloadTrigger").find("i").toggleClass("active"),
        $(".downloadBar").toggle(),
        $(".js-confirmationInitialFreeAccount").hide(),
        $(".js-InitialFreeAccount").show()
    }
    function v() {
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return /windows phone/i.test(e) ? "Windows Phone" : /android/i.test(e) ? "Android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "iOS" : "unknown"
    }
    $("#thumbs-up, #thumbs-down").on("click", function() {
        var e = document.querySelector(".barWrapper");
        e && MG_Utils.hasClass(e, "no-votes") && MG_Utils.removeClass(e, "no-votes"),
        VIDEO_SHOW.saleVideo ? VIDEO_SHOW.isPurchased ? d(this) : VIDEO_SHOW.loggedOut && !VIDEO_SHOW.isPremium ? i.href = VIDEO_SHOW.login : purchaseModals.openPurchaseModal() : d(this)
    }),
    VIDEO_SHOW.loggedOut && $(document).find("#favoriteBtn").on("click", function() {
        i.href = VIDEO_SHOW.login
    }),
    VIDEO_SHOW.liu && !VIDEO_SHOW.deleted ? (VIDEO_SHOW.isFavourite ? $(document).find("#favoriteBtn").addClass("active") : $(document).find("#favoriteBtn").removeClass("active"),
    $(document).on("click", "#favoriteBtn", function() {
        var a = $(this)
          , o = $(".uiOverlay .favorite");
        s = f,
        $.post("video/favourite", {
            id: VIDEO_SHOW.videoId,
            token: VIDEO_SHOW.token,
            toggle: VIDEO_SHOW.isFavourite ? 0 : 1
        }, function(e) {
            if (e) {
                var t = e;
                isFavouriteFromJson = "remove" == t.action ? 0 : 1,
                "false" == t.success ? (s.closeModal(),
                yesNoModal.show(t.message),
                $(".noBtn").addClass("hidden"),
                $(".modal-title").html("Warning")) : (isFavouriteFromJson ? (a.removeClass("active"),
                o.removeClass("active"),
                VIDEO_SHOW.isFavourite = 0) : (a.addClass("active"),
                o.addClass("active"),
                VIDEO_SHOW.isFavourite = 1),
                s.closeModal())
            } else
                a.addClass("active")
        })
    })) : VIDEO_SHOW.liu || $("document").on("click", "#favoriteBtn", function() {
        i.href = "login"
    }),
    $("#downloadTansoDl").not(".js-paidDownload").on("click", function(e) {
        VIDEO_SHOW.saleVideo ? VIDEO_SHOW.isPurchased ? u() : VIDEO_SHOW.loggedOut ? i.href = VIDEO_SHOW.login : purchaseModals.openPurchaseModal() : function(e) {
            var t = ua.match(/TansoDL/i)
              , a = "http://m.mirmay.com/downloadmanager?utm_source=phmt&utm_medium=downloadbutton&utm_campaign=inplayer_button"
              , o = "https://" + VIDEO_SHOW.premiumRedirect + "/premium_signup?type=mobDownloadUpsell"
              , s = a;
            {
                if (navigator.userAgent.match(/Windows Phone/i) || isAndroid && androidVersion < 3 || t)
                    return t && VIDEO_SHOW.downloadUrls && (player_quality = JSON.parse(localStorage.getItem("player_quality")),
                    player_quality && (quality_id = "quality" + player_quality.quality + "p",
                    $("#downloadTansoDl").attr("href", VIDEO_SHOW.downloadUrls[quality_id])));
                e.preventDefault(),
                s = isAndroid || ua.match(/iPhone/i) ? a : o,
                ga("send", "event", "Download Button", "click", s == a ? "Download Mirmay" : "Download Upsell"),
                ua.match(/iPhone/i) ? window.open(s) : i.href = s
            }
        }(e)
    }),
    $(".js-paidDownload").on("click", function(e) {
        VIDEO_SHOW.loggedOut || VIDEO_SHOW.isPurchased ? u() : purchaseModals.openPurchaseModal()
    }),
    VIDEO_SHOW.saleVideo || VIDEO_SHOW.isPaidDownload || $("#downloadTansoDl").attr("href", VIDEO_SHOW.download),
    $("#downloadTrigger").not(".js-paidDownload, .js-videoGeoUnavailable").click(function() {
        !VIDEO_SHOW.saleVideo || VIDEO_SHOW.saleVideo && VIDEO_SHOW.isPurchased ? u() : purchaseModals.openPurchaseModal()
    }),
    $(".js-videoGeoUnavailable").on("click", function(e) {
        $(".videoGeoUnavailableWrapper").toggleClass("display-none")
    }),
    $(".closeBtn, .dismissButton").click(function() {
        u()
    }),
    varObj_footer.premiumDomain && $("#downloadTrigger").click(function() {
        mixpanel.track("Download Video", videoEvent)
    }),
    1 == function(e) {
        for (var t = window.location.search.substring(1).split("&"), a = 0, o = t.length; a < o; a++) {
            var s = t[a].split("=");
            if (s[0] == e)
                return s[1]
        }
        return !1
    }("activated_download") ? ($("#upgradeSuccessMessage").show(),
    $(".downloadBar").show(),
    $("#downloadMessage").hide(),
    $("#downloadTrigger").find("i").toggleClass("active")) : ($("#upgradeSuccessMessage").hide(),
    $("#downloadMessage").show()),
    $(".confirmationButton").on("click", function() {
        $(".js-InitialFreeAccount").hide(),
        $(".js-confirmationInitialFreeAccount").show(),
        mixpanel.track("Upgrade confirmation", videoEvent)
    }),
    $(".downloadNowButton").on("click", function() {
        $("#upgradeSuccessMessage").hide(),
        $("#downloadMessage").show()
    });
    var m = document.getElementById("createPlaylistWrapper");
    if (m)
        var f = new MG_Modal({
            content: m,
            className: "playlistItemContainer playlistVideo"
        });
    function g(e, t, a) {
        e.style.color = t,
        e.innerText = a
    }
    function h(e, t, a) {
        "add" === e ? MG_Utils.hasClass(t, a) || MG_Utils.addClass(t, a) : MG_Utils.hasClass(t, a) && MG_Utils.removeClass(t, a)
    }
    function p(e, t, a) {
        e.forEach(function(e) {
            MG_Utils.hasClass(e, t) || (h("remove", e, "active"),
            h("remove", a, "active"))
        })
    }
    function _(e, t) {
        e && e.forEach(function(e) {
            MG_Utils.hasClass(e, t) || h("remove", e, "active")
        })
    }
    VIDEO_SHOW.liu && !VIDEO_SHOW.deleted ? a.on("click", function() {
        void 0 !== f && f.openModal(function() {
            !function(e, t) {
                var s = document.querySelector(t + " .js-caption")
                  , l = document.querySelector(t + " .js-shareOutcome")
                  , i = (document.querySelector(t + " .js-addToStream"),
                document.querySelector(t + " .streamWrap"))
                  , n = document.querySelector(t + " .playlistWrap")
                  , r = document.querySelector(".modalMTubes .addToStream i.downArrow")
                  , d = document.querySelector(".modalMTubes .playlist i.downArrow")
                  , c = [r, d]
                  , u = [i, n];
                e && MG_Utils.addEventHandler(e, "click", function(e) {
                    if (MG_Utils.hasClass(e.target, "js-saveBtn") && ($(".js-saveBtn").addClass("disabledShareBtn"),
                    $(".js-saveBtn").attr("disabled", !0),
                    $.ajax({
                        url: VIDEO_SHOW.shareToStreamUrl,
                        data: {
                            profile: VIDEO_SHOW.trackUserId,
                            table: "stream_posts_videos",
                            attachment: VIDEO_SHOW.trackVideoId,
                            caption: s.value
                        },
                        type: "POST",
                        success: function(e) {
                            !function(e, t, a) {
                                a && h("add", a, "active");
                                e && e.status && "pass" === e.status.toLowerCase() ? (t.value = "",
                                g(a, "#339503", VIDEO_SHOW.streamSubmit.successText)) : (g(a, "#e53b1a", VIDEO_SHOW.streamSubmit.errorText),
                                $(".js-saveBtn").removeClass("disabledShareBtn"),
                                $(".js-saveBtn").attr("disabled", !1))
                            }(e, s, l)
                        }
                    })),
                    MG_Utils.hasClass(e.target, "js-addToStream")) {
                        p(u, "streamWrap", e.target),
                        _(c, "streamArrow");
                        var t = [r, i, e.target];
                        t.forEach(function(e) {
                            MG_Utils.toggleClass(e, "active")
                        })
                    }
                    if (MG_Utils.hasClass(e.target, "playlist") || MG_Utils.hasClass(e.target, "js-cancelPlaylist")) {
                        e.preventDefault(),
                        p(u, "playlistWrap", e.target),
                        _(c, "playlistArrow");
                        var a = [d, n, e.target];
                        a.forEach(function(e) {
                            MG_Utils.toggleClass(e, "active")
                        })
                    }
                    if (MG_Utils.hasClass(e.target, "js-cancelBtn")) {
                        var o = [i, l, r];
                        o.forEach(function(e) {
                            h("remove", e, "active")
                        }),
                        s.value = ""
                    }
                    MG_Utils.hasClass(e.target, "js-addToPlaylist") && $$.callbacks.doAddToPlaylist(e)
                })
            }(document.querySelector(".playlistItemContainer"), ".playlistItemContainer"),
            -1 !== v().toLowerCase().indexOf("windows phone") && $("#videoPlayerPlaceholder").find("video").hide()
        }),
        t.find("button[type=submit]").attr("disabled", !1),
        $(".js-saveBtn").removeClass("disabledShareBtn"),
        $(".js-saveBtn").attr("disabled", !1)
    }) : a.on("click", function() {
        i.href = VIDEO_SHOW.login
    });
    var M = document.getElementById("shareWrapper");
    if (M)
        var y = new MG_Modal({
            content: M,
            className: "shareItemContainer shareVideo"
        });
    $(document).on("click", "#shareModal", function(e) {
        e.preventDefault(),
        void 0 !== y && y.openModal(function() {
            -1 !== v().toLowerCase().indexOf("windows phone") && $("#videoPlayerPlaceholder").find("video").hide()
        }),
        $("#uiLayerShareTitle").text(VIDEO_SHOW.videoTitle)
    }),
    $("body").bind("DOMNodeRemoved", function(e) {
        -1 !== v().toLowerCase().indexOf("windows phone") && "modalWrapMTubes" === e.target.id && (e.target.className.indexOf("playlistItemContainer") || e.target.className.indexOf("shareItemContainer")) && $("#videoPlayerPlaceholder").find("video").show()
    }),
    $(document).on("click", ".addToList", function(e) {
        e.preventDefault(),
        $(".addList").toggleClass("active"),
        $(".createList").toggleClass("active")
    }),
    $(".closeModal").on("click", function() {
        $(".triggerBtn").trigger("click"),
        uiRemoveClass()
    }),
    $(document).on("click", ".js-savePlaylist", $$.callbacks.doCreatePlaylist),
    $(".showTags").on("click", function() {
        var e = $(this);
        1 != e.data("scripts-loaded") && $.getScript($(this).data("scripts")),
        e.toggleClass("active").data("scripts-loaded", 1),
        e.hasClass("active") ? ($(".targetContainer").removeClass("displayNone"),
        $(".suggestionsAllWrap").removeClass("displayNone").addClass("displayNone")) : ($(".targetContainer").removeClass("displayNone").addClass("displayNone"),
        $(".suggestionsAllWrap").addClass("displayNone"))
    }),
    $("ul.tabs").each(function() {
        var t, a, e = $(this).find("a");
        (t = $(e.filter('[href="' + location.hash + '"]')[0] || e[0])).addClass("active"),
        a = $(t.attr("href")),
        e.not(t).each(function() {
            $($(this).attr("href")).hide()
        }),
        $(this).on("click", "a", function(e) {
            t.removeClass("active"),
            a.hide(),
            t = $(this),
            a = $($(this).attr("href")),
            t.addClass("active"),
            a.show(),
            e.preventDefault()
        })
    }),
    $("#moreRelated").on("click", function() {
        getRelatedVideos()
    });
    var S = document.getElementById("flagVideoModal");
    if (S)
        var C = new MG_Modal({
            content: S,
            className: "flagItemContainer flagVideo"
        });
    $("#flagVideoBtn").on("click", function(e) {
        e.preventDefault(),
        void 0 !== C && C.openModal()
    }),
    $(document).on("click", "#flagVideoSubmit", function(e) {
        e.preventDefault(),
        $.ajax({
            type: "POST",
            url: $(".flagCheckBox:checked").data("ajax-url"),
            data: {
                id: $("#flagVideo").find('input[name="video_id_field"]').val(),
                reason: $("#flag_reason").val(),
                value: $("#flagVideo").find('input[name="flag_type"]:checked').val()
            },
            success: function() {
                $("#flagVideo")[0].reset(),
                $("body,html").animate({
                    scrollTop: 0
                }, 100),
                $("#flagVideo").html('<p class="success">Thank you for your input.</p>'),
                setTimeout(function() {
                    C.closeModal()
                }, 2e3)
            },
            error: function() {
                $("#flagVideo").html('<p class="error">Sorry an error has occurred.</p>'),
                setTimeout(function() {
                    C.closeModal()
                }, 2e3)
            }
        })
    });
    var O = document.getElementById("imgPrivateContainer") ? document.getElementById("imgPrivateContainer").querySelector("video") : "";
    O && (O.canPlayType('video/webm; codecs="vp8, vorbis"') ? O.style.display = "block" : document.querySelector(".imageWebm").style.display = "block")
}),
function() {
    var e = document.getElementById("vrTitle");
    function t(e) {
        [].forEach.call(e, function(e) {
            MG_Utils.addClass(e, "active")
        })
    }
    e && (navigator.userAgent.match(/Windows Phone/i) ? MG_Utils.addClass(document.getElementById("vrSection"), "disabled") : (isAndroid && androidVersion ? (t(document.querySelectorAll(".androidVr")),
    isGearVr() && t(document.querySelectorAll(".gearVr"))) : iosVersion() && t(document.querySelectorAll(".iosVr")),
    MG_Utils.addEventHandler(e, "click", function() {
        MG_Utils.toggleClass(this, "active"),
        MG_Utils.toggleClass(document.getElementById("vrWrap"), "active")
    })))
}(),
function() {
    var s;
    (s = document.getElementById("aprilFoolsModal")) && MG_Utils.storage.hasLocalStorage && !localStorage.getItem("aprilFoolsModal") && ((s = new MG_Modal({
        content: s,
        className: "aprilFoolsContainer",
        closeButton: !1,
        closeDocument: !1,
        position: "5%"
    })).openModal(function() {
        localStorage.setItem("aprilFoolsModal", !0)
    }),
    MG_Utils.addEventHandler(document.getElementById("modalWrapMTubes"), "click", function(e) {
        if (MG_Utils.hasClass(MG_Utils.getEventTarget(e), "js-exitModal") || MG_Utils.hasClass(MG_Utils.getEventTarget(e), "js-foolsTargetClose"))
            s.closeModal();
        else if (MG_Utils.hasClass(MG_Utils.getEventTarget(e), "js-foolsButton") || MG_Utils.hasClass(MG_Utils.getEventTarget(e), "containerMTubes")) {
            var t = document.getElementById("modalWrapMTubes")
              , a = t.querySelector(".foolsBottomModal")
              , o = t.querySelector(".foolsTopModal");
            MG_Utils.addClass(t, "js-foolsTargetClose"),
            MG_Utils.removeClass(a, "displayNone"),
            MG_Utils.addClass(o, "displayNone")
        }
    }))
}(),
function() {
    if (VIDEO_SHOW.isQrCode) {
        var t = document.querySelector(".qrOverlayBlock")
          , a = document.querySelector(".qrOverlayContent")
          , e = document.querySelector(".syncToyButton")
          , o = document.querySelector(".qrCloseButton")
          , s = document.querySelector(".js-androidBtn")
          , l = document.querySelector(".js-iosBtn")
          , i = document.querySelector(".androidMessage")
          , n = document.querySelector(".iosMessage");
        navigator.userAgent.match(/iPhone|iPad|iPod/i) ? (MG_Utils.removeClass(l, "displayNone"),
        MG_Utils.removeClass(n, "displayNone")) : (MG_Utils.removeClass(s, "displayNone"),
        MG_Utils.removeClass(i, "displayNone")),
        e.addEventListener("click", function() {
            var e = document.getElementById("videoShow");
            MHP1138.isPlaying(VIDEO_SHOW.playerId) && MHP1138.pause(VIDEO_SHOW.playerId);
            MG_Utils.addClass(t, "qrShow"),
            MG_Utils.addClass(a, "qrShow"),
            window.scrollTo(0, 0),
            VIDEO_SHOW.feelIsUserConnected || (MG_Utils.ajaxCall({
                url: VIDEO_SHOW.feelCacheUrl,
                type: "POST"
            }),
            $feel.init(feelSubToken, feelAppsToken, feelsAppsUserId),
            $feel.subs.load(e.dataset.videoId, 0, feelsAppsUserId).then(function() {
                VIDEO_SHOW.feelIsUserConnected = !0
            }).catch(function(e) {
                console.log("Error loading subtitles: ", e)
            }))
        }),
        o.addEventListener("click", function() {
            MG_Utils.removeClass(t, "qrShow"),
            MG_Utils.removeClass(a, "qrShow")
        })
    }
}(),
$(document).on("customVotePercent", function(e, t) {
    var a = $("#thumbs-up span").text()
      , o = $("#thumbs-down span").text();
    a = a.trim(),
    o = o.trim();
    var s = a.slice(-1)
      , l = o.slice(-1);
    "k" != s && "K" != s || (a = 1e3 * a.substring(0, a.length - 1)),
    "k" != l && "K" != l || (o = 1e3 * o.substring(0, o.length - 1)),
    a = parseInt(a),
    o = parseInt(o),
    1 === t ? ($("#thumbs-down").hasClass("voted") && 0 !== o && o--,
    a++) : ($("#thumbs-up").hasClass("voted") && 0 !== a && a--,
    o++),
    $("#rateWrapper").find("#thumbs-up").children("span").text(removeThousand(a)),
    $("#rateWrapper").find("#thumbs-down").children("span").text(removeThousand(o));
    var i = parseInt(a / (a + o) * 100);
    $("ul.underThumb .spanPercent").text(i + "%"),
    $(".greenBar").width(parseInt(i) + "%")
}),
CollectRecommended.set(VIDEO_SHOW.trackVideoId),
MG_Utils.domReady(function() {
    var e, t = document.querySelector("#thumbs-down");
    if (t) {
        var a = t.querySelector("span")
          , o = parseInt(a.innerHTML);
        MG_Utils.hasClass(t, "voted") && 0 === o && (a.innerHTML = 1)
    }
    if (document.querySelector(".js-videoOverlayContent")) {
        var s = document.querySelector(".js-videoOverlayContent")
          , l = s.querySelector(".videoOverlayBtn")
          , i = s.querySelector(".closeOverlay")
          , n = s.querySelector(".videoOverlay");
        function r() {
            MG_Utils.removeClass(n, "active"),
            setTimeout(function() {
                MG_Utils.removeClass(l, "hideBtn")
            }, 410)
        }
        setTimeout(function() {
            r()
        }, 2e3),
        MG_Utils.addEventHandler(l, "click", function() {
            MG_Utils.addClass(n, "active"),
            MG_Utils.addClass(this, "hideBtn")
        }),
        MG_Utils.addEventHandler(i, "click", function() {
            r()
        })
    }
    if (document.querySelector(".js-volumeControls")) {
        var d = document.querySelector("#js-player video")
          , c = document.querySelector(".js-volumeControls")
          , u = c.querySelector(".videoVolumeText")
          , v = c.querySelector(".videoVolumeIcon")
          , m = document.querySelector(".videoPreviewImage")
          , f = (w = d ? d.getAttribute("src") : "") ? U(w) : ""
          , g = d && d.canPlayType && !!I(f);
        function h() {
            if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
                var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
            }
        }
        MG_Utils.addEventHandler(c, "click", function() {
            MG_Utils.toggleClass(v, "videoMute"),
            function(e) {
                e.muted ? (e.muted = !1,
                u.innerHTML = VIDEO_SHOW.muteVideo) : (e.muted = !0,
                u.innerHTML = VIDEO_SHOW.unmuteVideo)
            }(d)
        }),
        !c || ((e = d).mozHasAudio || Boolean(e.webkitAudioDecodedByteCount) || Boolean(e.audioTracks && e.audioTracks.length)) && MG_Utils.hasClass(d, "mp4Video") && g || (c.style.display = "none"),
        h() && h()[0] < 10 && m && c && (m.style.display = "block",
        d.style.display = "none",
        c.style.display = "none")
    }
    var p = document.querySelector(".js-successModal")
      , _ = document.querySelector(".js-failedModal");
    if (p)
        var M = new MG_Modal({
            content: p,
            className: "successModal js-successModal",
            closeButton: !0
        });
    if (_)
        var y = new MG_Modal({
            content: _,
            className: "failedModal",
            closeButton: !0
        });
    if ("declined" === VIDEO_SHOW.transactionStatus) {
        if (y && y.openModal(ga("send", "event", "Transaction Failed Modal", "click", "Modal Shown")),
        document.getElementById("js-closeFailed")) {
            var S = document.getElementById("js-closeFailed");
            MG_Utils.addEventHandler(S, "click", function() {
                y.closeModal()
            })
        }
        if (document.getElementById("js-retryPurchase")) {
            var C = document.getElementById("js-retryPurchase");
            MG_Utils.addEventHandler(C, "click", function() {
                var t = document.querySelector(".js-failedError");
                MG_Utils.ajaxCall({
                    url: VIDEO_SHOW.checkURL,
                    type: "POST",
                    success: function(e) {
                        e.error ? t.innerHTML = e.message : (t.innerHTML = "",
                        window.location.href = e.redirectUrl)
                    }
                })
            })
        }
    } else if (VIDEO_SHOW.justBought && "success" === VIDEO_SHOW.transactionStatus && (ga("send", "event", "Success Modal", "click", "Click on modal"),
    M.openModal(),
    document.querySelector(".js-successModal").querySelector(".js-watchVideo"))) {
        var O = document.querySelector(".successModal").querySelector(".js-watchVideo");
        MG_Utils.addEventHandler(O, "click", function() {
            ga("send", "event", "Success Modal", "click", "Watch Video Now"),
            M.closeModal()
        })
    }
    if (document.querySelector(".js-purchaseButton")) {
        var E = document.querySelectorAll(".js-purchaseButton");
        [].forEach.call(E, function(e) {
            MG_Utils.addEventHandler(e, "click", function() {
                VIDEO_SHOW.loggedOut ? window.location.href = VIDEO_SHOW.login : purchaseModals.openPurchaseModal()
            })
        })
    }
    function I(e) {
        if (e) {
            var t;
            return t || (t = document.createElement("video")),
            t.canPlayType({
                ogg: 'video/ogg; codecs="theora"',
                mp4: 'video/mp4; codecs="avc1.42E01E"',
                webm: 'video/webm; codecs="vp8, vorbis"',
                vp9: 'video/webm; codecs="vp9"',
                hls: 'application/x-mpegURL; codecs="avc1.42E01E"'
            }[e] || e)
        }
    }
    function U(e) {
        if (e) {
            var t = e.split(".").pop();
            return t.substr(0, t.indexOf("?"))
        }
    }
    var V = document.getElementById("js-player");
    if (V) {
        var w, G = V.querySelector("video");
        I(f = (w = G ? G.getAttribute("src") : "") ? U(w) : "") ? (MG_Utils.addClass(document.querySelector(".js-imageWebm"), "hidden"),
        MG_Utils.removeClass(G, "hidden")) : (MG_Utils.removeClass(document.querySelector(".js-imageWebm"), "hidden"),
        MG_Utils.addClass(G, "hidden"),
        MG_Utils.addClass(document.querySelector(".js-volumeControls"), "hidden"))
    }
    var b = document.querySelector("#thumbs-up")
      , H = document.querySelector("#thumbs-down")
      , D = parseInt(b ? b.querySelector("span").innerHTML.trim() : 0)
      , W = parseInt(H ? H.querySelector("span").innerHTML.trim() : 0)
      , q = document.querySelector(".barWrapper");
    0 === D && 0 === W || !MG_Utils.hasClass(q, "no-votes") || MG_Utils.removeClass(q, "no-votes");
    var k = $(".owl-carousel");
    void 0 !== k.owlCarousel && k.owlCarousel({
        loop: !0,
        autoplay: !0,
        nav: !1,
        dots: !1,
        slideTransition: "linear",
        autoplaySpeed: 5e3,
        autoplayTimeout: 0,
        autoplayHoverPause: !1,
        items: 5
    });
    var T = "download_link_hidden" == VIDEO_SHOW.videoDownloadMessage || "disabled_by_user" == VIDEO_SHOW.videoDownloadMessage || "no_email_verification" == VIDEO_SHOW.videoDownloadMessage;
    ((VIDEO_SHOW.saleVideo || VIDEO_SHOW.isPaidDownload) && !VIDEO_SHOW.isPurchased || T || VIDEO_SHOW.isFanOnly) && $("#videoPlayerPlaceholder video").bind("contextmenu", function() {
        return !1
    })
});
var logoCarousel = document.querySelector(".logoLocked");
logoCarousel && MG_Utils.addEventHandler(logoCarousel, "click", function(e) {
    "img" === e.target.tagName.toLowerCase() && triggerGatewayModal(event, !1, void 0, void 0, VIDEO_SHOW.vkey)
});
var lockedVideoCarousels = document.querySelectorAll(".js-Carousel");
function changeSlideWidth() {
    if (1349 < window.innerWidth) {
        var e = document.querySelectorAll(".lockedVideoCarousel");
        e.length && [].forEach.call(e, function(e) {
            var t = e.querySelectorAll(".slideContainer");
            [].forEach.call(t, function(e) {
                e.offsetWidth;
                var t = "-1323px";
                e.style.marginLeft && e.style.marginLeft !== t && (e.style.marginLeft = t)
            })
        })
    }
}
lockedVideoCarousels.length && [].forEach.call(lockedVideoCarousels, function(e) {
    var t = e.getAttribute("id")
      , a = new Carousel({
        elem: t,
        autoplay: !1,
        infinite: !1,
        initial: 0,
        dots: !1,
        arrows: !0,
        buttons: !1,
        btnStopText: "",
        isSectionCarousel: !0
    });
    a.show(0);
    var o = e.querySelector(".carousel_arrowPrev")
      , s = e.querySelector(".carousel_arrowNext")
      , l = a.slideCount();
    o && s && (MG_Utils.addClass(o, "isHidden"),
    e.addEventListener("mouseenter", function() {
        MG_Utils.hasClass(o, "active") || MG_Utils.hasClass(s, "active") || (MG_Utils.addClass(o, "active"),
        MG_Utils.addClass(s, "active"))
    }),
    e.addEventListener("mouseleave", function() {
        MG_Utils.hasClass(o, "active") && MG_Utils.hasClass(s, "active") && (MG_Utils.removeClass(o, "active"),
        MG_Utils.removeClass(s, "active"))
    }),
    s.addEventListener("click", function() {
        var e = a.live();
        MG_Utils.hasClass(o, "isHidden") && MG_Utils.removeClass(o, "isHidden"),
        e !== l || MG_Utils.hasClass(this, "isHidden") || MG_Utils.addClass(this, "isHidden")
    }),
    o.addEventListener("click", function() {
        var e = a.live();
        MG_Utils.hasClass(s, "isHidden") && MG_Utils.removeClass(s, "isHidden"),
        0 !== e || MG_Utils.hasClass(this, "isHidden") || MG_Utils.addClass(this, "isHidden")
    }))
}),
window.addEventListener("resize", changeSlideWidth);
var purchaseModals = function() {
    var e = document.querySelector(".js-purchaseModal")
      , t = document.querySelector(".js-purchaseDigitsModal");
    if (e)
        var a = new MG_Modal({
            content: e,
            className: "purchaseModal",
            closeButton: !0
        });
    if (t)
        var o = new MG_Modal({
            content: t,
            className: "purchaseModalDigits",
            closeButton: !0
        });
    function i(e, t, a) {
        var o = document.querySelector(".modalMTubes").querySelector(".js-digitsError");
        MG_Utils.ajaxCall({
            url: e,
            type: "POST",
            data: a,
            success: function(e) {
                e.error ? o.innerHTML = e.message : (o.innerHTML = "",
                mixpanel.identify(e.MixpanelEvent.userId),
                mixpanel.track(e.MixpanelEvent.eventName, e.MixpanelEvent.event),
                window.location.href = e.redirectUrl),
                t.removeAttribute("disabled")
            }
        })
    }
    return Number.isInteger = Number.isInteger || function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }
    ,
    {
        openPurchaseModal: function() {
            if (void 0 !== a ? a.openModal() : void 0 !== o && (o.openModal(),
            function() {
                var e = document.querySelector(".modalMTubes.purchaseModalDigits").querySelector(".js_videoPurchaseDigits");
                e && e.addEventListener("input", function(e) {
                    e.target !== e.currentTarget && (Number.isInteger(parseFloat(e.target.value)) ? 1 < e.target.value.length ? e.target.value = e.target.value.replace(e.target.value.charAt(1), "") : "" != e.target.value && (MG_Utils.addClass(e.target, "full"),
                    MG_Utils.nextElementSibling(e.target).focus()) : (e.target.value = "",
                    MG_Utils.removeClass(e.target, "full"))),
                    e.stopPropagation()
                }, !1)
            }()),
            document.querySelector(".js-purchaseVideoButton")) {
                var e = document.querySelector(".modalMTubes").querySelectorAll(".js-purchaseVideoButton");
                [].forEach.call(e, function(t) {
                    MG_Utils.addEventHandler(t, "click", function(e) {
                        t.setAttribute("disabled", !0),
                        function(e, t) {
                            e.preventDefault();
                            var a = document.querySelector(".modalMTubes");
                            if (MG_Utils.hasClass(t, "js-purchaseVideoDigitsButton")) {
                                var o = a.querySelectorAll("input")
                                  , s = [];
                                if ([].forEach.call(o, function(e) {
                                    "" == e.value ? (s = [],
                                    MG_Utils.addClass(e, "fail")) : (MG_Utils.removeClass(e, "fail"),
                                    s.push(e.value))
                                }),
                                a.querySelectorAll("input.fail").length)
                                    a.querySelector(".js-digitsError").innerHTML = VIDEO_SHOW.digitsError,
                                    t.removeAttribute("disabled");
                                else {
                                    var l = {
                                        last4: s.join("")
                                    };
                                    i(VIDEO_SHOW.probillerUrl, t, l)
                                }
                            } else
                                i(VIDEO_SHOW.probillerUrl, t)
                        }(e, t)
                    })
                })
            }
            document.querySelector(".js-purchaseCreditCard") && (e = document.querySelector(".modalMTubes").querySelectorAll(".js-purchaseCreditCard"),
            [].forEach.call(e, function(t) {
                MG_Utils.addEventHandler(t, "click", function(e) {
                    t.setAttribute("disabled", !0),
                    i(VIDEO_SHOW.probillerCreditCard, t)
                })
            }))
        }
    }
}();
!function() {
    var e = document.getElementById("mobileNavigation")
      , t = document.getElementById("openSearch")
      , a = document.getElementById("closeSearch")
      , o = document.getElementById("searchSection")
      , s = document.querySelector("html")
      , l = document.querySelector("body")
      , i = document.getElementById("mobileHeader")
      , n = document.getElementById("leftMenu")
      , r = document.querySelector(".uiOverlay")
      , d = document.getElementById("pornportal-wrapper")
      , c = document.getElementById("headerWrapPP")
      , u = document.getElementById("moreRelated");
    e && MG_Utils.addEventHandler(e, "click", function(e) {
        !MG_Utils.hasClass(l, "cssTranstions") && MG_Utils.hasClass(s, "domloaded") && (MG_Utils.toggleClass(this, "active"),
        l && MG_Utils.toggleClass(l, "active"),
        i && MG_Utils.toggleClass(i, "active"),
        n && (MG_Utils.toggleClass(n, "active"),
        MG_Utils.hasClass(n, "active") ? d && i && (MG_Utils.addClass(d, "displayNone"),
        0 < c.length && MG_Utils.removeClass(i, "premium")) : d && i && (MG_Utils.removeClass(d, "displayNone"),
        0 < c.length && MG_Utils.addClass(i, "premium"))),
        r && (MG_Utils.toggleClass(r, "active"),
        MG_Utils.toggleClass(r, "closeLeftMenu"),
        MG_Utils.hasClass(r, "active"),
        MG_Utils.addClass(l, "positionRelative")))
    }),
    t && MG_Utils.addEventHandler(t, "click", function() {
        if (!MG_Utils.hasClass(l, "cssTranstions") && MG_Utils.hasClass(s, "domloaded")) {
            var e = document.getElementById("search_text");
            if (o && MG_Utils.toggleClass(o, "active"),
            e) {
                var t = e.value;
                e.focus(),
                e.value = t,
                setTimeout(function() {
                    window.scrollTo(0, 1)
                }, 100)
            }
        }
    }),
    a && MG_Utils.addEventHandler(a, "click", function() {
        !MG_Utils.hasClass(l, "cssTranstions") && MG_Utils.hasClass(s, "domloaded") && o && MG_Utils.toggleClass(o, "active")
    }),
    u && MG_Utils.addEventHandler(u, "click", function() {
        !MG_Utils.hasClass(l, "cssTranstions") && MG_Utils.hasClass(s, "domloaded") && getRelatedVideos()
    })
}();
