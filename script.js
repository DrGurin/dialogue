Array.from || (Array.from = function () {
    var e = Object.prototype.toString,
        t = function (t) {
            return "function" == typeof t || "[object Function]" === e.call(t)
        },
        n = function (e) {
            var t = Number(e);
            return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
        },
        a = Math.pow(2, 53) - 1,
        i = function (e) {
            var t = n(e);
            return Math.min(Math.max(t, 0), a)
        };
    return function (e) {
        var n = this,
            a = Object(e);
        if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var r, s = arguments.length > 1 ? arguments[1] : void 0;
        if ("undefined" != typeof s) {
            if (!t(s)) throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (r = arguments[2])
        }
        for (var l, o = i(a.length), c = t(n) ? Object(new n(o)) : new Array(o), f = 0; f < o;) l = a[f], s ? c[f] = "undefined" == typeof r ? s(l, f) : s.call(r, l, f) : c[f] = l, f += 1;
        return c.length = o, c
    }
}());
const initShapeLoop = function () {
        Array.from(document.querySelectorAll(".animate-shape")).forEach(function (e) {
            var t = e.querySelector("path");
            if (!t || !t.dataset.animateFrom || !t.dataset.animateTo) return !1;
            var n = 700 * Math.random() + 1300;
            anime.remove(t), anime({
                targets: t,
                easing: "linear",
                d: [{
                    value: t.dataset.animateFrom,
                    duration: 100
                }, {
                    value: t.dataset.animateTo,
                    duration: n
                }],
                loop: !0,
                direction: "alternate"
            })
        })
    },
    createScrollWatchers = function () {
        var e = "sliding-up",
            t = Array.from(document.querySelectorAll("." + e));
        t.forEach(function (t, n) {
            var a = 150;
            t.dataset.pos && (a = t.dataset.pos);
            var i = scrollMonitor.create(t, a);
            i.enterViewport(function () {
                if (t.className.indexOf("-visible") === -1) {
                    var n = 10;
                    t.dataset.delay && (n = t.dataset.delay), t.dataset.mdDelay && window.innerWidth > 767 && (n = t.dataset.mdDelay), setTimeout(function () {
                        t.className = t.className.replace(e, e + "-visible")
                    }, n)
                }
            }), i.exitViewport(function () {})
        })
    },
    ifElementInView = function (e, t) {
        try {
            t || (t = 0);
            var n = 0,
                a = n + window.innerHeight,
                i = e.getBoundingClientRect().top,
                r = i + e.offsetHeight,
                s = !1;
            return (i + t <= a && i - t >= n || r - t >= n && r + t <= a) && (s = !0), s
        } catch (l) {
            return !1
        }
    },
    getElementPosInView = function (e) {
        var t = window.innerHeight,
            n = t / 2,
            a = e.getBoundingClientRect().top,
            i = a + e.offsetHeight / 2;
        return (i - n) / n * 100
    },
    createCircleBlockAnimationOld = function () {
        var e = "circle-animation-block",
            t = Array.from(document.querySelectorAll("." + e)),
            n = function (e) {
                var t = e.querySelector(".part_1");
                if (t && t.className.indexOf("finished") === -1) {
                    var n = 1;
                    t.style.width = n + "%", t.style.height = n + "%", t.style.display = "block";
                    var i = setInterval(function () {
                        n++, n <= 100 ? (t.style.width = n + "%", t.style.height = n + "%") : (clearInterval(i), t.className += " finished", a(e))
                    }, 7)
                } else a(e)
            },
            a = function (e) {
                var n = e.querySelector(".part_2");
                if (n && n.className.indexOf("finished") === -1) {
                    var a = 0,
                        r = .6,
                        s = 80 - r;
                    n.style.top = s + "%", n.style.opacity = a, n.style.display = "block";
                    var l = setInterval(function () {
                        a += .02, s -= r, a <= 1 ? (n.style.top = s + "%", n.style.opacity = a) : (clearInterval(l), n.className += " finished", i(e), e === t[0] && f(t[1]))
                    }, 10)
                } else i(e)
            },
            i = function (e) {
                var t = e.querySelector(".part_3");
                if (t && t.className.indexOf("finished") === -1) {
                    var n = t.innerText.trim();
                    t.innerText = "";
                    var a = n.length,
                        i = 1;
                    t.style.display = "block";
                    var s = setInterval(function () {
                        i <= a ? (t.innerText = n.substring(0, i), i++) : (clearInterval(s), t.className += " finished", r(e))
                    }, 30)
                } else r(e)
            },
            r = function (e) {
                var t = e.querySelector(".part_4");
                if (t && t.className.indexOf("finished") === -1) {
                    var n = 0,
                        a = 1,
                        i = 50 - a;
                    t.style.top = i + "%", t.style.opacity = n, t.style.display = "block", t.style.position = "relative";
                    var r = setInterval(function () {
                        n += .02, i -= a, n <= 1 ? (t.style.top = i + "%", t.style.opacity = n) : (clearInterval(r), c(t, i, -40, function () {
                            t.className += " finished", s(e)
                        }))
                    }, 8)
                } else s(e)
            },
            s = function (e) {
                var t = e.querySelector(".part_5");
                if (t && t.className.indexOf("finished") === -1) {
                    var n = t.innerText.trim();
                    t.innerText = "";
                    var a = n.length,
                        i = 1;
                    t.style.display = "block";
                    var r = setInterval(function () {
                        i <= a ? (t.innerText = n.substring(0, i), i++) : (clearInterval(r), t.className += " finished", l(e))
                    }, 30)
                } else l(e)
            },
            l = function (e) {
                var t = e.querySelector(".part_6");
                if (t && t.className.indexOf("finished") === -1) {
                    var n = 0,
                        a = .6,
                        i = 80 - a;
                    t.style.top = i + "%", t.style.opacity = n, t.style.display = "block";
                    var r = setInterval(function () {
                        n += .02, i -= a, n <= 1 ? (t.style.top = i + "%", t.style.opacity = n) : (clearInterval(r), t.className += " finished", o(e))
                    }, 10)
                } else o(e)
            },
            // o = function (e) {
            //     var n = document.querySelector(e.dataset.line);
            //     if (!e || !e.dataset.stroke || !n || !n.style.strokeDashoffset || window.innerWidth < 768) return e.className += " finished", !1;
            //     var a = parseInt(n.style.strokeDashoffset),
            //         i = parseInt(e.dataset.stroke),
            //         r = setInterval(function () {
            //             a--, a >= i ? n.style.strokeDashoffset = a : (clearInterval(r), e.className += " finished", t.forEach(function (n, a) {
            //                 e === n && t[a + 1] && d(t[a + 1], a + 1)
            //             }))
            //         }, 1)
            // },
            o = function (e) {
                var n = document.querySelector(e.dataset.line);
                if (!e || !e.dataset.stroke || !n || !n.style.strokeDashoffset) return e.className += " finished", !1;
                var a = parseInt(n.style.strokeDashoffset),
                    i = parseInt(e.dataset.stroke),
                    r = setInterval(function () {
                        a--, a >= i ? n.style.strokeDashoffset = a : (clearInterval(r), e.className += " finished", t.forEach(function (n, a) {
                            e === n && t[a + 1] && d(t[a + 1], a + 1)
                        }))
                    }, 1)
            },
            c = function (e, t, n, a) {
                var i = n,
                    r = 1,
                    s = setInterval(function () {
                        t === n && (r++, n = r % 2 === 0 ? 0 : i / 2), r % 2 === 0 ? t++ : t--, r >= 5 && (clearInterval(s), a()), e.style.top = t + "px"
                    }, 2)
            },
            f = function (e) {
                n(e)
            },
            // d = function (e, n) {
            //     if ((t[n - 1] && t[n - 1].className.indexOf("finished") !== -1 || !t[n - 1]) && e.className.indexOf("started") === -1 && ifElementInView(e, 50))
            //         if (e.className.indexOf("in_view") === -1 && (e.className += " in_view"), window.innerWidth > 767 && t[n - 1] && t[n - 1].className.indexOf("finished") === -1 && t[n - 1].className.indexOf("in_view") !== -1) var a = setInterval(function () {
            //             t[n - 1].className.indexOf("finished") !== -1 && (clearInterval(a), e.className += " started", f(e))
            //         }, 100);
            //         else e.className.indexOf("finished") === -1 && (e.className += " started", f(e))
            // };
            d = function (e, n) {
                if ((t[n - 1] && t[n - 1].className.indexOf("finished") !== -1 || !t[n - 1]) && e.className.indexOf("started") === -1 && ifElementInView(e, 50))
                    if (e.className.indexOf("in_view") === -1 && (e.className += " in_view"), t[n - 1] && t[n - 1].className.indexOf("finished") === -1 && t[n - 1].className.indexOf("in_view") !== -1) var a = setInterval(function () {
                        t[n - 1].className.indexOf("finished") !== -1 && (clearInterval(a), e.className += " started", f(e))
                    }, 100);
                    else e.className.indexOf("finished") === -1 && (e.className += " started", f(e))
            };
        t.forEach(function (e, t) {
            var n = 0,
                a = scrollMonitor.create(e, n);
            a.enterViewport(function () {
                d(e, t)
            }), window.addEventListener("scroll", function () {
                d(e, t)
            })
        })
    },
    createCircleBlockAnimation = function () {
        var e = "circle-animation-block",
            t = Array.from(document.querySelectorAll("." + e)),
            n = function (e) {
                var t = e.querySelector(".part_1");
                t && t.className.indexOf("visible") === -1 ? (t.className += " visible", setTimeout(function () {
                    a(e)
                }, 300)) : a(e)
            },
            a = function (e) {
                e === t[0] && c(t[1]), i(e)
            },
            i = function (e) {
                var t = e.querySelector(".part_3");
                t && t.className.indexOf("visible") === -1 ? (t.className += " visible", setTimeout(function () {
                    r(e)
                }, 100)) : r(e)
            },
            r = function (e) {
                var t = e.querySelector(".part_4");
                t && t.className.indexOf("visible") === -1 ? (t.className += " visible", setTimeout(function () {
                    s(e)
                }, 100)) : s(e)
            },
            s = function (e) {
                var t = e.querySelector(".part_5");
                t && t.className.indexOf("visible") === -1 ? (t.className += " visible", setTimeout(function () {
                    l(e)
                }, 100)) : l(e)
            },
            l = function (e) {
                var t = e.querySelector(".part_6");
                t && t.className.indexOf("visible") === -1 ? t.className += " visible" : o(e)
            },
            // o = function (e) {
            //     var n = document.querySelector(e.dataset.line);
            //     if (!e || !e.dataset.stroke || !n || !n.style.strokeDashoffset || window.innerWidth < 768) return e.className += " finished", t.forEach(function (n, a) {
            //         e === n && t[a + 1] && f(t[a + 1], a + 1)
            //     }), !1
            // },
            o = function (e) {
                var n = document.querySelector(e.dataset.line);
                if (!e || !e.dataset.stroke || !n || !n.style.strokeDashoffset) return e.className += " finished", t.forEach(function (n, a) {
                    e === n && t[a + 1] && f(t[a + 1], a + 1)
                }), !1
            },
            c = function (e) {
                n(e)
            },
            // f = function (e, n) {
            //     (t[n - 1] && t[n - 1].className.indexOf("finished") !== -1 || !t[n - 1]) && e.className.indexOf("started") === -1 && ifElementInView(e, 50) && (e.className.indexOf("in_view") === -1 && (e.className += " in_view"), window.innerWidth > 767 && t[n - 1] && t[n - 1].className.indexOf("in_view") !== -1 ? t[n - 1].className.indexOf("finished") !== -1 && e.className.indexOf("can_start") !== -1 && (e.className += " started", c(e)) : e.className.indexOf("finished") === -1 && (e.className += " started", c(e)))
            // };
            f = function (e, n) {
                (t[n - 1] && t[n - 1].className.indexOf("finished") !== -1 || !t[n - 1]) && e.className.indexOf("started") === -1 && ifElementInView(e, 50) && (e.className.indexOf("in_view") === -1 && (e.className += " in_view"), t[n - 1] && t[n - 1].className.indexOf("in_view") !== -1 ? t[n - 1].className.indexOf("finished") !== -1 && e.className.indexOf("can_start") !== -1 && (e.className += " started", c(e)) : e.className.indexOf("finished") === -1 && (e.className += " started", c(e)))
            };
        t.forEach(function (e, t) {
            var n = 0,
                a = scrollMonitor.create(e, n);
            a.enterViewport(function () {
                f(e, t)
            }), window.addEventListener("scroll", function () {
                f(e, t)
            })
        })
    },
    createLiveAnimation = function () {
        var e = "live-transform",
            t = Array.from(document.querySelectorAll("." + e));
        t.forEach(function (e) {
            var t, n = 1e6;
            window.addEventListener("scroll", function () {
                if (clearTimeout(t), window.innerWidth <= 767) return e.style.transform = "none", !1;
                // if (clearTimeout(t)) return e.style.transform = "none", !1;
                e.className.indexOf("is_scrolling") === -1 && (e.className += " is_scrolling");
                var a = getElementPosInView(e) / 3;
                e.className.indexOf("to_bottom") !== -1 && (a = 0 - a), e.style.transform = "translate3d(0px, " + a + "px, 0px)";
                var i = .03,
                    r = 0;
                n > a && (i = -.03), n = a, t = setTimeout(function () {
                    e.className = e.className.replace(" is_scrolling", "");
                    var t = setInterval(function () {
                        return r >= 100 || e.className.indexOf("is_scrolling") !== -1 ? (clearInterval(t), !1) : (r++, a += i, void(e.style.transform = "translate3d(0px, " + a + "px, 0px)"))
                    }, 10)
                }, 50)
            })
        })
    },
    init = function () {
        createScrollWatchers(), createCircleBlockAnimation(), initShapeLoop(), createLiveAnimation()
    };
init(), $(document).ready(function () {
    function e(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t].getTotalLength(),
                i = $(".line-placeholder").height() - $(window).height(),
                r = $(window).scrollTop() / i,
                w = $(window).width();
                koef = 768 / w; 
                switch(true) {
                    case (w >= 980): 
                        $('#svgLine1').attr('height', '839.296');
                        $('#svgLine2').attr('height', '839.296');
                        $('#svgLine1').attr('viewBox', '0 0 240.812 839.296');
                        $('#svgLine2').attr('viewBox', '0 0 240.812 839.296');
                        s = r * n * 0.7;
                        s >= 470 && a[2] && a[2].className.indexOf("can_start") === -1 && (a[2].className += " can_start"), s >=830 && a[3] && a[3].className.indexOf("can_start") === -1 && (a[3].className += " can_start"), e[t].style.strokeDasharray = [s, n].join(" ")
                        break;
                    case (w <980 && w >=768): 
                        $('#svgLine1').attr('height', '950.296');
                        $('#svgLine2').attr('height', '950.296');
                        $('#svgLine1').attr('viewBox', '0 0 240.812 950.296');
                        $('#svgLine2').attr('viewBox', '0 0 240.812 950.296');
                        s = r * n * 0.7;
                        s >= 470 && a[2] && a[2].className.indexOf("can_start") === -1 && (a[2].className += " can_start"), s >=((1000/w)*830) && a[3] && a[3].className.indexOf("can_start") === -1 && (a[3].className += " can_start"), e[t].style.strokeDasharray = [s, n].join(" ")
                        break;
                    case (w < 768 && w >= 440): 
                        $('#svgLine1').attr('height', '1690.296');
                        $('#svgLine2').attr('height', '1429.296');
                        $('#svgLine1').attr('viewBox', '0 0 240.812 1690.296');
                        $('#svgLine2').attr('viewBox', '0 0 240.812 1429.296');
                        s = r * n * (koef*0.7);
                        s >= (koef*470) && a[2] && a[2].className.indexOf("can_start") === -1 && (a[2].className += " can_start"), s >= (koef*830) && a[3] && a[3].className.indexOf("can_start") === -1 && (a[3].className += " can_start"), e[t].style.strokeDasharray = [s, n].join(" ")
                        break;
                    case (w < 440 && w >=350): 
                        $('#svgLine1').attr('height', '2000.296');
                        $('#svgLine2').attr('height', '1850.296');
                        $('#svgLine1').attr('viewBox', '0 0 240.812 2000.296');
                        $('#svgLine2').attr('viewBox', '0 0 240.812 1850.296');
                        s = r * n * (koef*0.7);
                        s >= (koef*400) && a[2] && a[2].className.indexOf("can_start") === -1 && (a[2].className += " can_start"), s >= (koef*830) && a[3] && a[3].className.indexOf("can_start") === -1 && (a[3].className += " can_start"), e[t].style.strokeDasharray = [s, n].join(" ")
                        break;
                    case (w < 350):
                        $('#svgLine1').attr('height', '2400.296');
                        $('#svgLine2').attr('height', '2130.296');
                        $('#svgLine1').attr('viewBox', '0 0 240.812 2400.296');
                        $('#svgLine2').attr('viewBox', '0 0 240.812 2130.296');
                        s = r * n * (koef*0.7);
                        s >= (koef*370) && a[2] && a[2].className.indexOf("can_start") === -1 && (a[2].className += " can_start"), s >= (koef*830) && a[3] && a[3].className.indexOf("can_start") === -1 && (a[3].className += " can_start"), e[t].style.strokeDasharray = [s, n].join(" ")
                        break;
                }
        }
    }
    function t(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t].getTotalLength(),
            a = e[t].getBoundingClientRect(),
            i = $(window).height(),
            r = (i - a.y - a.height / 2) / (i - 100),
            s = r * n * 1.2
            s || (s = n), e[t].style.strokeDasharray = [s, n].join(" ") 
        }
    }
    var n = "circle-animation-block",
        a = Array.from(document.querySelectorAll("." + n));
    $(window).scroll(function () {
        e($(".line-placeholder .line_1 path")), t($(".graph_line path"))
    }), e($(".line-placeholder .line_1 path")), t($(".graph_line path"))
} 
);