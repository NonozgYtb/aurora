"use strict";
console.log(`%c Aurora %c V1.3.2 %c `,
 "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", `background: #0194fd; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff`, "background:transparent")

console.clearer = function() {
	console.clear()
	console.log(`%c Aurora %c V1.3.2 %c `,
	 "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", `background: #0194fd; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff`, "background:transparent")		
}
console.clearer()

var overlaysers = document.querySelectorAll('.modal-overlay')
    overlaysers.forEach(function(overlayser) {
      overlayser.addEventListener("click", function() {
		$("button[class^=close], button[id^=close]").toArray().forEach((el) => el.click())
	  })
    })
		
var blocker = true;
var actualSlide = 1;
document.addEventListener('wheel', tt);
function addWithLimit(vars, add, min, max) {
    var a = vars-add;
    if(a<min) a = min;
    if(a>max) a = max;
    return a;
};
async function blockers() {
    blocker = false;
    setTimeout(() => {
        blocker = true;
    }, 400);
};
function tt(e) {
    var valid = true
    var t = document.getElementsByClassName("modal");
    for(let i = 0; i < t.length; i++) {
        if(t[i].classList.contains("active")) {
            valid=false;
        }
    };
    if(valid && blocker) {
        blockers();
        setMenuActive(addWithLimit(actualSlide, Math.sign(e.deltaY), 0, 2));
    }
}
document.addEventListener('keyup', logKey);
function logKey(e) {
    if(e.key == "Escape") {
		$("button[class^=close], button[id^=close]").toArray().forEach((el) => el.click())
    };
  };
function dynamicSort(t) {
    var e = 1;
    return "-" === t[0] && (e = -1, t = t.substr(1)),
        function (o, a) {
            var n;
            return (o[t] < a[t] ? -1 : o[t] > a[t] ? 1 : 0) * e
        }
}

function initAurora() {
    var t = function t() {
            initAppVersion(), initWallpapers(), initBxSlider(), initWeather(), initGoogleSearch(), initTime(), initVoiceSearch(), initChromeApps(), initChromeWindows(), initPreloader(), initModals(), initTodo(), initCalendar(), initRefreshBookmarks(), initAnalytics(), initReset(), initFaturedBookmarks(), initDonate(), intSettings(), STICKIES.open()
        },
        e = function t() {
            var e = localStorage.getItem("aurora"),
                o = e && e.installDate || moment().format("DD-MM-YY"),
                a = e && e.paypalDonate || {
                    skipDate: moment().format("DD-MM-YY"),
                    donationCode: ""
                },
                n = e && e.userFeedback || !1,
                r = e && e.featuredBookmarks || {
                    show: !0,
                    id: 0
                },
                i = e && e.defaultSlide || "s1",
                s = e && e.bookmarksTab || "",
                c = e && e.bookmarksFaq || !1,
                l = e && e.bookmarksState || [],
                d = e && e.bookmarksLinkTarget || "_blank",
                u = e && e.bookmarksGrid || 3,
                m = e && e.weather || "Y",
                p = e && e.weatherFormat || "A",
                g = e && e.weatherDate || "01-01-18",
                h = e && e.weatherToday || "",
                k = e && e.weatherForecast || "",
                f = e && e.weatherLocation || {
                    type: "Auto",
                    country: "",
                    city: ""
                },
                b = e && e.weatherWindFormat || "Auto",
                v = e && e.timeNow || "",
                y = e && e.timeFormat || 24,
                w = e && e.toDo || {
                    show: !0,
                    url: !1
                },
                $ = e && e.stickyNotes || {},
                S = e && e.background || {
                    type: "Auto",
                    url: "",
                    opacity: "0.8",
                    color: "000000",
                    galery: ""
                };
            localStorage.set("aurora", {
                installDate: o,
                paypalDonate: a,
                userFeedback: n,
                featuredBookmarks: r,
                defaultSlide: i,
                bookmarks: !1,
                bookmarksTab: s,
                bookmarksFaq: c,
                bookmarksState: l,
                bookmarksLinkTarget: d,
                bookmarksGrid: u,
                history: !1,
                historyFilter: {
                    type: "day",
                    text: "",
                    startTime: getDate("start", 0),
                    endTime: getDate("end", 0),
                    maxResults: 0,
                    headerLabel: "Today - " + moment().format("dddd, D MMMM YYYY")
                },
                weather: m,
                weatherDate: g,
                weatherLocation: f,
                weatherFormat: p,
                weatherToday: h,
                weatherForecast: k,
                weatherWindFormat: b,
                timeNow: v,
                timeFormat: y,
                toDo: w,
                stickyNotes: $,
                background: S
            })
        },
        o = ["auroraDefaults", "auroraTodo"];
    chrome.storage.sync.get(o, function (o) {
        _.isEmpty(o) || void 0 === o.auroraDefaults ? (localStorage.set("aurora"), setInterval(e(), 100), setInterval(location.reload(), 500)) : (localStorage.set("aurora", o.auroraDefaults), o.auroraTodo && localStorage.set("aurora-todo", o.auroraTodo), setInterval(t(), 100))
    })
}
var tmp_timeDate = function t(e) {
        var o = e.showTime,
            a = e.showAddon,
            n = e.showDay,
            r = e.showDate;
        return "\n<h1>".concat(o).concat(a, "</h1>\n<h3><strong>").concat(n, "</strong> ").concat(r, "</h3>\n")
    },
    tmp_weatherToday = function t(e) {
        var o = e.weatherIcon,
            a = e.weatherTemperature,
            n = e.weatherNow,
            r = e.weatherCity,
            i = e.weatherRegion,
            s = e.weatherWindDirection,
            c = e.weatherWindSpeed;
        return '\n<div class="weather-icon icon-'.concat(o, '"></div>\n<div class="weather-temperature">').concat(a, '&deg;</div>\n<div class="weather-summary">\n    <h4>').concat(n, "</h4>\n    <span><strong>").concat(r, "</strong>, ").concat(i, '</span>\n    <span><i class="weather-wind-direction ').concat(s, '" title="Wind: ').concat(s, '"></i>').concat(c, "</span>\n</div>\n")
    },
    tmp_weatherForecast = function t(e) {
        var o = e.forecastDay,
            a = e.forecastIcon,
            n = e.forecastHigh,
            r = e.forecastLow;
        return '\n<div class="weather-forecast-item">\n  <h4>'.concat(o, '</h4>\n  <div class="weather-forecast-icon icon-').concat(a, '">\n  </div>\n  <div class="weather-forecast-temperature">\n  <strong>').concat(n, "&deg;</strong>&nbsp;").concat(r, "&deg;</div>\n</div>\n")
    },
    tmp_appLink = function t(e) {
        var o = e.appId,
            a = e.appLaunch,
            n = e.appName,
            r = e.appUrl,
            i = e.appIcon;
        return '\n<a href="'.concat(r, '" data-id="').concat(o, '" data-launch="').concat(a, '" class="apps-item" target="_blank">\n  <img src="').concat(i, '" width="96">\n  <span>').concat(n, "</span>\n</a>\n")
    },
    tmp_historyHeader = function t(e) {
        var o = e.itemFirst,
            a = e.headerLabel;
        return '\n<li class="menu-item menu-header '.concat(o, '" tabindex="0">\n    <span class="menu-item-header">').concat(a, "</span>\n</li>\n")
    },
    tmp_historyLink = function t(e) {
        var o = e.historyId,
            a = e.historyTitle,
            n = e.historyUrl,
            r = e.historyDisplayUrl,
            i = e.historyIcon,
            s = e.historyDate;
        return '\n<li class="menu-item menu-item-url" data-history-li="'.concat(o, '" data-history-date="').concat(s, '">\n    <div class="columns col-gapless">\n        <div class="column col-10">\n            <a href="').concat(n, '" class="menu-item-url history-item-url" data-history=').concat(o, ' target="_blank">\n\n                <span class="history-date">').concat(s, '</span>\n                <img src="" class="menu-item-favicon history-favicon" />\n                <span class="history-title">').concat(a, '</span>\n\n            </a>\n        </div>\n        <div class="column col-2">\n          <a href data-url="').concat(r, '" class="history-url float-right">').concat(r, "</a>\n        </div>\n    </div>\n</li>\n")
    },
    tmp_noResults = function t(e) {
        var o = e.emptyClass,
            a = e.emptyTitle,
            n = e.emptySubtitle,
            r = e.emptyBody;
        return '\n<div class="empty '.concat(o, '">\n  <div class="empty-icon"></div>\n  <h4 class="empty-title">').concat(a, '</h4>\n  <p class="empty-subtitle">').concat(n, "</p>\n  ").concat(r, "\n</div>\n")
    },
    tmp_tabNavLink = function t(e) {
        var o = e.tabActive,
            a = e.tabId,
            n = e.tabTitle;
        return '\n<li class="menu-item nav-tab '.concat(o, '" data-tab="').concat(a, '" tabindex="0">\n  <a href="#" class="menu-item-url">').concat(n, "</a>\n</li>\n")
    },
    tmp_tabContainer3 = function t(e) {
        var o = e.tabActive,
            a = e.tabId,
            n = e.tabTitle;
        return '\n<div id="'.concat(a, '" class="tab-content ').concat(o, '">\n  <div class="container">\n    <div class="columns" data-columns="').concat(a, '">\n      <div class="column col-4" data-column="1"></div>\n      <div class="column col-4" data-column="2"></div>\n      <div class="column col-4" data-column="3"></div>\n    </div>\n  </div>\n</div>\n')
    },
    tmp_tabContainer4 = function t(e) {
        var o = e.tabActive,
            a = e.tabId,
            n = e.tabTitle;
        return '\n<div id="'.concat(a, '" class="tab-content ').concat(o, '">\n  <div class="container">\n    <div class="columns" data-columns="').concat(a, '">\n      <div class="column col-3" data-column="1"></div>\n      <div class="column col-3" data-column="2"></div>\n      <div class="column col-3" data-column="3"></div>\n      <div class="column col-3" data-column="4"></div>\n    </div>\n  </div>\n</div>\n')
    },
    tmp_tabContainer5 = function t(e) {
        var o = e.tabActive,
            a = e.tabId,
            n = e.tabTitle;
        return '\n<div id="'.concat(a, '" class="tab-content ').concat(o, '">\n  <div class="container">\n    <div class="columns" data-columns="').concat(a, '">\n      <div class="column col-2 col-ml-auto" data-column="1"></div>\n      <div class="column col-2" data-column="2"></div>\n      <div class="column col-2" data-column="3"></div>\n      <div class="column col-2" data-column="4"></div>\n      <div class="column col-2 col-mr-auto" data-column="5"></div>\n    </div>\n  </div>\n</div>\n')
    },
    tmp_listContainer = function t(e) {
        var o = e.listId,
            a = e.listTitle,
            n = e.listState;
        return '\n<ul class="menu list-accent" data-list="'.concat(o, '">\n    <li class="menu-item menu-item-title menu-item-title-editable">\n        <div class="title">\n            <div data-bookmarks-title="').concat(o, '" class="tile-content title-list title-list-collapsable">\n                <a href data-list-edit="').concat(o, '" class="title-list-edit float-right" title="Edit Board">\n                  <i class="material-icons">edit</i>\n                </a>\n                <a href data-list-open="').concat(o, '" class="title-list-all float-right" title="Open All Bookmarks">\n                  <i class="material-icons">reply_all</i>\n                </a>\n                <span>').concat(a, '</span>\n            </div>\n        </div>\n    </li>\n    <li class="divider"></li>\n    <div data-bookmarks="').concat(o, '" class="bookmarks-list hideLists ').concat(n, '"></div>\n</ul>\n')
    },
    tmp_bookmarkLink = function t(e) {
        var o = e.bookmarkId,
            a = e.bookmarkTitle,
            n = e.bookmarkUrl,
            r = e.bookmarkShortUrl,
            i = e.bookmarkIcon,
            s = e.bookmarkTarget;
        return '\n<li class="menu-item" data-bookmark-li="'.concat(o, '" tabindex="0">\n    <a href="').concat(n, '" class="menu-item-url tip" data-bookmark="').concat(o, '" data-tip="').concat(r, '" target="').concat(s, '">\n        <i class="menu-item-favicon"></i> ').concat(a, "\n    </a>\n</li>\n")
    },
    tmp_bookmarkFolder = function t(e) {
        var o = e.bookmarkId,
            a = e.bookmarkTitle;
        return '\n<li class="menu-item menu-sub-item" data-bookmark-li="'.concat(o, '" tabindex="0">\n    <a href data-list-open="').concat(o, '" class="title-list-all float-right" title="Open All Bookmarks">\n      <i class="material-icons">reply_all</i>\n    </a>\n    <span class="menu-item-folder">\n      <i class="icon icon-arrow-down menu-item-arrow"></i> ').concat(a, "\n    </span>\n</li>\n")
    },
    tmp_featuredBookmark = function t(e) {
        var o = e.bookmarkId,
            a = e.bookmarkTitle,
            n = e.bookmarkUrl,
            r = e.bookmarkTarget,
            i = e.bookmarkInitial,
            s = e.bookmarkIcon;
        return '\n<a href="'.concat(n, '" data-featured="').concat(o, '" target="').concat(r, '" class="tile animated fadeIn">\n  <i class="tile-favicon"></i>\n  <div class="tile-icon">\n    <figure class="avatar" data-initial="').concat(i, '"></figure>\n  </div>\n  <p class="tile-title">').concat(a, "</p>\n</a>\n")
    },
    tmp_todoItem = function t(e) {
        var o = e.todoClass,
            a = e.todoOrder,
            n = e.todoId,
            r = e.todoBody;
        return '\n<li class="local-todo-item" data-todo-li="'.concat(n, '" data-todo-order="').concat(a, '">\n    <input type="checkbox" id="doneTodo" data-todo-done="').concat(n, '" class="').concat(o, '">\n    <span class="').concat(o, '">').concat(r, '</span>\n    <i id="deleteTodo" class="icon icon-cross" title="Delete" data-todo-delete="').concat(n, '"></i>\n</li>\n')
    },
    initWallpapers = function t() {
        var e = localStorage.get("aurora"),
            o = localStorage.get("aurora").background.type,
            a = function t() {
                function o(t, o) {
                    return new Promise(function (a, n) {
                        var i = o || 5e3,
                            s, c = new Image,
                            l = function t() {
                                localStorage.update("aurora", {
                                    background: {
                                        url: ""
                                    }
                                }), $('*[data-setting="bgURL"]').val(""), $("body").css({
                                    visibility: "visible"
                                })
                            };
                        c.onerror = c.onabort = function () {
                            clearTimeout(s), l()
                        }, c.onload = function () {
                            clearTimeout(s), r(e.background.url)
                        }, s = setTimeout(function () {
                            c.src = "/images/empty.png", l()
                        }, i), c.src = t
                    })
                }
                o(e.background.url), i()
            },
            n = function t() {
                var o = moment().format("D");
                !1 !== e.installDate && e.installDate != moment().format("DD-MM-YY") || (o = 1, localStorage.update("aurora", {
                    installDate: moment().format("DD-MM-YY")
                })), r("/images/wallpapers/w" + o + ".jpg"), i()
            },
            r = function t(o) {
                $("#auroraWallpaper > img").attr("data-src", o).unveil(0, function () {
                    $(this).on("load", function () {
                        $("body").css({
                            visibility: "visible"
                        })
                    })
                }), s(e.background.opacity)
            },
            i = function t() {
                $("body").css("background-color", "#" + e.background.color).show()
            },
            s = function t(e) {
                var o = "<style>@keyframes fadeInWallpaper { from { opacity: 0; } to { opacity: " + e + "; } }</style>";
                $("body").append(o)
            };
        switch (o) {
            case "Auto":
                n();
                break;
            case "Custom":
                a();
                break;
            default:
                n()
        }
    },
    unsplashWallpaper = function t(e) {
        var o = "https://source.unsplash.com/featured/",
            a = localStorage.get("aurora");
        switch (e) {
            case "2Kd":
                o += "2048x1080/daily";
                break;
            case "5Kd":
                o += "5120x2880/daily";
                break;
            case "2Kw":
                o += "2048x1080/weekly";
                break;
            case "5Kw":
                o += "5120x2880/weekly";
                break
        }
        "" !== a.background.galery && (o = o + "?" + a.background.galery), $('*[data-setting="bgURL"]').val(o), $('*[data-setting="bgKeywords"]').val(a.background.galery).removeClass("text-success"), delay(function () {
            $('*[data-id="getUnsplashBg"]').removeClass("loading")
        }, 700), localStorage.update("aurora", {
            background: {
                url: o
            }
        }), initWallpapers()
    },
    initBookmarkTabs = function t(e, o, a) {
        e = void 0 !== e ? e : 2, o = void 0 !== o ? o : "#tabNavigation", a = void 0 !== a ? a : "#tabContainer";
        var n = localStorage.get("aurora"),
            r = "#tabLeftNavigation",
            i = "#bookmarksContainer",
            s = "",
            c = "",
            l = [],
            d = [],
            u = 0,
            m = 0,
            p = "*Aurora Featured*";
        chrome.bookmarks.getTree(function (t) {
            e = t[0].children[1].id, chrome.bookmarks.getChildren(e.toString(), function (t) {
                _.each(t, function (t, e) {
                    var o, i = {
                            tabActive: 0 === e ? "active" : "",
                            tabId: t.id,
                            tabTitle: t.title
                        },
                        p = $.Deferred(),
                        g = $.Deferred();
                    if (void 0 === t.url && "*Aurora Featured*" != t.title) {
                        switch (s += tmp_tabNavLink(i), p.resolve(), n.bookmarksGrid) {
                            case 3:
                                c += tmp_tabContainer3(i);
                                break;
                            case 4:
                                c += tmp_tabContainer4(i);
                                break;
                            case 5:
                                c += tmp_tabContainer5(i);
                                break
                        }
                        g.resolve(), l.push(p), d.push(g), $.when.apply(null, l).then(function () {
                            $(r).html("").html(s)
                        }), $.when.apply(null, d).then(function () {
                            $(a).html("").html(c), attachEventsTabs()
                        }), u++
                    } else m++
                }), fillTabs(e), 0 === u && ($(r).html(tmp_noResults({
                    emptyClass: "empty-nav",
                    emptyTitle: "No Boards",
                    emptySubtitle: "",
                    emptyBody: ""
                })), $(a).html(tmp_noResults({
                    emptyClass: "empty-accent",
                    emptyTitle: "Welcome to Aurora Bookmarks",
                    emptySubtitle: "Click <strong>Edit Bookmarks</strong> button on the left to create your first board.",
                    emptyBody: '<button data-modal="bookmark-info" class="btn btn-accent btn-wider btn-lg btn-on-accent">Where to start?</button>'
                }))), m > 1 && $(r).append(tmp_noResults({
                    emptyClass: "empty-nav",
                    emptyTitle: "",
                    emptySubtitle: "You have <strong>" + m + "</strong> uncategorised bookmarks in the top folder. Click <strong>Info</strong> icon above to learn where they should be moved.",
                    emptyBody: ""
                }))
            })
        }), expandCollapseBookmarks(), opanAllListBookmarks()
    },
    fillTabs = function t(e) {
        chrome.bookmarks.getChildren(e.toString(), function (t) {
            _.each(t, function (t, e) {
                createLists(t.id)
            })
        })
    },
    attachEventsTabs = function t() {
        var e = ".nav-tab";
        "" !== ls.bookmarksTab && toggleTabs(ls.bookmarksTab), $("body").on("click", e, function () {
            var t = $(this).data("tab");
            toggleTabs(t), localStorage.update("aurora", {
                bookmarksTab: t
            })
        })
    },
    toggleTabs = function t(e) {
        var o, a = ".tab-content";
        $(".nav-tab").removeClass("active"), $('*[data-tab="' + e + '"]').addClass("active"), $(a).removeClass("active"), $("#" + e).addClass("active")
    },
    createLists = function t(e) {
        chrome.bookmarks.getChildren(e.toString(), function (t) {
            for (var o = 0, a = [], n = 1, r = t.length, i = '*[data-columns="' + e + '"] *[data-column="2"]', s = 0; s < t.length; s++) o == ls.bookmarksGrid ? o = 1 : o += 1, a[s] = o;
            var c = function t(e) {
                var o, a = "open";
                return !0 === ls.bookmarksState.includes(parseInt(e)) && (a = "closed"), a
            };
            _.each(t, function (t, o) {
                var r = '*[data-columns="' + e + '"] *[data-column="' + a[o] + '"]',
                    i = "---",
                    s = "*Aurora Featured*";
                t.url && t.url.length ? (1 == n && ($(r).append(tmp_listContainer({
                    listId: e,
                    listTitle: "Uncategorised",
                    listState: c(e)
                })), createUncategorisedBookmarks(e)), n++) : "---" != t.title && "*Aurora Featured*" != t.title && ($(r).append(tmp_listContainer({
                    listId: t.id,
                    listTitle: t.title,
                    listState: c(t.id)
                })), createBookmarks(t.id))
            }), 0 === r && $(i).html(tmp_noResults({
                emptyClass: "empty-accent",
                emptyTitle: "Board Empty",
                emptySubtitle: "Click <strong>Edit Bookmarks</strong> button on the left to create your first list.",
                emptyBody: '<button data-modal="bookmark-info" class="btn btn-accent btn-wider btn-lg btn-on-accent">Where to start?</button>'
            }))
        })
    },
    createUncategorisedBookmarks = function t(e) {
        chrome.bookmarks.getChildren(e.toString(), function (t) {
            var o = '*[data-bookmarks="' + e + '"]',
                a = t.length;
            _.each(t, function (t, e) {
                if (t.url && t.url.length) {
                    var n = getFavicon(t.url, t.id, "bookmarks");
                    $(o).append(tmp_bookmarkLink({
                        bookmarkId: t.id,
                        bookmarkTitle: t.title,
                        bookmarkUrl: t.url,
                        bookmarkShortUrl: getDomain(t.url),
                        bookmarkIcon: n,
                        bookmarkTarget: ls.bookmarksLinkTarget
                    }))
                }
                e === a - 1 && $(o).delay(500).queue(function () {
                    $(this).removeClass("hideLists").addClass("showLists").dequeue()
                }), showDescriptionOnHover(t.id, t.title, t.url)
            })
        })
    },
    createBookmarks = function t(e) {
        chrome.bookmarks.getChildren(e.toString(), function (t) {
            var o = '*[data-bookmarks="' + e + '"]',
                a = t.length;
            _.each(t, function (t, e) {
                if (t.url && t.url.length) {
                    var n = getFavicon(t.url, t.id, "bookmarks");
                    $(o).append(tmp_bookmarkLink({
                        bookmarkId: t.id,
                        bookmarkTitle: t.title,
                        bookmarkUrl: t.url,
                        bookmarkShortUrl: getDomain(t.url),
                        bookmarkIcon: n,
                        bookmarkTarget: ls.bookmarksLinkTarget
                    }))
                } else $(o).append(tmp_bookmarkFolder({
                    bookmarkId: t.id,
                    bookmarkTitle: t.title
                })), createSubBookmarks(t.id, o, !0);
                e === a - 1 && $(o).delay(500).queue(function () {
                    $(this).removeClass("hideLists").addClass("showLists").dequeue()
                }), showDescriptionOnHover(t.id, t.title, t.url)
            }), 0 === a && $(o).append(tmp_noResults({
                emptyClass: "",
                emptyTitle: "List Empty",
                emptySubtitle: "Move or Add your bookmarks here.",
                emptyBody: ""
            }))
        })
    },
    createSubBookmarks = function t(e, o, a) {
        var n = "#parent-" + e;
        a = void 0 !== a && a, $(o).append('<div id="parent-' + e + '"></div>'), chrome.bookmarks.getChildren(e.toString(), function (e) {
            var r = e.length;
            _.each(e, function (e, o) {
                if (e.url && e.url.length) {
                    var a = getFavicon(e.url, e.id, "bookmarks");
                    $(n).append(tmp_bookmarkLink({
                        bookmarkId: e.id,
                        bookmarkTitle: e.title,
                        bookmarkUrl: e.url,
                        bookmarkShortUrl: getDomain(e.url),
                        bookmarkIcon: a,
                        bookmarkTarget: ls.bookmarksLinkTarget
                    })), t(e.id, n)
                } else $(n).append(tmp_bookmarkFolder({
                    bookmarkId: e.id,
                    bookmarkTitle: e.title
                })), t(e.id, n, !0);
                showDescriptionOnHover(e.id, e.title, e.url)
            }), 0 === r && !0 === a && $(o).append(tmp_noResults({
                emptyClass: "",
                emptyTitle: "Sub-List Empty",
                emptySubtitle: "Move or Add your links here.",
                emptyBody: ""
            }))
        })
    },
    getFavicon = function t(e, o, a) {
        if (!1 === isIP(e) && !0 === validUrl(e)) {
            var n, r = "https://favicon.yandex.net/favicon/" + e.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0] + "?size=32",
                i = '*[data-bookmark="' + o + '"] > i';
            switch (a) {
                case "bookmarks":
                    i = '*[data-bookmark="' + o + '"] > i';
                    break;
                case "featured":
                    i = '*[data-featured="' + o + '"] > i';
                    break;
                case "history":
                    i = '*[data-history="' + o + '"] > img';
                    break
            }
            fetch(r).then(function (t) {
                return t.blob()
            }).then(function (t) {
                var e = URL.createObjectURL(t);
                switch (a) {
                    case "bookmarks":
                        $(i).css("background-image", "url(" + e + ")");
                        break;
                    case "featured":
                        $(i).css("background-image", "url(" + e + ")");
                        break;
                    case "history":
                        $(i).attr("src", e);
                        break
                }
            }).catch(function (t) {})
        }
    },
    initRefreshBookmarks = function t() {
        $("body").on("click", "#bookmarksRefresh", function (t) {
            t.preventDefault(), refreshBookmarks()
        })
    },
    refreshBookmarks = function t() {
        var e = "#auroraLoading",
            o = "#bookmarksContainer";
        $(e).show(), $(o).css("visibility", "hidden"), $.when(initBookmarkTabs()).then(function () {
            $(o).delay(800).queue(function () {
                $(e).hide(), $(this).css("visibility", "visible").dequeue()
            })
        }), initFaturedBookmarks()
    },
    expandCollapseBookmarks = function t() {
        var e = ls.bookmarksState;
        $("body").on("click", ".title-list-collapsable > span", function (t) {
            var o = $(this).parent().data("bookmarks-title"),
                a = '*[data-bookmarks="' + o + '"]';
            $(a).toggle2classes("open", "closed"), $(a).hasClass("closed") && (e.push(o), localStorage.assign("aurora", {
                bookmarksState: e
            })), $(a).hasClass("open") && (_.pull(e, o), localStorage.assign("aurora", {
                bookmarksState: e
            }))
        })
    },
    opanAllListBookmarks = function t() {
        $("body").on("click", ".title-list-all", function (t) {
            var e = $(this).data("list-open");
            t.preventDefault(), chrome.bookmarks.getChildren(e.toString(), function (t) {
                _.each(t, function (t, e) {
                    t.url && chrome.tabs.create({
                        url: t.url
                    })
                })
            })
        })
    },
    showDescriptionOnHover = function t(e, o, a) {
        var n = '*[data-bookmark="' + e + '"]';
        Tipped.create(n, function (t) {
            return "<strong>" + _.truncate(o, {
                length: 75
            }) + "</strong><br/>" + _.truncate(a, {
                length: 75
            })
        }, {
            behavior: "hide",
            position: "bottom",
            skin: "light"
        })
    },
    initFaturedBookmarks = function t() {
        chrome.bookmarks.getTree(function (t) {
            var e = t[0].children[1].id,
                o = "*Aurora Featured*";
            chrome.bookmarks.getSubTree(e, function (t) {
                var e = _.filter(t[0].children, function (t) {
                    return t.title === o
                });
                if (_.isEmpty(e) && chrome.bookmarks.create({
                        title: o,
                        url: null
                    }, function (t) {
                        localStorage.update("aurora", {
                            featuredBookmarks: {
                                id: t.id
                            }
                        })
                    }), _.isEmpty(e) || listFeaturedBookmarks(e[0].id), _.size(e) > 1) {
                    var a = 1;
                    _.each(e, function (t, e) {
                        a > 1 ? chrome.bookmarks.removeTree(t.id) : a++
                    })
                }
            })
        })
    },
    switchFeaturedBookmarks = function t(e) {
        chrome.bookmarks.getTree(function (t) {
            var o = t[0].children[1].id,
                a = "*Aurora Featured*";
            chrome.bookmarks.getSubTree(o, function (t) {
                var o = _.filter(t[0].children, function (t) {
                    return t.title === a
                });
                "Yes" === e && (_.isEmpty(o) && chrome.bookmarks.create({
                    title: a,
                    url: null
                }, function (t) {
                    localStorage.update("aurora", {
                        featuredBookmarks: {
                            id: t.id
                        }
                    })
                }), localStorage.update("aurora", {
                    featuredBookmarks: {
                        show: !0
                    }
                })), "No" === e && (_.isEmpty(o[0].children) && chrome.bookmarks.removeTree(o[0].id), localStorage.update("aurora", {
                    featuredBookmarks: {
                        show: !1
                    }
                }))
            })
        })
    },
    listFeaturedBookmarks = function t(e) {
        chrome.bookmarks.getChildren(e, function (t) {
            var e = "#featuredBookmarksContainer",
                o = 0,
                a = "";
            $(e).html(""), _.each(t, function (t, n) {
                var r = getFavicon(t.url, t.id, "featured");
                t.title && (a = getInitials(t.title).substring(0, 2).toUpperCase()).length < 2 && (a = t.title.substring(0, 2).toUpperCase()), void 0 !== t.url && ($(e).append(tmp_featuredBookmark({
                    bookmarkId: t.id,
                    bookmarkTitle: _.truncate(t.title, {
                        length: 22
                    }),
                    bookmarkUrl: t.url,
                    bookmarkTarget: ls.bookmarksLinkTarget,
                    bookmarkInitial: a,
                    bookmarkIcon: r
                })), o++)
            }), 0 === o && $(e).append(tmp_noResults({
                emptyClass: "",
                emptyTitle: "No Featured Bookmarks",
                emptySubtitle: "To start, open the Bookmarks tab and click <strong>Edit Bookmarks</strong> button.<br/>Move or Add your bookmarks to the <strong>*Aurora Featured*</strong> folder.<br/><small>You can disable this feature in the settings window.<small>",
                emptyBody: ""
            }))
        })
    },
    googleUrl = "https://www.google.com/search?q=",
    googleInputId = "#googleSearchInput",
    googleSuggest = function t(e) {
        var o = [],
            a = {
                client: "youtube",
                ds: "yt"
            },
            n = {
                client: "books",
                ds: "bo"
            },
            r = {
                client: "products-cc",
                ds: "sh"
            },
            i = {
                client: "news-cc",
                ds: "n"
            },
            s = {
                client: "img",
                ds: "i"
            },
            c = {
                client: "hp",
                ds: ""
            },
            l = {
                client: "hp",
                ds: "r"
            },
            d = $.ajax({
                url: "https://clients1.google.com/complete/search",
                dataType: "jsonp",
                data: {
                    q: $(googleInputId).val(),
                    nolabels: "t",
                    client: c.client,
                    ds: c.ds
                }
            });
        $.when(d).then(function (t) {
            o.pop(), _.each(t[1], function (t, e) {
                var a = t[0].replace(/<[^>]+>/g, "");
                o.push(a)
            }), e(o)
        })
    },
    initGoogleSearch = function t() {
        $(googleInputId).autoComplete({
            minChars: 1,
            source: function t(e, o) {
                e = e.toLowerCase();
                var a, n = googleSuggest(function t(a) {
                    var n = [];
                    $.each(a, function (t, o) {
                        ~o.toLowerCase().indexOf(e) && n.push(o)
                    }), o(n)
                })
            },
            select: function t(e, o) {
                13 != e.which && chrome.tabs.create({
                    url: googleUrl + o
                })
            }
        }).focus(), $("#googleSearch").submit(function (t) {
            return !1
        }), $(googleInputId).keypress(function (t) {
            13 == t.which && chrome.tabs.create({
                url: googleUrl + $(this).val()
            })
        })
    },
    initVoiceSearch = function t() {
        var e = "#modalMicrophone",
            o = new webkitSpeechRecognition;
        $("body").on("click", "#googleMicIcon", function () {
            $(e).addClass("active"), voiceSearch(!0)
        }), $("body").on("click", "#closeMicrophone", function (t) {
            t.preventDefault(), voiceSearch(!1), $(e).removeClass("active")
        })
    },
    voiceSearch = function t(e) {
        var o = new webkitSpeechRecognition,
            a = "#modalMicrophone",
            n = function t() {
                window.hasOwnProperty("webkitSpeechRecognition") && (o.continuous = !1, o.interimResults = !1, o.lang = "en-US", o.start(), o.onresult = function (t) {
                    $("#googleSearchInput").val(t.results[0][0].transcript), o.stop(), $(a).removeClass("active"), chrome.tabs.create({
                        url: googleUrl + t.results[0][0].transcript
                    })
                }, o.onerror = function (t) {
                    o.stop(), $(a).removeClass("active")
                })
            },
            r = function t() {
                o.abort()
            };
        navigator.getUserMedia && !0 === e && navigator.getUserMedia({
            audio: !0
        }, function (t) {
            n()
        }, function (t) {
            r(), alert("Unable to record the voice. Please check if you microphone is connected correctly.")
        }), !1 === e && r()
    },
    initTime = function t() {
        function e() {
            var t = moment().format("H:mm"),
                e = "";
            12 == localStorage.get("aurora").timeFormat && (t = moment().format("h:mm"), e = "<small>" + moment().format("a") + "</small>");
            var o = tmp_timeDate({
                showTime: t,
                showAddon: e,
                showDay: moment().format("dddd,"),
                showDate: moment().format("Do MMMM")
            });
            $("#timeDate").html(o)
        }
        e(), setInterval(e, 1e3)
    },
    initWeather = function t() {
        var e = {
                timeout: 5e3
            },
            o = localStorage.get("aurora");
        $("#weatherToday").html(o.weatherToday), $("#weatherForecast").html(o.weatherForecast);
        var a = function e() {
                var a;
                "" === o.weatherLocation.city ? t() : ("A" === o.weatherFormat && "US" === o.weatherLocation.country && localStorage.update("aurora", {
                    weatherFormat: "F"
                }), function t() {
                    $.simpleWeather({
                        app_id: "r1KfZM7k",
                        consumer_key: "dj0yJmk9UkU5bTJnQWc2NVJXJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTEw",
                        consumer_secret: "b1454cc112848e383528fb221f4737ad3b5dc433",
                        location: o.weatherLocation.city,
                        unit: o.weatherFormat,
                        success: function t(e) {
                            var a = "",
                                n = "",
                                r = 6,
                                i = [],
                                s = function t(e) {
                                    return e < 1 ? "0 bft (Clam)" : e < 4 ? "1 bft (Light Air)" : e < 8 ? "2 bft (Light Breeze)" : e < 13 ? "3 bft (Gentle Breeze)" : e < 19 ? "4 bft (Moderate Breeze)" : e < 25 ? "5 bft (Fresh Breeze)" : e < 32 ? "6 bft (Strong Breeze)" : e < 39 ? "7 bft (Near Gale)" : e < 47 ? "8 bft (Gale)" : e < 55 ? "9 bft (Strong Gale)" : e < 64 ? "10 bft (Storm)" : e < 73 ? "11 bft (Violent Storm)" : e >= 73 ? "12 bft (Hurricane Force)" : "0"
                                },
                                c = function t() {
                                    var t = e.wind.speed + " " + e.units.speed,
                                        a = o.weatherWindFormat;
                                    if ("mph" == e.units.speed && "Auto" != a) switch (a) {
                                        case "km/h":
                                            var n = (1.60934 * e.wind.speed).toFixed(2);
                                            t = parseFloat(n) + " km/h";
                                            break;
                                        case "knots":
                                            var n = (.868976 * e.wind.speed).toFixed(0);
                                            t = parseFloat(n) + " Knots";
                                            break;
                                        case "m/s":
                                            var n = (.44704 * e.wind.speed).toFixed(2);
                                            t = parseFloat(n) + " m/s";
                                            break;
                                        case "bft":
                                            t = s(e.wind.speed);
                                            break
                                    }
                                    if ("km/h" == e.units.speed && "Auto" != a) switch (a) {
                                        case "mph":
                                            var n = (.621371 * e.wind.speed).toFixed(2);
                                            t = parseFloat(n) + " mph";
                                            break;
                                        case "knots":
                                            var n = (.539957 * e.wind.speed).toFixed(0);
                                            t = parseFloat(n) + " Knots";
                                            break;
                                        case "m/s":
                                            var n = (.277778 * e.wind.speed).toFixed(2);
                                            t = parseFloat(n) + " m/s";
                                            break;
                                        case "bft":
                                            t = s((.621371 * e.wind.speed).toFixed(2));
                                            break
                                    }
                                    return t
                                };
                            a = tmp_weatherToday({
                                weatherIcon: e.code,
                                weatherTemperature: e.temp,
                                weatherNow: e.currently,
                                weatherCity: e.city,
                                weatherRegion: e.region,
                                weatherWindDirection: e.wind.direction,
                                weatherWindSpeed: c()
                            }), $("#weatherToday").empty().html(a), localStorage.update("aurora", {
                                weatherToday: a
                            }), _.each(e.forecast, function (t, e) {
                                e >= 1 && e < 6 && (n += tmp_weatherForecast({
                                    forecastDay: t.day,
                                    forecastIcon: t.code,
                                    forecastHigh: t.high,
                                    forecastLow: t.low
                                }))
                            }), $("#weatherForecast").empty().html(n), localStorage.update("aurora", {
                                weatherForecast: n
                            })
                        }
                    })
                }())
            },
            n = function t(e) {
                $.ajax({
                    url: "https://reverse.geocoder.api.here.com/6.2/reversegeocode.json",
                    type: "GET",
                    dataType: "jsonp",
                    jsonp: "jsoncallback",
                    data: {
                        prox: "".concat(e.coords.latitude, ",").concat(e.coords.longitude),
                        mode: "retrieveAddresses",
                        maxresults: "1",
                        gen: "9",
                        app_id: "48G6HRM5TXjRvByF7iKe",
                        app_code: "O_lxlwcZ5NdxDy5AXHBUkQ"
                    },
                    success: function t(e) {
                        var o = e.Response.View[0].Result[0].Location.Address;
                        localStorage.update("aurora", {
                            weatherDate: moment().format("DD-MM-YY"),
                            weatherLocation: {
                                country: getCountryISO2(o.Country),
                                city: o.City
                            }
                        }), a()
                    }
                }).fail(function (t, e, o) {
                    r()
                })
            },
            r = function e() {
                var o = {};
                $.get("http://ip-api.com/json", function (t) {
                    o.city = t.city + ", " + t.countryCode, o.country = t.countryCode
                }, "json").done(function () {
                    localStorage.update("aurora", {
                        weatherDate: moment().format("DD-MM-YY"),
                        weatherLocation: {
                            country: o.country,
                            city: o.city
                        }
                    }), a()
                }).fail(function () {
                    t()
                })
            },
            i = function t(e) {
                window.console && r()
            },
            s = function t() {
                a()
            },
            c;
        (function t() {
            $('*[data-setting="customWeatherLocation"]').autoComplete({
                minChars: 3,
                source: function t(e, o) {
                    $.ajax({
                        url: "https://autocomplete.geocoder.api.here.com/6.2/suggest.json",
                        type: "GET",
                        dataType: "jsonp",
                        jsonp: "jsoncallback",
                        data: {
                            query: e,
                            app_id: "48G6HRM5TXjRvByF7iKe",
                            app_code: "O_lxlwcZ5NdxDy5AXHBUkQ"
                        },
                        success: function t(e) {
                            var a = [];
                            $.each(e.suggestions, function (t, e) {
                                e.address.city && a.push(e.address.city + ", " + e.countryCode + ", " + e.label)
                            }), o(a)
                        }
                    })
                }
            })
        })(), void 0 === o.weatherDate && localStorage.update("aurora", {
            weatherDate: "01-01-18"
        }), o.weatherDate !== moment().format("DD-MM-YY") && "Auto" == o.weatherLocation.type ? navigator.geolocation.getCurrentPosition(n, i, e) : s()
    },
    initChromeApps = function t() {
        var e = "#modalApps",
            o = function t() {
                chrome.management.getAll(function (t) {
                    var o = [],
                        a = [],
                        n = 0;
                    _.each(t, function (t, e) {
                        if (!0 === t.isApp) {
                            var a = t.icons.length - 1,
                                n = {
                                    name: t.shortName,
                                    body: tmp_appLink({
                                        appId: t.id,
                                        appLaunch: t.launchType,
                                        appName: t.shortName,
                                        appUrl: t.appLaunchUrl,
                                        appIcon: t.icons[a].url
                                    })
                                };
                            o.push(n)
                        }
                    });
                    var r = o.sort(dynamicSort("name"));
                    _.each(r, function (t, o) {
                        $(e + " .content").append(t.body), n++
                    }), 0 === n && $(e + " .content").append(tmp_noResults({
                        emptyClass: "empty-modal",
                        emptyTitle: "No Apps",
                        emptySubtitle: "Chrome apps are no longer supported by Google.<br/>This section will be suspended soon.",
                        emptyBody: ""
                    }))
                }), $(e).addClass("active")
            };
        onclick = "chrome.tabs.create({url:this.href})", $("body").on("click", ".apps-item", function (t) {
            t.preventDefault(), chrome.management.launchApp($(this).data("id"))
        }), $("body").on("click", "#openApps", function (t) {
            t.preventDefault(), o()
        }), $("body").on("click", "#closeApps", function (t) {
            t.preventDefault(), $(e).removeClass("active"), $(e + " .content").html("")
        })
    },
    initHistory = function t() {
        var e = '*[data-column="chrome-history"]',
            o = localStorage.get("aurora").historyFilter,
            a = o.startTime,
            n = o.endTime,
            r = o.text,
            i = o.maxResults,
            s = o.headerLabel,
            c = moment().endOf("day"),
            l, d = "";
        n == c || (l = n), "week" == localStorage.get("aurora").historyFilter.type && $("#auroraLoading").show(), $(e).html("").hide(), d = tmp_historyHeader({
            headerLabel: s,
            itemFirst: "first"
        }), chrome.history.search({
            text: r,
            startTime: a,
            endTime: n,
            maxResults: i
        }, function (t) {
            var r = t.length,
                i = r - 1,
                s = [];
            _.each(t, function (t, e) {
                var r = $.Deferred();
                d += tmp_historyLink({
                    historyId: t.id,
                    historyTitle: u(t.title, t.url),
                    historyUrl: t.url,
                    historyDisplayUrl: getDomain(t.url),
                    historyIcon: getFavicon(t.url, t.id, "history"),
                    historyDate: m(o.type, t.lastVisitTime, a, n)
                }), r.resolve(), s.push(r)
            }), $.when.apply(null, s).then(function () {
                $(e).html("").html(d).show(), $("#auroraLoading").hide()
            }), 0 === r && ($(e).append(tmp_noResults({
                emptyClass: "",
                emptyTitle: "History Empty",
                emptySubtitle: "No results found. Change your day or filter criteria.",
                emptyBody: ""
            })), $("#auroraLoading").hide(), $(e).show())
        });
        var u = function t(e, o) {
                var a;
                return a = e || o
            },
            m = function t(e, o, a, n) {
                var r;
                if (o >= a && o <= n) {
                    switch (e) {
                        case "day":
                            r = moment(o).format("HH:mm");
                            break;
                        case "week":
                            r = moment(o).format("HH:mm - ddd Do");
                            break
                    }
                    l = o - 6e4
                } else switch (e) {
                    case "day":
                        r = moment(l).format("HH:mm");
                        break;
                    case "week":
                        r = moment(l).format("HH:mm - ddd Do");
                        break
                }
                return r
            }
    },
    filterHistory = function t() {
        initHistory(), $("body").on("click", ".history-filter>a", function (t) {
            var e;
            switch ($(".history-filter").removeClass("active"), $(this).parent().addClass("active"), t.preventDefault(), $(this).data("filter")) {
                case "today":
                    localStorage.update("aurora", {
                        historyFilter: {
                            type: "day",
                            startTime: getDate("start", 0),
                            endTime: getDate("end", 0),
                            headerLabel: "Today - " + moment().format("dddd, D MMMM YYYY")
                        }
                    }), initHistory();
                    break;
                case "yesterday":
                    localStorage.update("aurora", {
                        historyFilter: {
                            type: "day",
                            startTime: getDate("start", 1),
                            endTime: getDate("end", 1),
                            headerLabel: "Yesterday - " + moment(getDate("start", 1)).format("dddd, D MMMM YYYY")
                        }
                    }), initHistory();
                    break;
                case "week":
                    localStorage.update("aurora", {
                        historyFilter: {
                            type: "week",
                            startTime: getDate("start", 7),
                            endTime: getDate("end", 0),
                            headerLabel: moment(getDate("start", 7)).format("dddd, D MMMM YYYY") + " - " + moment(getDate("start", 0)).format("dddd, D MMMM YYYY")
                        }
                    }), $("#auroraLoading").show(), initHistory();
                    break
            }
        });
        var e = "#historyFilterClear",
            o = "#historyRefresh",
            a = "#historyTextFilter";
        $("body").on("click", e, function (t) {
            t.preventDefault(), $(a).val(""), localStorage.update("aurora", {
                historyFilter: {
                    text: ""
                }
            }), $(e).fadeOut("slow"), initHistory()
        }), $("body").on("click", o, function (t) {
            t.preventDefault(), $("#auroraLoading").show(), initHistory()
        }), $("body").on("click", ".history-url", function (t) {
            t.preventDefault();
            var o = $(this).data("url");
            $(a).val(o), localStorage.update("aurora", {
                historyFilter: {
                    text: o
                }
            }), initHistory(), $(e).fadeIn("slow")
        }), $(a).keyup(function () {
            this.value.length >= 3 && (localStorage.update("aurora", {
                historyFilter: {
                    text: this.value
                }
            }), delay(function () {
                initHistory()
            }, 700), $(e).fadeIn("slow")), 0 === this.value.length && (localStorage.update("aurora", {
                historyFilter: {
                    text: ""
                }
            }), delay(function () {
                initHistory()
            }, 700), $(e).fadeOut("slow"))
        })
    },
    initTodo = function t() {
        var e = "#modalTodo";
        $("body").on("click", "#openTodo", function (t) {
            var a = localStorage.get("aurora").toDo;
            t.preventDefault(), !0 === a.show && !1 !== a.url ? o(a.url) : (openModal(t, e), closeModal(e))
        }), $("body").on("click", ".todo-item", function (t) {
            var a = $(this).attr("href");
            t.preventDefault(), "local" != a ? (localStorage.update("aurora", {
                toDo: {
                    url: a
                }
            }), $(e).removeClass("active"), o(a)) : (localStorage.update("aurora", {
                toDo: {
                    show: !1,
                    url: "local"
                }
            }), $("#openTodo").hide(), $(e).removeClass("active"), location.reload())
        });
        var o = function t(e) {
            chrome.windows.create({
                url: e,
                type: "popup",
                height: 800,
                width: 1e3,
                //! left: centerWin(1e3, 0).left,
                right: 10,
                top: centerWin(0, 800).top
            }, function (t) {
                var e = t.id;
                chrome.windows.onRemoved.addListener(function t(e) {
                    initHistory(), chrome.windows.onRemoved.removeListener(t)
                })
            })
        };
        localTodo()
    },
    localTodo = function t() {
        var e = localStorage.get("aurora").toDo,
            o = "aurora-todo",
            a = "#todolistForm",
            n = "#todoList",
            r = "#todobox",
            i = "#localTodoCounter",
            s = ".todo-header",
            c = ".local-todo-item",
            l = ".todo-counter",
            d = ".todo-status";
        null === localStorage.getItem("lsList") && localStorage.set("lsList", [{}]), "local" == e.url ? $("#localTodo").show() : $("#localTodo").hide(),
            $(a).submit(function (t) {
                t.preventDefault(), $("#todobox").val().replace(/\s+/g, "").length > 0 && m()
            }), $("#todobox").keydown(function (t) {
                if (37 == t.keyCode || 39 == t.keyCode) return t.stopPropagation(), !0
            }), $("body").on("click", "#deleteTodo", function (t) {
                t.preventDefault(), p($(this).data("todo-delete"))
            }), $("body").on("click", "#doneTodo", function (t) {
                t.preventDefault(), g($(this).data("todo-done"), "done", "done")
            }), $(n).sortable({
                axis: "y",
                tolerance: "pointer",
                containment: "parent",
                cursor: "move",
                update: function t(e, o) {
                    var a = 0;
                    $(n).children().each(function (t) {
                        var e = $(this).data("todo-li");
                        $(this).attr("data-todo-order", a).promise().done(function () {
                            g(e, "order", a)
                        }), a++
                    })
                }
            });
        var u = function t() {
                var e = _.sortBy(JSON.parse(localStorage.getItem(o)), "order"),
                    a = 0;
                $(n).html(""), null !== e && (_.each(e, function (t, e) {
                    $(n).append(tmp_todoItem({
                        todoClass: t.done,
                        todoOrder: t.order,
                        todoId: t.id,
                        todoBody: t.todo
                    })), "done" != t.done ? (a++, $('*[data-todo-done="' + t.id + '"]').attr("checked", !1)) : $('*[data-todo-done="' + t.id + '"]').attr("checked", !0), $(i).html(a)
                }), 0 === e.length && $(i).html("0"))
            },
            m = function t() {
                var e = 0,
                    n = [];
                e = null === localStorage.getItem(o) || 2 === localStorage.getItem(o).length ? 0 : JSON.parse(localStorage.getItem(o)).pop().order + 1;
                var r, i, s, c = {
                    id: (new Date).getTime(),
                    order: e,
                    todo: $("#todobox").val(),
                    done: ""
                };
                null !== localStorage.getItem(o) && (n = JSON.parse(localStorage.getItem(o))), n.push(c), localStorage.set(o, JSON.stringify(n)), $(a)[0].reset(), u()
            },
            p = function t(e) {
                var a = JSON.parse(localStorage.getItem(o));
                _.remove(a, {
                    id: e
                }), localStorage.set(o, JSON.stringify(a)), u()
            };
        $("body").on("dblclick", c, function (t) {
            var e = $(this).find("span"),
                o = $(this).data("todo-li"),
                a = function t(e) {
                    "saved" == e ? ($(d).text("Saved").fadeIn("slow"), window.setTimeout(function () {
                        $(d).fadeOut("slow").promise().done(function () {
                            $(l).fadeIn("slow")
                        })
                    }, 3e3)) : "unsaved" == e && ($(l).hide(), $(d).text("Unsaved").fadeIn("slow"))
                };
            $(this).addClass("ui-sortable-editable"), e.attr("contenteditable", "true").focus(), a("unsaved"), $(this).focusout(function () {
                e.text().replace(/\s+/g, "").length > 0 && (g(o, "todo", e.text()), $(this).removeClass("ui-sortable-editable"), a("saved"))
            }), e.keydown(function (t) {
                if (37 == t.keyCode || 39 == t.keyCode) return t.stopPropagation(), !0;
                13 == t.keyCode && e.text().replace(/\s+/g, "").length > 0 && (g(o, "todo", e.text()), $(this).removeClass("ui-sortable-editable"), a("saved"))
            })
        });
        var g = function t(e, a, n) {
            var r = JSON.parse(localStorage.getItem(o)),
                i = _.findIndex(r, {
                    id: e
                }),
                s = _.find(r, {
                    id: e
                });
            switch (a) {
                case "done":
                    n = s.done == n ? "" : n, r.splice(i, 1, {
                        id: s.id,
                        order: s.order,
                        todo: s.todo,
                        done: n
                    });
                    break;
                case "order":
                    r.splice(i, 1, {
                        id: s.id,
                        order: n,
                        todo: s.todo,
                        done: s.done
                    });
                    break;
                case "todo":
                    r.splice(i, 1, {
                        id: s.id,
                        order: s.order,
                        todo: n,
                        done: s.done
                    });
                    break
            }
            localStorage.set(o, JSON.stringify(r)), u()
        };
        u()
    },
    initCalendar = function t() {
        $("body").on("click", "#openCalendar", function (t) {
            var o = "https://calendar.google.com/calendar/";
            t.preventDefault(), e(o)
        });
        var e = function t(e) {
            chrome.windows.create({
                url: e,
                type: "popup",
                height: 800,
                width: 1200,
                //! left: centerWin(1200, 0).left,
                right: 10,
                top: centerWin(0, 800).top
            }, function (t) {
                var e = t.id;
                chrome.windows.onRemoved.addListener(function t(e) {
                    chrome.windows.onRemoved.removeListener(t)
                })
            })
        }
    },
    initDonate = function t() {
        var e = localStorage.get("aurora"),
            o = moment().format("DD-MM-YY"),
            a = moment.duration(moment(new Date).diff(moment(e.paypalDonate.skipDate, "DD-MM-YY"))).asDays(),
            n, r;
        void 0 !== e.paypalDonate && !1 !== e.paypalDonate && _.isObject(e.paypalDonate) || localStorage.update("aurora", {
                paypalDonate: {
                    skipDate: o,
                    donationCode: ""
                }
            }),
            function t() {
                $("body").on("click", "#paypalDonateLabel > span", function (t) {
                    t.preventDefault(), document.getElementById("paypalDonate").submit()
                }), $("body").on("click", "#paypalDonateClose", function (t) {
                    t.preventDefault(), localStorage.update("aurora", {
                        paypalDonate: {
                            skipDate: o
                        }
                    }), $("#dashboardDonate").hide()
                }), $("#dashboardDonate").hide()
            }(),
            function t() {
                var o = $("#inpCode"),
                    n = $("#inpCodeStatus"),
                    r = e.paypalDonate.donationCode;
                a >= 7 && btoa(r) !== codeSample ? $("#dashboardDonate").show() : $("#dashboardDonate").hide(), o.keyup(function () {
                    10 === _.size(o.val()) && (btoa(o.val()) === codeSample ? (localStorage.update("aurora", {
                        paypalDonate: {
                            donationCode: o.val()
                        }
                    }), n.html(" &#128077;")) : n.html(" &#10060;"))
                }), btoa(r) === codeSample && o.val(r)
            }()
    };
$(window).load(function () {
    sessionStorage.setItem("bookmarks", !1), sessionStorage.setItem("history", !1), $("body").on("click", ".slider-menu-item", function (t) {
        t.preventDefault();
        var e = $(this).data("slide");
        setMenuActive(e)
    })
});
var sliderId = $("#auroraSlides"),
    loading = "#auroraLoading",
    conHis = "#historyContainer",
    conBck = "#bookmarksContainer",
    setMenuActive = function t(e) {
        window.actualSlide = e
        var o = "#googleSearchInput",
            a = ".autocomplete-suggestions";
        $(".slider-menu-item").removeClass("active"), $('*[data-slide="' + e + '"]').addClass("active"), "block" == $(a).css("display") ? $(a).css("display", "none").promise().done(function () {
            sliderId.goToSlide(e)
        }).blur() : sliderId.goToSlide(e)
    },
    slideBookmarks = function t() {
        $(loading).show(), $.when(initBookmarkTabs()).then(function () {
            $(conBck).css("visibility", "visible"), $(loading).hide(), !1 === localStorage.get("aurora").bookmarksFaq && ($("#modalBookmarksFaq").addClass("active"), localStorage.update("aurora", {
                bookmarksFaq: !0
            })), sessionStorage.setItem("bookmarks", !0)
        })
    },
    slideHistory = function t() {
        $(loading).show(), $.when(filterHistory()).then(function () {
            $(conHis).delay(100).queue(function () {
                $(loading).hide(), $(this).css("visibility", "visible").dequeue()
            }), sessionStorage.setItem("history", !0)
        })
    },
    initSlide = function t(e) {
        switch (e) {
            case 0:
                sessionStorage.getItem("bookmarks") && "false" !== sessionStorage.getItem("bookmarks") || slideBookmarks();
                break;
            case 2:
                sessionStorage.getItem("history") && "false" !== sessionStorage.getItem("history") || slideHistory();
                break
        }
        setMenuActive(e)
    },
    initBxSlider = function t() {
        var e = Number(localStorage.get("aurora").defaultSlide.substring(1));
        sliderId.bxSlider({
            startSlide: e,
            controls: !1,
            infiniteLoop: !1,
            touchEnabled: !1,
            onSliderLoad: function t() {
                switch ($("body").keydown(function (t) {
                    37 == t.keyCode ? sliderId.goToPrevSlide() : 39 == t.keyCode && sliderId.goToNextSlide()
                }), e) {
                    case 0:
                        $(loading).show(), $(conBck).delay(700).queue(function () {
                            $(loading).hide(), slideBookmarks()
                        });
                        break;
                    case 2:
                        slideHistory();
                        break
                }
            },
            onSlideAfter: function t(e) {
                var o = sliderId.getCurrentSlide();
                setMenuActive(o), initSlide(o), $(".bx-pager-link").blur()
            }
        })
    },
    initModals = function t() {
        initAboutModal(), initFaqModal(), initFeedbackModal(), initSettingsModal(), initWhatsNewModal(), initPrivacyModal()
    },
    openModal = function t(e, o) {
        $(o).addClass("active"), e.preventDefault()
    },
    closeModal = function t(e) {
        $("body").on("click", ".close-modal", function (t) {
            t.preventDefault(), $(e).removeClass("active")
        })
    },
    initWhatsNewModal = function t() {
        var e = "#modalWhatsNew",
            o = "1.3.0",
            a = "";
        null === localStorage.getItem("app") && localStorage.set("app", {
            ver: "0.0.0"
        }), null !== localStorage.getItem("app") && "1.3.0" != (a = localStorage.get("app").ver) && $(e).addClass("active"), $("body").on("click", "#gotIt", function (t) {
            t.preventDefault(), localStorage.set("app", {
                ver: "1.3.0"
            }), $(e).removeClass("active")
        }), $("body").on("click", "#tryMinima", function (t) {
            t.preventDefault(), localStorage.set("app", {
                ver: "1.3.0"
            }), $(e).removeClass("active"), chrome.tabs.create({
                url: "https://chrome.google.com/webstore/detail/aclnabbondecaccpdflnmhphljlkgapd"
            })
        })
    },
    initAboutModal = function t() {
        var e = "#modalAbout",
            o = (new Date).getFullYear();
        $("body").on("click", "#auroraLogo", function (t) {
            $("#copyDate").html(o), openModal(t, e)
        }), closeModal(e)
    },
    initPrivacyModal = function t() {
        var e = "#modalPrivacy";
        $("body").on("click", "#privacyPolicy", function (t) {
            $("#modalAbout").removeClass("active"), openModal(t, e)
        }), closeModal(e)
    },
    initFeedbackModal = function t() {
        var e = "#modalFeedback";
        $("body").on("click", "#openFeedback", function (t) {
            openModal(t, e), $("#userReport").is(":empty") && $("#userReport").html('<iframe src="http://feedback.userreport.com/304049be-3569-4b0a-b61d-fb07dd8f76f0/" frameborder="0" width="890" height="600" class="feedback-forum"></iframe>')
        }), !0 === localStorage.get("aurora").userFeedback && $("#ratingStar").removeClass("starpulse"), $("body").on("click", "#openRating", function (t) {
            t.preventDefault(), $("#ratingStar").removeClass("starpulse"), localStorage.update("aurora", {
                userFeedback: !0
            }), chrome.tabs.create({
                url: "https://chrome.google.com/webstore/detail/aurora-new-tab-bookmark-m/mjmipbogglnbgcabealdgbfdkpochcjg/reviews"
            })
        }), closeModal(e)
    },
    initFaqModal = function t() {
        var e = "#modalBookmarksFaq";
        $("body").on("click", "#openBfaq", function (t) {
            openModal(t, e)
        }), $("body").on("click", '*[data-modal="bookmark-info"]', function (t) {
            openModal(t, e)
        }), closeModal(e)
    },
    initSettingsModal = function t() {
        var e = "#modalSettings";
        $("body").on("click", "#openSettings", function (t) {
            openModal(t, e)
        }), closeModal(e)
    },
    ls = localStorage.get("aurora"),
    toggleSetting = function t(e) {
        $('*[data-setting="' + e + '"]').parent().children().removeClass("active"), $('*[data-setting="' + e + '"]').addClass("active")
    },
    activateSetting = function t(e) {
        $('*[data-setting="' + e + '"]').addClass("active")
    },
    intSettings = function t() {
        settingBackground(), settingBookmarks(), settingClockFormat(), settingLandingPage(), settingTodo(), settingWeather(), settingWeatherLocation(), settingWeatherUnits(), settingWeatherWind(), settingFeaturedBookmarks(), settingGridBookmarks()
    },
    settingBackground = function t() {
        var e = localStorage.get("aurora");
        "Auto" == e.background.type ? activateSetting("bgAuto") : activateSetting("bgCustom"), "Auto" == e.background.type ? $("#customBackground").hide() : $("#customBackground").show(), $("body").on("click", "#settingBackground > button", function (t) {
            var e = $(this).data("setting"),
                o = $(this).data("value");
            toggleSetting(e), localStorage.update("aurora", {
                background: {
                    type: o
                }
            })
        }), $("body").on("click", '*[data-setting="bgAuto"]', function (t) {
            $("#customBackground").slideUp(), initWallpapers()
        }), $("body").on("click", '*[data-setting="bgCustom"]', function (t) {
            $("#customBackground").slideDown(), initWallpapers()
        }), $("body").on("click", '*[data-id="getUnsplashBg"]', function (t) {
            $(this).addClass("loading"), unsplashWallpaper($(this).data("setting"))
        }), "" !== e.background.galery && $('*[data-setting="bgKeywords"]').val(e.background.galery), $("body").on("click", "#setBgKeywords", function (t) {
            var e = $('*[data-setting="bgKeywords"]').val();
            $('*[data-setting="bgKeywords"]').val("Now re-select the frequency/quality above.").addClass("text-success"), localStorage.update("aurora", {
                background: {
                    galery: e
                }
            })
        }), "" !== e.background.url && $('*[data-setting="bgURL"]').val(e.background.url), $("body").on("click", "#setBgImage", function (t) {
            var e = $('*[data-setting="bgURL"]').val().replace("www.dropbox", "dl.dropbox");
            $('*[data-setting="bgURL"]').val(e), localStorage.update("aurora", {
                background: {
                    url: e
                }
            }), initWallpapers()
        }), $("body").on("click", "#clearBgImage", function (t) {
            localStorage.update("aurora", {
                background: {
                    url: "",
                    galery: ""
                }
            }), $('*[data-setting="bgURL"]').val(""), $('*[data-setting="bgKeywords"]').val(""), $("#auroraWallpaper > img").attr("src", "/images/empty.png"), initWallpapers()
        }), $('*[data-setting="bgColor"]').val(e.background.color), $("body").on("click", "#setBgColor", function (t) {
            localStorage.update("aurora", {
                background: {
                    color: $('*[data-setting="bgColor"]').val()
                }
            }), initWallpapers()
        }), $("body").on("click", "#clearBgColor", function (t) {
            localStorage.update("aurora", {
                background: {
                    color: "FFFFFF"
                }
            }), $('*[data-setting="bgColor"]').val("FFFFFF"), initWallpapers()
        }), $('*[data-setting="bgOpacity"]').val(e.background.opacity), $("body").on("change", '*[data-setting="bgOpacity"]', function (t) {
            localStorage.update("aurora", {
                background: {
                    opacity: $(this).val()
                }
            }), initWallpapers()
        })
    },
    settingGridBookmarks = function t() {
        switch (ls.bookmarksGrid) {
            case 3:
                activateSetting("col3");
                break;
            case 4:
                activateSetting("col4");
                break;
            case 5:
                activateSetting("col5");
                break
        }
        $("body").on("click", "#settingGridBookmarks > button", function (t) {
            var e = $(this).data("setting"),
                o = $(this).data("value");
            toggleSetting(e), localStorage.update("aurora", {
                bookmarksGrid: o
            }), initBookmarkTabs()
        })
    },
    settingBookmarks = function t() {
        var e = localStorage.get("aurora");
        "_blank" != e.bookmarksLinkTarget && e.bookmarksLinkTarget ? activateSetting("self") : activateSetting("blank"), $("body").on("click", "#settingOpenBookmarks > button", function (t) {
            var e = $(this).data("setting"),
                o = $(this).data("value");
            toggleSetting(e), localStorage.update("aurora", {
                bookmarksLinkTarget: o
            }), initBookmarkTabs()
        })
    },
    settingFeaturedBookmarks = function t() {
        var e = "#featuredBookmarksContainer";
        !0 === ls.featuredBookmarks.show && (activateSetting("featuredYes"), $(e).show()), !1 === ls.featuredBookmarks.show && (activateSetting("featuredNo"), $(e).hide()), $("body").on("click", '*[data-setting="featuredNo"]', function (t) {
            $(e).hide(), toggleSetting("featuredNo"), switchFeaturedBookmarks("No")
        }), $("body").on("click", '*[data-setting="featuredYes"]', function (t) {
            $(e).show(), toggleSetting("featuredYes"), switchFeaturedBookmarks("Yes")
        })
    },
    settingClockFormat = function t() {
        var e;
        24 == localStorage.get("aurora").timeFormat ? activateSetting("clock24") : activateSetting("clock12"), $("body").on("click", "#settingClockFormat > button", function (t) {
            var e = $(this).data("setting"),
                o = $(this).data("value");
            toggleSetting(e), localStorage.update("aurora", {
                timeFormat: o
            }), initTime()
        })
    },
    settingLandingPage = function t() {
        "s0" === ls.defaultSlide && activateSetting("slideBookmarks"), "s1" === ls.defaultSlide && activateSetting("slideDashboard"), "s2" === ls.defaultSlide && activateSetting("slideHistory"), $("body").on("click", "#settingDefaultSlide > button", function (t) {
            var e = $(this).data("setting"),
                o = $(this).data("value");
            toggleSetting(e), localStorage.update("aurora", {
                defaultSlide: o
            })
        })
    },
    settingTodo = function t() {
        !0 === ls.toDo.show && (activateSetting("todoYes"), $("#openTodo").show(), $("#showTodo").show()), !1 === ls.toDo.show && (activateSetting("todoNo"), $("#openTodo").hide(), $("#showTodo").hide()), !1 !== ls.toDo.url ? $("#settingTodoProvider > select").val(ls.toDo.url) : $("#settingTodoProvider > select").val("not-selected"), $("body").on("click", '*[data-setting="todoNo"]', function (t) {
            $("#showTodo").slideUp(), $("#openTodo").hide(), toggleSetting("todoNo"), localStorage.update("aurora", {
                toDo: {
                    show: !1
                }
            })
        }), $("body").on("click", '*[data-setting="todoYes"]', function (t) {
            $("#showTodo").slideDown(), $("#openTodo").show(), toggleSetting("todoYes"), localStorage.update("aurora", {
                toDo: {
                    show: !0
                }
            })
        }), $("body").on("change", "#settingTodoProvider > select", function (t) {
            "not-selected" == $(this).val() ? localStorage.update("aurora", {
                toDo: {
                    url: !1
                }
            }) : "local" == $(this).val() ? (localStorage.update("aurora", {
                toDo: {
                    show: !1,
                    url: "local"
                }
            }), $("#showTodo").slideUp(), $("#openTodo").hide(), toggleSetting("todoNo"), initTodo()) : localStorage.update("aurora", {
                toDo: {
                    url: $(this).val()
                }
            })
        })
    },
    settingWeather = function t() {
        "Y" !== ls.weather && ls.weather || (activateSetting("weYes"), $("#weatherToday, #weatherForecast, #showWeather").show()), "N" === ls.weather && (activateSetting("weNo"), $("#weatherToday, #weatherForecast ,#showWeather").hide()), $("body").on("click", '*[data-setting="weYes"]', function (t) {
            $("#showWeather").slideDown(), $("#weatherToday, #weatherForecast").show(), toggleSetting("weYes"), localStorage.update("aurora", {
                weather: "Y"
            })
        }), $("body").on("click", '*[data-setting="weNo"]', function (t) {
            $("#showWeather").slideUp(), $("#weatherToday, #weatherForecast").hide(), toggleSetting("weNo"), localStorage.update("aurora", {
                weather: "N"
            })
        })
    },
    settingWeatherLocation = function t() {
        "Auto" == ls.weatherLocation.type ? activateSetting("wlAuto") : activateSetting("wlCustom"), "Auto" == ls.weatherLocation.type ? $("#customWeatherLocation").hide() : $("#customWeatherLocation").show(), $('*[data-setting="customWeatherLocation"]').val(ls.weatherLocation.city + ", " + ls.weatherLocation.country), $("body").on("click", "#settingWeatherLocation > button", function (t) {
            var e = $(this).data("setting"),
                o = $(this).data("value");
            toggleSetting(e), localStorage.update("aurora", {
                weatherLocation: {
                    type: o
                }
            })
        }), $("body").on("click", '*[data-setting="wlAuto"]', function (t) {
            var e;
            $("#customWeatherLocation").slideUp(),
                function t() {
                    localStorage.update("aurora", {
                        weatherDate: "01-01-18",
                        weatherLocation: {
                            country: "",
                            city: ""
                        }
                    })
                }(), initWeather()
        }), $("body").on("click", '*[data-setting="wlCustom"]', function (t) {
            $("#customWeatherLocation").slideDown(), initWeather()
        }), $("body").on("click", "#setCustomLocation", function (t) {
            var e = $('*[data-setting="customWeatherLocation"]').val(); - 1 !== e.indexOf(",") && (e = e.split(","), localStorage.update("aurora", {
                weatherLocation: {
                    country: getCountryISO2(e[1].trim()),
                    city: e[0]
                }
            }), initWeather())
        }), $("body").on("click", "#clearCustomWeather", function (t) {
            $('*[data-setting="customWeatherLocation"]').val("")
        })
    },
    settingWeatherUnits = function t() {
        "C" == ls.weatherFormat || "A" == ls.weatherFormat ? activateSetting("wunitC") : activateSetting("wunitF"), $("body").on("click", "#settingWeatherUnits > button", function (t) {
            var e = $(this).data("setting"),
                o = $(this).data("value");
            toggleSetting(e), localStorage.update("aurora", {
                weatherFormat: o
            }), initWeather()
        })
    },
    settingWeatherWind = function t() {
        ls.weatherWindFormat ? $("#settingWindUnits > select").val(ls.weatherWindFormat) : $("#settingWindUnits > select").val("Auto"), $("body").on("change", "#settingWindUnits > select", function (t) {
            localStorage.update("aurora", {
                weatherWindFormat: $(this).val()
            }), initWeather()
        })
    },
    validUrl = function t(e) {
        var o;
        return !!/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(e)
    },
    isIP = function t(e) {
        return "string" == typeof e && !!e.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)
    },
    getDomain = function t(e) {
        var o;
        return e.split("//")[1].split("/")[0]
    },
    getDate = function t(e, o) {
        var a;
        return a = "start" == e ? moment().subtract(o, "days").startOf("day").valueOf() : moment().subtract(o, "days").endOf("day").valueOf()
    },
    initPreloader = function t() {
        $(".menu-item-favicon").unveil(), $(".lazy").unveil()
    },
    delay = function () {
        var t = 0;
        return function (e, o) {
            clearTimeout(t), t = setTimeout(e, o)
        }
    }(),
    initReset = function t() {
        $("body").on("click", "#masterReset", function (t) {
            t.preventDefault(), syncEmpty(), localStorage.clear(), $("#openTodo").show(), $("#modalSettings").removeClass("active"), initAurora(), location.reload()
        })
    },
    centerWin = function t(e, o) {
        var a;
        return {
            left: Math.round(screen.width / 2 - e / 2),
            top: Math.round(screen.height / 2 - o / 2)
        }
    },
    stripHtml = function t(e) {
        return e.replace(/&lt;br&gt;/gi, "n").replace(/(&lt;([^&gt;]+)&gt;)/gi, "").replace(/<\s*(\w+).*?>/g, "<$1>")
    },
    initChromeWindows = function t() {
        $("body").on("click", "#openBookmarkManager", function (t) {
            var e = "#bookmarksContainer";
            t.preventDefault(), chrome.windows.create({
                url: "chrome://bookmarks/?id=2",
                type: "popup",
                height: 700,
                width: 1e3,
                left: centerWin(1e3, 0).left,
                top: centerWin(0, 700).top
            }, function (t) {
                var e = t.id;
                chrome.windows.onRemoved.addListener(function t(e) {
                    refreshBookmarks(), chrome.windows.onRemoved.removeListener(t)
                })
            })
        }), $("body").on("click", ".title-list-edit", function (t) {
            var e = "#bookmarksContainer",
                o = $(this).data("list-edit");
            t.preventDefault(), chrome.windows.create({
                url: "chrome://bookmarks/?id=" + o,
                type: "popup",
                height: 700,
                width: 1e3,
                left: centerWin(1e3, 0).left,
                top: centerWin(0, 700).top
            }, function (t) {
                var e = t.id;
                chrome.windows.onRemoved.addListener(function t(e) {
                    refreshBookmarks(), chrome.windows.onRemoved.removeListener(t)
                })
            })
        }), $("body").on("click", "#openHistoryManager", function (t) {
            t.preventDefault(), chrome.windows.create({
                url: "chrome://history",
                type: "popup",
                height: 600,
                width: 1e3,
                left: centerWin(1e3, 0).left,
                top: centerWin(0, 600).top
            }, function (t) {
                var e = t.id;
                chrome.windows.onRemoved.addListener(function t(e) {
                    initHistory(), chrome.windows.onRemoved.removeListener(t)
                })
            })
        })
    };
$.fn.toggle2classes = function (t, e) {
    return t && e ? this.each(function () {
        var o = $(this);
        o.hasClass(t) || o.hasClass(e) ? o.toggleClass(t + " " + e) : o.addClass(t)
    }) : this
};
var initAuroraIcon = function t() {
        var e = function t() {
            chrome.tabs.create({
                url: "aurora.html"
            }, function (e) {
                chrome.browserAction.onClicked.removeListener(t)
            })
        };
        chrome.browserAction.onClicked.addListener(e)
    },
    getInitials = function t(e) {
        var o = e.split(" "),
            a = o[0].substring(0, 1).toUpperCase();
        return o.length > 1 && (a += o[o.length - 1].substring(0, 1).toUpperCase()), a
    },
    initAnalytics = function t() {
        var e, o, a, n, r, i, s;
        e = window, o = document, a = "script", n = "https://www.google-analytics.com/analytics.js", r = "ga", e.GoogleAnalyticsObject = r, e.ga = e.ga || function () {
            (e.ga.q = e.ga.q || []).push(arguments)
        }, e.ga.l = 1 * new Date, i = o.createElement(a), s = o.getElementsByTagName(a)[0], i.async = 1, i.src = n, s.parentNode.insertBefore(i, s), ga("create", "UA-97771991-2", "auto"), ga("set", "checkProtocolTask", function () {}), ga("require", "displayfeatures"), ga("send", "pageview", "/aurora.html")
    },
    initUserReport = function t() {
        window._urq = window._urq || [], _urq.push(["initSite", "304049be-3569-4b0a-b61d-fb07dd8f76f0"]),
            function () {
                var t = document.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = "https://cdn.userreport.com/userreport.js";
                var e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(t, e)
            }()
    },
    initAppVersion = function t() {
        $('*[data-ver="appVer"]').html(chrome.app.getDetails().version)
    };
$(function () {
    initAurora()
});
var syncSet = function t() {
        chrome.storage.sync.set({
            auroraDefaults: localStorage.get("aurora"),
            auroraTodo: localStorage.get("aurora-todo")
        }, function () {})
    },
    syncGet = function t() {
        var e = ["auroraDefaults", "auroraTodo"];
        chrome.storage.sync.get(e, function (t) {})
    },
    syncEmpty = function t() {
        var e = ["aurora", "auroraDefaults", "auroraTodo"];
        chrome.storage.sync.remove(e, function () {
            var t = chrome.runtime.lastError
        })
    },
    codeSample = "KlUuUi1DJCRMKg==";