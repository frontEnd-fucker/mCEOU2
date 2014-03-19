!function(a) {
    function c() {
        b.w = a(window).width(), b.h = a(window).height(), a("#menu").height(b.h), b.ww = a(".website").width(), a(".website li,.website").width(b.ww), b.wl = a(".website li").length, a(".website ul").width(b.wl * b.ww), a(".ct").height(b.h - 60), a(".title_d").width() - a(".title").width() > 0 ? a(".title_d").addClass("round") : a(".title_d").removeClass("round"), document.getElementById("newwrap_t") && a("#newwrap_t,#newwrap").width(b.w), a("#myfavorites li").width((a("#myfavorites ul").width() - 10) / 2), a("#myfavorites li span").width((a("#myfavorites li").width() - 20) / 3)
    }
    function f() {
        a("#list li").bind("touchstart touchmove touchend", function(b) {
            if ("touchstart" == b.type)
                a(this).addClass("touch");
            else if ("touchend" == b.type)
                a(this).removeClass("touch");
            else {
                var c = a(this);
                clearTimeout(d), d = setTimeout(function() {
                    c.removeClass("touch")
                }, 100)
            }
        })
    }
    function h() {
        a(".login_user i").bind("touchstart touchend", function(b) {
            "touchstart" == b.type ? a(this).addClass("ton") : (a(this).parent().find("input").val(""), a(this).hide(), a(this).removeClass("ton"))
        }), a(".login_password i").bind("touchstart touchend", function(b) {
            "touchstart" == b.type ? a(this).addClass("ton") : (a(this).parent().find("input").val(""), a(this).hide(), a(this).removeClass("ton"))
        })
    }
    function k() {
        a(".relationship a").bind("click", function() {
            var b = a(this);
            b.hasClass("need_login") ? a("#reg_index").addClass("show") : a(this).hasClass("add_friend") && 0 == a(this).hasClass("need_login") ? a.post("http://www.uehtml.com/service/addFollow", {timestamp: YYToken.timestamp,token: YYToken.token,uid: a(this).attr("data-uid")}, function() {
                b.removeClass("add_friend").addClass("remove_friend")
            }) : a(this).hasClass("remove_friend") && 0 == a(this).hasClass("need_login") ? a.post("http://www.uehtml.com/service/removeFollow", {timestamp: YYToken.timestamp,token: YYToken.token,uid: a(this).attr("data-uid")}, function() {
                b.removeClass("remove_friend").addClass("add_friend")
            }) : a(this).hasClass("rela_friend") && 0 == a(this).hasClass("need_login") && a.post("http://www.uehtml.com/service/removeFollow", {timestamp: YYToken.timestamp,token: YYToken.token,uid: a(this).attr("data-uid")}, function() {
                b.removeClass("rela_friend").addClass("add_friend")
            })
        })
    }
    function C() {
        a(".reply_this").click(function() {
            1 == logined ? (A = !0, g = !0, y = a(this).parent().parent().parent().parent().attr("postdata"), z = a(this).parent().parent().parent().parent().find(".comment_p .comment_pct").html(), B = a(this).parent().parent().parent().parent().find("h5 .fl a").html(), a("#add_newpost").addClass("show"), a(".newpost_w_t textarea").val("").attr("placeholder", "\u56de\u590d" + B)) : a("#reg_index").addClass("show")
        }), a(".us_panel_post").click(function() {
            1 == logined ? (a("#add_newpost").addClass("show"), "" == a(".newpost_w_t textarea").val() && a(".newpost_w_t textarea").val("").attr("placeholder", "\u53d1\u8868\u8bc4\u8bba"), g = !0, A = !1, g = !0) : a("#reg_index").addClass("show")
        }), a(".add_newpost_post").click(function() {
            1 == g && 1 == A && "" != a(".newpost_w_t textarea").val() && (g = !1, a.post("http://www.uehtml.com/service/postnewComment", {timestamp: YYToken.timestamp,token: YYToken.token,postid: commentId2,postcid: y,postuid: comment_id,content: a(".newpost_w_t textarea").val()}, function(b) {
                var c = '<div class="quote"><div class="pd10">' + z + "</div></div>";
                a("#comment ul").prepend('<li postdata="' + b.id + '" usdata="' + comment_id + '"><div class="pd5"><a class="avt fl" target="_blank" href="' + comment_at_url + '"><img src="' + comment_avatar + '"></a><div class="comment_content"><h5><div class="fl"><a class="comment_name" href="' + comment_at_url + '">' + comment_author + "</a><span>" + b.postdate + '</span></div><div class="fr reply_this">[\u56de\u590d]</div><div class="clear"></div></h5><div class="comment_p"><div class="comment_pct">' + b.content + "</div>" + c + '</div></div><div class="clear"></div><div class="comment_reply"></div></div></li>'), document.getElementById("container").scrollTop = o, a("#add_newpost").removeClass("show"), a(".us_panel_post").find("span em").html(parseInt(a(".us_panel_post").find("span em").html()) + 1), C()
            }, "json")), 1 == g && 0 == A && "" != a(".newpost_w_t textarea").val() && (g = !1, a.post("http://www.uehtml.com/service/postnewComment", {timestamp: YYToken.timestamp,token: YYToken.token,postid: commentId2,content: a(".newpost_w_t textarea").val()}, function(b) {
                a("#comment ul").prepend('<li postdata="' + b.id + '" usdata="' + comment_id + '"><div class="pd5"><a class="avt fl" target="_blank" href="' + comment_at_url + '"><img src="' + comment_avatar + '"></a><div class="comment_content"><h5><div class="fl"><a class="comment_name" href="' + comment_at_url + '">' + comment_author + "</a><span>" + b.postdate + '</span></div><div class="fr reply_this">[\u56de\u590d]</div><div class="clear"></div></h5><div class="comment_p"><div class="comment_pct">' + b.content + '</div></div></div><div class="clear"></div><div class="comment_reply"></div></div></li>'), document.getElementById("container").scrollTop = o, a("#add_newpost").removeClass("show"), a(".us_panel_post").find("span em").html(parseInt(a(".us_panel_post").find("span em").html()) + 1), C()
            }, "json"))
        })
    }
    var b = {};
    a(window).bind("load", function() {
        c()
    }), a(window).bind("resize", function() {
        c(), a(".works").each(function() {
            a(this).find("img").attr("width", "").attr("height", "")
        })
    });
    var d, e = 0;
    f(), a(".post_comment").bind("touchstart touchend", function(b) {
        "touchstart" == b.type ? a(this).find("a").addClass("ton") : a(this).find("a").removeClass("ton")
    }), a("#header i").bind("touchstart touchmove touchend", function(b) {
        "touchstart" == b.type ? a(this).addClass("ton") : "touchmove" == b.type ? a(this).removeClass("ton") : a(this).removeClass("ton")
    });
    var g = !1;
    a("#content").bind("touchstart touchmove touchend", function(c) {
        if (0 == a("#container").hasClass("push") && 0 == a("#container").hasClass("pull")) {
            var d = event.touches[0];
            "touchstart" == c.type ? b.touchY = d.pageY : "touchmove" == c.type && (b.touchEY = d.pageY - b.touchY, b.touchEY > 0 ? (a("#header,#us_panel,#us_panel2").removeClass("hide"), a(".post_comment_content textarea").blur(), a(".post_comment_content,#send_msg").removeClass("show"), a("#us_panel").css({position: "fixed",bottom: "0"}), g = !1) : b.touchEY < 0 && (a("#header,#us_panel,#us_panel2").addClass("hide"), a(".post_comment_content textarea").blur(), a("#us_panel").css({position: "fixed",bottom: "0"}), a(".post_comment_content,#send_msg").removeClass("show"), g = !1))
        }
    }), a(".menu_open").bind("click", function() {
        return 0 == a("#container").hasClass("pull") && (0 == e ? (a("#container,#menu,#header,#us_panel").addClass("push"), e = 1, a(window).bind("touchmove", function(a) {
            a.preventDefault(), a.stopImmediatePropagation()
        }), a("#us_panel").addClass("hide")) : (a("#container,#menu,#header,#us_panel").removeClass("push"), e = 0, a(window).unbind("touchmove"))), !1
    }), a(".search_open").bind("click", function() {
        return 0 == a("#container").hasClass("push") && (0 == e ? (a("#container,#user,#header,#us_panel").addClass("pull"), e = 1, a(window).bind("touchmove", function(a) {
            a.preventDefault(), a.stopImmediatePropagation()
        }), a("#us_panel").addClass("hide")) : (a("#container,#user,#header,#us_panel").removeClass("pull"), e = 0, a(window).unbind("touchmove"))), !1
    }), a(".push_msk").bind("touchmove", function() {
        return a("#container").hasClass("pull") ? a(".search_open").trigger("click") : a("#container").hasClass("push") && a(".menu_open").trigger("click"), !1
    }), a(".hd .fr,.ct_submit,.user_logout,.comment_reply_submit,.more_comment,.visit_site a,.sort_b,.cancel_share a,.message_system li,.delete_check_sure,.delete_check_cancel,#choose_album li a").bind("touchstart touchend", function(b) {
        "touchstart" == b.type ? a(this).addClass("ton") : a(this).removeClass("ton")
    }), a(".search_input").bind("input", function() {
        a(".search_input").val().length > 0 ? a(".reset_input").show() : a(".reset_input").hide()
    }), a(".reset_input").bind("touchstart touchend", function(b) {
        "touchstart" == b.type ? (a(".search_input").val(""), a(".reset_input").addClass("ton")) : "touchend" == b.type && a(".reset_input").removeClass("ton").hide()
    }), a("#reg_now").bind("click", function() {
        a("#reg_index").addClass("show"), a(window).unbind("touchmove")
    }), a(".reg_bar_close").bind("touchstart touchend click", function(b) {
        "touchstart" == b.type ? a(this).addClass("ton") : "touchend" == b.type ? a(this).removeClass("ton") : document.getElementById("us_panel") ? (a("#reg_index").removeClass("show"), a(window).bind("touchmove", function(a) {
            a.preventDefault(), a.stopImmediatePropagation()
        })) : a("#reg_index").removeClass("show")
    }), a(".login").bind("click", function() {
        a("#login_index").addClass("show"), a(window).unbind("touchmove")
    }), a(".login_bar_close").bind("touchstart touchend click", function(b) {
        "touchstart" == b.type ? a(this).addClass("ton") : "touchend" == b.type ? a(this).removeClass("ton") : (a("#login_index").removeClass("show"), a(window).bind("touchmove", function(a) {
            a.preventDefault(), a.stopImmediatePropagation()
        }))
    }), a(".login_user input,.login_password input").bind("input", function() {
        a(this).val().length > 0 ? (a(this).parent().find("i").show(), h()) : a(this).parent().find("i").hide()
    }), a("#add_f").click(function() {
        var b = parseInt(a(this).find(".lf span").html());
        if (a(this).hasClass("liked")) {
            var c = a(this);
            a.post("http://www.uehtml.com/service/removeLike", {timestamp: YYToken.timestamp,token: YYToken.token,postid: commentId2}, function() {
                c.removeClass("liked"), c.find(".lf span").html(b - 1)
            })
        } else {
            var c = a(this);
            a.post("http://www.uehtml.com/service/addLike", {timestamp: YYToken.timestamp,token: YYToken.token,postid: commentId2}, function() {
                c.addClass("liked"), c.find(".lf span").html(b + 1)
            })
        }
    });
    var j = 0;
    b.stx, b.edx, b.ttx = 0, a(".website").bind("touchstart touchmove touchend", function(c) {
        if ("touchstart" == c.type) {
            var d = c.touches[0];
            b.stx = d.pageX, b.sty = d.pageY
        } else if ("touchmove" == c.type) {
            var d = c.touches[0];
            b.edx = d.pageX, b.edy = d.pageY, document.querySelector(".website ul").style.webkitTransform = "translateX(" + (b.edx - b.stx + b.ttx) + "px)", document.querySelector(".website ul").style.oTransform = "translateX(" + (b.edx - b.stx + b.ttx) + "px)", document.querySelector(".website ul").style.mozTransform = "translateX(" + (b.edx - b.stx + b.ttx) + "px)", document.querySelector(".website ul").style.transform = "translateX(" + (b.edx - b.stx + b.ttx) + "px)", b.edx - b.stx < 0 && c.preventDefault(), b.edx - b.stx > 0 && c.preventDefault()
        } else
            b.edx - b.stx <= 60 && b.edx - b.stx >= -60 && (a(".website ul").animate({translate3d: "-" + b.ww * j + "px,0,0"}, 300, "cubic-bezier(0.175, 0.885, 0.32, 1.275)"), c.preventDefault()), b.edx - b.stx > 60 && (j > 0 ? j-- : j = 0, a(".website ul").animate({translate3d: "-" + b.ww * j + "px,0,0"}, 300, "ease-in-out"), c.preventDefault()), b.edx - b.stx < -60 && (j < b.wl - 1 ? j++ : j = b.wl - 1, a(".website ul").animate({translate3d: "-" + b.ww * j + "px,0,0"}, 300, "ease-in-out"), c.preventDefault()), b.edx = 0, b.stx = 0, b.ttx = -b.ww * j
    }), a(".designer_more").each(function() {
        a(this).find("a").each(function() {
            "" == a(this).html() && a(this).click(function() {
                return !1
            })
        })
    }), k(), a("#sort td").bind("click", function() {
        a("#sort_content").addClass("show"), a(".asort").eq(a(this).index()).addClass("show")
    }), a(".asort .hd .fr").bind("click", function() {
        a("#sort_content").removeClass("show");
        var b = a(this);
        setTimeout(function() {
            b.parent().parent().parent().removeClass("show")
        }, 300)
    });
    var m, l = ["", "", "", ""];
    a(".ct li").click(function() {
        if (document.getElementById("add_favorites_choose")) {
            var b = a(this), c = a(this).attr("data-id");
            0 == a(this).hasClass("a_selected") && a.post("http://www.uehtml.com/service/addLike", {timestamp: YYToken.timestamp,token: YYToken.token,postid: commentId2,cid: c}, function() {
                b.siblings().removeClass("a_selected"), b.addClass("a_selected"), a("#add_favorite .hd .fr").trigger("click"), a(".us_panel_like").addClass("liked"), a(".us_panel_like span em").html(parseInt(a(".us_panel_like span em").html()) + 1)
            })
        } else {
            var d = a(this).find("span").html(), e = a(this).parent().parent().parent().parent().index();
            if (a(this).hasClass("a_selected") && void 0 == a(this).find(".s").attr("class")) {
                var b = a(this);
                l[1] = "", a.get("http://www.uehtml.com/list/", {cat: l[0],soindustrys: [l[1]],sort: l[2],search: search_value}, function(c) {
                    a(".sort_tag .sort_b_inner span").html("\u68c0\u7d22\u5217\u8868");
                    var d = a(c).find("#list ul").html();
                    a("#list ul").html(d), f(), b.removeClass("a_selected");
                    var e = b.parent().parent().parent().parent().find(".fr");
                    e.trigger("click"), a(".alist").openNewFrame()
                })
            } else {
                a(this).parent().parent().find("li").removeClass("a_selected"), a(this).addClass("a_selected"), a(this).attr("c_data") ? l[0] = "" != a(this).attr("c_data") ? a(this).attr("c_data") : "" : a(this).attr("t_data") ? l[1] = a(this).attr("t_data").substring(a(this).attr("t_data").indexOf("=") + 1, a(this).attr("t_data").length) : l[2] = a(this).attr("s_data");
                var g = a(this).parent().parent().parent().parent().find(".fr");
                if (a.get("http://www.uehtml.com/list/", {cat: l[0],soindustrys: [l[1]],sort: l[2],search: search_value}, function(b) {
                    var c = a(b).find("#list ul").html();
                    a("#list ul").html(c), g.trigger("click"), f(), a(".alist").openNewFrame()
                }), a("#sort td").eq(e).find(".sort_b_inner span").html(d), a(this).find(".s").attr("class")) {
                    var c = a(this).find(".s").attr("class");
                    a("#sort td").eq(e).find(".sort_b_inner i").attr("class", c)
                }
            }
            m = !0, now_page = 1, a(".list_loading").html("<i></i><span>\u52aa\u529b\u52a0\u8f7d\u4e2d...</span>")
        }
    });
    var o = 0;
    document.getElementById("more_about") && (o = a("#more_about").offset().top), a("#post_comment_btn").click(function() {
        if (a(".post_comment_content").hasClass("show"))
            if (0 == g) {
                if ("" == a("#post_comment_content").val())
                    return !1;
                a.post("http://www.uehtml.com/service/postnewComment", {timestamp: YYToken.timestamp,token: YYToken.token,postid: commentId2,content: a("#post_comment_content").val()}, function(b) {
                    a("#comment ul").prepend('<li postdata="' + b.id + '" usdata="' + comment_id + '"><div class="pd5"><a class="avt fl" target="_blank" href="' + comment_at_url + '"><img src="' + comment_avatar + '"></a><div class="comment_content"><h5><div class="fl"><a class="comment_name" href="' + comment_at_url + '">' + comment_author + "</a><span>" + b.postdate + '</span></div><div class="fr reply_this">[\u56de\u590d]</div><div class="clear"></div></h5><div class="comment_p">' + b.content + '</div></div><div class="clear"></div><div class="comment_reply"></div></div></li>'), document.getElementById("container").scrollTop = o, g = !1
                }, "json")
            } else {
                if ("" == a("#post_comment_content").val())
                    return !1;
                a.post("http://www.uehtml.com/service/postnewComment", {timestamp: YYToken.timestamp,token: YYToken.token,postid: commentId2,postcid: y,postuid: comment_id,content: a("#post_comment_content").val()}, function(b) {
                    var c = '<div class="quote"><div class="pd10">' + z + "</div></div>";
                    a("#comment ul").prepend('<li postdata="' + b.id + '" usdata="' + comment_id + '"><div class="pd5"><a class="avt fl" target="_blank" href="' + comment_at_url + '"><img src="' + comment_avatar + '"></a><div class="comment_content"><h5><div class="fl"><a class="comment_name" href="' + comment_at_url + '">' + comment_author + "</a><span>" + b.postdate + '</span></div><div class="fr reply_this">[\u56de\u590d]</div><div class="clear"></div></h5><div class="comment_p">' + b.content + c + '</div></div><div class="clear"></div><div class="comment_reply"></div></div></li>'), document.getElementById("container").scrollTop = o, g = !1
                }, "json")
            }
        else
            a(this).hasClass("atc") ? (a(".post_comment_content").addClass("show"), a("#post_comment_content").val("").attr("placeholder", "\u53d1\u8868\u8bc4\u8bba"), document.getElementById("post_comment_content").focus(), a("#us_panel").css({position: "absolute",bottom: "0px"})) : a("#login_index").addClass("show")
    }), a(".menu_share").click(function() {
        a("#share").addClass("show"), a(window).bind("touchmove", function(a) {
            a.preventDefault(), a.stopImmediatePropagation()
        })
    }), a(".cancel_share,.share_msk").click(function() {
        a("#share").removeClass("show"), a(window).unbind("touchmove")
    });
    var p, q, r = !0;
    a(".remove_msg").click(function() {
        p = a(this).parent().parent(), q = p.attr("data-messages"), a("#delete_check").addClass("show"), a(".delete_check_cancel,.delete_check").click(function() {
            a("#delete_check").removeClass("show")
        }), a(".delete_check_sure").click(function() {
            r && (r = !1, a.post("http://www.uehtml.com/service/delMessage", {timestamp: YYToken.timestamp,token: YYToken.token,id: q}, function() {
                a("#delete_check").removeClass("show"), p.animate({opacity: 0,translateX: "100%"}, 300, "ease-in-out", function() {
                    p.remove()
                }), r = !0
            }))
        })
    }), a("#reply_msg_area").bind("input", function() {
        "" != a("#reply_msg_area").val() ? a(".reply_msg_post").addClass("checked") : a(".reply_msg_post").removeClass("checked")
    }), document.getElementById("reply_msg") && a("#content").css("paddingBottom", 120), a(".reply_msg_post").click(function() {
        return a(this).hasClass("checked") ? (a.post("http://www.uehtml.com/service/sendSMS", {timestamp: YYToken.timestamp,token: YYToken.token,content: a("#reply_msg_area").val(),nickname: reply_nickname}, function() {
            a.get("http://www.uehtml.com/sms", {id: reply_post_id}, function(b) {
                var c = a(b).find(".message_private_reply ul").html();
                a(".message_private_reply ul").html(c), a("#reply_msg_area").val("")
            })
        }), void 0) : !1
    }), document.getElementById("reply_msg") && a(".menu_refresh").click(function() {
        a.get("http://www.uehtml.com/sms", {id: reply_post_id}, function(b) {
            var c = a(b).find(".message_private_reply ul").html();
            a(".message_private_reply ul").html(c)
        })
    });
    var s = ["cate_all", "cate_creat", "cate_site", "cate_inspire", "cate_article", "cate_app"], t = ["sort_re", "sort_recom", "sort_fa", "sort_vi", "sort_com"];
    a(".choose_cate li").each(function(b) {
        a(this).find(".s").addClass(s[b])
    }), a(".choose_sort li").each(function(b) {
        a(this).find(".s").addClass(t[b])
    }), document.getElementById("list") && a(window).bind("load", function() {
        m = !0, a(".alist").openNewFrame(), a("#container").bind("scroll", function() {
            var b = a("#container").scrollTop();
            b >= a("#list").height() - a(window).height() && 1 == m && (now_page++, m = !1, a.get("http://www.uehtml.com/list/", {page: now_page,cat: l[0],soindustrys: [l[1]],sort: l[2],search: search_value}, function(b) {
                var c = a(b).find("#list ul").html();
                a("#list ul").append(c);
                var d = new RegExp("alist");
                d.test(c) ? m = !0 : a(".list_loading").html("<span>\u6ca1\u6709\u4e86!</span>"), f(), a(".alist").openNewFrame()
            }))
        })
    }), a(".more_comment").click(function() {
        a.post("http://www.uehtml.com/service/getcomment", {timestamp: YYToken.timestamp,token: YYToken.token,lastid: a("#comment li").eq(a("#comment li").length - 1).attr("postdata"),postid: commentId2}, function(b) {
            for (i = 0; i < b.length; i++) {
                var c = "";
                b[i].comment && (c = '<div class="quote"><div class="pd10">' + b[i].comment.content + "</div></div>");
                var d = '<li postdata="' + b[i].id + '"><div class="pd5"><a class="avt fl" target="_blank" href="' + b[i].userurl + '"><img src="' + b[i].userimage + '"></a><div class="comment_content"><h5><div class="fl"><a class="comment_name" href="' + b[i].userurl + '">' + b[i].nickname + "</a><span>" + b[i].postdate + '</span></div><div class="fr reply_this">[\u56de\u590d]</div><div class="clear"></div></h5><div class="comment_p"><div class="comment_pct">' + b[i].content + "</div>" + c + '</div></div><div class="clear"></div><div class="comment_reply"></div></div></li>';
                a("#comment ul").append(d)
            }
            C()
        }, "json")
    }), a(".works").each(function() {
        var b = a(this).find("a img").attr("vsrc");
        a(this).find("a img").attr("vsrc", b.replace(/1140x0.jpg/, "800x0.jpg"))
    }), document.getElementById("designer_list") && a(window).bind("load", function() {
        m = !0, a("#container").bind("scroll", function() {
            var b = a("#container").scrollTop();
            b >= a("#designer_list").height() - a(window).height() && 1 == m && (designers_page++, m = !1, a.get("http://www.uehtml.com/designers/", {page: designers_page,sort: designers_sort}, function(b) {
                var c = a(b).find("#designer_list ul").html();
                a("#designer_list ul").append(c), k();
                var d = new RegExp("designer_more");
                d.test(c) ? m = !0 : a(".list_loading").html("<span>\u6ca1\u6709\u4e86!</span>")
            }))
        })
    }), a(".add_fans").click(function() {
        var b = a(this);
        a.post("http://www.uehtml.com/service/addFollow", {timestamp: YYToken.timestamp,token: YYToken.token,uid: b.attr("data-uid")}, function() {
            b.removeClass("add_fans").addClass("remove_fans"), a(".remove_fans").html("\u53d6\u6d88\u5173\u6ce8")
        })
    }), a(".remove_fans").click(function() {
        var b = a(this);
        a.post("http://www.uehtml.com/service/removeFollow", {timestamp: YYToken.timestamp,token: YYToken.token,uid: b.attr("data-uid")}, function() {
            b.removeClass("remove_fans").addClass("add_fans"), a(".add_fans").html("\u52a0\u5173\u6ce8")
        })
    }), a(".home_remove_f").click(function() {
        if (a(this).hasClass("need_login"))
            a("#reg_index").addClass("show");
        else {
            var b = a(this);
            a.post("http://www.uehtml.com/service/removeFollow", {timestamp: YYToken.timestamp,token: YYToken.token,uid: b.attr("data-uid")}, function() {
                b.removeClass("home_remove_f").addClass("home_add_f"), a(".home_add_f").find("span").html("\u52a0\u5173\u6ce8")
            })
        }
    }), a(".home_rela_f").click(function() {
        if (a(this).hasClass("need_login"))
            a("#reg_index").addClass("show");
        else {
            var b = a(this);
            a.post("http://www.uehtml.com/service/removeFollow", {timestamp: YYToken.timestamp,token: YYToken.token,uid: b.attr("data-uid")}, function() {
                b.removeClass("home_rela_f").addClass("home_add_f"), a(".home_add_f").find("span").html("\u52a0\u5173\u6ce8")
            })
        }
    }), a(".home_add_f").click(function() {
        if (a(this).hasClass("need_login"))
            a("#reg_index").addClass("show");
        else {
            var b = a(this);
            a.post("http://www.uehtml.com/service/addFollow", {timestamp: YYToken.timestamp,token: YYToken.token,uid: b.attr("data-uid")}, function() {
                b.removeClass("home_add_f").addClass("home_remove_f"), a(".home_remove_f").find("span").html("\u53d6\u6d88\u5173\u6ce8")
            })
        }
    });
    var u;
    a(".home_send").click(function() {
        a(this).hasClass("need_login") ? a("#reg_index").addClass("show") : (a("#send_msg").addClass("show"), u = a(this).attr("data-name"))
    }), a("#send_msg_content").bind("input", function() {
        "" != a("#send_msg_content").val() ? a(".send_msg_to").addClass("checked") : a(".send_msg_to").removeClass("checked")
    }), a(".send_msg_to").click(function() {
        return a(this).hasClass("checked") ? (a.post("http://www.uehtml.com/service/sendSMS", {timestamp: YYToken.timestamp,token: YYToken.token,content: a("#send_msg_content").val(),nickname: u}, function() {
            a("#send_msg_content").val(""), document.getElementById("send_msg_content").blur(), a("#send_msg").removeClass("show")
        }), void 0) : !1
    }), document.getElementById("myworks") && (a("#myworks").hasClass("my_favorites") ? a(window).bind("load", function() {
        var b = !0;
        a("#container").bind("scroll", function() {
            var c = a("#container").scrollTop();
            c >= a("#myworks").height() - a(window).height() && 1 == b && (now_page++, b = !1, a.get(now_page_url + "/list/" + now_page_cur + "/" + albumId + "/", {page: now_page}, function(c) {
                var d = a(c).find("#myworks ul").html();
                a("#myworks ul").append(d);
                var e = new RegExp("alist");
                e.test(d) ? b = !0 : a(".list_loading").html("<span>\u6ca1\u6709\u4e86!</span>"), a(".alist").openNewFrame()
            }))
        })
    }) : a(window).bind("load", function() {
        var b = !0;
        a("#container").bind("scroll", function() {
            var c = a("#container").scrollTop();
            c >= a("#myworks").height() - a(window).height() && 1 == b && (now_page++, b = !1, a.get(now_page_url + "/list/" + now_page_cur + "/", {page: now_page}, function(c) {
                var d = a(c).find("#myworks ul").html();
                a("#myworks ul").append(d);
                var e = new RegExp("alist");
                e.test(d) ? b = !0 : a(".list_loading").html("<span>\u6ca1\u6709\u4e86!</span>"), a(".alist").openNewFrame()
            }))
        })
    })), a(window).bind("load", function() {
        setTimeout(function() {
            document.getElementById("newwrap") || v(), a("html").removeClass("loading")
        }, 400)
    }), a("a").click(function() {
        var b = a(this);
        if (b.parent().hasClass("menu_back")) {
            if (window.parent.document.getElementById("newwrap")) {
                var c = a(window.parent.document).find("#newwrap").attr("dataurl"), d = a(window.parent.document).find("#newwrap").attr("datatitle");
                a(window.parent.document).find("#newwrap_t").removeClass("show"), a(window.parent.document).find("#header,#container").removeClass("newframe"), setTimeout(function() {
                    a(window.parent.document).find("#newwrap").attr("src", "")
                }, 400), window.parent.history.replaceState(null, d, c), window.parent.document.title = d, b.attr("href", ""), a(".alist").openNewFrame()
            } else
                a("html").addClass("loading2"), a("html").addClass("loading"), setTimeout(function() {
                    window.location.href = b.attr("href")
                }, 200);
            return !1
        }
        if (b.parent().hasClass("menu_back2"))
            a("html").addClass("loading2"), a("html").addClass("loading"), setTimeout(function() {
                window.location.href = b.attr("href")
            }, 200);
        else if (!(b.parent().hasClass("sort_b") || b.parent().hasClass("home_profile_c") || b.parent().hasClass("cancel_share") || b.parent().hasClass("relationship") || "reg_now" == b.attr("id") || "login_submit" == b.attr("class") || "more_comment" == b.attr("class") || "delete_check_sure" == b.attr("class") || "delete_check_cancel" == b.attr("class") || "" == b.attr("href") || "#" == b.attr("href") || "javascript:void(0);" == b.attr("href") || "_blank" == a(this).attr("target")))
            return a("html").addClass("loading"), setTimeout(function() {
                window.location.href = b.attr("href")
            }, 400), !1
    }), a(".login_submit").click(function() {
        a.post("http://www.uehtml.com/service/loginUser", {timestamp: YYToken.timestamp,token: YYToken.token,email: a(".login_user input").val(),password: a(".login_password input").val()}, function() {
            window.location.href = "/"
        })
    });
    var v = function() {
        var b = function() {
            var a = [], b = null, c = function() {
                for (var b = 0; b < a.length; b++)
                    a[b].end ? a.splice(b--, 1) : a[b]();
                !a.length && d()
            }, d = function() {
                clearInterval(b), b = null
            };
            return function(d, e, f, g) {
                var h, i, j, k, l, m = new Image;
                return m.src = d, m.complete ? (e.call(m), f && f.call(m), void 0) : (i = m.width, j = m.height, m.onerror = function() {
                    g && g.call(m), h.end = !0, m = m.onload = m.onerror = null
                }, h = function() {
                    k = m.width, l = m.height, (k !== i || l !== j || k * l > 1024) && (e.call(m), h.end = !0)
                }, h(), m.onload = function() {
                    !h.end && h(), f && f.call(m), m = m.onload = m.onerror = null
                }, h.end || (a.push(h), null === b && (b = setInterval(c, 40))), void 0)
            }
        }();
        a(".works").each(function() {
            var c = a(this).find("img"), d = c.attr("vsrc");
            b(d, function() {
                c.attr("width", this.width), c.attr("height", (a(window).width() - 10) / this.width * this.height), c.attr("src", d)
            })
        })
    };
    a(".article_ct img").css("height", "auto").attr("height", "").attr("width", "");
    var w = document.title, x = window.location.href;
    a.fn.openNewFrame = function() {
        a(this).click(function() {
            var b = a(this).attr("vhref"), c = a(this).find(".list_info h4").html();
            document.getElementById("newwrap") && (a("#newwrap").attr("src", b).attr("dataurl", x).attr("datatitle", w), a("#newwrap_t").addClass("show"), history.replaceState(null, c, b), document.title = c, a("#header,#container").addClass("newframe"))
        })
    }, a(".works_info iframe").css({margin: "0 auto",display: "inlineBlock",maxWidth: "100%",height: "auto",position: "relative"}), a(".works_info iframe").each(function() {
        a(this).parent().parent().hasClass("pd10") && a(this).parent().parent().css({position: "relative",paddingLeft: "0",paddingRight: "0"})
    }), a(".alist").openNewFrame(), a(".a_selected").trigger("click"), a(".us_panel_menu").click(function() {
        a("#us_panel_menu").hasClass("show") ? (a("#us_panel_menu").removeClass("show"), a(".arrow_top").removeClass("open"), a(window).unbind("touchmove")) : (a("#us_panel_menu").addClass("show"), a(".arrow_top").addClass("open"), a(window).bind("touchmove", function(a) {
            a.preventDefault(), a.stopImmediatePropagation()
        }))
    }), a(".us_panel_msk").click(function() {
        a(".us_panel_menu").trigger("click")
    }), a(".add_newpost_cancel").click(function() {
        a("#add_newpost").removeClass("show"), a(".newpost_w_t textarea").blur()
    }), a(".us_panel_menu_t td a").click(function() {
        var b = a(this).attr("href");
        return window.parent.location.href = b, !1
    });
    var y, z, A, B;
    C(), a(".t_slide").click(function() {
        a("#choose_album").hasClass("show") ? a("#choose_album,.menu_slide").removeClass("show") : a("#choose_album,.menu_slide").addClass("show")
    }), a(".menu_slide").click(function() {
        a(".t_slide").trigger("click")
    }), a(".edit_this").click(function() {
    }), a(".edit_album_msk").click(function() {
        a("#edit_album").removeClass("show")
    }), function() {
        var b;
        a(".edit_this").click(function() {
            b = a(this), pid = b.parent().parent().parent().attr("data-id"), title = b.parent().parent().parent().find("dt .pd5").html(), a("#edit_album").addClass("show"), a(".edit_album_input").val(title), a(".edit_album_sure").click(function() {
                a.post("http://www.uehtml.com/service/editUserCat", {timestamp: YYToken.timestamp,token: YYToken.token,id: pid,title: a(".edit_album_input").val()}, function() {
                    b.parent().parent().parent().find("dt .pd5").html(a(".edit_album_input").val()), a("#edit_album").removeClass("show")
                }, "json")
            }), a(".edit_album_delete").click(function() {
                a.post("http://www.uehtml.com/service/removeUserCat", {timestamp: YYToken.timestamp,token: YYToken.token,id: pid}, function() {
                    b.parent().parent().parent().remove(), a("#edit_album").removeClass("show")
                }, "json")
            })
        })
    }(), a(".us_panel_like").click(function() {
        if (1 == logined) {
            var b = a(this);
            a(this).hasClass("liked") ? a.post("http://www.uehtml.com/service/removeLike", {timestamp: YYToken.timestamp,token: YYToken.token,postid: commentId2}, function() {
                b.removeClass("liked"), b.find("span em").html(parseInt(b.find("span em").html()) - 1)
            }) : a("#add_favorite").addClass("show")
        } else
            a("#reg_index").addClass("show")
    }), a("#add_favorite .hd .fr").click(function() {
        a("#add_favorite").removeClass("show")
    }), a(".created_cate_add").click(function() {
        if ("" != a(".created_cate_ipt input").val()) {
            var b = a(".created_cate_ipt input").val();
            a.post("http://www.uehtml.com/service/addUserCat", {timestamp: YYToken.timestamp,token: YYToken.token,cat: a(".created_cate_ipt input").val()}, function(c) {
                "object" != typeof c && (a("#add_favorites_choose").append('<li data-id="' + c + '"><i></i><span>' + b + '</span><i class="e"></i></li>'), a(".ct li").click(function() {
                    var b = a(this), c = a(this).attr("data-id");
                    0 == a(this).hasClass("a_selected") && a.post("http://www.uehtml.com/service/addLike", {timestamp: YYToken.timestamp,token: YYToken.token,postid: commentId2,cid: c}, function() {
                        b.siblings().removeClass("a_selected"), b.addClass("a_selected"), a("#add_favorite .hd .fr").trigger("click"), a(".us_panel_like").addClass("liked"), a(".us_panel_like span em").html(parseInt(a(".us_panel_like span em").html()) + 1)
                    })
                }))
            }, "json")
        }
    })
}(Zepto);
