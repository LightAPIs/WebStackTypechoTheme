<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit;
error_reporting(0);
?>
<footer class="main-footer sticky footer-type-1">
    <div class="footer-inner">
        <div class="zmki_footer_mar">
            &copy; <?php echo date('Y'); ?>&nbsp;Theme:
            <a href="https://github.com/wclk/WebStack_ZMKI" target="_blank" rel="nofollow"><strong>ZMKI</strong></a>
            Design BY <a
                    href="https://github.com/WebStackPage/WebStackPage.github.io" target="_blank"
                    rel="nofollow"><strong>WebStackPage</strong></a> Modify BY <a href="https://github.com/LightAPIs"
                                                                                  target="_blank"
                                                                                  rel="nofollow"><strong>Light</strong></a>.
        </div>

        <!--站点运行时间开始-->
        <div class="zmki_footer_mar">
            <?php if ($this->options->zmki_time_no == '1') : ?>
                站点已稳定运行：<span id=span_dt_dt style="color: #2F889A;"></span>
                <script type="text/javascript">
                    function show_date_time() {
                        window.setTimeout("show_date_time()", 1000);
                        const birthDay = new Date("<?php $this->options->zmki_time(); ?> ");
                        const today = new Date();
                        const timeold = (today.getTime() - birthDay.getTime());
                        const msPerDay = 24 * 60 * 60 * 1000
                        const e_daysold = timeold / msPerDay
                        const daysold = Math.floor(e_daysold);
                        const e_hrsold = (e_daysold - daysold) * 24;
                        const hrsold = Math.floor(e_hrsold);
                        const e_minsold = (e_hrsold - hrsold) * 60;
                        const minsold = Math.floor((e_hrsold - hrsold) * 60);
                        const seconds = Math.floor((e_minsold - minsold) * 60);
                        document.getElementById('span_dt_dt').innerHTML = '<b style=color:#C40000>' + daysold + '</b> 天 <b style=color:#C40000>' + hrsold + '</b> 时 <b style=color:#C40000>' + minsold + '</b> 分 <b style=color:#C40000>' + seconds + '</b> 秒';
                    }

                    show_date_time();
                </script>
            <?php endif; ?>
            <!--站点运行时间结束-->
        </div>
    </div>
</footer>
<?php if ($this->is('index')) : ?>
    <script type="text/javascript">
        const mainMenu = document.querySelector('#main-menu');
        $("a.smooth").click(function (e) {
            const isMobile = document.querySelector('html').classList.contains('screen-phone');
            $("#main-menu li").each(function () {
                $(this).removeClass("active");
            });
            $(this).parent("li").addClass("active");
            e.preventDefault();
            const href = $(this).attr("href");
            let pos = $(`[data-set-nav=${href}]`).offset().top;
            const searchInput = document.querySelector('.search-input');
            if (isMobile) {
                pos -= searchInput && window.isSearchTop == '1' ? 150 : 25;
                $('.page-container .sidebar-menu').fadeToggle('normal');
            } else {
                pos -= searchInput && window.isSearchTop == '1' ? 100 : 70;
            }
            $("html,body").animate({
                scrollTop: pos
            }, 500);
        });
    </script>
<?php endif; ?>
<script src="<?php echo THEME_URL ?>/js/index.js"></script>
<script src="<?php echo THEME_URL ?>/js/zui.js"></script>
<script src="<?php echo THEME_URL ?>/js/bootstrap.min.js"></script>
<script src="<?php echo THEME_URL ?>/js/TweenMax.min.js"></script>
<script src="<?php echo THEME_URL ?>/js/resizeable.js"></script>
<script src="<?php echo THEME_URL ?>/js/joinable.js"></script>
<script src="<?php echo THEME_URL ?>/js/xenon-api.js"></script>
<script src="<?php echo THEME_URL ?>/js/xenon-toggles.js"></script>
<script src="<?php echo THEME_URL ?>/js/xenon-custom.js"></script>
<script type="text/javascript">
    (function () {
        const cookie = {
            set(key, val, days = 365) {
                document.cookie = `${key}=${val};path=/;max-age=${days * 24 * 3600}`;
            },
            get(key) {
                const getVal = document.cookie.replace(/\s/g, '');
                const cookieArr = getVal.split(';');
                for (const co of cookieArr) {
                    const arr = co.split('=');
                    if (key === arr[0]) {
                        return arr[1];
                    }
                }
                return '';
            }
        }

        function darkHandler(darkMode, mode, write = false) {
            write && write && cookie.set('dark_mode', darkMode);
            const night = cookie.get('night');
            if (darkMode === '1') {
                // 夜间模式
                mode && (mode.style.backgroundImage = 'url(<?php echo THEME_URL ?>/fonts/night.svg)');
                if (night !== '1') {
                    document.body.classList.add('night');
                    cookie.set('night', '1');
                    console.log('开启夜间模式');
                }
            } else if (darkMode === '2') {
                // 跟随系统
                mode && (mode.style.backgroundImage = 'url(<?php echo THEME_URL ?>/fonts/system.svg)');
                const matches = matchMedia('(prefers-color-scheme: dark)').matches;
                if (matches) {
                    if (night !== '1') {
                        document.body.classList.add('night');
                        cookie.set('night', '1');
                        console.log('跟随系统开启夜间模式');
                    }
                } else {
                    if (night !== '0') {
                        document.body.classList.remove('night');
                        cookie.set('night', '0');
                        console.log('跟随系统关闭夜间模式');
                    }
                }
            } else if (darkMode === '3') {
                // 自动切换
                mode && (mode.style.backgroundImage = 'url(<?php echo THEME_URL ?>/fonts/auto.svg)');
                const hours = new Date().getHours();
                if (hours > 19 || hours < 7) {
                    if (night !== '1') {
                        document.body.classList.add('night');
                        cookie.set('night', '1');
                        console.log('夜间模式自动开启');
                    }
                } else {
                    if (night !== '0') {
                        document.body.classList.remove('night');
                        cookie.set('night', '0');
                        console.log('夜间模式自动关闭');
                    }
                }
            } else {
                // 日间模式
                mode && (mode.style.backgroundImage = 'url(<?php echo THEME_URL ?>/fonts/sun.svg)');
                if (night !== '0') {
                    document.body.classList.remove('night');
                    cookie.set('night', '0');
                    console.log('开启日间模式');
                }
            }
        }

        // 暗黑模式
        const dark = cookie.get('dark_mode');
        // 模式开关
        const modeSwitch = document.querySelector('.my_mode_switch');
        darkHandler(dark, modeSwitch);
        const darkList = document.querySelector('.dark_mode_list');

        modeSwitch && modeSwitch.addEventListener('click', e => {
            e.stopPropagation();
            if (darkList) {
                if (darkList.classList.contains('open')) {
                    darkList.classList.remove('open');
                } else {
                    darkList.classList.add('open');
                }
            }
        });

        const modeSelectors = ['.dark_mode_sun', '.dark_mode_night', '.dark_mode_system', '.dark_mode_auto']
        modeSelectors.forEach((selector, index) => {
            const ele = document.querySelector(selector);
            ele && ele.addEventListener('click', e => {
                e.stopPropagation();
                darkHandler(String(index), modeSwitch, true);
                darkList && darkList.classList.remove('open');
            })
        })

        window.isSearchTop = cookie.get('search_top') || '0';
        const searchTopBtn = document.getElementById('is-search-top');
        if (searchTopBtn) {
            searchTopBtn.addEventListener('click', e => {
                e.stopPropagation();
                const isTop = cookie.get('search_top');
                cookie.set('search_top', isTop == '0' ? '1' : '0');
                window.isSearchTop = isTop == '0' ? '1' : '0';
                const sousuo = document.querySelector('.sousuo .search');
                if (sousuo) {
                    if (window.isSearchTop == '1') {
                        sousuo.classList.add('is-top');
                    } else {
                        sousuo.classList.remove('is-top');
                    }
                }
            })
        }
    })();
</script>
<?php if($this->options->isSearchClean == '1'): ?>
  <script type="text/javascript">
      (function () {
          const searchCleanBtn = document.getElementById('search-clean');
          searchCleanBtn && searchCleanBtn.addEventListener('click', e => {
              e.stopPropagation();
              const txtInput = document.getElementById('txt');
              if (txtInput) {
                  txtInput.value = '';
                  txtInput.focus();
              }
          })
      })();
  </script>
<?php endif; ?>


<style>
    .sousuo .search.is-top {
        position: fixed;
    }
    .sousuo .search.is-top .search-input {
        -webkit-box-shadow: 0 0 5px 0 #cccccc94;
        box-shadow: 0 0 5px 0 #cccccc94;
    }

    .my_mode_switch {
        background-image: url("<?php echo THEME_URL ?>/fonts/sun.svg");
    }

    body.night .dropdown-menu {
        background-color: #221e1e;
        border: 1px solid #232b32;
    }

    .dark_mode_list ul {
        margin-top: 40px;
        min-width: 80px;
    }

    .dark_mode_list .dark_mode_li {
        height: 24px;
        padding: 0 10px;
    }

    .dark_mode_list .dark_mode_li span {
        display: inline-flex;
        cursor: pointer;
    }

    .dark_mode_list i {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-size: 16px 16px;
        margin-right: 5px;
    }

    .dark_mode_sun i {
        background-image: url("<?php echo THEME_URL ?>/fonts/sun.svg");
    }

    .dark_mode_night i {
        background-image: url("<?php echo THEME_URL ?>/fonts/night.svg");
    }

    .dark_mode_system i {
        background-image: url("<?php echo THEME_URL ?>/fonts/system.svg");
    }

    .dark_mode_auto i {
        background-image: url("<?php echo THEME_URL ?>/fonts/auto.svg");
    }

    span.title, .main-menu {
        font-size: <?php $this->options->menu_title(); ?>px;
    }

    /*单栏*/
    <?php if ($this->options->zmki_pcsl == '0') : ?>.col-sm-3 {
        width: 100%;
    }

    <?php endif; ?>

    /*双栏*/
    <?php if ($this->options->zmki_pcsl == '1') : ?>.col-sm-3 {
        width: 50%;
    }

    <?php endif; ?>

    /*三栏*/
    <?php if ($this->options->zmki_pcsl == '2') : ?>.col-sm-3 {
        width: 33%;
    }

    <?php endif; ?>

    /*四栏*/
    <?php if ($this->options->zmki_pcsl == '3') : ?>.col-sm-3 {
        width: 25%;
    }

    <?php endif; ?>

    /*五栏*/
    <?php if ($this->options->zmki_pcsl == '4') : ?>.col-sm-3 {
        width: 20%;
    }

    <?php endif; ?>

    /*六栏*/
    <?php if ($this->options->zmki_pcsl == '5') : ?>.col-sm-3 {
        width: 16.6%;
    }

    <?php endif; ?>

    /*七栏*/
    <?php if ($this->options->zmki_pcsl == '6') : ?>.col-sm-3 {
        width: 14.2%;
    }

    <?php endif; ?>

    /*八栏*/
    <?php if ($this->options->zmki_pcsl == '7') : ?>.col-sm-3 {
        width: 12.5%;
    }

    <?php endif; ?>

    /* 手机端显示 */
    /* 将 @media 拆分来写只是因为 vscode-intelephene 扩展诊断有 bug */
    <?php if ($this->options->zmki_wapsl == '0') : ?>@media screen and (max-width: 768px) {
        .col-sm-3 {
            width: 100%;
        }
    }

    <?php endif; ?><?php if ($this->options->zmki_wapsl == '1') : ?>@media screen and (max-width: 768px) {
        .col-sm-3 {
            width: 50%;
            float: left;
        }

        .xe-widget.xe-conversations {
            position: relative;
            background: #fff;
            margin-bottom: 0;
        }
    }

    <?php endif; ?><?php if ($this->options->zmki_wapsl == '2') : ?>.col-sm-3 {
        width: 33%;
        float: left;
        position: relative;
        min-height: 1px;
        padding-left: 1px !important;
        padding-right: 1px !important;
    }

    <?php endif; ?>
    }
</style>
