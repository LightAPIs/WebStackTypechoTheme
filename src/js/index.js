(function () {
  /*! layer-v3.0.3 Web弹层组件 MIT License  http://layer.layui.com/  By 贤心 */
  !(function (e, t) {
    var i,
      n,
      a = e.layui && layui.define,
      o = {
        getPath: (function () {
          var e = document.scripts,
            t = e[e.length - 1],
            i = t.src;
          if (!t.getAttribute('merge')) {
            return i.substring(0, i.lastIndexOf('/') + 1);
          }
        })(),
        config: {},
        end: {},
        minIndex: 0,
        minLeft: [],
        btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],
        type: ['dialog', 'page', 'iframe', 'loading', 'tips'],
      },
      r = {
        v: '3.0.3',
        ie: (function () {
          var t = navigator.userAgent.toLowerCase();
          return !!(e.ActiveXObject || 'ActiveXObject' in e) && ((t.match(/msie\s(\d+)/) || [])[1] || '11');
        })(),
        index: e.layer && e.layer.v ? 100000 : 0,
        path: o.getPath,
        config: function (e, t) {
          return (
            (e = e || {}),
            (r.cache = o.config = i.extend({}, o.config, e)),
            (r.path = o.config.path || r.path),
            'string' == typeof e.extend && (e.extend = [e.extend]),
            o.config.path && r.ready(),
            e.extend ? (a ? layui.addcss('modules/layer/' + e.extend) : r.link('skin/' + e.extend), this) : this
          );
        },
        link: function (t, n, a) {
          if (r.path) {
            var o = i('head')[0],
              s = document.createElement('link');
            'string' == typeof n && (a = n);
            var l = (a || t).replace(/\.|\//g, ''),
              f = 'layuicss-' + l,
              c = 0;
            (s.rel = 'stylesheet'),
              (s.href = r.path + t),
              (s.id = f),
              i('#' + f)[0] || o.appendChild(s),
              'function' == typeof n &&
                !(function u() {
                  return ++c > 80
                    ? e.console && console.error('layer.css: Invalid')
                    : void (1989 === parseInt(i('#' + f).css('width')) ? n() : setTimeout(u, 100));
                })();
          }
        },
        ready: function (e) {
          var t = 'skinlayercss',
            i = '303';
          return (
            a ? layui.addcss('modules/layer/default/layer.css?v=' + r.v + i, e, t) : r.link('skin/default/layer.css?v=' + r.v + i, e, t),
            this
          );
        },
        alert: function (e, t, n) {
          var a = 'function' == typeof t;
          return a && (n = t), r.open(i.extend({ content: e, yes: n }, a ? {} : t));
        },
        confirm: function (e, t, n, a) {
          var s = 'function' == typeof t;
          return s && ((a = n), (n = t)), r.open(i.extend({ content: e, btn: o.btn, yes: n, btn2: a }, s ? {} : t));
        },
        msg: function (e, n, a) {
          var s = 'function' == typeof n,
            f = o.config.skin,
            c = (f ? f + ' ' + f + '-msg' : '') || 'layui-layer-msg',
            u = l.anim.length - 1;
          return (
            s && (a = n),
            r.open(
              i.extend(
                { content: e, time: 3000, shade: !1, skin: c, title: !1, closeBtn: !1, btn: !1, resize: !1, end: a },
                s && !o.config.skin
                  ? { skin: c + ' layui-layer-hui', anim: u }
                  : (function () {
                      return (
                        (n = n || {}),
                        (n.icon === -1 || (n.icon === t && !o.config.skin)) && (n.skin = c + ' ' + (n.skin || 'layui-layer-hui')),
                        n
                      );
                    })()
              )
            )
          );
        },
        load: function (e, t) {
          return r.open(i.extend({ type: 3, icon: e || 0, resize: !1, shade: 0.01 }, t));
        },
        tips: function (e, t, n) {
          return r.open(
            i.extend({ type: 4, content: [e, t], closeBtn: !1, time: 3000, shade: !1, resize: !1, fixed: !1, maxWidth: 210 }, n)
          );
        },
      },
      s = function (e) {
        var t = this;
        (t.index = ++r.index),
          (t.config = i.extend({}, t.config, o.config, e)),
          document.body
            ? t.creat()
            : setTimeout(function () {
                t.creat();
              }, 30);
      };
    s.pt = s.prototype;
    var l = [
      'layui-layer',
      '.layui-layer-title',
      '.layui-layer-main',
      '.layui-layer-dialog',
      'layui-layer-iframe',
      'layui-layer-content',
      'layui-layer-btn',
      'layui-layer-close',
    ];
    (l.anim = ['layer-anim', 'layer-anim-01', 'layer-anim-02', 'layer-anim-03', 'layer-anim-04', 'layer-anim-05', 'layer-anim-06']),
      (s.pt.config = {
        type: 0,
        shade: 0.3,
        fixed: !0,
        move: l[1],
        title: '&#x4FE1;&#x606F;',
        offset: 'auto',
        area: 'auto',
        closeBtn: 1,
        time: 0,
        zIndex: 19891014,
        maxWidth: 360,
        anim: 0,
        isOutAnim: !0,
        icon: -1,
        moveType: 1,
        resize: !0,
        scrollbar: !0,
        tips: 2,
      }),
      (s.pt.vessel = function (e, t) {
        var n = this,
          a = n.index,
          r = n.config,
          s = r.zIndex + a,
          f = 'object' == typeof r.title,
          c = r.maxmin && (1 === r.type || 2 === r.type),
          u = r.title
            ? '<div class="layui-layer-title" style="' + (f ? r.title[1] : '') + '">' + (f ? r.title[0] : r.title) + '</div>'
            : '';
        return (
          (r.zIndex = s),
          t(
            [
              r.shade
                ? '<div class="layui-layer-shade" id="layui-layer-shade' +
                  a +
                  '" times="' +
                  a +
                  '" style="' +
                  ('z-index:' +
                    (s - 1) +
                    '; background-color:' +
                    (r.shade[1] || '#000') +
                    '; opacity:' +
                    (r.shade[0] || r.shade) +
                    '; filter:alpha(opacity=' +
                    (100 * r.shade[0] || 100 * r.shade) +
                    ');') +
                  '"></div>'
                : '',
              '<div class="' +
                l[0] +
                (' layui-layer-' + o.type[r.type]) +
                ((0 != r.type && 2 != r.type) || r.shade ? '' : ' layui-layer-border') +
                ' ' +
                (r.skin || '') +
                '" id="' +
                l[0] +
                a +
                '" type="' +
                o.type[r.type] +
                '" times="' +
                a +
                '" showtime="' +
                r.time +
                '" conType="' +
                (e ? 'object' : 'string') +
                '" style="z-index: ' +
                s +
                '; width:' +
                r.area[0] +
                ';height:' +
                r.area[1] +
                (r.fixed ? '' : ';position:absolute;') +
                '">' +
                (e && 2 != r.type ? '' : u) +
                '<div id="' +
                (r.id || '') +
                '" class="layui-layer-content' +
                (0 == r.type && r.icon !== -1 ? ' layui-layer-padding' : '') +
                (3 == r.type ? ' layui-layer-loading' + r.icon : '') +
                '">' +
                (0 == r.type && r.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + r.icon + '"></i>' : '') +
                (1 == r.type && e ? '' : r.content || '') +
                '</div><span class="layui-layer-setwin">' +
                (function () {
                  var e = c
                    ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>'
                    : '';
                  return (
                    r.closeBtn &&
                      (e +=
                        '<a class="layui-layer-ico ' +
                        l[7] +
                        ' ' +
                        l[7] +
                        (r.title ? r.closeBtn : 4 == r.type ? '1' : '2') +
                        '" href="javascript:;"></a>'),
                    e
                  );
                })() +
                '</span>' +
                (r.btn
                  ? (function () {
                      var e = '';
                      'string' == typeof r.btn && (r.btn = [r.btn]);
                      for (var t = 0, i = r.btn.length; t < i; t++) {
                        e += '<a class="' + l[6] + t + '">' + r.btn[t] + '</a>';
                      }
                      return '<div class="' + l[6] + ' layui-layer-btn-' + (r.btnAlign || '') + '">' + e + '</div>';
                    })()
                  : '') +
                (r.resize ? '<span class="layui-layer-resize"></span>' : '') +
                '</div>',
            ],
            u,
            i('<div class="layui-layer-move"></div>')
          ),
          n
        );
      }),
      (s.pt.creat = function () {
        var e = this,
          t = e.config,
          a = e.index,
          s = t.content,
          f = 'object' == typeof s,
          c = i('body');
        if (!t.id || !i('#' + t.id)[0]) {
          switch (
            ('string' == typeof t.area && (t.area = 'auto' === t.area ? ['', ''] : [t.area, '']),
            t.shift && (t.anim = t.shift),
            6 == r.ie && (t.fixed = !1),
            t.type)
          ) {
            case 0:
              (t.btn = 'btn' in t ? t.btn : o.btn[0]), r.closeAll('dialog');
              break;
            case 2:
              var s = (t.content = f ? t.content : [t.content, 'auto']);
              t.content =
                '<iframe scrolling="' +
                (t.content[1] || 'auto') +
                '" allowtransparency="true" id="' +
                l[4] +
                a +
                '" name="' +
                l[4] +
                a +
                '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' +
                t.content[0] +
                '"></iframe>';
              break;
            case 3:
              delete t.title, delete t.closeBtn, t.icon === -1 && 0 === t.icon, r.closeAll('loading');
              break;
            case 4:
              f || (t.content = [t.content, 'body']),
                (t.follow = t.content[1]),
                (t.content = t.content[0] + '<i class="layui-layer-TipsG"></i>'),
                delete t.title,
                (t.tips = 'object' == typeof t.tips ? t.tips : [t.tips, !0]),
                t.tipsMore || r.closeAll('tips');
          }
          e
            .vessel(f, function (n, r, u) {
              c.append(n[0]),
                f
                  ? (function () {
                      2 == t.type || 4 == t.type
                        ? (function () {
                            i('body').append(n[1]);
                          })()
                        : (function () {
                            s.parents('.' + l[0])[0] ||
                              (s.data('display', s.css('display')).show().addClass('layui-layer-wrap').wrap(n[1]),
                              i('#' + l[0] + a)
                                .find('.' + l[5])
                                .before(r));
                          })();
                    })()
                  : c.append(n[1]),
                i('.layui-layer-move')[0] || c.append((o.moveElem = u)),
                (e.layero = i('#' + l[0] + a)),
                t.scrollbar || l.html.css('overflow', 'hidden').attr('layer-full', a);
            })
            .auto(a),
            2 == t.type && 6 == r.ie && e.layero.find('iframe').attr('src', s[0]),
            4 == t.type ? e.tips() : e.offset(),
            t.fixed &&
              n.on('resize', function () {
                e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(a), 4 == t.type && e.tips();
              }),
            t.time <= 0 ||
              setTimeout(function () {
                r.close(e.index);
              }, t.time),
            e.move().callback(),
            l.anim[t.anim] && e.layero.addClass(l.anim[t.anim]),
            t.isOutAnim && e.layero.data('isOutAnim', !0);
        }
      }),
      (s.pt.auto = function (e) {
        function t(e) {
          (e = s.find(e)), e.height(f[1] - c - u - 2 * (0 | parseFloat(e.css('padding-top'))));
        }
        var a = this,
          o = a.config,
          s = i('#' + l[0] + e);
        '' === o.area[0] &&
          o.maxWidth > 0 &&
          (r.ie && r.ie < 8 && o.btn && s.width(s.innerWidth()), s.outerWidth() > o.maxWidth && s.width(o.maxWidth));
        var f = [s.innerWidth(), s.innerHeight()],
          c = s.find(l[1]).outerHeight() || 0,
          u = s.find('.' + l[6]).outerHeight() || 0;
        switch (o.type) {
          case 2:
            t('iframe');
            break;
          default:
            '' === o.area[1] ? o.fixed && f[1] >= n.height() && ((f[1] = n.height()), t('.' + l[5])) : t('.' + l[5]);
        }
        return a;
      }),
      (s.pt.offset = function () {
        var e = this,
          t = e.config,
          i = e.layero,
          a = [i.outerWidth(), i.outerHeight()],
          o = 'object' == typeof t.offset;
        (e.offsetTop = (n.height() - a[1]) / 2),
          (e.offsetLeft = (n.width() - a[0]) / 2),
          o
            ? ((e.offsetTop = t.offset[0]), (e.offsetLeft = t.offset[1] || e.offsetLeft))
            : 'auto' !== t.offset &&
              ('t' === t.offset
                ? (e.offsetTop = 0)
                : 'r' === t.offset
                ? (e.offsetLeft = n.width() - a[0])
                : 'b' === t.offset
                ? (e.offsetTop = n.height() - a[1])
                : 'l' === t.offset
                ? (e.offsetLeft = 0)
                : 'lt' === t.offset
                ? ((e.offsetTop = 0), (e.offsetLeft = 0))
                : 'lb' === t.offset
                ? ((e.offsetTop = n.height() - a[1]), (e.offsetLeft = 0))
                : 'rt' === t.offset
                ? ((e.offsetTop = 0), (e.offsetLeft = n.width() - a[0]))
                : 'rb' === t.offset
                ? ((e.offsetTop = n.height() - a[1]), (e.offsetLeft = n.width() - a[0]))
                : (e.offsetTop = t.offset)),
          t.fixed ||
            ((e.offsetTop = /%$/.test(e.offsetTop) ? (n.height() * parseFloat(e.offsetTop)) / 100 : parseFloat(e.offsetTop)),
            (e.offsetLeft = /%$/.test(e.offsetLeft) ? (n.width() * parseFloat(e.offsetLeft)) / 100 : parseFloat(e.offsetLeft)),
            (e.offsetTop += n.scrollTop()),
            (e.offsetLeft += n.scrollLeft())),
          i.attr('minLeft') && ((e.offsetTop = n.height() - (i.find(l[1]).outerHeight() || 0)), (e.offsetLeft = i.css('left'))),
          i.css({ top: e.offsetTop, left: e.offsetLeft });
      }),
      (s.pt.tips = function () {
        var e = this,
          t = e.config,
          a = e.layero,
          o = [a.outerWidth(), a.outerHeight()],
          r = i(t.follow);
        r[0] || (r = i('body'));
        var s = { width: r.outerWidth(), height: r.outerHeight(), top: r.offset().top, left: r.offset().left },
          f = a.find('.layui-layer-TipsG'),
          c = t.tips[0];
        t.tips[1] || f.remove(),
          (s.autoLeft = function () {
            s.left + o[0] - n.width() > 0
              ? ((s.tipLeft = s.left + s.width - o[0]), f.css({ right: 12, left: 'auto' }))
              : (s.tipLeft = s.left);
          }),
          (s.where = [
            function () {
              s.autoLeft(),
                (s.tipTop = s.top - o[1] - 10),
                f.removeClass('layui-layer-TipsB').addClass('layui-layer-TipsT').css('border-right-color', t.tips[1]);
            },
            function () {
              (s.tipLeft = s.left + s.width + 10),
                (s.tipTop = s.top),
                f.removeClass('layui-layer-TipsL').addClass('layui-layer-TipsR').css('border-bottom-color', t.tips[1]);
            },
            function () {
              s.autoLeft(),
                (s.tipTop = s.top + s.height + 10),
                f.removeClass('layui-layer-TipsT').addClass('layui-layer-TipsB').css('border-right-color', t.tips[1]);
            },
            function () {
              (s.tipLeft = s.left - o[0] - 10),
                (s.tipTop = s.top),
                f.removeClass('layui-layer-TipsR').addClass('layui-layer-TipsL').css('border-bottom-color', t.tips[1]);
            },
          ]),
          s.where[c - 1](),
          1 === c
            ? s.top - (n.scrollTop() + o[1] + 16) < 0 && s.where[2]()
            : 2 === c
            ? n.width() - (s.left + s.width + o[0] + 16) > 0 || s.where[3]()
            : 3 === c
            ? s.top - n.scrollTop() + s.height + o[1] + 16 - n.height() > 0 && s.where[0]()
            : 4 === c && o[0] + 16 - s.left > 0 && s.where[1](),
          a.find('.' + l[5]).css({ 'background-color': t.tips[1], 'padding-right': t.closeBtn ? '30px' : '' }),
          a.css({ left: s.tipLeft - (t.fixed ? n.scrollLeft() : 0), top: s.tipTop - (t.fixed ? n.scrollTop() : 0) });
      }),
      (s.pt.move = function () {
        var e = this,
          t = e.config,
          a = i(document),
          s = e.layero,
          l = s.find(t.move),
          f = s.find('.layui-layer-resize'),
          c = {};
        return (
          t.move && l.css('cursor', 'move'),
          l.on('mousedown', function (e) {
            e.preventDefault(),
              t.move &&
                ((c.moveStart = !0),
                (c.offset = [e.clientX - parseFloat(s.css('left')), e.clientY - parseFloat(s.css('top'))]),
                o.moveElem.css('cursor', 'move').show());
          }),
          f.on('mousedown', function (e) {
            e.preventDefault(),
              (c.resizeStart = !0),
              (c.offset = [e.clientX, e.clientY]),
              (c.area = [s.outerWidth(), s.outerHeight()]),
              o.moveElem.css('cursor', 'se-resize').show();
          }),
          a
            .on('mousemove', function (i) {
              if (c.moveStart) {
                var a = i.clientX - c.offset[0],
                  o = i.clientY - c.offset[1],
                  l = 'fixed' === s.css('position');
                if ((i.preventDefault(), (c.stX = l ? 0 : n.scrollLeft()), (c.stY = l ? 0 : n.scrollTop()), !t.moveOut)) {
                  var f = n.width() - s.outerWidth() + c.stX,
                    u = n.height() - s.outerHeight() + c.stY;
                  a < c.stX && (a = c.stX), a > f && (a = f), o < c.stY && (o = c.stY), o > u && (o = u);
                }
                s.css({ left: a, top: o });
              }
              if (t.resize && c.resizeStart) {
                var a = i.clientX - c.offset[0],
                  o = i.clientY - c.offset[1];
                i.preventDefault(),
                  r.style(e.index, { width: c.area[0] + a, height: c.area[1] + o }),
                  (c.isResize = !0),
                  t.resizing && t.resizing(s);
              }
            })
            .on('mouseup', function (e) {
              c.moveStart && (delete c.moveStart, o.moveElem.hide(), t.moveEnd && t.moveEnd(s)),
                c.resizeStart && (delete c.resizeStart, o.moveElem.hide());
            }),
          e
        );
      }),
      (s.pt.callback = function () {
        function e() {
          var e = a.cancel && a.cancel(t.index, n);
          e === !1 || r.close(t.index);
        }
        var t = this,
          n = t.layero,
          a = t.config;
        t.openLayer(),
          a.success &&
            (2 == a.type
              ? n.find('iframe').on('load', function () {
                  a.success(n, t.index);
                })
              : a.success(n, t.index)),
          6 == r.ie && t.IE6(n),
          n
            .find('.' + l[6])
            .children('a')
            .on('click', function () {
              var e = i(this).index();
              if (0 === e) {
                a.yes ? a.yes(t.index, n) : a.btn1 ? a.btn1(t.index, n) : r.close(t.index);
              } else {
                var o = a['btn' + (e + 1)] && a['btn' + (e + 1)](t.index, n);
                o === !1 || r.close(t.index);
              }
            }),
          n.find('.' + l[7]).on('click', e),
          a.shadeClose &&
            i('#layui-layer-shade' + t.index).on('click', function () {
              r.close(t.index);
            }),
          n.find('.layui-layer-min').on('click', function () {
            var e = a.min && a.min(n);
            e === !1 || r.min(t.index, a);
          }),
          n.find('.layui-layer-max').on('click', function () {
            i(this).hasClass('layui-layer-maxmin')
              ? (r.restore(t.index), a.restore && a.restore(n))
              : (r.full(t.index, a),
                setTimeout(function () {
                  a.full && a.full(n);
                }, 100));
          }),
          a.end && (o.end[t.index] = a.end);
      }),
      (o.reselect = function () {
        i.each(i('select'), function (e, t) {
          var n = i(this);
          n.parents('.' + l[0])[0] || (1 == n.attr('layer') && i('.' + l[0]).length < 1 && n.removeAttr('layer').show()), (n = null);
        });
      }),
      (s.pt.IE6 = function (e) {
        i('select').each(function (e, t) {
          var n = i(this);
          n.parents('.' + l[0])[0] || 'none' === n.css('display') || n.attr({ layer: '1' }).hide(), (n = null);
        });
      }),
      (s.pt.openLayer = function () {
        var e = this;
        (r.zIndex = e.config.zIndex),
          (r.setTop = function (e) {
            var t = function () {
              r.zIndex++, e.css('z-index', r.zIndex + 1);
            };
            return (r.zIndex = parseInt(e[0].style.zIndex)), e.on('mousedown', t), r.zIndex;
          });
      }),
      (o.record = function (e) {
        var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css('margin-left'))];
        e.find('.layui-layer-max').addClass('layui-layer-maxmin'), e.attr({ area: t });
      }),
      (o.rescollbar = function (e) {
        l.html.attr('layer-full') == e &&
          (l.html[0].style.removeProperty ? l.html[0].style.removeProperty('overflow') : l.html[0].style.removeAttribute('overflow'),
          l.html.removeAttr('layer-full'));
      }),
      (e.layer = r),
      (r.getChildFrame = function (e, t) {
        return (
          (t = t || i('.' + l[4]).attr('times')),
          i('#' + l[0] + t)
            .find('iframe')
            .contents()
            .find(e)
        );
      }),
      (r.getFrameIndex = function (e) {
        return i('#' + e)
          .parents('.' + l[4])
          .attr('times');
      }),
      (r.iframeAuto = function (e) {
        if (e) {
          var t = r.getChildFrame('html', e).outerHeight(),
            n = i('#' + l[0] + e),
            a = n.find(l[1]).outerHeight() || 0,
            o = n.find('.' + l[6]).outerHeight() || 0;
          n.css({ height: t + a + o }), n.find('iframe').css({ height: t });
        }
      }),
      (r.iframeSrc = function (e, t) {
        i('#' + l[0] + e)
          .find('iframe')
          .attr('src', t);
      }),
      (r.style = function (e, t, n) {
        var a = i('#' + l[0] + e),
          r = a.find('.layui-layer-content'),
          s = a.attr('type'),
          f = a.find(l[1]).outerHeight() || 0,
          c = a.find('.' + l[6]).outerHeight() || 0;
        a.attr('minLeft');
        s !== o.type[3] &&
          s !== o.type[4] &&
          (n || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) - f - c <= 64 && (t.height = 64 + f + c)),
          a.css(t),
          (c = a.find('.' + l[6]).outerHeight()),
          s === o.type[2]
            ? a.find('iframe').css({ height: parseFloat(t.height) - f - c })
            : r.css({ height: parseFloat(t.height) - f - c - parseFloat(r.css('padding-top')) - parseFloat(r.css('padding-bottom')) }));
      }),
      (r.min = function (e, t) {
        var a = i('#' + l[0] + e),
          s = a.find(l[1]).outerHeight() || 0,
          f = a.attr('minLeft') || 181 * o.minIndex + 'px',
          c = a.css('position');
        o.record(a),
          o.minLeft[0] && ((f = o.minLeft[0]), o.minLeft.shift()),
          a.attr('position', c),
          r.style(e, { width: 180, height: s, left: f, top: n.height() - s, position: 'fixed', overflow: 'hidden' }, !0),
          a.find('.layui-layer-min').hide(),
          'page' === a.attr('type') && a.find(l[4]).hide(),
          o.rescollbar(e),
          a.attr('minLeft') || o.minIndex++,
          a.attr('minLeft', f);
      }),
      (r.restore = function (e) {
        var t = i('#' + l[0] + e),
          n = t.attr('area').split(',');
        t.attr('type');
        r.style(
          e,
          {
            width: parseFloat(n[0]),
            height: parseFloat(n[1]),
            top: parseFloat(n[2]),
            left: parseFloat(n[3]),
            position: t.attr('position'),
            overflow: 'visible',
          },
          !0
        ),
          t.find('.layui-layer-max').removeClass('layui-layer-maxmin'),
          t.find('.layui-layer-min').show(),
          'page' === t.attr('type') && t.find(l[4]).show(),
          o.rescollbar(e);
      }),
      (r.full = function (e) {
        var t,
          a = i('#' + l[0] + e);
        o.record(a),
          l.html.attr('layer-full') || l.html.css('overflow', 'hidden').attr('layer-full', e),
          clearTimeout(t),
          (t = setTimeout(function () {
            var t = 'fixed' === a.css('position');
            r.style(e, { top: t ? 0 : n.scrollTop(), left: t ? 0 : n.scrollLeft(), width: n.width(), height: n.height() }, !0),
              a.find('.layui-layer-min').hide();
          }, 100));
      }),
      (r.title = function (e, t) {
        var n = i('#' + l[0] + (t || r.index)).find(l[1]);
        n.html(e);
      }),
      (r.close = function (e) {
        var t = i('#' + l[0] + e),
          n = t.attr('type'),
          a = 'layer-anim-close';
        if (t[0]) {
          var s = 'layui-layer-wrap',
            f = function () {
              if (n === o.type[1] && 'object' === t.attr('conType')) {
                t.children(':not(.' + l[5] + ')').remove();
                for (var a = t.find('.' + s), r = 0; r < 2; r++) {
                  a.unwrap();
                }
                a.css('display', a.data('display')).removeClass(s);
              } else {
                if (n === o.type[2]) {
                  try {
                    var f = i('#' + l[4] + e)[0];
                    f.contentWindow.document.write(''), f.contentWindow.close(), t.find('.' + l[5])[0].removeChild(f);
                  } catch (c) {}
                }
                (t[0].innerHTML = ''), t.remove();
              }
              'function' == typeof o.end[e] && o.end[e](), delete o.end[e];
            };
          t.data('isOutAnim') && t.addClass(a),
            i('#layui-layer-moves, #layui-layer-shade' + e).remove(),
            6 == r.ie && o.reselect(),
            o.rescollbar(e),
            t.attr('minLeft') && (o.minIndex--, o.minLeft.push(t.attr('minLeft'))),
            (r.ie && r.ie < 10) || !t.data('isOutAnim')
              ? f()
              : setTimeout(function () {
                  f();
                }, 200);
        }
      }),
      (r.closeAll = function (e) {
        i.each(i('.' + l[0]), function () {
          var t = i(this),
            n = e ? t.attr('type') === e : 1;
          n && r.close(t.attr('times')), (n = null);
        });
      });
    var f = r.cache || {},
      c = function (e) {
        return f.skin ? ' ' + f.skin + ' ' + f.skin + '-' + e : '';
      };
    (r.prompt = function (e, t) {
      var a = '';
      if (((e = e || {}), 'function' == typeof e && (t = e), e.area)) {
        var o = e.area;
        (a = 'style="width: ' + o[0] + '; height: ' + o[1] + ';"'), delete e.area;
      }
      var s,
        l =
          2 == e.formType
            ? '<textarea class="layui-layer-input"' + a + '>' + (e.value || '') + '</textarea>'
            : (function () {
                return (
                  '<input type="' + (1 == e.formType ? 'password' : 'text') + '" class="layui-layer-input" value="' + (e.value || '') + '">'
                );
              })(),
        f = e.success;
      return (
        delete e.success,
        r.open(
          i.extend(
            {
              type: 1,
              btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],
              content: l,
              skin: 'layui-layer-prompt' + c('prompt'),
              maxWidth: n.width(),
              success: function (e) {
                (s = e.find('.layui-layer-input')), s.focus(), 'function' == typeof f && f(e);
              },
              resize: !1,
              yes: function (i) {
                var n = s.val();
                '' === n
                  ? s.focus()
                  : n.length > (e.maxlength || 500)
                  ? r.tips('&#x6700;&#x591A;&#x8F93;&#x5165;' + (e.maxlength || 500) + '&#x4E2A;&#x5B57;&#x6570;', s, { tips: 1 })
                  : t && t(n, i, s);
              },
            },
            e
          )
        )
      );
    }),
      (r.tab = function (e) {
        e = e || {};
        var t = e.tab || {},
          n = e.success;
        return (
          delete e.success,
          r.open(
            i.extend(
              {
                type: 1,
                skin: 'layui-layer-tab' + c('tab'),
                resize: !1,
                title: (function () {
                  var e = t.length,
                    i = 1,
                    n = '';
                  if (e > 0) {
                    for (n = '<span class="layui-layer-tabnow">' + t[0].title + '</span>'; i < e; i++) {
                      n += '<span>' + t[i].title + '</span>';
                    }
                  }
                  return n;
                })(),
                content:
                  '<ul class="layui-layer-tabmain">' +
                  (function () {
                    var e = t.length,
                      i = 1,
                      n = '';
                    if (e > 0) {
                      for (n = '<li class="layui-layer-tabli xubox_tab_layer">' + (t[0].content || 'no content') + '</li>'; i < e; i++) {
                        n += '<li class="layui-layer-tabli">' + (t[i].content || 'no  content') + '</li>';
                      }
                    }
                    return n;
                  })() +
                  '</ul>',
                success: function (t) {
                  var a = t.find('.layui-layer-title').children(),
                    o = t.find('.layui-layer-tabmain').children();
                  a.on('mousedown', function (t) {
                    t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0);
                    var n = i(this),
                      a = n.index();
                    n.addClass('layui-layer-tabnow').siblings().removeClass('layui-layer-tabnow'),
                      o.eq(a).show().siblings().hide(),
                      'function' == typeof e.change && e.change(a);
                  }),
                    'function' == typeof n && n(t);
                },
              },
              e
            )
          )
        );
      }),
      (r.photos = function (t, n, a) {
        function o(e, t, i) {
          var n = new Image();
          return (
            (n.src = e),
            n.complete
              ? t(n)
              : ((n.onload = function () {
                  (n.onload = null), t(n);
                }),
                void (n.onerror = function (e) {
                  (n.onerror = null), i(e);
                }))
          );
        }
        var s = {};
        if (((t = t || {}), t.photos)) {
          var l = t.photos.constructor === Object,
            f = l ? t.photos : {},
            u = f.data || [],
            d = f.start || 0;
          (s.imgIndex = (0 | d) + 1), (t.img = t.img || 'img');
          var y = t.success;
          if ((delete t.success, l)) {
            if (0 === u.length) {
              return r.msg('&#x6CA1;&#x6709;&#x56FE;&#x7247;');
            }
          } else {
            var p = i(t.photos),
              h = function () {
                (u = []),
                  p.find(t.img).each(function (e) {
                    var t = i(this);
                    t.attr('layer-index', e),
                      u.push({
                        alt: t.attr('alt'),
                        pid: t.attr('layer-pid'),
                        src: t.attr('layer-src') || t.attr('src'),
                        thumb: t.attr('src'),
                      });
                  });
              };
            if ((h(), 0 === u.length)) {
              return;
            }
            if (
              (n ||
                p.on('click', t.img, function () {
                  var e = i(this),
                    n = e.attr('layer-index');
                  r.photos(i.extend(t, { photos: { start: n, data: u, tab: t.tab }, full: t.full }), !0), h();
                }),
              !n)
            ) {
              return;
            }
          }
          (s.imgprev = function (e) {
            s.imgIndex--, s.imgIndex < 1 && (s.imgIndex = u.length), s.tabimg(e);
          }),
            (s.imgnext = function (e, t) {
              s.imgIndex++, (s.imgIndex > u.length && ((s.imgIndex = 1), t)) || s.tabimg(e);
            }),
            (s.keyup = function (e) {
              if (!s.end) {
                var t = e.keyCode;
                e.preventDefault(), 37 === t ? s.imgprev(!0) : 39 === t ? s.imgnext(!0) : 27 === t && r.close(s.index);
              }
            }),
            (s.tabimg = function (e) {
              if (!(u.length <= 1)) {
                return (f.start = s.imgIndex - 1), r.close(s.index), r.photos(t, !0, e);
              }
            }),
            (s.event = function () {
              s.bigimg.hover(
                function () {
                  s.imgsee.show();
                },
                function () {
                  s.imgsee.hide();
                }
              ),
                s.bigimg.find('.layui-layer-imgprev').on('click', function (e) {
                  e.preventDefault(), s.imgprev();
                }),
                s.bigimg.find('.layui-layer-imgnext').on('click', function (e) {
                  e.preventDefault(), s.imgnext();
                }),
                i(document).on('keyup', s.keyup);
            }),
            (s.loadi = r.load(1, { shade: !('shade' in t) && 0.9, scrollbar: !1 })),
            o(
              u[d].src,
              function (n) {
                r.close(s.loadi),
                  (s.index = r.open(
                    i.extend(
                      {
                        type: 1,
                        id: 'layui-layer-photos',
                        area: (function () {
                          var a = [n.width, n.height],
                            o = [i(e).width() - 100, i(e).height() - 100];
                          if (!t.full && (a[0] > o[0] || a[1] > o[1])) {
                            var r = [a[0] / o[0], a[1] / o[1]];
                            r[0] > r[1]
                              ? ((a[0] = a[0] / r[0]), (a[1] = a[1] / r[0]))
                              : r[0] < r[1] && ((a[0] = a[0] / r[1]), (a[1] = a[1] / r[1]));
                          }
                          return [a[0] + 'px', a[1] + 'px'];
                        })(),
                        title: !1,
                        shade: 0.9,
                        shadeClose: !0,
                        closeBtn: !1,
                        move: '.layui-layer-phimg img',
                        moveType: 1,
                        scrollbar: !1,
                        moveOut: !0,
                        isOutAnim: !1,
                        skin: 'layui-layer-photos' + c('photos'),
                        content:
                          '<div class="layui-layer-phimg"><img src="' +
                          u[d].src +
                          '" alt="' +
                          (u[d].alt || '') +
                          '" layer-pid="' +
                          u[d].pid +
                          '"><div class="layui-layer-imgsee">' +
                          (u.length > 1
                            ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>'
                            : '') +
                          '<div class="layui-layer-imgbar" style="display:' +
                          (a ? 'block' : '') +
                          '"><span class="layui-layer-imgtit"><a href="javascript:;">' +
                          (u[d].alt || '') +
                          '</a><em>' +
                          s.imgIndex +
                          '/' +
                          u.length +
                          '</em></span></div></div></div>',
                        success: function (e, i) {
                          (s.bigimg = e.find('.layui-layer-phimg')),
                            (s.imgsee = e.find('.layui-layer-imguide,.layui-layer-imgbar')),
                            s.event(e),
                            t.tab && t.tab(u[d], e),
                            'function' == typeof y && y(e);
                        },
                        end: function () {
                          (s.end = !0), i(document).off('keyup', s.keyup);
                        },
                      },
                      t
                    )
                  ));
              },
              function () {
                r.close(s.loadi),
                  r.msg(
                    '&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;',
                    {
                      time: 30000,
                      btn: ['&#x4E0B;&#x4E00;&#x5F20;', '&#x4E0D;&#x770B;&#x4E86;'],
                      yes: function () {
                        u.length > 1 && s.imgnext(!0, !0);
                      },
                    }
                  );
              }
            );
        }
      }),
      (o.run = function (t) {
        (i = t),
          (n = i(e)),
          (l.html = i('html')),
          (r.open = function (e) {
            var t = new s(e);
            return t.index;
          });
      }),
      e.layui && layui.define
        ? (r.ready(),
          layui.define('jquery', function (t) {
            (r.path = layui.cache.dir), o.run(layui.jquery), (e.layer = r), t('layer', r);
          }))
        : 'function' == typeof define && define.amd
        ? define(['jquery'], function () {
            return o.run(e.jQuery), r;
          })
        : (function () {
            o.run(e.jQuery), r.ready();
          })();
  })(window);
  (function (factory) {
    if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
    } else {
      if (typeof exports == 'object' && typeof module == 'object') {
        module.exports = factory(require('jquery'));
      } else {
        factory(jQuery);
      }
    }
  })(function ($, undefined) {
    var defaultOpts = {
        beforeShow: noop,
        move: noop,
        change: noop,
        show: noop,
        hide: noop,
        color: false,
        flat: false,
        showInput: false,
        allowEmpty: false,
        showButtons: true,
        clickoutFiresChange: true,
        showInitial: false,
        showPalette: false,
        showPaletteOnly: false,
        hideAfterPaletteSelect: false,
        togglePaletteOnly: false,
        showSelectionPalette: true,
        localStorageKey: false,
        appendTo: 'body',
        maxSelectionSize: 7,
        cancelText: 'cancel',
        chooseText: 'choose',
        togglePaletteMoreText: 'more',
        togglePaletteLessText: 'less',
        clearText: 'Clear Color Selection',
        noColorSelectedText: 'No Color Selected',
        preferredFormat: false,
        className: '',
        containerClassName: '',
        replacerClassName: '',
        showAlpha: false,
        theme: 'sp-light',
        palette: [['#ffffff', '#000000', '#ff0000', '#ff8000', '#ffff00', '#008000', '#0000ff', '#4b0082', '#9400d3']],
        selectionPalette: [],
        disabled: false,
        offset: null,
      },
      spectrums = [],
      IE = !!/msie/i.exec(window.navigator.userAgent),
      rgbaSupport = (function () {
        function contains(str, substr) {
          return !!~('' + str).indexOf(substr);
        }
        var elem = document.createElement('div');
        var style = elem.style;
        style.cssText = 'background-color:rgba(0,0,0,.5)';
        return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
      })(),
      replaceInput = [
        "<div class='sp-replacer'>",
        "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
        "<div class='sp-dd'>&#9660;</div>",
        '</div>',
      ].join(''),
      markup = (function () {
        var gradientFix = '';
        if (IE) {
          for (var i = 1; i <= 6; i++) {
            gradientFix += "<div class='sp-" + i + "'></div>";
          }
        }
        return [
          "<div class='sp-container sp-hidden'>",
          "<div class='sp-palette-container'>",
          "<div class='sp-palette sp-thumb sp-cf'></div>",
          "<div class='sp-palette-button-container sp-cf'>",
          "<button type='button' class='sp-palette-toggle'></button>",
          '</div>',
          '</div>',
          "<div class='sp-picker-container'>",
          "<div class='sp-top sp-cf'>",
          "<div class='sp-fill'></div>",
          "<div class='sp-top-inner'>",
          "<div class='sp-color'>",
          "<div class='sp-sat'>",
          "<div class='sp-val'>",
          "<div class='sp-dragger'></div>",
          '</div>',
          '</div>',
          '</div>',
          "<div class='sp-clear sp-clear-display'>",
          '</div>',
          "<div class='sp-hue'>",
          "<div class='sp-slider'></div>",
          gradientFix,
          '</div>',
          '</div>',
          "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
          '</div>',
          "<div class='sp-input-container sp-cf'>",
          "<input class='sp-input' type='text' spellcheck='false'  />",
          '</div>',
          "<div class='sp-initial sp-thumb sp-cf'></div>",
          "<div class='sp-button-container sp-cf'>",
          "<a class='sp-cancel' href='#'></a>",
          "<button type='button' class='sp-choose'></button>",
          '</div>',
          '</div>',
          '</div>',
        ].join('');
      })();
    function paletteTemplate(p, color, className, opts) {
      var html = [];
      for (var i = 0; i < p.length; i++) {
        var current = p[i];
        if (current) {
          var tiny = tinycolor(current);
          var c = tiny.toHsl().l < 0.5 ? 'sp-thumb-el sp-thumb-dark' : 'sp-thumb-el sp-thumb-light';
          c += tinycolor.equals(color, current) ? ' sp-thumb-active' : '';
          var formattedString = tiny.toString(opts.preferredFormat || 'rgb');
          var swatchStyle = rgbaSupport ? 'background-color:' + tiny.toRgbString() : 'filter:' + tiny.toFilter();
          html.push(
            '<span title="' +
              formattedString +
              '" data-color="' +
              tiny.toRgbString() +
              '" class="' +
              c +
              '"><span class="sp-thumb-inner" style="' +
              swatchStyle +
              ';" /></span>'
          );
        } else {
          var cls = 'sp-clear-display';
          html.push(
            $('<div />')
              .append(
                $('<span data-color="" style="background-color:transparent;" class="' + cls + '"></span>').attr(
                  'title',
                  opts.noColorSelectedText
                )
              )
              .html()
          );
        }
      }
      return "<div class='sp-cf " + className + "'>" + html.join('') + '</div>';
    }
    function hideAll() {
      for (var i = 0; i < spectrums.length; i++) {
        if (spectrums[i]) {
          spectrums[i].hide();
        }
      }
    }
    function instanceOptions(o, callbackContext) {
      var opts = $.extend({}, defaultOpts, o);
      opts.callbacks = {
        move: bind(opts.move, callbackContext),
        change: bind(opts.change, callbackContext),
        show: bind(opts.show, callbackContext),
        hide: bind(opts.hide, callbackContext),
        beforeShow: bind(opts.beforeShow, callbackContext),
      };
      return opts;
    }
    function spectrum(element, o) {
      var opts = instanceOptions(o, element),
        flat = opts.flat,
        showSelectionPalette = opts.showSelectionPalette,
        localStorageKey = opts.localStorageKey,
        theme = opts.theme,
        callbacks = opts.callbacks,
        resize = throttle(reflow, 10),
        visible = false,
        isDragging = false,
        dragWidth = 0,
        dragHeight = 0,
        dragHelperHeight = 0,
        slideHeight = 0,
        slideWidth = 0,
        alphaWidth = 0,
        alphaSlideHelperWidth = 0,
        slideHelperHeight = 0,
        currentHue = 0,
        currentSaturation = 0,
        currentValue = 0,
        currentAlpha = 1,
        palette = [],
        paletteArray = [],
        paletteLookup = {},
        selectionPalette = opts.selectionPalette.slice(0),
        maxSelectionSize = opts.maxSelectionSize,
        draggingClass = 'sp-dragging',
        shiftMovementDirection = null;
      var doc = element.ownerDocument,
        body = doc.body,
        boundElement = $(element),
        disabled = false,
        container = $(markup, doc).addClass(theme),
        pickerContainer = container.find('.sp-picker-container'),
        dragger = container.find('.sp-color'),
        dragHelper = container.find('.sp-dragger'),
        slider = container.find('.sp-hue'),
        slideHelper = container.find('.sp-slider'),
        alphaSliderInner = container.find('.sp-alpha-inner'),
        alphaSlider = container.find('.sp-alpha'),
        alphaSlideHelper = container.find('.sp-alpha-handle'),
        textInput = container.find('.sp-input'),
        paletteContainer = container.find('.sp-palette'),
        initialColorContainer = container.find('.sp-initial'),
        cancelButton = container.find('.sp-cancel'),
        clearButton = container.find('.sp-clear'),
        chooseButton = container.find('.sp-choose'),
        toggleButton = container.find('.sp-palette-toggle'),
        isInput = boundElement.is('input'),
        isInputTypeColor = isInput && boundElement.attr('type') === 'color' && inputTypeColorSupport(),
        shouldReplace = isInput && !flat,
        replacer = shouldReplace ? $(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName) : $([]),
        offsetElement = shouldReplace ? replacer : boundElement,
        previewElement = replacer.find('.sp-preview-inner'),
        initialColor = opts.color || (isInput && boundElement.val()),
        colorOnShow = false,
        currentPreferredFormat = opts.preferredFormat,
        clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange,
        isEmpty = !initialColor,
        allowEmpty = opts.allowEmpty && !isInputTypeColor;
      function applyOptions() {
        if (opts.showPaletteOnly) {
          opts.showPalette = true;
        }
        toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);
        if (opts.palette) {
          palette = opts.palette.slice(0);
          paletteArray = $.isArray(palette[0]) ? palette : [palette];
          paletteLookup = {};
          for (var i = 0; i < paletteArray.length; i++) {
            for (var j = 0; j < paletteArray[i].length; j++) {
              var rgb = tinycolor(paletteArray[i][j]).toRgbString();
              paletteLookup[rgb] = true;
            }
          }
        }
        container.toggleClass('sp-flat', flat);
        container.toggleClass('sp-input-disabled', !opts.showInput);
        container.toggleClass('sp-alpha-enabled', opts.showAlpha);
        container.toggleClass('sp-clear-enabled', allowEmpty);
        container.toggleClass('sp-buttons-disabled', !opts.showButtons);
        container.toggleClass('sp-palette-buttons-disabled', !opts.togglePaletteOnly);
        container.toggleClass('sp-palette-disabled', !opts.showPalette);
        container.toggleClass('sp-palette-only', opts.showPaletteOnly);
        container.toggleClass('sp-initial-disabled', !opts.showInitial);
        container.addClass(opts.className).addClass(opts.containerClassName);
        reflow();
      }
      function initialize() {
        if (IE) {
          container.find('*:not(input)').attr('unselectable', 'on');
        }
        applyOptions();
        if (shouldReplace) {
          boundElement.after(replacer).hide();
        }
        if (!allowEmpty) {
          clearButton.hide();
        }
        if (flat) {
          boundElement.after(container).hide();
        } else {
          var appendTo = opts.appendTo === 'parent' ? boundElement.parent() : $(opts.appendTo);
          if (appendTo.length !== 1) {
            appendTo = $('body');
          }
          appendTo.append(container);
        }
        updateSelectionPaletteFromStorage();
        offsetElement.bind('click.spectrum touchstart.spectrum', function (e) {
          if (!disabled) {
            toggle();
          }
          e.stopPropagation();
          if (!$(e.target).is('input')) {
            e.preventDefault();
          }
        });
        if (boundElement.is(':disabled') || opts.disabled === true) {
          disable();
        }
        container.click(stopPropagation);
        textInput.change(setFromTextInput);
        textInput.bind('paste', function () {
          setTimeout(setFromTextInput, 1);
        });
        textInput.keydown(function (e) {
          if (e.keyCode == 13) {
            setFromTextInput();
          }
        });
        cancelButton.text(opts.cancelText);
        cancelButton.bind('click.spectrum', function (e) {
          e.stopPropagation();
          e.preventDefault();
          revert();
          hide();
        });
        clearButton.attr('title', opts.clearText);
        clearButton.bind('click.spectrum', function (e) {
          e.stopPropagation();
          e.preventDefault();
          isEmpty = true;
          move();
          if (flat) {
            updateOriginalInput(true);
          }
        });
        chooseButton.text(opts.chooseText);
        chooseButton.bind('click.spectrum', function (e) {
          e.stopPropagation();
          e.preventDefault();
          if (IE && textInput.is(':focus')) {
            textInput.trigger('change');
          }
          if (isValid()) {
            updateOriginalInput(true);
            hide();
          }
        });
        toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);
        toggleButton.bind('click.spectrum', function (e) {
          e.stopPropagation();
          e.preventDefault();
          opts.showPaletteOnly = !opts.showPaletteOnly;
          if (!opts.showPaletteOnly && !flat) {
            container.css('left', '-=' + (pickerContainer.outerWidth(true) + 5));
          }
          applyOptions();
        });
        draggable(
          alphaSlider,
          function (dragX, dragY, e) {
            currentAlpha = dragX / alphaWidth;
            isEmpty = false;
            if (e.shiftKey) {
              currentAlpha = Math.round(currentAlpha * 10) / 10;
            }
            move();
          },
          dragStart,
          dragStop
        );
        draggable(
          slider,
          function (dragX, dragY) {
            currentHue = parseFloat(dragY / slideHeight);
            isEmpty = false;
            if (!opts.showAlpha) {
              currentAlpha = 1;
            }
            move();
          },
          dragStart,
          dragStop
        );
        draggable(
          dragger,
          function (dragX, dragY, e) {
            if (!e.shiftKey) {
              shiftMovementDirection = null;
            } else {
              if (!shiftMovementDirection) {
                var oldDragX = currentSaturation * dragWidth;
                var oldDragY = dragHeight - currentValue * dragHeight;
                var furtherFromX = Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);
                shiftMovementDirection = furtherFromX ? 'x' : 'y';
              }
            }
            var setSaturation = !shiftMovementDirection || shiftMovementDirection === 'x';
            var setValue = !shiftMovementDirection || shiftMovementDirection === 'y';
            if (setSaturation) {
              currentSaturation = parseFloat(dragX / dragWidth);
            }
            if (setValue) {
              currentValue = parseFloat((dragHeight - dragY) / dragHeight);
            }
            isEmpty = false;
            if (!opts.showAlpha) {
              currentAlpha = 1;
            }
            move();
          },
          dragStart,
          dragStop
        );
        if (!!initialColor) {
          set(initialColor);
          updateUI();
          currentPreferredFormat = opts.preferredFormat || tinycolor(initialColor).format;
          addColorToSelectionPalette(initialColor);
        } else {
          updateUI();
        }
        if (flat) {
          show();
        }
        function paletteElementClick(e) {
          if (e.data && e.data.ignore) {
            set($(e.target).closest('.sp-thumb-el').data('color'));
            move();
          } else {
            set($(e.target).closest('.sp-thumb-el').data('color'));
            move();
            updateOriginalInput(true);
            if (opts.hideAfterPaletteSelect) {
              hide();
            }
          }
          return false;
        }
        var paletteEvent = IE ? 'mousedown.spectrum' : 'click.spectrum touchstart.spectrum';
        paletteContainer.delegate('.sp-thumb-el', paletteEvent, paletteElementClick);
        initialColorContainer.delegate('.sp-thumb-el:nth-child(1)', paletteEvent, { ignore: true }, paletteElementClick);
      }
      function updateSelectionPaletteFromStorage() {
        if (localStorageKey && window.localStorage) {
          try {
            var oldPalette = window.localStorage[localStorageKey].split(',#');
            if (oldPalette.length > 1) {
              delete window.localStorage[localStorageKey];
              $.each(oldPalette, function (i, c) {
                addColorToSelectionPalette(c);
              });
            }
          } catch (e) {}
          try {
            selectionPalette = window.localStorage[localStorageKey].split(';');
          } catch (e) {}
        }
      }
      function addColorToSelectionPalette(color) {
        if (showSelectionPalette) {
          var rgb = tinycolor(color).toRgbString();
          if (!paletteLookup[rgb] && $.inArray(rgb, selectionPalette) === -1) {
            selectionPalette.push(rgb);
            while (selectionPalette.length > maxSelectionSize) {
              selectionPalette.shift();
            }
          }
          if (localStorageKey && window.localStorage) {
            try {
              window.localStorage[localStorageKey] = selectionPalette.join(';');
            } catch (e) {}
          }
        }
      }
      function getUniqueSelectionPalette() {
        var unique = [];
        if (opts.showPalette) {
          for (var i = 0; i < selectionPalette.length; i++) {
            var rgb = tinycolor(selectionPalette[i]).toRgbString();
            if (!paletteLookup[rgb]) {
              unique.push(selectionPalette[i]);
            }
          }
        }
        return unique.reverse().slice(0, opts.maxSelectionSize);
      }
      function drawPalette() {
        var currentColor = get();
        var html = $.map(paletteArray, function (palette, i) {
          return paletteTemplate(palette, currentColor, 'sp-palette-row sp-palette-row-' + i, opts);
        });
        updateSelectionPaletteFromStorage();
        if (selectionPalette) {
          html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, 'sp-palette-row sp-palette-row-selection', opts));
        }
        paletteContainer.html(html.join(''));
      }
      function drawInitial() {
        if (opts.showInitial) {
          var initial = colorOnShow;
          var current = get();
          initialColorContainer.html(paletteTemplate([initial, current], current, 'sp-palette-row-initial', opts));
        }
      }
      function dragStart() {
        if (dragHeight <= 0 || dragWidth <= 0 || slideHeight <= 0) {
          reflow();
        }
        isDragging = true;
        container.addClass(draggingClass);
        shiftMovementDirection = null;
        boundElement.trigger('dragstart.spectrum', [get()]);
      }
      function dragStop() {
        isDragging = false;
        container.removeClass(draggingClass);
        boundElement.trigger('dragstop.spectrum', [get()]);
      }
      function setFromTextInput() {
        var value = textInput.val();
        if ((value === null || value === '') && allowEmpty) {
          set(null);
          updateOriginalInput(true);
        } else {
          var tiny = tinycolor(value);
          if (tiny.isValid()) {
            set(tiny);
            updateOriginalInput(true);
          } else {
            textInput.addClass('sp-validation-error');
          }
        }
      }
      function toggle() {
        if (visible) {
          hide();
        } else {
          show();
        }
      }
      function show() {
        var event = $.Event('beforeShow.spectrum');
        if (visible) {
          reflow();
          return;
        }
        boundElement.trigger(event, [get()]);
        if (callbacks.beforeShow(get()) === false || event.isDefaultPrevented()) {
          return;
        }
        hideAll();
        visible = true;
        $(doc).bind('keydown.spectrum', onkeydown);
        $(doc).bind('click.spectrum', clickout);
        $(window).bind('resize.spectrum', resize);
        replacer.addClass('sp-active');
        container.removeClass('sp-hidden');
        reflow();
        updateUI();
        colorOnShow = get();
        drawInitial();
        callbacks.show(colorOnShow);
        boundElement.trigger('show.spectrum', [colorOnShow]);
      }
      function onkeydown(e) {
        if (e.keyCode === 27) {
          hide();
        }
      }
      function clickout(e) {
        if (e.button == 2) {
          return;
        }
        if (isDragging) {
          return;
        }
        if (clickoutFiresChange) {
          updateOriginalInput(true);
        } else {
          revert();
        }
        hide();
      }
      function hide() {
        if (!visible || flat) {
          return;
        }
        visible = false;
        $(doc).unbind('keydown.spectrum', onkeydown);
        $(doc).unbind('click.spectrum', clickout);
        $(window).unbind('resize.spectrum', resize);
        replacer.removeClass('sp-active');
        container.addClass('sp-hidden');
        callbacks.hide(get());
        boundElement.trigger('hide.spectrum', [get()]);
      }
      function revert() {
        set(colorOnShow, true);
      }
      function set(color, ignoreFormatChange) {
        if (tinycolor.equals(color, get())) {
          updateUI();
          return;
        }
        var newColor, newHsv;
        if (!color && allowEmpty) {
          isEmpty = true;
        } else {
          isEmpty = false;
          newColor = tinycolor(color);
          newHsv = newColor.toHsv();
          currentHue = (newHsv.h % 360) / 360;
          currentSaturation = newHsv.s;
          currentValue = newHsv.v;
          currentAlpha = newHsv.a;
        }
        updateUI();
        if (newColor && newColor.isValid() && !ignoreFormatChange) {
          currentPreferredFormat = opts.preferredFormat || newColor.getFormat();
        }
      }
      function get(opts) {
        opts = opts || {};
        if (allowEmpty && isEmpty) {
          return null;
        }
        return tinycolor.fromRatio(
          { h: currentHue, s: currentSaturation, v: currentValue, a: Math.round(currentAlpha * 100) / 100 },
          { format: opts.format || currentPreferredFormat }
        );
      }
      function isValid() {
        return !textInput.hasClass('sp-validation-error');
      }
      function move() {
        updateUI();
        callbacks.move(get());
        boundElement.trigger('move.spectrum', [get()]);
      }
      function updateUI() {
        textInput.removeClass('sp-validation-error');
        updateHelperLocations();
        var flatColor = tinycolor.fromRatio({ h: currentHue, s: 1, v: 1 });
        dragger.css('background-color', flatColor.toHexString());
        var format = currentPreferredFormat;
        if (currentAlpha < 1 && !(currentAlpha === 0 && format === 'name')) {
          if (format === 'hex' || format === 'hex3' || format === 'hex6' || format === 'name') {
            format = 'rgb';
          }
        }
        var realColor = get({ format: format }),
          displayColor = '';
        previewElement.removeClass('sp-clear-display');
        previewElement.css('background-color', 'transparent');
        if (!realColor && allowEmpty) {
          previewElement.addClass('sp-clear-display');
        } else {
          var realHex = realColor.toHexString(),
            realRgb = realColor.toRgbString();
          if (rgbaSupport || realColor.alpha === 1) {
            previewElement.css('background-color', realRgb);
          } else {
            previewElement.css('background-color', 'transparent');
            previewElement.css('filter', realColor.toFilter());
          }
          if (opts.showAlpha) {
            var rgb = realColor.toRgb();
            rgb.a = 0;
            var realAlpha = tinycolor(rgb).toRgbString();
            var gradient = 'linear-gradient(left, ' + realAlpha + ', ' + realHex + ')';
            if (IE) {
              alphaSliderInner.css('filter', tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
            } else {
              alphaSliderInner.css('background', '-webkit-' + gradient);
              alphaSliderInner.css('background', '-moz-' + gradient);
              alphaSliderInner.css('background', '-ms-' + gradient);
              alphaSliderInner.css('background', 'linear-gradient(to right, ' + realAlpha + ', ' + realHex + ')');
            }
          }
          displayColor = realColor.toString(format);
        }
        if (opts.showInput) {
          textInput.val(displayColor);
        }
        if (opts.showPalette) {
          drawPalette();
        }
        drawInitial();
      }
      function updateHelperLocations() {
        var s = currentSaturation;
        var v = currentValue;
        if (allowEmpty && isEmpty) {
          alphaSlideHelper.hide();
          slideHelper.hide();
          dragHelper.hide();
        } else {
          alphaSlideHelper.show();
          slideHelper.show();
          dragHelper.show();
          var dragX = s * dragWidth;
          var dragY = dragHeight - v * dragHeight;
          dragX = Math.max(-dragHelperHeight, Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight));
          dragY = Math.max(-dragHelperHeight, Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight));
          dragHelper.css({ top: dragY + 'px', left: dragX + 'px' });
          var alphaX = currentAlpha * alphaWidth;
          alphaSlideHelper.css({ left: alphaX - alphaSlideHelperWidth / 2 + 'px' });
          var slideY = currentHue * slideHeight;
          slideHelper.css({ top: slideY - slideHelperHeight + 'px' });
        }
      }
      function updateOriginalInput(fireCallback) {
        var color = get(),
          displayColor = '',
          hasChanged = !tinycolor.equals(color, colorOnShow);
        if (color) {
          displayColor = color.toString(currentPreferredFormat);
          addColorToSelectionPalette(color);
        }
        if (isInput) {
          boundElement.val(displayColor);
        }
        if (fireCallback && hasChanged) {
          callbacks.change(color);
          boundElement.trigger('change', [color]);
        }
      }
      function reflow() {
        if (!visible) {
          return;
        }
        dragWidth = dragger.width();
        dragHeight = dragger.height();
        dragHelperHeight = dragHelper.height();
        slideWidth = slider.width();
        slideHeight = slider.height();
        slideHelperHeight = slideHelper.height();
        alphaWidth = alphaSlider.width();
        alphaSlideHelperWidth = alphaSlideHelper.width();
        if (!flat) {
          container.css('position', 'absolute');
          if (opts.offset) {
            container.offset(opts.offset);
          } else {
            container.offset(getOffset(container, offsetElement));
          }
        }
        updateHelperLocations();
        if (opts.showPalette) {
          drawPalette();
        }
        boundElement.trigger('reflow.spectrum');
      }
      function destroy() {
        boundElement.show();
        offsetElement.unbind('click.spectrum touchstart.spectrum');
        container.remove();
        replacer.remove();
        spectrums[spect.id] = null;
      }
      function option(optionName, optionValue) {
        if (optionName === undefined) {
          return $.extend({}, opts);
        }
        if (optionValue === undefined) {
          return opts[optionName];
        }
        opts[optionName] = optionValue;
        if (optionName === 'preferredFormat') {
          currentPreferredFormat = opts.preferredFormat;
        }
        applyOptions();
      }
      function enable() {
        disabled = false;
        boundElement.attr('disabled', false);
        offsetElement.removeClass('sp-disabled');
      }
      function disable() {
        hide();
        disabled = true;
        boundElement.attr('disabled', true);
        offsetElement.addClass('sp-disabled');
      }
      function setOffset(coord) {
        opts.offset = coord;
        reflow();
      }
      initialize();
      var spect = {
        show: show,
        hide: hide,
        toggle: toggle,
        reflow: reflow,
        option: option,
        enable: enable,
        disable: disable,
        offset: setOffset,
        set: function (c) {
          set(c);
          updateOriginalInput();
        },
        get: get,
        destroy: destroy,
        container: container,
      };
      spect.id = spectrums.push(spect) - 1;
      return spect;
    }
    function getOffset(picker, input) {
      var extraY = 0;
      var dpWidth = picker.outerWidth();
      var dpHeight = picker.outerHeight();
      var inputHeight = input.outerHeight();
      var doc = picker[0].ownerDocument;
      var docElem = doc.documentElement;
      var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
      var viewHeight = docElem.clientHeight + $(doc).scrollTop();
      var offset = input.offset();
      offset.top += inputHeight;
      offset.left -= Math.min(
        offset.left,
        offset.left + dpWidth > viewWidth && viewWidth > dpWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0
      );
      offset.top -= Math.min(
        offset.top,
        offset.top + dpHeight > viewHeight && viewHeight > dpHeight ? Math.abs(dpHeight + inputHeight - extraY) : extraY
      );
      return offset;
    }
    function noop() {}
    function stopPropagation(e) {
      e.stopPropagation();
    }
    function bind(func, obj) {
      var slice = Array.prototype.slice;
      var args = slice.call(arguments, 2);
      return function () {
        return func.apply(obj, args.concat(slice.call(arguments)));
      };
    }
    function draggable(element, onmove, onstart, onstop) {
      onmove = onmove || function () {};
      onstart = onstart || function () {};
      onstop = onstop || function () {};
      var doc = document;
      var dragging = false;
      var offset = {};
      var maxHeight = 0;
      var maxWidth = 0;
      var hasTouch = 'ontouchstart' in window;
      var duringDragEvents = {};
      duringDragEvents['selectstart'] = prevent;
      duringDragEvents['dragstart'] = prevent;
      duringDragEvents['touchmove mousemove'] = move;
      duringDragEvents['touchend mouseup'] = stop;
      function prevent(e) {
        if (e.stopPropagation) {
          e.stopPropagation();
        }
        if (e.preventDefault) {
          e.preventDefault();
        }
        e.returnValue = false;
      }
      function move(e) {
        if (dragging) {
          if (IE && doc.documentMode < 9 && !e.button) {
            return stop();
          }
          var t0 = e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0];
          var pageX = (t0 && t0.pageX) || e.pageX;
          var pageY = (t0 && t0.pageY) || e.pageY;
          var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
          var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));
          if (hasTouch) {
            prevent(e);
          }
          onmove.apply(element, [dragX, dragY, e]);
        }
      }
      function start(e) {
        var rightclick = e.which ? e.which == 3 : e.button == 2;
        if (!rightclick && !dragging) {
          if (onstart.apply(element, arguments) !== false) {
            dragging = true;
            maxHeight = $(element).height();
            maxWidth = $(element).width();
            offset = $(element).offset();
            $(doc).bind(duringDragEvents);
            $(doc.body).addClass('sp-dragging');
            move(e);
            prevent(e);
          }
        }
      }
      function stop() {
        if (dragging) {
          $(doc).unbind(duringDragEvents);
          $(doc.body).removeClass('sp-dragging');
          setTimeout(function () {
            onstop.apply(element, arguments);
          }, 0);
        }
        dragging = false;
      }
      $(element).bind('touchstart mousedown', start);
    }
    function throttle(func, wait, debounce) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var throttler = function () {
          timeout = null;
          func.apply(context, args);
        };
        if (debounce) {
          clearTimeout(timeout);
        }
        if (debounce || !timeout) {
          timeout = setTimeout(throttler, wait);
        }
      };
    }
    function inputTypeColorSupport() {
      return $.fn.spectrum.inputTypeColorSupport();
    }
    var dataID = 'spectrum.id';
    $.fn.spectrum = function (opts, extra) {
      if (typeof opts == 'string') {
        var returnValue = this;
        var args = Array.prototype.slice.call(arguments, 1);
        this.each(function () {
          var spect = spectrums[$(this).data(dataID)];
          if (spect) {
            var method = spect[opts];
            if (!method) {
              throw new Error("Spectrum: no such method: '" + opts + "'");
            }
            if (opts == 'get') {
              returnValue = spect.get();
            } else {
              if (opts == 'container') {
                returnValue = spect.container;
              } else {
                if (opts == 'option') {
                  returnValue = spect.option.apply(spect, args);
                } else {
                  if (opts == 'destroy') {
                    spect.destroy();
                    $(this).removeData(dataID);
                  } else {
                    method.apply(spect, args);
                  }
                }
              }
            }
          }
        });
        return returnValue;
      }
      return this.spectrum('destroy').each(function () {
        var options = $.extend({}, opts, $(this).data());
        var spect = spectrum(this, options);
        $(this).data(dataID, spect.id);
      });
    };
    $.fn.spectrum.load = true;
    $.fn.spectrum.loadOpts = {};
    $.fn.spectrum.draggable = draggable;
    $.fn.spectrum.defaults = defaultOpts;
    $.fn.spectrum.inputTypeColorSupport = function inputTypeColorSupport() {
      if (typeof inputTypeColorSupport._cachedResult === 'undefined') {
        var colorInput = $("<input type='color'/>")[0];
        inputTypeColorSupport._cachedResult = colorInput.type === 'color' && colorInput.value !== '';
      }
      return inputTypeColorSupport._cachedResult;
    };
    $.spectrum = {};
    $.spectrum.localization = {};
    $.spectrum.palettes = {};
    $.fn.spectrum.processNativeColorInputs = function () {
      var colorInputs = $('input[type=color]');
      if (colorInputs.length && !inputTypeColorSupport()) {
        colorInputs.spectrum({ preferredFormat: 'hex6' });
      }
    };
    (function () {
      var trimLeft = /^[\s,#]+/,
        trimRight = /\s+$/,
        tinyCounter = 0,
        math = Math,
        mathRound = math.round,
        mathMin = math.min,
        mathMax = math.max,
        mathRandom = math.random;
      var tinycolor = function (color, opts) {
        color = color ? color : '';
        opts = opts || {};
        if (color instanceof tinycolor) {
          return color;
        }
        if (!(this instanceof tinycolor)) {
          return new tinycolor(color, opts);
        }
        var rgb = inputToRGB(color);
        (this._originalInput = color),
          (this._r = rgb.r),
          (this._g = rgb.g),
          (this._b = rgb.b),
          (this._a = rgb.a),
          (this._roundA = mathRound(100 * this._a) / 100),
          (this._format = opts.format || rgb.format);
        this._gradientType = opts.gradientType;
        if (this._r < 1) {
          this._r = mathRound(this._r);
        }
        if (this._g < 1) {
          this._g = mathRound(this._g);
        }
        if (this._b < 1) {
          this._b = mathRound(this._b);
        }
        this._ok = rgb.ok;
        this._tc_id = tinyCounter++;
      };
      tinycolor.prototype = {
        isDark: function () {
          return this.getBrightness() < 128;
        },
        isLight: function () {
          return !this.isDark();
        },
        isValid: function () {
          return this._ok;
        },
        getOriginalInput: function () {
          return this._originalInput;
        },
        getFormat: function () {
          return this._format;
        },
        getAlpha: function () {
          return this._a;
        },
        getBrightness: function () {
          var rgb = this.toRgb();
          return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        },
        setAlpha: function (value) {
          this._a = boundAlpha(value);
          this._roundA = mathRound(100 * this._a) / 100;
          return this;
        },
        toHsv: function () {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
        },
        toHsvString: function () {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          var h = mathRound(hsv.h * 360),
            s = mathRound(hsv.s * 100),
            v = mathRound(hsv.v * 100);
          return this._a == 1 ? 'hsv(' + h + ', ' + s + '%, ' + v + '%)' : 'hsva(' + h + ', ' + s + '%, ' + v + '%, ' + this._roundA + ')';
        },
        toHsl: function () {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
        },
        toHslString: function () {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          var h = mathRound(hsl.h * 360),
            s = mathRound(hsl.s * 100),
            l = mathRound(hsl.l * 100);
          return this._a == 1 ? 'hsl(' + h + ', ' + s + '%, ' + l + '%)' : 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + this._roundA + ')';
        },
        toHex: function (allow3Char) {
          return rgbToHex(this._r, this._g, this._b, allow3Char);
        },
        toHexString: function (allow3Char) {
          return '#' + this.toHex(allow3Char);
        },
        toHex8: function () {
          return rgbaToHex(this._r, this._g, this._b, this._a);
        },
        toHex8String: function () {
          return '#' + this.toHex8();
        },
        toRgb: function () {
          return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
        },
        toRgbString: function () {
          return this._a == 1
            ? 'rgb(' + mathRound(this._r) + ', ' + mathRound(this._g) + ', ' + mathRound(this._b) + ')'
            : 'rgba(' + mathRound(this._r) + ', ' + mathRound(this._g) + ', ' + mathRound(this._b) + ', ' + this._roundA + ')';
        },
        toPercentageRgb: function () {
          return {
            r: mathRound(bound01(this._r, 255) * 100) + '%',
            g: mathRound(bound01(this._g, 255) * 100) + '%',
            b: mathRound(bound01(this._b, 255) * 100) + '%',
            a: this._a,
          };
        },
        toPercentageRgbString: function () {
          return this._a == 1
            ? 'rgb(' +
                mathRound(bound01(this._r, 255) * 100) +
                '%, ' +
                mathRound(bound01(this._g, 255) * 100) +
                '%, ' +
                mathRound(bound01(this._b, 255) * 100) +
                '%)'
            : 'rgba(' +
                mathRound(bound01(this._r, 255) * 100) +
                '%, ' +
                mathRound(bound01(this._g, 255) * 100) +
                '%, ' +
                mathRound(bound01(this._b, 255) * 100) +
                '%, ' +
                this._roundA +
                ')';
        },
        toName: function () {
          if (this._a === 0) {
            return 'transparent';
          }
          if (this._a < 1) {
            return false;
          }
          return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function (secondColor) {
          var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
          var secondHex8String = hex8String;
          var gradientType = this._gradientType ? 'GradientType = 1, ' : '';
          if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = s.toHex8String();
          }
          return (
            'progid:DXImageTransform.Microsoft.gradient(' +
            gradientType +
            'startColorstr=' +
            hex8String +
            ',endColorstr=' +
            secondHex8String +
            ')'
          );
        },
        toString: function (format) {
          var formatSet = !!format;
          format = format || this._format;
          var formattedString = false;
          var hasAlpha = this._a < 1 && this._a >= 0;
          var needsAlphaFormat =
            !formatSet && hasAlpha && (format === 'hex' || format === 'hex6' || format === 'hex3' || format === 'name');
          if (needsAlphaFormat) {
            if (format === 'name' && this._a === 0) {
              return this.toName();
            }
            return this.toRgbString();
          }
          if (format === 'rgb') {
            formattedString = this.toRgbString();
          }
          if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
          }
          if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
          }
          if (format === 'hex3') {
            formattedString = this.toHexString(true);
          }
          if (format === 'hex8') {
            formattedString = this.toHex8String();
          }
          if (format === 'name') {
            formattedString = this.toName();
          }
          if (format === 'hsl') {
            formattedString = this.toHslString();
          }
          if (format === 'hsv') {
            formattedString = this.toHsvString();
          }
          return formattedString || this.toHexString();
        },
        _applyModification: function (fn, args) {
          var color = fn.apply(null, [this].concat([].slice.call(args)));
          this._r = color._r;
          this._g = color._g;
          this._b = color._b;
          this.setAlpha(color._a);
          return this;
        },
        lighten: function () {
          return this._applyModification(lighten, arguments);
        },
        brighten: function () {
          return this._applyModification(brighten, arguments);
        },
        darken: function () {
          return this._applyModification(darken, arguments);
        },
        desaturate: function () {
          return this._applyModification(desaturate, arguments);
        },
        saturate: function () {
          return this._applyModification(saturate, arguments);
        },
        greyscale: function () {
          return this._applyModification(greyscale, arguments);
        },
        spin: function () {
          return this._applyModification(spin, arguments);
        },
        _applyCombination: function (fn, args) {
          return fn.apply(null, [this].concat([].slice.call(args)));
        },
        analogous: function () {
          return this._applyCombination(analogous, arguments);
        },
        complement: function () {
          return this._applyCombination(complement, arguments);
        },
        monochromatic: function () {
          return this._applyCombination(monochromatic, arguments);
        },
        splitcomplement: function () {
          return this._applyCombination(splitcomplement, arguments);
        },
        triad: function () {
          return this._applyCombination(triad, arguments);
        },
        tetrad: function () {
          return this._applyCombination(tetrad, arguments);
        },
      };
      tinycolor.fromRatio = function (color, opts) {
        if (typeof color == 'object') {
          var newColor = {};
          for (var i in color) {
            if (color.hasOwnProperty(i)) {
              if (i === 'a') {
                newColor[i] = color[i];
              } else {
                newColor[i] = convertToPercentage(color[i]);
              }
            }
          }
          color = newColor;
        }
        return tinycolor(color, opts);
      };
      function inputToRGB(color) {
        var rgb = { r: 0, g: 0, b: 0 };
        var a = 1;
        var ok = false;
        var format = false;
        if (typeof color == 'string') {
          color = stringInputToObject(color);
        }
        if (typeof color == 'object') {
          if (color.hasOwnProperty('r') && color.hasOwnProperty('g') && color.hasOwnProperty('b')) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
          } else {
            if (color.hasOwnProperty('h') && color.hasOwnProperty('s') && color.hasOwnProperty('v')) {
              color.s = convertToPercentage(color.s);
              color.v = convertToPercentage(color.v);
              rgb = hsvToRgb(color.h, color.s, color.v);
              ok = true;
              format = 'hsv';
            } else {
              if (color.hasOwnProperty('h') && color.hasOwnProperty('s') && color.hasOwnProperty('l')) {
                color.s = convertToPercentage(color.s);
                color.l = convertToPercentage(color.l);
                rgb = hslToRgb(color.h, color.s, color.l);
                ok = true;
                format = 'hsl';
              }
            }
          }
          if (color.hasOwnProperty('a')) {
            a = color.a;
          }
        }
        a = boundAlpha(a);
        return {
          ok: ok,
          format: color.format || format,
          r: mathMin(255, mathMax(rgb.r, 0)),
          g: mathMin(255, mathMax(rgb.g, 0)),
          b: mathMin(255, mathMax(rgb.b, 0)),
          a: a,
        };
      }
      function rgbToRgb(r, g, b) {
        return { r: bound01(r, 255) * 255, g: bound01(g, 255) * 255, b: bound01(b, 255) * 255 };
      }
      function rgbToHsl(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = mathMax(r, g, b),
          min = mathMin(r, g, b);
        var h,
          s,
          l = (max + min) / 2;
        if (max == min) {
          h = s = 0;
        } else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;
        }
        return { h: h, s: s, l: l };
      }
      function hslToRgb(h, s, l) {
        var r, g, b;
        h = bound01(h, 360);
        s = bound01(s, 100);
        l = bound01(l, 100);
        function hue2rgb(p, q, t) {
          if (t < 0) {
            t += 1;
          }
          if (t > 1) {
            t -= 1;
          }
          if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
          }
          if (t < 1 / 2) {
            return q;
          }
          if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
          }
          return p;
        }
        if (s === 0) {
          r = g = b = l;
        } else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1 / 3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1 / 3);
        }
        return { r: r * 255, g: g * 255, b: b * 255 };
      }
      function rgbToHsv(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = mathMax(r, g, b),
          min = mathMin(r, g, b);
        var h,
          s,
          v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max == min) {
          h = 0;
        } else {
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;
        }
        return { h: h, s: s, v: v };
      }
      function hsvToRgb(h, s, v) {
        h = bound01(h, 360) * 6;
        s = bound01(s, 100);
        v = bound01(v, 100);
        var i = math.floor(h),
          f = h - i,
          p = v * (1 - s),
          q = v * (1 - f * s),
          t = v * (1 - (1 - f) * s),
          mod = i % 6,
          r = [v, q, p, p, t, v][mod],
          g = [t, v, v, q, p, p][mod],
          b = [p, p, t, v, v, q][mod];
        return { r: r * 255, g: g * 255, b: b * 255 };
      }
      function rgbToHex(r, g, b, allow3Char) {
        var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];
        if (
          allow3Char &&
          hex[0].charAt(0) == hex[0].charAt(1) &&
          hex[1].charAt(0) == hex[1].charAt(1) &&
          hex[2].charAt(0) == hex[2].charAt(1)
        ) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
        }
        return hex.join('');
      }
      function rgbaToHex(r, g, b, a) {
        var hex = [
          pad2(convertDecimalToHex(a)),
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16)),
        ];
        return hex.join('');
      }
      tinycolor.equals = function (color1, color2) {
        if (!color1 || !color2) {
          return false;
        }
        return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
      };
      tinycolor.random = function () {
        return tinycolor.fromRatio({ r: mathRandom(), g: mathRandom(), b: mathRandom() });
      };
      function desaturate(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
      }
      function saturate(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
      }
      function greyscale(color) {
        return tinycolor(color).desaturate(100);
      }
      function lighten(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
      }
      function brighten(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var rgb = tinycolor(color).toRgb();
        rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
        rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
        rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
        return tinycolor(rgb);
      }
      function darken(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
      }
      function spin(color, amount) {
        var hsl = tinycolor(color).toHsl();
        var hue = (mathRound(hsl.h) + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return tinycolor(hsl);
      }
      function complement(color) {
        var hsl = tinycolor(color).toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return tinycolor(hsl);
      }
      function triad(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
          tinycolor(color),
          tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l }),
        ];
      }
      function tetrad(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
          tinycolor(color),
          tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l }),
        ];
      }
      function splitcomplement(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
          tinycolor(color),
          tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
      }
      function analogous(color, results, slices) {
        results = results || 6;
        slices = slices || 30;
        var hsl = tinycolor(color).toHsl();
        var part = 360 / slices;
        var ret = [tinycolor(color)];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(tinycolor(hsl));
        }
        return ret;
      }
      function monochromatic(color, results) {
        results = results || 6;
        var hsv = tinycolor(color).toHsv();
        var h = hsv.h,
          s = hsv.s,
          v = hsv.v;
        var ret = [];
        var modification = 1 / results;
        while (results--) {
          ret.push(tinycolor({ h: h, s: s, v: v }));
          v = (v + modification) % 1;
        }
        return ret;
      }
      tinycolor.mix = function (color1, color2, amount) {
        amount = amount === 0 ? 0 : amount || 50;
        var rgb1 = tinycolor(color1).toRgb();
        var rgb2 = tinycolor(color2).toRgb();
        var p = amount / 100;
        var w = p * 2 - 1;
        var a = rgb2.a - rgb1.a;
        var w1;
        if (w * a == -1) {
          w1 = w;
        } else {
          w1 = (w + a) / (1 + w * a);
        }
        w1 = (w1 + 1) / 2;
        var w2 = 1 - w1;
        var rgba = {
          r: rgb2.r * w1 + rgb1.r * w2,
          g: rgb2.g * w1 + rgb1.g * w2,
          b: rgb2.b * w1 + rgb1.b * w2,
          a: rgb2.a * p + rgb1.a * (1 - p),
        };
        return tinycolor(rgba);
      };
      tinycolor.readability = function (color1, color2) {
        var c1 = tinycolor(color1);
        var c2 = tinycolor(color2);
        var rgb1 = c1.toRgb();
        var rgb2 = c2.toRgb();
        var brightnessA = c1.getBrightness();
        var brightnessB = c2.getBrightness();
        var colorDiff =
          Math.max(rgb1.r, rgb2.r) -
          Math.min(rgb1.r, rgb2.r) +
          Math.max(rgb1.g, rgb2.g) -
          Math.min(rgb1.g, rgb2.g) +
          Math.max(rgb1.b, rgb2.b) -
          Math.min(rgb1.b, rgb2.b);
        return { brightness: Math.abs(brightnessA - brightnessB), color: colorDiff };
      };
      tinycolor.isReadable = function (color1, color2) {
        var readability = tinycolor.readability(color1, color2);
        return readability.brightness > 125 && readability.color > 500;
      };
      tinycolor.mostReadable = function (baseColor, colorList) {
        var bestColor = null;
        var bestScore = 0;
        var bestIsReadable = false;
        for (var i = 0; i < colorList.length; i++) {
          var readability = tinycolor.readability(baseColor, colorList[i]);
          var readable = readability.brightness > 125 && readability.color > 500;
          var score = 3 * (readability.brightness / 125) + readability.color / 500;
          if (
            (readable && !bestIsReadable) ||
            (readable && bestIsReadable && score > bestScore) ||
            (!readable && !bestIsReadable && score > bestScore)
          ) {
            bestIsReadable = readable;
            bestScore = score;
            bestColor = tinycolor(colorList[i]);
          }
        }
        return bestColor;
      };
      var names = (tinycolor.names = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '0ff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000',
        blanchedalmond: 'ffebcd',
        blue: '00f',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        burntsienna: 'ea7e5d',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '0ff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkgrey: 'a9a9a9',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkslategrey: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dimgrey: '696969',
        dodgerblue: '1e90ff',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'f0f',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        grey: '808080',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgray: 'd3d3d3',
        lightgreen: '90ee90',
        lightgrey: 'd3d3d3',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslategray: '789',
        lightslategrey: '789',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '0f0',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'f0f',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370db',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'db7093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'f00',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        slategrey: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        wheat: 'f5deb3',
        white: 'fff',
        whitesmoke: 'f5f5f5',
        yellow: 'ff0',
        yellowgreen: '9acd32',
      });
      var hexNames = (tinycolor.hexNames = flip(names));
      function flip(o) {
        var flipped = {};
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
          }
        }
        return flipped;
      }
      function boundAlpha(a) {
        a = parseFloat(a);
        if (isNaN(a) || a < 0 || a > 1) {
          a = 1;
        }
        return a;
      }
      function bound01(n, max) {
        if (isOnePointZero(n)) {
          n = '100%';
        }
        var processPercent = isPercentage(n);
        n = mathMin(max, mathMax(0, parseFloat(n)));
        if (processPercent) {
          n = parseInt(n * max, 10) / 100;
        }
        if (math.abs(n - max) < 0.000001) {
          return 1;
        }
        return (n % max) / parseFloat(max);
      }
      function clamp01(val) {
        return mathMin(1, mathMax(0, val));
      }
      function parseIntFromHex(val) {
        return parseInt(val, 16);
      }
      function isOnePointZero(n) {
        return typeof n == 'string' && n.indexOf('.') != -1 && parseFloat(n) === 1;
      }
      function isPercentage(n) {
        return typeof n === 'string' && n.indexOf('%') != -1;
      }
      function pad2(c) {
        return c.length == 1 ? '0' + c : '' + c;
      }
      function convertToPercentage(n) {
        if (n <= 1) {
          n = n * 100 + '%';
        }
        return n;
      }
      function convertDecimalToHex(d) {
        return Math.round(parseFloat(d) * 255).toString(16);
      }
      function convertHexToDecimal(h) {
        return parseIntFromHex(h) / 255;
      }
      var matchers = (function () {
        var CSS_INTEGER = '[-\\+]?\\d+%?';
        var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
        var CSS_UNIT = '(?:' + CSS_NUMBER + ')|(?:' + CSS_INTEGER + ')';
        var PERMISSIVE_MATCH3 = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?';
        var PERMISSIVE_MATCH4 =
          '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?';
        return {
          rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
          rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
          hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
          hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
          hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
          hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
          hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        };
      })();
      function stringInputToObject(color) {
        color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
        var named = false;
        if (names[color]) {
          color = names[color];
          named = true;
        } else {
          if (color == 'transparent') {
            return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
          }
        }
        var match;
        if ((match = matchers.rgb.exec(color))) {
          return { r: match[1], g: match[2], b: match[3] };
        }
        if ((match = matchers.rgba.exec(color))) {
          return { r: match[1], g: match[2], b: match[3], a: match[4] };
        }
        if ((match = matchers.hsl.exec(color))) {
          return { h: match[1], s: match[2], l: match[3] };
        }
        if ((match = matchers.hsla.exec(color))) {
          return { h: match[1], s: match[2], l: match[3], a: match[4] };
        }
        if ((match = matchers.hsv.exec(color))) {
          return { h: match[1], s: match[2], v: match[3] };
        }
        if ((match = matchers.hsva.exec(color))) {
          return { h: match[1], s: match[2], v: match[3], a: match[4] };
        }
        if ((match = matchers.hex8.exec(color))) {
          return {
            a: convertHexToDecimal(match[1]),
            r: parseIntFromHex(match[2]),
            g: parseIntFromHex(match[3]),
            b: parseIntFromHex(match[4]),
            format: named ? 'name' : 'hex8',
          };
        }
        if ((match = matchers.hex6.exec(color))) {
          return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
          };
        }
        if ((match = matchers.hex3.exec(color))) {
          return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? 'name' : 'hex',
          };
        }
        return false;
      }
      window.tinycolor = tinycolor;
    })();
    $(function () {
      if ($.fn.spectrum.load) {
        $.fn.spectrum.processNativeColorInputs();
      }
    });
  });
})();
var deviceVal = browserRedirect();
var ifLogin = $('.user-login')[0];
function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os';
  var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
  var bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb';
  var bIsAndroid = sUserAgent.match(/android/i) == 'android';
  var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
  var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return 'phone';
  } else {
    return 'pc';
  }
}
$(function () {
  $(document).on('click', '.website-notice', function () {
    layer.close(websiteNotice);
    localStorage.noticeStatus = true;
  });
});
$('.nav-btn').on('click', function () {
  $('.nav').toggleClass('showNav');
  $(this).toggleClass('animated2');
});
if (deviceVal === 'pc') {
  $('.duty-nav').hover(
    function () {
      $('#tow-nav').fadeIn(200);
    },
    function () {
      $('#tow-nav').hover(
        function () {
          $('#tow-nav').fadeIn(0);
        },
        function () {
          $('#tow-nav').fadeOut(0);
        }
      );
      $('#tow-nav').fadeOut(0);
    }
  );
}
// $('[data-toggle="tooltip"]').tooltip();
document.addEventListener('DOMContentLoaded', loaded);
function loaded() {
  setContainerSize();
  search();
  if (localData) {
    var parseData = JSON.parse(localData);
    var allLinkParentNode = $('.i-link-box .row');
    for (item in parseData) {
      var thisLinkParentNode = allLinkParentNode[item].children;
      for (var i = 0; i < parseData[item].length; i++) {
        var linkData = parseData[item][i].split('|');
        thisLinkParentNode[i].firstElementChild.innerHTML = linkData[0];
        thisLinkParentNode[i].firstElementChild.href = linkData[1];
      }
    }
  }
  if (getTitle && getTitle === 'false') {
    $('.link-list-tit').hide();
    $('#set-title').text('显 示 标 题');
    isAdvanced = false;
  }
  var localTheme = localStorage.getItem('themeData');
  if (localTheme) {
    data = JSON.parse(localTheme).data;
    if (data[0] === 1) {
      $('.wrapper-two li').removeClass('active');
      $('.wrapper-one li').eq(data[1]).addClass('active').siblings().removeClass('active');
      $('#content')
        .removeClass()
        .addClass('bg' + data[1])
        .css('background', data[5]);
      $('header')
        .removeClass()
        .addClass('header-diy' + data[1]);
    } else {
      if (data[0] === 2 && data[1] === 8) {
        $('.wrapper-one li').removeClass('active');
        $('.wrapper-two li').eq(0).addClass('active').siblings().removeClass('active');
        $('#content').removeClass().addClass('bg-auto').css('background', data[5]);
        $('header').removeClass().addClass('bg-auto-head');
      } else {
        if (data[0] === 2 && data[1] === 9) {
          $('.wrapper-one li').removeClass('active');
          $('.wrapper-two li').eq(1).addClass('active').siblings().removeClass('active');
          $('#content')
            .removeClass()
            .addClass('bg-diy')
            .css('background', 'url(' + data[6] + ') center center / cover no-repeat');
          $('header').removeClass().addClass('bg-diy-head');
          $('.link-list-tit').css('color', data[2]);
          $('.link-list-a').css({ color: data[3], background: data[4] });
        }
      }
    }
    if (data[6]) {
      $('.image-url input').val(data[6]);
      themeData.data[6] = data[6];
    }
    for (var i = 2; i < 5; i++) {
      themeData.data[i] = data[i];
    }
  }
  $('#link-list-item').css('opacity', '1');
  mobileUser();
}
function search() {
  const searchImg = `url('${themeUrl}/images/search_icon.png')`;
  $('.search-icon').css('opacity', '1');
  $('.search-icon').css('background-image', searchImg);
  let listIndex = -1;
  let hotList = 0;
  let savedData = {
    url: 'https://www.baidu.com/s?wd=',
    position: '-10px -10px',
    hotStatus: true,
  };
  const searchData = [
    {
      name: '百度',
      position: '-10px -10px',
      url: 'https://www.baidu.com/s?wd=',
    },
    {
      name: '谷歌',
      position: '-62px -10px',
      url: 'https://www.google.com/search?q=',
    },
    {
      name: '必应',
      position: '-10px -62px',
      url: 'https://cn.bing.com/search?q=',
    },
    {
      name: '好搜',
      position: '-62px -62px',
      url: 'https://www.so.com/s?q=',
    },
    {
      name: '搜狗',
      position: '-114px -10px',
      url: 'https://www.sogou.com/web?query=',
    },
    {
      name: '淘宝',
      position: '-114px -62px',
      url: 'https://s.taobao.com/search?q=',
    },
    {
      name: '京东',
      position: '-10px -114px',
      url: 'http://search.jd.com/Search?keyword=',
    },
    {
      name: '天猫',
      position: '-62px -114px',
      url: 'https://list.tmall.com/search_product.htm?q=',
    },
    {
      name: '1688',
      position: '-114px -114px',
      url: 'https://s.1688.com/selloffer/offer_search.htm?keywords=',
    },
    {
      name: '知乎',
      position: '-166px -10px',
      url: 'https://www.zhihu.com/search?type=content&q=',
    },
    {
      name: '微博',
      position: '-166px -62px',
      url: 'https://s.weibo.com/weibo/',
    },
    {
      name: '豆瓣',
      position: '-166px -114px',
      url: 'https://www.douban.com/search?source=suggest&q=',
    },
    {
      name: '优酷',
      position: '-10px -166px',
      url: 'https://so.youku.com/search_video/q_',
    },
    {
      name: 'GitHub',
      position: '-62px -166px',
      url: 'https://github.com/search?utf8=✓&q=',
    },
    {
      name: 'B站',
      position: '-114px -166px',
      url: 'http://search.bilibili.com/all?keyword=',
    },
  ];
  var localSavedData = localStorage.getItem('savedData');
  if (localSavedData) {
    savedData = JSON.parse(localSavedData);
  }

  /**
   * 当前已有的网址信息
   */
  const curNavList = [];
  const navList = document.querySelectorAll('.main-content .label-info');
  navList.forEach(item => {
    const userImg = item.querySelector('.xe-user-img img');
    curNavList.push({
      url: item.dataset.originalTitle || '',
      title: item.querySelector('strong').textContent.trim() || '',
      des: item.querySelector('p').textContent.trim() || '',
      src: (userImg && userImg.src) || '',
    });
  });

  function isEqual(lhs, rhs) {
    const { url: lUrl, title: lTitle, des: lDes } = lhs;
    const { url: rUrl, title: rTitle, des: rDes } = rhs;
    return lUrl === rUrl && lTitle === rTitle && lDes === rDes;
  }

  function getNavKeyword(val) {
    const results = [];
    if (val) {
      const lowVal = val.toLowerCase();
      for (const ele of curNavList) {
        const { url, title, des } = ele;
        const lowUrl = url.toLowerCase();
        const lowTitle = title.toLowerCase();
        const lowDes = des.toLowerCase();
        if (lowUrl.includes(lowVal) || lowTitle.includes(lowVal) || lowDes.includes(lowVal)) {
          //! 不区分大小写
          let eq = false;
          for (const item of results) {
            if (isEqual(item, ele)) {
              eq = true;
              break;
            }
          }
          if (!eq) {
            results.push(ele);
          }
        }

        if (results.length >= 10) {
          break;
        }
      }
    }
    return results;
  }

  function getHotkeyword(value) {
    listIndex = -1;
    hotList = 0;
    $('#box ul').text('');
    const res = getNavKeyword(value);
    if (res.length > 0) {
      hotList = res.length;
      $('#box').css('display', 'block');
      for (let i = 0; i < res.length; i++) {
        const { url, title, des, src } = res[i];
        if (src) {
          $('#box ul').append(
              `<li><span><img class="img-circle" src="${src}" /></span> <a href="${url}" target="_blank" title="${des}">${title} <small>${des}</small></a></li>`
          );
        } else {
          const tit = title.substring(0, 1);
          $('#box ul').append(
              `<li><span class="img-circle no-img">${tit}</span> <a href="${url}" target="_blank" title="${des}">${title} <small>${des}</small></a></li>`
          );
        }
      }
    } else {
      $('#box').css('display', 'none');
    }
  }

  $('#txt').keyup(function (e) {
    if ($(this).val()) {
      if (e.keyCode == 38 || e.keyCode == 40 || !savedData.hotStatus) {
        return;
      }
      getHotkeyword($(this).val());
    } else {
      $('.search-clear').css('display', 'none');
      $('#box').css('display', 'none');
    }
  });
  $('#txt').keydown(function (e) {
    if (e.keyCode === 40) {
      listIndex === hotList - 1 ? (listIndex = 0) : listIndex++;
      $('#box ul li').eq(listIndex).addClass('current').siblings().removeClass('current');
    }
    if (e.keyCode === 38) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      if (e.returnValue) {
        e.returnValue = false;
      }
      listIndex === 0 || listIndex === -1 ? (listIndex = hotList - 1) : listIndex--;
      $('#box ul li').eq(listIndex).addClass('current').siblings().removeClass('current');
    }
    if (e.keyCode === 13) {
      if (listIndex === -1) {
        window.open(savedData.url + encodeURIComponent($('#txt').val()));
      } else {
        $('#box ul li a').eq(listIndex)[0].click();
      }

      $('#box').css('display', 'none');
      $('#txt').blur();
      $('#box ul li').removeClass('current');
      listIndex = -1;
    }
  });
  $('#txt').focus(function () {
    $('.search-box').css('box-show', 'inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3)');
    if ($(this).val() && savedData.hotStatus) {
      getHotkeyword($(this).val());
    }
  });
  $('#txt').blur(function () {
    setTimeout(function () {
      $('#box').css('display', 'none');
    }, 250);
  });
  for (var i = 0; i < searchData.length; i++) {
    $('.search-engine-list').append(
      `<li><i style="background-image:${searchImg}; background-position: ${searchData[i].position};"/></i><span>${searchData[i].name}</span></li>`
    );
  }
  $('.search-icon, .search-engine').hover(
    function () {
      $('.search-engine').css('display', 'block');
    },
    function () {
      $('.search-engine').css('display', 'none');
    }
  );
  $('#hot-btn').click(function () {
    $(this).toggleClass('off');
    savedData.hotStatus = !savedData.hotStatus;
    localStorage.savedData = JSON.stringify(savedData);
  });
  savedData.hotStatus ? $('#hot-btn').removeClass('off') : $('#hot-btn').addClass('off');

  $('.search-icon').css('background-position', savedData.position);
  $('#search-btn').click(function () {
    const textValue = $('#txt').val();
    if (textValue) {
      window.open(savedData.url + encodeURIComponent(textValue));
      $('#box ul').html('');
    } else {
      layer.msg('请输入关键词！', { time: 500 }, function () {
        $('#txt').focus();
      });
    }
  });

  $('.search-engine-list li').click(function () {
    var index = $(this).index();
    savedData.position = searchData[index].position;
    $('.search-icon').css('background-position', savedData.position);
    savedData.url = searchData[index].url;
    $('.search-engine').css('display', 'none');
    localStorage.savedData = JSON.stringify(savedData);
  });
}
var customizeState = false;
var localData = localStorage.getItem('customData');
var loadData = localData ? localData : getCustomData();
var getTitle = localStorage.getItem('titleState');
function openCustomize() {
  $('.link-list-item').toggleClass('customize_mode');
  $('.not_operational').toggleClass('shaow_tips');
  $('#sortableList').toggleClass('sortableList');
  $('#zhezhao').toggleClass('showbox');
  customizeState = !customizeState;
  if (customizeState) {
    $('.sortableList').sortable();
  } else {
    $('#sortableList').sortable('destroy');
  }
}
$('.customize').click(openCustomize);
$('.close-customize, #zhezhao').click(function () {
  var closeData = getCustomData();
  if (closeData !== loadData) {
    layer.confirm('您修改的内容还未保存，确定要退出吗？', { btn: ['确定', '取消'] }, function (index) {
      location.reload();
    });
  } else {
    openCustomize();
  }
});
$('.link-list-tit').click(function () {
  if (customizeState) {
    var thisTitle = $(this);
    var thisID = $(this).attr('id');
    $(this).siblings().addClass('shaow-edit-category').val(thisTitle.html()).focus().select();
    $('.shaow-edit-category').blur(function () {
      thisTitle.html(this.value);
      $('.shaow-edit-category').removeClass('shaow-edit-category');
    });
  }
});
var thisLink;
$('.link-list-a').click(function (event) {
  if (customizeState) {
    var event = event || window.event;
    if (event.preventDefault) {
      event.preventDefault();
    }
    if (event.returnValue) {
      event.returnValue = false;
    }
    $('#inputAccountExample1').val(this.innerHTML);
    $('#inputAccountExample2').val(this.href);
    $('#myModal').modal({ keyboard: false, show: true });
    thisLink = this;
  }
});
$('.btn-primary').click(function () {
  thisLink.innerHTML = $('#inputAccountExample1').val();
  thisLink.href = $('#inputAccountExample2').val();
});
function getCustomData() {
  var allTitleNode = $('.link-list-tit');
  var allLinkParentNode = $('.i-link-box .row');
  var customData = {};
  for (var i = 0; i < allTitleNode.length; i++) {
    var thisLinkParentNode = allLinkParentNode[i].children;
    customData[i] = [];
    for (var j = 1; j <= allLinkParentNode.length; j++) {
      var thisVal = thisLinkParentNode[j].firstElementChild.innerHTML;
      var thisHref = thisLinkParentNode[j].firstElementChild.href;
      customData[i].push(thisVal + '|' + thisHref);
    }
    customData[i].unshift(allTitleNode[i].innerHTML);
  }
  return JSON.stringify(customData);
}
function localSave() {
  var customData = getCustomData();
  localStorage.customData = customData;
  loadData = customData;
  layer.msg('保存成功', { time: 1000 }, function () {
    openCustomize();
  });
}
$('#local-save').click(localSave);
var userID = localStorage.getItem('userInfo');
$('#server-save').click(function () {
  if (!ifLogin) {
    $.ajax({
      type: 'PUT',
      url: '/api/v1/users/' + userID,
      headers: { 'Content-Type': 'application/json', 'X-SS-API-KEY': '8a32a681-724a-4c2b-8e57-a7af37b48260' },
      data: JSON.stringify({ customContext: getCustomData() }),
      success: function () {
        localSave();
      },
      error: function () {
        layer.confirm(
          '似乎发送了点意外，请先本地保存，然后重新登录再进行下一步操作。',
          { icon: 2, title: '错误提示', btn: ['本地保存', '取消'] },
          function (index) {
            layer.close(index);
            localSave();
            $.ajax({
              type: 'POST',
              url: '/api/v1/users/actions/logout',
              success: function () {
                setTimeout(function () {
                  location.reload();
                }, 1500);
              },
            });
          }
        );
      },
    });
  } else {
    layer.confirm(
      '你当前未登录，请登录后再进行操作.<br/>是否先本地保存？',
      { icon: 2, title: '错误提示', btn: ['本地保存', '取消'] },
      function (index) {
        layer.close(index);
        localSave();
      }
    );
  }
});
function syncData() {
  if (!ifLogin) {
    if (userID) {
      $.ajax({
        type: 'GET',
        url: '/api/v1/users/' + userID,
        success: function (res) {
          var parseData = JSON.parse(res.value.customContext);
          var allLinkParentNode = $('.i-link-box .row');
          for (item in parseData) {
            var thisLinkParentNode = allLinkParentNode[item].children;
            for (var i = 0; i < parseData[item].length; i++) {
              var linkData = parseData[item][i].split('|');
              thisLinkParentNode[i].firstElementChild.innerHTML = linkData[0];
              thisLinkParentNode[i].firstElementChild.href = linkData[1];
            }
          }
          if (res.value.customContext) {
            localStorage.customData = res.value.customContext;
            layer.msg('数据同步成功', { time: 1000 }, function () {
              location.reload();
            });
          } else {
            layer.msg('数据同步失败！账户中数据为空');
          }
        },
      });
    } else {
      layer.msg('发生意外，请重新登录后再进行操作');
    }
  } else {
    layer.msg('你未登录，请登录后再进行操作');
  }
}
$('#sync-data').click(syncData);
function restoreData() {
  localStorage.removeItem('customData');
  if (!localStorage.getItem('customData')) {
    layer.msg('数据重置成功', { time: 1000 }, function () {
      location.reload();
    });
  }
}
$('#restore-data').click(restoreData);
var isAdvanced = true;
$('#set-title').click(function () {
  isAdvanced = !isAdvanced;
  if (isAdvanced) {
    $('.link-list-tit').show();
    $(this).text('隐 藏 标 题');
  } else {
    $('.link-list-tit').hide();
    $(this).text('显 示 标 题');
  }
  localStorage.titleState = isAdvanced;
  layer.msg('操作成功，已自动保存', { time: 800 });
});
var layerObj = {
  type: 1,
  area: '350px',
  skin: 'layer-login',
  closeBtn: 0,
  anim: 2,
  shadeClose: true,
  title: '登录账号',
  content:
    '<div class="input-control has-icon-left">' +
    '<input id="user-name" type="text" class="form-control" placeholder="用户名" onblur="getInputInfo(this)" onkeyup="getKeyInfo(this)">' +
    '<label class="input-control-icon-left"><i class="fa fa-user"></i></label>' +
    '<span class="input-error">请输入用户名</span>' +
    '</div>' +
    '<div class="input-control has-icon-left has-icon-right">' +
    '<input id="user-password" type="password" class="form-control" placeholder="密码" onblur="getInputInfo(this)" onkeyup="getKeyInfo(this)">' +
    '<label class="input-control-icon-left"><i class="fa fa-key"></i></label>' +
    '<span class="input-error">请输入登录密码</span>' +
    '</div>' +
    '<div class="login-btn"><button id="login-btn" onclick="submitLogin()">立 即 登 录</button></div>' +
    '<div class="login-register">还没有账号？<a href="javascript:;">立即注册</a></div>',
};
layerRegisterLayer = {
  type: 1,
  area: '350px',
  skin: 'layer-login',
  closeBtn: 0,
  anim: 2,
  shadeClose: true,
  title: '注册账号',
  content:
    '<div class="input-control has-icon-left">' +
    '<input id="reg-name" type="text" class="form-control" placeholder="用户名（字母或数字组成）" onblur="getInputInfo(this)" onkeyup="getKeyInfo(this)">' +
    '<label class="input-control-icon-left"><i class="fa fa-user"></i></label>' +
    '<span class="input-error">请输入用户名，字母或数字组成</span>' +
    '</div>' +
    '<div class="input-control has-icon-left has-icon-right">' +
    '<input id="reg-password" type="password" class="form-control" placeholder="请输入您的密码（至少6位）" onblur="getInputInfo(this)" onkeyup="getKeyInfo(this)">' +
    '<label class="input-control-icon-left"><i class="fa fa-key"></i></label>' +
    '<span class="input-error">请输入密码，长度不少于6位</span>' +
    '</div>' +
    '<div class="input-control has-icon-left has-icon-right">' +
    '<input id="reg-email" type="email" class="form-control" placeholder="请输入电子邮箱" onkeyup="getKeyInfo(this)">' +
    '<label class="input-control-icon-left"><i class="fa fa-envelope-o"></i></label>' +
    '<span class="input-error">请输入电子邮箱</span>' +
    '</div>' +
    '<div class="login-btn"><button id="register-btn" onclick="submitRegister()">立 即 注 册</button></div>' +
    '<div class="register-tips">提示：请牢记密码，暂时未开通找回密码功能</div>',
};
var loginLayer;
var registerLayer;
$(document).on('click', '#login', function () {
  loginLayer = layer.open(layerObj);
});
$(document).on('click', '#register', function () {
  registerLayer = layer.open(layerRegisterLayer);
});
$(document).on('click', '.login-register a', function () {
  layer.close(loginLayer);
  registerLayer = layer.open(layerRegisterLayer);
});
function mobileUser() {
  $('.mobile-user').on('click', '#mobile-login', function () {
    layer.open(layerObj);
  });
  $('.mobile-user').on('click', '#mobile-register', function () {
    layer.open(layerRegisterLayer);
  });
}
function getInputInfo(e, errortips, errorindex) {
  var errortips = errortips || '输入信息有误，字段长度不能小于6位';
  var inputError = $(e).nextAll()[1];
  if (e.value == '') {
    inputError.style.display = 'block';
  } else {
    if (e.value.length < 6) {
      inputError.style.display = 'block';
      inputError.innerHTML = errortips;
    } else {
      if (errorindex === 'email') {
        inputError.style.display = 'block';
        inputError.innerHTML = errortips;
      } else {
        inputError.style.display = 'none';
      }
    }
  }
  return inputError;
}
function getKeyInfo(e) {
  if (e.value) {
    $(e).nextAll()[1].style.display = 'none';
  }
}
function inputValue() {
  var loginInput = $('.layui-layer-content input');
  var ifInput = true;
  for (var i = 0; i < loginInput.length; i++) {
    if (!loginInput[i].value) {
      ifInput = false;
      getInputInfo(loginInput[i]);
    }
  }
  return [loginInput, ifInput];
}
function submitLogin() {
  var retVal = inputValue();
  if (retVal[1] && retVal[0][1].value.length >= 6) {
    $.ajax({
      type: 'POST',
      url: '/api/v1/users/actions/login',
      headers: { 'Content-Type': 'application/json', 'X-SS-API-KEY': '8a32a681-724a-4c2b-8e57-a7af37b48260' },
      data: JSON.stringify({ account: retVal[0][0].value, password: md5(retVal[0][1].value) }),
      success: function (res) {
        localStorage.userInfo = res.value.id;
        window.location.href = '/index.html';
      },
      error: function (xhr) {
        layer.msg(xhr.responseJSON.message, { time: 1000 });
      },
    });
  }
}
function submitRegister() {
  var retVal = inputValue();
  var ifForm = true;
  var regex = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (retVal[0][0].value.length < 6 || retVal[0][0].value.length > 20) {
    getInputInfo(retVal[0][0], '用户名不合法，由字母或数字组成，长度6-20位');
    ifForm = false;
  } else {
    if (retVal[0][1].value.length < 6) {
      ifForm = false;
    }
  }
  if (!regex.test(retVal[0][2].value)) {
    getInputInfo(retVal[0][2], '邮箱格式不合法，请输入正确的邮箱地址', 'email');
    ifForm = false;
  }
  if (ifForm) {
    $.ajax({
      type: 'POST',
      url: '/api/v1/users',
      headers: { 'Content-Type': 'application/json', 'X-SS-API-KEY': '8a32a681-724a-4c2b-8e57-a7af37b48260' },
      data: JSON.stringify({ userName: retVal[0][0].value, password: retVal[0][1].value, email: retVal[0][2].value }),
      success: function (res) {
        layer.close(registerLayer);
        layer.msg('注册成功！正在弹出登录窗口...', { time: 2000 }, function () {
          layer.open(layerObj);
        });
      },
      error: function (xhr) {
        layer.msg(xhr.responseJSON.message, { time: 1000 });
      },
    });
  }
}
$('.mobile-user').on('click', '#user-btn', function (event) {
  if (event.target.offsetParent == this) {
    $('#user-btn').toggleClass('show-user-btn');
  }
});
$('.mobile-user').on('click', '.user-btn-group li', function () {
  var index = $(this).index();
  $('#user-btn').toggleClass('show-user-btn');
  if (index === 0) {
    syncData();
  } else {
    if (index === 1) {
      restoreData();
    } else {
      $authVue.logout();
    }
  }
});
$('.theme, #cancel, #cancel-x, .zhezhao-bg').on('click', function () {
  $('.zhezhao-bg').toggleClass('showbox');
  $('.theme-panel').toggleClass('show-theme-panel');
  var cancelIndex;
  $('#title-color').spectrum({
    color: themeData.data[2],
    preferredFormat: 'hex',
    showInput: true,
    showSelectionPalette: true,
    chooseText: '确定',
    cancelText: '取消',
    move: function (color) {
      $('.link-list-tit').css('color', color.toHexString());
    },
    change: function (color) {
      $('.link-list-tit').css('color', color.toHexString());
      themeData.data[2] = color.toHexString();
    },
    show: function () {
      cancelIndex = 0;
      showDiy($('.wrapper-two li').eq(1));
    },
  });
  $('#text-color').spectrum({
    color: themeData.data[3],
    preferredFormat: 'hex',
    showInput: true,
    chooseText: '确定',
    cancelText: '取消',
    move: function (color) {
      setTimeout(function () {
        $('.link-list-a').css('color', color.toHexString());
      }, 20);
    },
    change: function (color) {
      $('.link-list-a').css('color', color.toHexString());
      themeData.data[3] = color.toHexString();
    },
    show: function () {
      cancelIndex = 1;
      showDiy($('.wrapper-two li').eq(1));
    },
  });
  $('#bg-color').spectrum({
    color: themeData.data[4],
    preferredFormat: 'hex',
    showInput: true,
    showAlpha: true,
    chooseText: '确定',
    cancelText: '取消',
    move: function (color) {
      $('.link-list-a').css('background', color);
    },
    change: function (color) {
      $('.link-list-a').css('background', color);
      themeData.data[4] = color.toRgbString();
    },
    show: function () {
      cancelIndex = 2;
      showDiy($('.wrapper-two li').eq(1));
    },
  });
  $('.sp-cancel').click(function () {
    if (cancelIndex === 0) {
      $('.link-list-tit').css('color', themeData[2]);
    } else {
      if (cancelIndex === 1) {
        $('.link-list-a').css('color', themeData[3]);
      } else {
        $('.link-list-a').css('background', themeData[4]);
      }
    }
  });
});
var themeData = {
  img: [
    ,
    "url('../images/bg.jpg') center center / cover no-repeat",
    "url('../images/bg2.jpg') center center / cover no-repeat",
    "url('../images/bg3.jpg') center center / cover no-repeat",
    "url('../images/bg4.jpg') center center / cover no-repeat",
    "url('../images/bg5.jpg') center center / cover no-repeat",
    "url('../images/bg6.jpg') center center / cover no-repeat",
    "url('../images/bg7.jpg') center center / cover no-repeat",
    "url('https://api.dujin.org/bing/1920.php') center center / cover no-repeat",
    '',
  ],
  data: [0, 0, '#b7b7b7', '#808080', '#ffffff', '', ''],
};
function selectTheme(self, hide, bg, bgclassone, bgclasstwo, indexs) {
  var clickIndex = !indexs ? $(self).index() : indexs;
  $(hide).removeClass('active');
  $(self).addClass('active').siblings().removeClass('active');
  if (clickIndex === 0) {
    $(bg).removeClass().addClass(bgclassone).css('background', '');
    themeData.data[0] = 0;
    themeData.data[1] = 0;
  } else {
    if (clickIndex > 0 && clickIndex < 8) {
      $(bg).removeClass().addClass(bgclasstwo).css('background', themeData.img[clickIndex]);
      $('header')
        .removeClass()
        .addClass('header-diy' + clickIndex);
      themeData.data[0] = 1;
      themeData.data[1] = clickIndex;
    } else {
      var thisClass = clickIndex === 8 ? bgclassone : bgclasstwo;
      $(bg).removeClass().addClass(thisClass).css('background', themeData.img[clickIndex]);
      $('header')
        .removeClass()
        .addClass(thisClass + '-head');
      themeData.data[0] = 2;
      themeData.data[1] = clickIndex;
    }
  }
  themeData.data[5] = themeData.img[clickIndex];
}
$('.wrapper-one li').click(function () {
  selectTheme(this, '.wrapper-two li', '#content', 'default-bg', 'bg' + $(this).index());
  $('.link-list-tit, .link-list-a').attr('style', '');
});
$('.wrapper-two li').click(function () {
  showDiy(this);
});
function showDiy(self) {
  selectTheme(self, '.wrapper-one li', '#content', 'bg-auto', 'bg-diy', $(self).index() === 0 ? 8 : 9);
  if ($(self).index() === 0) {
    $('.link-list-tit, .link-list-a').attr('style', '');
  }
  var imgURL = $('.image-url input').val();
  if (imgURL && $(self).index() === 1) {
    showDiyBackground(imgURL);
  }
}
$('.image-url input').focus(function () {
  $(this)
    .keyup(function () {
      showDiyBackground($(this).val());
    })
    .mouseup(function () {
      showDiyBackground($(this).val());
    });
  showDiy($('.wrapper-two li').eq(1));
});
function showDiyBackground(val) {
  if (val) {
    themeData.data[6] = val;
    $('#content').css('background', 'url(' + val + ') center center / cover no-repeat');
    $('.link-list-tit').css('color', themeData.data[2]);
    $('.link-list-a').css({ color: themeData.data[3], background: themeData.data[4] });
  }
}
$('#okay').click(function () {
  localStorage.themeData = JSON.stringify(themeData);
  layer.msg('保存成功', { time: 1000 }, function () {
    $('.theme-panel').toggleClass('show-theme-panel');
  });
});
function setContainerSize() {
  var contentHeight = $('.main-index').height() + 50;
  var seeHeight = document.documentElement.clientHeight || document.body.clientHeight;
  if (seeHeight < contentHeight) {
    for (var i = 6; i < 9; i++) {
      $('.i-link-box').eq(i).css('display', 'none');
    }
  } else {
    $('.i-link-box').css('display', 'block');
  }
}
$(window).resize(function () {
  setContainerSize();
});
